let activeCards = 0;
let checkingState = false;
let moveCounter = 0;
document.getElementById('moveCounter').innerHTML = moveCounter;
let starRating = 3;
document.getElementById('starRating').innerHTML = starRating;
let numberMatched=$(".matched").length;
let matchesPerMove = numberMatched/moveCounter;

//Reload when click reset button

$('#resetButton').click(function() {
    location.reload();
});

//Listen to click on card element

$(".card").click(function(){

    //Increase move counter 
    moveCounter += 1;
    document.getElementById('moveCounter').innerHTML = moveCounter;
    console.log("The number of moves is " + moveCounter);
    

    //If card already flipped, throw error to log
    if(!$(".back",this).hasClass("d-none")){
        console.log("This card is already turned over.");
    }

    //If checking in progress, throw error to log
    else if (checkingState===true){
        console.log("Wait until cardFlip program is complete");
    }

    //Flip card, count number active, & if active=2, check for match
    else {
        $(".back",this).removeClass("d-none");
        $(".back",this).addClass("active");
        activeCards=$('.active').length;
        console.log("You have " + activeCards + " active cards."); 
        
        if (activeCards===2){
            matchCheck();
        }
    }

});
        

function matchCheck(){
        checkingState=true;
        $(".mis-matched").removeClass("mis-matched");
        let $activeOne = $(".active:eq(0)").html();
        let $activeTwo = $(".active:eq(1)").html();
        console.log("Checking for match between " + $activeOne + " and " + $activeTwo);
    
        setTimeout(function() {

            //If match, leave card flipped and remove active class
            if ($activeOne === $activeTwo){
                console.log("You have a match!");
                $(".active").parent().addClass("matched");
                $(".back").removeClass("active"); 
                checkingState=false;

                numberMatched=$(".matched").length;
                if (numberMatched===16){
                    $(".card").addClass("matched-all");
                    console.log("You have found them all");
                }
            }

            //If not a match, flip back over and remove active class
            else{
                console.log("Sorry, no match");
                $(".active").parent().addClass("mis-matched"); 
                $(".active").addClass("d-none");
                $(".back").removeClass("active");
                checkingState=false;

            }

            //Adjust star rating
            document.getElementById('starRating').innerHTML = starRating;
            matchesPerMove = numberMatched/moveCounter;
            if (matchesPerMove>=0.5){
                starRating=3;
                document.getElementById('starRating').innerHTML = starRating;
            }
            else if (matchesPerMove<0.5 && matchesPerMove>=0.25){
                starRating=2;
                document.getElementById('starRating').innerHTML = starRating;
            }
            else if (matchesPerMove<0.25){
                starRating=1;
                document.getElementById('starRating').innerHTML = starRating;
            }

        }, 250);
    }

    //TODO: Add styling/animation for when #matched=16



    //IDEAS:
    //--Add start over button
    //--Randomize font icons
    //--Jungle theme