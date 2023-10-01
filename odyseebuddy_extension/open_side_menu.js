/* Copyright 2023 biolithic. All rights reserved. */
var x = document.getElementById('scbtSideMenu');
if (x) {
	if (x.classList.contains('scbt-bl') ) {
		x.classList.remove('scbt-bl');
	} else {
		x.classList.add('scbt-bl');
	}
}