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
        js.src = "//connect.facebook.net/en_US/all.js";
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
    encodeURIComponent($(location).attr('href').split("//")[1]);
}

function populateCommentsOnLoad(){

}

function populateComments(commentList){
    var commentInfoList = JSON.parse(commentList);

    for(var i = 0; i< commentInfoList.length; i++){
        var commentInfoMap = commentInfoList[i];
        populateComment(parseInt(commentInfoMap.para), commentInfoMap.user, commentInfoMap.comment);
    }
}

function populateComment(paraNumber, user, comment){
    $($("p").get(paraNumber)).next(".notes-list").find("ul").append("<li>" + user + ":" + comment + "</li>");
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

function fetchComments(url) {
    // calling the api
    $.ajax({
        cache:false,
        url: "http://icsas.herokuapp.com/getComments/" + url,
        type:'get',
        success : function(response) {
            return response;
        }
    });
}

function postComment() {
    if (getLoginStatus() == "SUCCESS") {
        $.ajax({
            cache:false,
            url: "http://icsas.herokuapp.com/postComments",
            type:'post',
            data: {url : getCurrentURL(), comment : ""/*pick from selector*/, "user" : ""/*pick from selector*/, "para": "" /*TODO:Populate this*/},
            success : function(response) {
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

function init(){

    //Adding generic divs to all paragraphs on page load
    $("p").each(function(index){
        $(this).after("<div class='notes-list notes-list-" + index + " {para:" + index + "} dontshow'><ul></ul></div>");
        $(this).after("<button class='notes-comment-button {para:" + index + "}' index='" + index + "'>Comment</button>");
    });

    hideAllComments();
    populateCommentsOnLoad();
    loadFacebookSDK();
    bindCommentButtonClick();
}

$(function(){
    init();
});
