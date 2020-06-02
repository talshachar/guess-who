'use strict';
var gQuestsTree;
var gCurrQuest;
const KEY = 'quests';

function createQuestsTree() {
    gQuestsTree = loadFromStorage(KEY);
    if (!gQuestsTree) {
        gQuestsTree = createQuest('Male?');
        gQuestsTree.yes = createQuest('Gandhi');
        gQuestsTree.no = createQuest('Rita');
    }
    gCurrQuest = gQuestsTree;
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    // √ TODO: update the gPrevQuest, gCurrQuest global vars
    gCurrQuest = gCurrQuest[res];
}

function addGuess(newQuestTxt, newGuessTxt/*, lastRes*/) {
    // √ TODO: Create and Connect the 2 Quests to the quetsions tree
    if (!newQuestTxt || !newGuessTxt) return;
    gCurrQuest.no = createQuest(gCurrQuest.txt);
    gCurrQuest.txt = newQuestTxt;
    gCurrQuest.yes = createQuest(newGuessTxt);

    saveToStorage(KEY, gQuestsTree)
    gCurrQuest = gQuestsTree;
}

function getCurrQuest() {
    return gCurrQuest;
}