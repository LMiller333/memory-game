let activeCards = 0;
let checkingState = false;


//Listen to click on card element

$(".card").click(function(){
    if(!$(".back",this).hasClass("d-none")){
        console.log("This card is already turned over.");
    }
    else if (checkingState===false){
            $(".back",this).removeClass("d-none");
            $(".back",this).addClass("active");
            activeCards=$('.active').length;
            console.log("You have " + activeCards + " active cards."); 
            
            if (activeCards===2){
                matchCheck();
            }
        }
    else{
        console.log("Wait until cardFlip program is complete");
    }

});
        
    //If active cards eq 2, check for match
function matchCheck(){
        checkingState=true;
        let $activeOne = $(".active:eq(0)").html();
        let $activeTwo = $(".active:eq(1)").html();
        console.log("Checking for match between " + $activeOne + " and " + $activeTwo);

        const delayInMilliseconds = 3000;     
        setTimeout(function() {

            //If match, leave card flipped and remove active class
            if ($activeOne === $activeTwo){
                console.log("You have a match!");
                $(".back").removeClass("active"); 
                $(".back").addClass("matched");
                checkingState=false;
                return;
            }

            //If not a match, flip back over and remove active class
            else{
                console.log("Sorry, no match");
                $(".active").addClass("d-none");
                $(".back").removeClass("active");
                checkingState=false;
                return;  
            }
        }, delayInMilliseconds);
    }

    //TODO: Add styling/animation for when #matched=16



    //IDEAS:
    //--Add start over button
    //--Randomize font icons
    //--Jungle theme