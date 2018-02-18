var priceArr = [106, 124, 114, 135, 121, 109, 117, 112];

function myFunction() {
	var item = document.forms[0];
	var price = 0;
	var i;
	for (i = 0; i < item.length; i++) {
		if (item[i].checked) {
			price = price + priceArr[i];
			console.log(item[i].value + " $" + (priceArr[i] / 100));
		}
	}
	price = price / 100;
	console.log("Total: $" + price);
}