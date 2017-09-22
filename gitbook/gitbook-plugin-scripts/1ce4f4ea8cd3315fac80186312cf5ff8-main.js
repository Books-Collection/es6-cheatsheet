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
		introElem.innerHTML = "ES6-Cheatsheet";
	}
	document.title = "ES6-Cheatsheet";
}());
