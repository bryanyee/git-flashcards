var 	cardsDictionary = [ {front: "git config --global user.name \"Bryan Yee\"", back: "configures the username"},
							{front: "git config --global user.email \"yee.bryan.c@gmail.com\"", back: "configures the email address"},
							{front: "git init projectname", back: "initializes a project repository"} ],
		dictionaryLength = cardsDictionary.length,
		flashcardDetail = document.getElementById('flashcardDetail');


randomCard();

//Displays a random flashcard
function randomCard(){
	var randomIndex = Math.floor(Math.random()*dictionaryLength);
	if(randomIndex === dictionaryLength) randomIndex--;

	flashcardDetail.innerHTML = cardsDictionary[randomIndex].back;
	setTopValue();
}

//Vertically centers the text in the flashcard
function setTopValue(){
	var flashcardDetailHeight = flashcardDetail.clientHeight;
	flashcardDetail.style.top = ((400 - flashcardDetailHeight) / 2).toString() + "px";
}

