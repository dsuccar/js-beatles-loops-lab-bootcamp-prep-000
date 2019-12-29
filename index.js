function theBeatlesPlay(players, instruments) {
    var allPlayers = [];
    for (var x=0; x < players.length; x++) {
        allPlayers.push(players[x] + " plays " + instruments[x]);
    }
    return allPlayers;
}

function johnLennonFacts(facts) {
    var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
    var newFacts = [];
    var i = 0;
    while (i < facts.length) {
        newFacts.push(facts[i] +"!!!");
        i++;
    }
    return newFacts;
}

function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);

    return love;
}
