/**
 * 
 * 
 * 
 */
(function(_initUI, _eHanlder) {

    let initUI = _initUI();
    let eHandler = _eHanlder();

    eHandler.clickBrandName();
    eHandler.clickSignOutBtn();
    eHandler.clickProfileBtn();

})(function() { // initialization
    function main() {
        function init() {}
        return init;
    }
    return main();
},function() { // event handler

    function main() {

        // event handler function
        function eHandler() {}

        // event: click sign out button
        eHandler.clickBrandName = function() {
            $('#line-service-main').click((e)=>{
                e.preventDefault();
                $('#content-main').html("");
            });
        }
        eHandler.clickSignOutBtn = function() {
            $('#line-signout-btn').click((e)=>{
                e.preventDefault();
                Line.signOut()
                .then((res) => {
                    console.log("---- res: ", res);
                    Line.redirect("/");
                })
                .catch((err) => {
                    console.log("--- error: ", err);
                    Line.redirect("/oops")
                });
            });
        }
        eHandler.clickProfileBtn = function() {
            $('#line-profile-btn').click((e)=>{
                e.preventDefault();
                console.log("--- profile btn clicked. ");
                Line.view().getBlock("/service/user/profile")
                .then((block)=> {
                    $('#content-main').html(block);
                })
                .catch((error)=> {
                    console.log("--- error: ", error);
                })
            });
        }
        return eHandler;
    }

    return main();
});



