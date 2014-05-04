/**
 * Created by anurag on 3/5/14.
 */

var userId;

function loadFacebookSDK() {
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '652275434852148', // app id as present in the fb developer dashboard.
            status     : true, // check login status
            cookie     : true, // enable cookies to allow the server to access the session
            xfbml      : true,  // parse XFBML
            oauth      : true
        });
    };

    //Load the SDK asynchronously
    (function(d){
        var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement('script'); js.id = id; js.async = true;
        js.src = "http://connect.facebook.net/en_US/all.js";
        ref.parentNode.insertBefore(js, ref);
    }(document));
}

/*function loadProfileFromFacebook(response) {
    FB.api('/me?fields=name,email', function(response) {
        return response.id
    });
}*/

function getLoginStatus() {
    var result = "FAILURE";
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            //console.log(response.authResponse.userID);
            userId = response.authResponse.userID;
            result = "SUCCESS";
        } else {
            FB.login(function(response) {
                if (response.authResponse) {
                    FB.api('/me/permissions', function(response) {
                    });
                    //console.log(response.authResponse.userID);
                    userId = response.authResponse.userID;
                    result = "SUCCESS";
                }
            }, {scope:'email, user_about_me, user_birthday, user_location'});
        }
    });
    return result;
}


function getCurrentURL(){
    return encodeURIComponent($(location).attr('href').split("//")[1]);
    //return "0.0.0.0%3A5000"; //test url
}

function populateComment(paraNumber, user, comment){
    var name = '';
    $.ajax({
        async: false,
        cache: true,
        url: "http://graph.facebook.com/" + user,
        type: 'GET',
        dataType: "json",
        success: function (data, status) {
            name = data.first_name;
        }
    });

    $(".notes-list-" + paraNumber).find("ul").append("<li><img class='circular' src='http://graph.facebook.com/" + user + "/picture'></img> <strong>" + name + "</strong> : " + comment + "</li>");

    var $this = $(".notes-list-" + paraNumber).not(".cluetip-inner .notes-list-" + paraNumber);
    var count = $($this).find("li").size();
    $(".notes-marker[index=\'" + $($this).attr('index') + "\']").find(".notes-marker-count").text(count > 0 ? count : "+");
}

function fetchComments(url) {
    // calling the api
    var commentList = '';
    $.ajax({
        async: false,
        cache:false,
        url: "http://icsas.herokuapp.com/getComments",
        data: {url : url},
        type: 'POST',
        dataType: "json",
        success : function(response) {
            commentList = response;
        }
    });
    return commentList;
}

function populateComments(commentList){
    for(var i = 0; i< commentList.length; i++){
        var commentInfoMap = commentList[i];
        populateComment(parseInt(commentInfoMap.para), commentInfoMap.user, commentInfoMap.comment);
    }
    $(".notes-list").not(".cluetip-inner .notes-list").each(function() {
        var count = $(this).find("li").size();
        $(".notes-marker[index=\'" + $(this).attr('index') + "\']").find(".notes-marker-count").text(count > 0 ? count : "+");
    });
}

function populateCommentsOnLoad(){
    populateComments(fetchComments(getCurrentURL()));
}

/*function getSelectedText() {
 $('#showSelected').on('click', function(){

 var text = "";
 if (window.getSelection) {
 text = $.getSelection().toString();
 } else if (document.selection && document.selection.type != "Control") {
 text = document.selection.createRange().text;
 }

 alert(text);
 });
 }*/

function postComment(comment, para) {
    if (getLoginStatus() == "SUCCESS") {
        $.ajax({
            cache:false,
            url: "http://icsas.herokuapp.com/postComments",
            type:'POST',
            data: {url : getCurrentURL(), comment : comment, user : userId, para: para},
            success : function(response) {
                if (response == 'SUCCESS') {
                    populateComment(para, userId, comment);
                    $(".notes-list-" + para).find("input").val("");
                }
                return response;
                // Expected - 'SUCCESS' for success, else 'FAILURE'
            }
        });
    }
}

function bindCommentButtonClick(){

    $(".notes-comment-button").each(function(){
        $(this).click(function(){
            var buttonIndex = $(this).attr("index");
            showElement($(".notes-list-" + buttonIndex));
        });
    });
}

function showElement(element){
    $(element).attr("style", "");
}

function hideElement(element){
    $(element).attr("style", "display:none!important;");
}

function hideAllComments(){
    $(".notes-list").each(function(){
        hideElement($(this));
    });
}

function sendComment(index) {
    var comment = $(".cluetip-outer").find("input").val();
    postComment(comment, index);
}

function commentify(input, index) {
    input.before("<div class=\"notes-marker no-user-select notes-hasnotes\" index = \"" + index + "\" style=\"position: relative; z-index: 597; float: right;\">" +
                    "<a id=\"" + index + "\" href=\"javascript:void(0)\" rel=\".notes-list-" + index + "\">" +
                        "<span class=\"notes-marker-icon icons icons-notes\"></span>" +
                        "<span class=\"notes-marker-count\">0</span>" +
                    "</a>" +
                 "</div>");
    input.after("<div class='notes-list notes-list-" + index + " dontshow' index = '" +index + "'><ul></ul><div><input type='text'></input><button onclick='sendComment(" + index +")'>Comment</button></div></div>");
}

function initClueTip() {
    $(".notes-marker").each(function () {
        $(this).find('a').cluetip({
            cluetipClass: 'jtip',
            arrows: true,
            dropShadow: false,
            hoverIntent: false,
            sticky: true,
            mouseOutClose: false,
            local :true,
            closePosition: 'top',
            closeText: '<img src="http://icsas.herokuapp.com/images/cross.png" alt="close" />',
            fx: {
                open: 'slideDown',
                openSpeed: 'slow'
            },
            showTitle: false,
            positionBy: 'fixed',
            activation: 'click'
        });
    });
}

function bindParaHover(){
    $("section.article-content p").each(function(index){
        $(this).hover(function(){
            $(".notes-marker[index = '" + index + "']").addClass("notes-active");
        },function(){
            $(".notes-marker[index = '" + index + "']").removeClass("notes-active");
        });
    });
}

function init(){
    //Adding generic divs to all paragraphs on page load
    $("section.article-content p").each(function(index){
        commentify($(this), index);
    });

    hideAllComments();
    populateCommentsOnLoad();
    initClueTip();
    loadFacebookSDK();
    bindCommentButtonClick();
    bindParaHover();
}

$(function(){
    init();
});
