export function changeTheme(arrayOfItems) {
	arrayOfItems.forEach((item) => {
		item.classList.toggle("darkmode");
	});
}