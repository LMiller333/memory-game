let activeCards = 0;

//Listen to click on card element
$(".card").click(function(){

    //TODO: Add css transitions & styling for various events


    //If card already turned over, do nothing
    if(!$(".back",this).hasClass("d-none")){
        console.log("This card is already turned over.");
        return;
    }

    //If card is able to be turned over, turn it over & count active cards
    else{
        $(".back",this).removeClass("d-none");
        $(".back",this).addClass("active");
        activeCards=$('.active').length;
        console.log("You have " + activeCards + " active cards.");
         
        //If active cards eq 2, check for match
        if (activeCards===2){
            
            let $activeOne = $(".active:eq(0)").html();
            let $activeTwo = $(".active:eq(1)").html();
            console.log("Checking for match between " + $activeOne + " and " + $activeTwo);

            const delayInMilliseconds = 3000;     
            setTimeout(function() {

                //If match, leave card flipped and remove active class
                if ($activeOne === $activeTwo){
                    console.log("You have a match!");
                    $(".back").removeClass("active"); 
                    return;
                }

                //If not a match, flip back over and remove active class
                else{
                    console.log("Sorry, no match");
                    $(".active").addClass("d-none");
                    $(".back").removeClass("active"); 
                    return;  
                }
            }, delayInMilliseconds);
        }

    }

    });
