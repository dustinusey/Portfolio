/* Page nav */

const sliderPos = [29, 95, 175, 265];
const sliderColors = ['rgb(100, 168, 207)', 'rgb(100, 207, 148)', 'rgb(207, 139, 100)', 'rgb(207, 112, 100)', 'rgb(215, 130, 236)']
const pageNav = document.querySelector('.page-nav');
const pageNavItems = pageNav.querySelectorAll('li');
const slider = document.querySelector('.slider');
pageNav.addEventListener('click', (e) => {
	slider.style.backgroundColor = randomColor();
	slider.style.opacity = '1';
	slider.style.top = '0';
	slider.style.animation = 'slider .6s ease forwards';
	pageNavItems.forEach((item, i) => {
		item.classList.remove('active-nav-item');
		if (e.target === item) {
			slider.style.animation = 'slider .6s ease forwards';
			slider.style.left = `${sliderPos[i]}px`
			item.classList.add('active-nav-item')
		}
	});
});

slider.addEventListener('animationend', () => {
	slider.style.animation = 'none';
	slider.style.backgroundColor = '#7E8AF3';
});

function randomColor() {
	let ran = Math.floor(Math.random() * sliderColors.length)
	return sliderColors[ran];
}