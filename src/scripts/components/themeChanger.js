export function changeTheme(arrayOfItems) {
	console.log('init');
	arrayOfItems.forEach((item) => {
		item.classList.toggle("darkmode");
	});
}