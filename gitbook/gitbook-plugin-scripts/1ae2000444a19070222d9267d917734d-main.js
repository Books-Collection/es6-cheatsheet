(function() {
	document.documentElement.addEventListener("contextmenu", function(e) {
		e.preventDefault();
		return false;
	}, false);

	var checkAndAdjust = function() {
		var bookBody = document.querySelectorAll(".book-body")[0];
		var bodyInner = document.querySelectorAll(".book-body .body-inner")[0];
		if (bodyInner && bookBody) {
			bookBody.scrollTop = 0;
			bodyInner.scrollTop = 0;
		} else {
			setTimeout(function() {
				checkAndAdjust();
			}, 605);
		}

	};
	setTimeout(function() {
		checkAndAdjust();
	}, 605);

	var introElem = document.querySelectorAll("li.chapter[data-level=\"1.1\"] a")[0];
	if (introElem) {
		introElem.innerHTML = "React Best Practices";
	}
	document.title = "React Best Practices";
	
	var abtContainer = document.createElement("div");
	abtContainer.id = "abtContainer_kc";
	abtContainer.style.height = "362px";
	abtContainer.style.backgroundColor = "#fff";
	abtContainer.style.border = "1px solid #000";
	abtContainer.style.position = "absolute";
	abtContainer.style.left = abtContainer.style.right = "30px";
	abtContainer.style.top = "100px";
	abtContainer.style.borderRadius = "22px";
	abtContainer.style.fontFamily = "Verdana";
	abtContainer.style.padding = "10px";
	abtContainer.style.fontSize = "11px";
	abtContainer.style.color = "#000";
	abtContainer.innerHTML = "About:<br/><br/>This documentation was compiled/authored by<br/><span style=\"font-weight:bold;\">K.C.Ashish Kumar</span><br/><br/>For more information please visit <a href=\"http://www.ashishkumarkc.com\" target=\"_blank\">http://www.ashishkumarkc.com</a><br/><br/><br/><img src=\"images/the-k.png\" style=\"width:198px;position:absolute;left:50%;margin-left:-99px;\" />";
	document.querySelectorAll(".book-summary")[0].appendChild(abtContainer);

}());
