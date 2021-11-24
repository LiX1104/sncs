(function (win) {
	var docEl = win.document.documentElement;
	var time;

	function refreshRem() {
		var width = docEl.getBoundingClientRect().width;
		var rem = (width / 375) * 100;
		docEl.style.fontSize = rem + "px";
		///rem用font-size:50px来进行换算
	}

	win.addEventListener(
		"resize",
		function () {
			clearTimeout(time);
			time = setTimeout(refreshRem(), 1);
		},
		false
	);
	win.addEventListener(
		"pageshow",
		function (e) {
			if (e.persisted) {
				clearTimeout(time);
				time = setTimeout(refreshRem(), 1);
			}
		},
		false
	);

	refreshRem();
})(window);
