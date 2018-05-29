//Shuffle icons
let icons = [
    '<i class="fas fa-paw"></i>',
    '<i class="fab fa-pagelines"></i>',
    '<i class="fas fa-bug"></i>',
    '<i class="fas fa-dove"></i>',
    '<i class="fas fa-frog"></i>',
    '<i class="fas fa-leaf"></i>',
    '<i class="fas fa-kiwi-bird"></i>',
    '<i class="fas fa-tree"></i>',
    '<i class="fas fa-paw"></i>',
    '<i class="fab fa-pagelines"></i>',
    '<i class="fas fa-bug"></i>',
    '<i class="fas fa-dove"></i>',
    '<i class="fas fa-frog"></i>',
    '<i class="fas fa-leaf"></i>',
    '<i class="fas fa-kiwi-bird"></i>',
    '<i class="fas fa-tree"></i>'
]

shuffle(icons);

$(".back").each(function (i){
    $(this).append(icons[i]);
});


//Set starting values for variables

let activeCards = 0;
let checkingState = false;
let moveCounter = 0;
document.getElementById('numberMoves').innerHTML = moveCounter;
let starRating = 3;
// document.getElementById('starRating').innerHTML = starRating;
let numberMatched=$(".matched").length;
let matchesPerMove = numberMatched/moveCounter;
let seconds = 0;
let timeVar;

//Reload when click reset button

$('#resetButton').click(function() {
    location.reload();
});

//Close modal

$("#modalButton").click(function(){
    location.reload();
    $("#winnerModal").hide();   
})

//Listen to click on card element

$(".card").click(function(){

    //If first click, start timer
    if (moveCounter === 0 ){
        timeVar = setInterval(myTimer, 1000);
        seconds = 0;
    }

    //If card already flipped, throw error to log
    if(!$(".back",this).hasClass("d-none")){
        console.log("This card is already turned over.");
    }

    //If checking in progress, throw error to log
    else if (checkingState===true){
        console.log("Wait until cardFlip program is complete");
    }

    //Flip card & if two active, check for match
    else {
        //Increase move counter by one & update html display
        moveCounter += 1;
        document.getElementById('numberMoves').innerHTML = moveCounter;
        console.log("The number of moves is " + moveCounter);

        $(".back",this).removeClass("d-none");
        $(".back",this).addClass("active");
        activeCards=$('.active').length;
        console.log("You have " + activeCards + " active cards."); 
        
        if (activeCards===2){
            matchCheck();
        }
    }

});

//Citation: Fisher Yates method, as conveyed by Frank Mitchell: https://www.frankmitchell.org/2015/01/fisher-yates/
function shuffle (array) {
    var i = 0
      , j = 0
      , temp = null
  
    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }
        

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
            matchesPerMove = numberMatched/moveCounter;
            if (matchesPerMove>=0.6){
                starRating=3;
                $(".fa-star:eq(0)").addClass("star-filled");
                $(".fa-star:eq(1)").addClass("star-filled");
                $(".fa-star:eq(2)").addClass("star-filled");
            }
            else if (matchesPerMove<0.6 && matchesPerMove>=0.3){
                starRating=2;
                $(".fa-star:eq(0)").addClass("star-filled");
                $(".fa-star:eq(1)").addClass("star-filled");
                $(".fa-star:eq(2)").removeClass("star-filled");
            }
            else if (matchesPerMove<0.3){
                starRating=1;
                $(".fa-star:eq(0)").addClass("star-filled");
                $(".fa-star:eq(1)").removeClass("star-filled");
                $(".fa-star:eq(2)").removeClass("star-filled");
            }

            numberMatched=$(".matched").length;
            if (numberMatched===16){
                console.log("You have found them all");
                clearInterval(timeVar);
                document.getElementById("modalText").innerHTML = "Congratulations! You have matched all of the wildlife in " +  moveCounter + " moves over the course of " + seconds + " seconds, with a final rating of " + starRating + " stars!";
                $("#winnerModal").show();
            }

        }, 250);
    }

    function myTimer() {
        seconds +=1 ; 
        document.getElementById("timer").innerHTML = seconds;
    }

