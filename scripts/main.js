(function() {
	document.documentElement.addEventListener("contextmenu", function(e) {
		e.preventDefault();
		return false;
	}, false);

	var checkAndAdjust = function() {
		var bookBody = document.querySelectorAll(".book-body")[0];
		var bodyInner = document.querySelectorAll(".book-body .body-inner")[0];
		var bookHeaderActions = document.querySelectorAll(".book-header .js-toolbar-action")[0];
		if (bookHeaderActions) {
			setTimeout(function() {
				bookBody.scrollTop = 0;
				bodyInner.scrollTop = 0;
				document.documentElement.scrollTop = 0;
				document.getElementsByTagName("body")[0].scrollTop = 0;
				window.scrollTo(0, 0);
			}, 605);
		} else {
			setTimeout(function() {
				checkAndAdjust();
			}, 242);
		}
	};
	if(window.top.location.hash==="" || window.top.location.hash==="#"){
		checkAndAdjust();
	}

	var introElem = document.querySelectorAll("li.chapter[data-level=\"1.1\"] a")[0];
	if (introElem) {
		introElem.innerHTML = "ES6-Cheatsheet";
	}
	document.title = "ES6 Cheatsheet - ashishkumarkc.com";

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
	abtContainer.innerHTML = "About:<br/><br/>This documentation was compiled/authored by<br/><span style=\"font-weight:bold;\">K.C.Ashish Kumar</span><br/><br/>For more information please visit <a href=\"https://www.ashishkumarkc.com\" target=\"_blank\">https://www.ashishkumarkc.com</a><br/><br/><br/><img src=\"images/the-k.png\" style=\"width:198px;position:absolute;left:50%;margin-left:-99px;\" />";
	document.querySelectorAll(".book-summary")[0].appendChild(abtContainer);

	if (window.top.location.href.indexOf("ashishkumarkc.com") !== -1) {
		var gtagScript = document.createElement("script");
		gtagScript.setAttribute("async", "async");
		gtagScript.type = "text/javascript";
		gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-NS9F1PG7SM";
		document.getElementsByTagName("head")[0].appendChild(gtagScript);

		var gtagSrc = document.createElement("script");
		gtagSrc.appendChild(document.createTextNode(decodeURIComponent("window.dataLayer%20%3D%20window.dataLayer%20%7C%7C%20%5B%5D%3B%0A%20%20function%20gtag()%7BdataLayer.push(arguments)%3B%7D%0A%20%20gtag('js'%2C%20new%20Date())%3B%0A%0A%20%20gtag('config'%2C%20'G-NS9F1PG7SM')%3B")));
		document.getElementsByTagName("head")[0].appendChild(gtagSrc);
	}

}());
