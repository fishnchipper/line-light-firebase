var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(b){return b.raw=b};$jscomp.createTemplateTagFirstArgWithRaw=function(b,c){b.raw=c;return b};
(function(b,c){b();var d=c();d.clickGoogleBtn();d.clickEmailPasswordBtn()})(function(){return function(){return function(){}}()},function(){return function(){function b(){}var c=new Spinner,d=function(){$("#line-signup-link").remove();$("#line-sign-form").html('<div class="tab-content" id="myTabContent">\n                                    <p>Sign Up required.</p>\n                                    <p style="margin-top: 4em;">Redirecting to Sign Up <span id="time-left"></span></p>\n                              </div>');window.setInterval(function(){var a=
$("#time-left").html();"..."===a?window.location="/auth/signup":".."===a?$("#time-left").html("..."):"."===a?$("#time-left").html(".."):""===a&&$("#time-left").html(".")},1E3)},e=function(a){a=JSON.parse(a);c.stop();"signUpRequired"==a.status?d():"signedUp"==a.status&&Line_Firebase.redirect("/service")},f=function(a){c.stop();a=(a.responseText?JSON.parse(a.responseText):a).message;$("#line-signin-status").html(a)};b.clickGoogleBtn=function(){$("#sl-signin-google-btn").click(function(a){a.preventDefault();
c.spin($(".card-container").get(0));Line_Firebase.auth().signInWithGoogleAuth().then(e)["catch"](f)})};b.clickEmailPasswordBtn=function(){$("#line-signin-btn").click(function(a){a.preventDefault();c.spin($(".card-container").get(0));a=$("#line-signin-email").val();var b=$("#line-signin-pw").val();a={email:a,password:b};Line_Firebase.auth().signInWithEmailPassword(a).then(e)["catch"](f)})};return b}()});