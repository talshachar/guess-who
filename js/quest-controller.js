'use strict';

// $(document).ready(init);
// function init() {
//     // createQuestsTree();
// }

function onStartGuessing() {
    createQuestsTree();
    // √ TODO: hide the game-start section
    $('.game-start').hide();
    // √ TODO: show the quest section
    $('.quest').show();
    renderQuest();
}

function renderQuest() {
    // √ TODO: select the <h2> inside quest and update
    // its text by the currQuest text
    var currQuest = getCurrQuest();
    $('.quest h2').text(currQuest.txt);
}

function onUserResponse(res) {
    // TODO: update the lastRes global var
    // If this node has no children
    if (isChildless(getCurrQuest())) {
        if (res === 'yes') {
            // √ TODO: improve UX
            onGameOver(true);
        } else {
            // √ TODO: hide and show new-quest section
            onGameOver(false);
        }
    } else {
        moveToNextQuest(res);
        renderQuest();
    }
}

function onAddGuess() {
    // √ TODO: Get the inputs' values
    // √ TODO: Call the service addGuess
    var newQuestTxt = $('input[name=newQuest]').val();
    var newGuessTxt = $('input[name=newGuess]').val();
    addGuess(newQuestTxt, newGuessTxt)
    onRestartGame();
}

function onRestartGame() {
    $('.new-quest').hide();
    $('.game-start').show();
    createQuestsTree();
}



function onGameOver(genieWon) {
    if (genieWon) {
        $('.quest h2').text('I Guessed Correctly :)');
        $('.quest button').hide();

        $('.genie').removeClass('genie-motion');
        setTimeout(function () { $('.genie').addClass('genie-move') }, 0);

        setTimeout(function () {
            $('.quest').hide();
            $('.quest button').show();
            $('.game-start').show();
            $('.genie').removeClass('genie-rotate');
            $('.genie').addClass('genie-motion');
        }, 3500);
    } else {
        $('.quest').hide();
        $('.new-quest').show()
        setTimeout(function () { $('#exampleModal').modal('show') }, 1000)

        $('.genie').removeClass('genie-motion');
        setTimeout(function () { $('.genie').addClass('genie-rotate') }, 0);
        setTimeout(function () {
            $('.genie').removeClass('genie-rotate');
            $('.genie').addClass('genie-motion')
        }, 4000);
    }
}

