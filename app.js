var 	cardsDictionary = [ {front: "git config --global user.name \"Bryan Yee\"", back: "configures the username"},
							{front: "git config --global user.email \"yee.bryan.c@gmail.com\"", back: "configures the email address"},
							{front: "git init projectname", back: "initializes a project repository"} ],
		dictionaryLength = cardsDictionary.length,
		cardSide = "back",
		cardIndex = undefined,
		flashcardDetail = document.getElementById('flashcardDetail');


changeCard(0);

//Changes the displayed flashcard
function changeCard(direction){
	if (direction === -1){		//changes to the previous index in the dictionary
		cardIndex--;
		if (cardIndex < 0) cardIndex = dictionaryLength - 1;
	}
	else if (direction === 1){		//changes to the next index in the dictionary
		cardIndex++;
		if (cardIndex >= dictionaryLength) cardIndex = 0;
	}
	else {		//selects a random index in the dictionary
		cardIndex = Math.floor(Math.random()*dictionaryLength);
		if(cardIndex === dictionaryLength) cardIndex--;
	}

	flashcardDetail.innerHTML = cardsDictionary[cardIndex].back;
	cardSide = "back";
	setTopValue();
}

//Vertically centers the text in the flashcard
function setTopValue(){
	var flashcardDetailHeight = flashcardDetail.clientHeight;
	flashcardDetail.style.top = ((400 - flashcardDetailHeight) / 2).toString() + "px";
}

//Displays the other side of the flashcard
function flipCard(){
	if(cardSide === "back"){
		flashcardDetail.innerHTML = cardsDictionary[cardIndex].front;
		cardSide = "front";
	}
	else { 
		flashcardDetail.innerHTML = cardsDictionary[cardIndex].back;
		cardSide = "back";
	}

	setTopValue();
}