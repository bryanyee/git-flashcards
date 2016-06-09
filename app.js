var cardsDictionary = [ {front: "git config --global user.name &#60;name&#62;", back: "configures the username"},
						{front: "git config --global user.email &#60;email address&#62;", back: "configures the email address"},
						{front: "git init &#60;projectname&#62;", back: "initializes a project repository"},
						{front: "cd &#60;projectname&#62;", back: "enters the directory"},
						{front: "git add &#60;filename.txt&#62;\ngit add -A", back: "signals the file to participate in the commit"},
						{front: "git commit -m\"&#60;commit message&#62;\"", back: "commits the state of the added file(s), with a message"},
						{front: "git config --global core.editor &#60;programname&#62;", back: "sets the default text editor"},
						{front: "git config --list\ngit config &#60;key&#62;", back: "lists git config settings"},
						{front: "git clone &#60;repository url&#62;", back: "clones a complete version of a remote repository to your local system"},
						{front: "git status", back: "display the current status of the project files"},
						{front: "git diff\ngit diff filename\ngit diff branch\ngit diff --staged\ngit diff --cached &#60;filename&#62;", back: "review differences between files or branches"},
						{front: "git log", back: "view the change history"},
						{front: "git remote\ngit remote -v", back: "show tracked remote repository"},
						{front: "git remote add &#60;name&#62; &#60;remote url&#62;", back: "add a remote repo"},
						{front: "git checkout &#60;branch&#62;\ngit checkout -b &#60;branch&#62;", back: "changes branches;\ncreates a new branch"},
						{front: "git branch -a\ngit branch &#60;name&#62;", back: "lists the repo's branches;\ncreate a new branch"},
						{front: "git push", back: "update a remote repo"},
						{front: "&#91;esc&#93;:wq", back: "complete a commit with a message, or get out of the commit w/o a message"},
						{front: "git pull", back: "update the local repo from the remote repo"},
						{front: "1) git commit --amend -m\"message\"\n2) git push --force &#60;branchname&#62;", back: "1) Change the most recent commit message\n2) Force push over the old commit, if necessary"},
						{front: "git tag\ngit tag -a &#60;tagname&#62; -m \"message\"\ngit show &#60;tagname&#62;", back: "list available tags;\ncreate an annotated tag with a message;\nshow tag details"},
						{front: "git push origin &#60;tagname&#62;", back: "transfers the tag to the remote server"} ];
var	dictionaryLength = cardsDictionary.length,
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

	cardSide = "front";
	flipCard();
}

//Displays the other side of the flashcard
function flipCard(){
	if(cardSide === "back"){
		flashcardDetail.innerHTML = cardsDictionary[cardIndex].front;
		flashcard.style.backgroundColor = "white";
		leftFooter.innerHTML = "front";
		cardSide = "front";
	}
	else { 
		flashcardDetail.innerHTML = cardsDictionary[cardIndex].back;
		flashcard.style.backgroundColor = "#e2dfd9";
		leftFooter.innerHTML = "back";
		cardSide = "back";
	}

	setTopValue();
}

//Vertically centers the text in the flashcard
function setTopValue(){
	var flashcardDetailHeight = flashcardDetail.clientHeight;
	flashcardDetail.style.top = ((400 - flashcardDetailHeight) / 2).toString() + "px";
}