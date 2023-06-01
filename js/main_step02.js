const numbers = document.querySelectorAll('.screen span');
const [am, pm] = document.querySelectorAll('.screen em');
/*
const times = getTime();
console.log(times);

setTime(times[0], 0);
setTime(times[1], 1);
setTime(times[2], 2);

function getTime() {
	const now = new Date();
	const hr = now.getHours();
	const min = now.getMinutes();
	const sec = now.getSeconds();

	return [hr, min, sec];
}

function setTime(num, index) {
	if (num < 10) {
		num = '0' + num;
	} else {
		num = num;
	}

	numbers[index].innerText = num;
}
*/

setInterval(() => {
	const times = getTime();
	times.forEach((num, idx) => setTime(num, idx));
}, 1000);

function getTime() {
	const now = new Date();
	let hr = now.getHours();
	let min = now.getMinutes();
	let sec = now.getSeconds();

	if (hr > 12) {
		am.classList.remove('on');
		pm.classList.add('on');
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
