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

	const data = [
		{ cond: hr >= 5 && hr < 11, name: 'morning' },
		{ cond: hr >= 11 && hr < 16, name: 'afternoon' },
		{ cond: hr >= 16 && hr < 19, name: 'evening' },
		{ cond: hr >= 19 || hr < 5, name: 'night' },
	];

	data.forEach((item) => {
		if (item.cond) {
			main.className = '';
			main.classList.add(item.name);
		}
	});

	// if (main.classList.contains('afternoon')) {
	// 	main.classList.add('dark');
	// } else {
	// 	main.classList.remove('dark');
	// }

	//삼항영산자 : 표현식을 활용한 간소화된 조건문
	//조건식 ? true일때 실행구문 : false일때 실행구문
	main.classList.contains('afternoon') ? main.classList.add('dark') : main.classList.remove('dark');
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
