var 	cardsDictionary = [ {front: "git config --global user.name \"Bryan Yee\"", back: "configures the username"}],
		dictionaryLength = cardsDictionary.length,
		flashcard = document.getElementById('flashcard');


function randomCard(){
	var randomIndex = Math.floor(Math.random()*dictionaryLength);
	flashcard.innerHTML = cardsDictionary[randomIndex].front;
}

randomCard();