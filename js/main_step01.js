const numbers = document.querySelectorAll('.screen span');
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
	const now = new Date();
	let hr = now.getHours();
	let min = now.getMinutes();
	let sec = now.getSeconds();

	if (hr < 10) hr = '0' + hr;
	if (min < 10) min = '0' + min;
	if (sec < 10) sec = '0' + sec;

	numbers[0].innerText = hr;
	numbers[1].innerText = min;
	numbers[2].innerText = sec;
}, 1000);
