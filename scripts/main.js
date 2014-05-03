/**
 * Created by anurag on 3/5/14.
 */

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

function loadProfileFromFacebook(response) {
    FB.api('/me?fields=name,email', function(response) {
        if (($("[name='reviewer.email']").val() == undefined || $("[name='reviewer.email']").val() == '')) {
            $("[name='reviewer.email']").attr('value', response.email);
            $("[name='reviewer.firstName']").attr('value', response.first_name);
            $("[name='reviewer.lastName']").attr('value', response.last_name);
            $("[name='reviewer.password']").attr('value', response.id);
            $("[name='reviewer.customerType']").attr('value', 'FACEBOOK');
        }
    });
}

function getLoginStatus() {
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            loadProfileFromFacebook(response);
            return "SUCCESS";
        } else {
            FB.login(function(response) {
                if (response.authResponse) {
                    FB.api('/me/permissions', function(response) {
                    });
                    loadProfileFromFacebook(response);
                    return "SUCCESS";
                }
            }, {scope:'email, user_about_me, user_birthday, user_location'});
        }

    });
}


function getCurrentURL(){
    return encodeURIComponent($(location).attr('href').split("//")[1]);
    //return "0.0.0.0%3A5000"; //test url
}

function populateComment(paraNumber, user, comment){
    $(".notes-list-" + paraNumber).find("ul").append("<li>" + user + ":" + comment + "</li>");

    var $this = $(".notes-list-" + paraNumber);
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
    $(".notes-list").each(function() {
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
            data: {url : getCurrentURL(), comment : comment, user : ""/*pick from selector*/, para: para},
            success : function(response) {
                if (response == 'SUCCESS') {
                    // TODO: CSS ninja, please populate user from fb.
                    populateComment(para, "", comment);
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
    var comment = $(".notes-list-" + index).find("input").val();
    postComment(comment, index);
}

function commentify(input, index) {
    input.before("<div class=\"notes-marker no-user-select notes-hasnotes\" index = \"" + index + "\" style=\"position: relative; z-index: 597; float: right;\">" +
                    "<span class=\"notes-marker-icon icons icons-notes\">" +
                        "<a href=\".notes-list-" + index + "\" rel=\".notes-list-" + index + "\"/>" +
                    "</span>" +
                    "<span class=\"notes-marker-count\">0</span>" +
                 "</div>");
    input.after("<div class='notes-list notes-list-" + index + " dontshow' index = '" +index + "'><ul></ul><div><input type='text'></input><button onclick='sendComment(" + index +")'>Comment</button></div></div>");
}

function initClueTip() {
    $(".notes-marker").each(function () {
        $(this).find('a').cluetip({cluetipClass: 'jtip', arrows: true, dropShadow: false, local: true,
            fx: {
                open: 'slideDown',
                openSpeed: 'slow'
            }
        });
    });
}

function init(){
    //Adding generic divs to all paragraphs on page load
    $("p").each(function(index){
        commentify($(this), index);
    });

    hideAllComments();
    populateCommentsOnLoad();
    initClueTip();
    loadFacebookSDK();
    bindCommentButtonClick();
}

$(function(){
    init();
});
