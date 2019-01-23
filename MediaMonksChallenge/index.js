//We'll use this cariables to keep track of where we are with respect to the imamge
var position = 0; 
var page = 0;
//Function declaration. Definition bellow.
indicatorPage();

setTimeout(() => {
        $("#loading").hide()
        $(".mainDiv").show()
}, 2000);

//This function shifts the wide image to the left (so it appears that it moves to the right) until we reach the 
//rightmost end of the image.
$(document).ready(function () {
    $('#moveButtonR').on('click', function () {
        position -= 740;
        handleParagraphs(page, page + 1)
        page++;
        indicatorPage(page - 1, page);
        lastParagraph();
        if (position < - 6000) {
            position = - 7000;
            $(this).hide()
        }
        $("#movingWindow").css("transform", "translateX(" + position + "px)");
        $("#moveButtonL").show()
    });
});

//this does the reverse of the function above so that you get to the starting point.
$(document).ready(function () {
    $('#moveButtonL').on('click', function () {
        position = 0;
        handleParagraphs(page, 0);
        indicatorPage(page, 0);
        page = 0;
        $("#movingWindow").css("transform", "translateX(" + position + "px)");
        $("#moveButtonR").show()
        $(this).hide();
    });
});


//this changes the visibility of the paragraph , hiding one and showing another. Which paragraph it shows 
//and which one it hides depends on the value of the parameters.
function handleParagraphs(oldPage, newPage) {
    const oldParagraph = document.getElementById("c" + oldPage);
    oldParagraph.style.display = "none";

    const newParagraph = document.getElementById("c" + newPage);
    newParagraph.style.display = "inline";
}



function indicatorPage(oldPage, newPage) {
    $("#page" + oldPage).removeClass("topCoat")
    $("#page" + newPage).addClass("topCoat")
}


function lastParagraph() {
    if (page == 9) {
        $("#movingWindow").append(`<div id="lastCont">
            <p class="joinUs">
                Interested in join our monastery ?
                Checkout our current openings on <a>mediamonks.com / careers</a >
            </p>
            <p class="contacts">
                <i class="fas fa-envelope"></i> Mail ons
                <i class="fab fa-facebook-f"></i>Facebook 
                <i class="fab fa-twitter"></i> Twitter 
            </p>
        </div >`);
    } else{}
}
