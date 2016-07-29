window.onload = function () {
	var shopItems = [
  { "name": "Lusicious Jello Mix", "description": ["Very Elegant", "Trending item", "Come in Purple"], "price": 80.65 },
  { "name": "Tarnished Standing Desk", "description": ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"], "price": 1654.99},
  { "name": "Hand-made Hand Grenades", "description": ["Such gift!", "Much boom!", "Very safe for kids"], "price": 10.44},
  { "name": "Pan-fried Cookie Dough", "description": ["Chocolate", "Family-size", "Hot Mess"], "price": 16.99 },
  { "name": "Fancy Dress Hanger", "description": ["Keep organized", "On Sale"], "price": 67.32 },
  { "name": "Snarky Britsh Mustache 3-Pack", "description": ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99 },
];

	var quantities = [1,2,3,1,2,3];

	var theImages = ["img/jello.jpg", "img/desk.jpg", "img/grenades.jpg", "img/cookiedough.jpg",  "img/hanger.jpg", "img/mustache.jpg"];

	for (var i = 0; i < shopItems.length; i++) {
		// create div for each shopItems
		var itemDiv = document.createElement("div");
		itemDiv.className = "eachItem";

		// create div for each element in itemDiv
		var imgDiv = document.createElement("div");
		imgDiv.className = "eachImg";
		var leftDiv = document.createElement("div");
		leftDiv.className = "left";
		var nameDiv = document.createElement("div");
		nameDiv.className = "eachName";
		var descriptionDiv = document.createElement("div");
		descriptionDiv.className = "eachDescription";
		var priceDiv = document.createElement("div");
		priceDiv.className = "eachPrice";
		var quantityDiv = document.createElement("div");
		quantityDiv.className = "eachQuantity";

		// create img files
		var img = document.createElement("img");

		// for text nodes
		var nameHeading = document.createElement("h3");
		nameHeading.className = "theNames";
		var descriptionText = document.createElement("p");
		descriptionText.className = "theDescriptions";
		var priceText = document.createElement("p");
		priceText.className = "thePrices";
		var quantityText = document.createElement("p");
		quantityText.className = "theQuantity";

		// add all divs into document
		// document.body.appendChild(itemDiv);
		// document.body.appendChild(imgDiv);
		// document.body.appendChild(img);
		// document.body.appendChild(leftDiv);
		// document.body.appendChild(nameDiv);
		// document.body.appendChild(descriptionDiv);
		// document.body.appendChild(priceDiv);

		// define #cart div as variable
		var theCart = document.getElementById("cart");

		// insert .eachItem div into #cart div
		theCart.appendChild(itemDiv);

		// insert other divs into .eachItem div
		itemDiv.appendChild(imgDiv);
		itemDiv.appendChild(leftDiv);
		itemDiv.appendChild(quantityDiv);
		itemDiv.appendChild(priceDiv);

		// insert image into div
		imgDiv.appendChild(img);
		img.src = theImages[i];

		// insert into left div
		leftDiv.appendChild(nameDiv);
		leftDiv.appendChild(descriptionDiv);

		// insert text nodes into divs
		nameDiv.appendChild(nameHeading);
		descriptionDiv.appendChild(descriptionText);
		quantityDiv.appendChild(quantityText);
		priceDiv.appendChild(priceText);

		// insert text
		nameHeading.appendChild(document.createTextNode(shopItems[i].name));
		descriptionText.appendChild(document.createTextNode(shopItems[i].description));
		quantityText.appendChild(document.createTextNode(quantities[i]));
		priceText.appendChild(document.createTextNode(shopItems[i].price));

		// quantity dropdown
		// var dropdown = document.createElement("select");
	 //    dropdown.setAttribute("class", "quantity");
	 //    quantityDiv.appendChild(dropdown);

	 //    var oneOption = document.createElement("option");
	 //    oneOption.setAttribute("value", "1");
	 //    var one = document.createTextNode("1");
	 //    oneOption.appendChild(one);
	 //    dropdown.appendChild(oneOption);

	 //    var twoOption = document.createElement("option");
	 //    twoOption.setAttribute("value", "2");
	 //    var two = document.createTextNode("2");
	 //    twoOption.appendChild(two);
	 //    dropdown.appendChild(twoOption);
	}

	// var totally = 0;
	// function add() {
	// 	for (var i = 0; i < shopItems.length; i++) {

	// 		totally +=shopItems[i].price;
	// 	}
	// 	return totally;
	// }

	var totally = 0;
	function add() {
		for (var i = 0; i < shopItems.length; i++) {

			totally +=(shopItems[i].price * quantities[i]);
		}
		return totally.toFixed(2);
	}

	// var totally = 0;
	// function add() {
	// 	for (var i = 0; i < shopItems.length; i++) {

	// 		totally +=(shopItems[i].price * parseFloat(dropdown.attributes.value));
	// 	}
	// 	return totally.toFixed(2);
	// }

	// var totally = 0;
	// function add() {
	// 	for (var i = 0; i < shopItems.length; i++) {
	// 		var hello = find('.quantity :selected');	
	// 		totally +=(shopItems[i].price * parseFloat(hello.attributes.value));
	// 	}
	// 	return totally.toFixed(2);
	// }


	var subtotalDiv = document.createElement("div");
	subtotalDiv.id = "subtotal";
	var subLeftDiv = document.createElement("div");
	subLeftDiv.id = "sub-left";
	var subRightDiv = document.createElement("div");
	subRightDiv.id = "sub-right";
	var subtotalLeftText = document.createElement("h3");
	subtotalLeftText.className = "theSubtotal";
	var subtotalRightText = document.createElement("p");
	subtotalRightText.className = "theSubtotalNumber";
	// document.body.appendChild(subtotalDiv);
	// document.body.appendChild(subLeftDiv);
	// document.body.appendChild(subRightDiv);
	// document.body.appendChild(subtotalLeftText);
	// document.body.appendChild(subtotalRightText);
	theCart.appendChild(subtotalDiv);
	subtotalDiv.appendChild(subLeftDiv);
	subLeftDiv.appendChild(subtotalLeftText);
	subtotalDiv.appendChild(subRightDiv);
	subRightDiv.appendChild(subtotalRightText);
	subtotalLeftText.appendChild(document.createTextNode("Subtotal"));
	subtotalRightText.appendChild(document.createTextNode(add()));
};