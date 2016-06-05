var 	cardsDictionary = [ {front: "git config --global user.name \"Bryan Yee\"", back: "configures the username"},
							{front: "git config --global user.email \"yee.bryan.c@gmail.com\"", back: "configures the email address"},
							{front: "git init projectname", back: "initializes a project repository"} ],
		dictionaryLength = cardsDictionary.length,
		flashcard = document.getElementById('flashcard');


function randomCard(){
	var randomIndex = Math.floor(Math.random()*dictionaryLength);
	if(randomIndex === dictionaryLength) randomIndex--;

	flashcard.innerHTML = cardsDictionary[randomIndex].front;
}

randomCard();