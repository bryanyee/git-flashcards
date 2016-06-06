var 	cardsDictionary = [ {front: "git config --global user.name &#60;name&#62;", back: "configures the username"},
							{front: "git config --global user.email &#60;email address&#62;", back: "configures the email address"},
							{front: "git init &#60;projectname&#62;", back: "initializes a project repository"},
							{front: "cd &#60;projectname&#62;", back: "enters the directory"},
							{front: "git add &#60;filename.txt&#62;\ngit add -A", back: "signals the file to participate in the commit"},
							{front: "git commit -m\"&#60;commit message&#62;\"", back: "commits the state of the added file(s), with a message"} ],
		dictionaryLength = cardsDictionary.length,
		cardSide = "back",
		cardIndex = undefined,
		flashcardDetail = document.getElementById('flashcardDetail'),
		flashcard = document.getElementById('flashcard'),
		leftFooter = document.getElementById('leftFooter');


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
	leftFooter.innerHTML = "back";
	flashcard.style.backgroundColor = "#e2dfd9";
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
		leftFooter.innerHTML = "front";
		cardSide = "front";
		flashcard.style.backgroundColor = "white";
	}
	else { 
		flashcardDetail.innerHTML = cardsDictionary[cardIndex].back;
		leftFooter.innerHTML = "back";
		cardSide = "back";
		flashcard.style.backgroundColor = "#e2dfd9";
	}

	setTopValue();
}