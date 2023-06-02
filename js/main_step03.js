const main = document.querySelector('main');
const numbers = main.querySelectorAll('.screen span');
const [am, pm] = main.querySelectorAll('.screen em');

setInterval(() => {
	changeTheme();
	const times = getTime();
	times.forEach((num, idx) => setTime(num, idx));
}, 1000);

function changeTheme() {
	const hr = new Date().getHours();

	if (hr >= 5 && hr < 11) {
		main.className = '';
		main.classList.add('morning');
	}
	if (hr >= 11 && hr < 16) {
		main.className = '';
		main.classList.add('afternoon');
	}
	if (hr >= 16 && hr < 19) {
		main.className = '';
		main.classList.add('evening');
	}
	if (hr >= 19 || hr < 5) {
		main.className = '';
		main.classList.add('night');
	}
}

function getTime() {
	const now = new Date();
	let hr = now.getHours();
	let min = now.getMinutes();
	let sec = now.getSeconds();

	if (hr > 12) {
		am.classList.remove('on');
		pm.classList.add('on');
		hr = hr - 12;
	} else {
		am.classList.add('on');
		pm.classList.remove('on');
	}
	return [hr, min, sec];
}

function setTime(num, index) {
	if (num < 10) num = '0' + num;
	else num = num;
	numbers[index].innerText = num;
}
