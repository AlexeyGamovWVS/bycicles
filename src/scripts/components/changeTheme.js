export function changeTheme(arrayOfItems, swither) {
	console.log('init');

	arrayOfItems.forEach((item) => {
		item.classList.toggle("darkmode");
	});
}