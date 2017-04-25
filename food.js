var display = document.getElementById("products");

function displayData(input) {
	var brands = input.dog_brands;
	var isCat = false;
	if(brands == null) {
		brands = input.cat_brands;
		isCat = true;
	}
	var displayText = "";
	for(x in brands) {
		var brand = brands[x]
		displayText += `<div>${brand.name}`;
		console.log(isCat);
		for(x in brand.types) {
			var kind = brand.types[x];
			displayText += `<div>${kind.type}`;
			for(x in kind.volumes) {
				var size = kind.volumes[x];
				displayText +=`<div>`;
				if(isCat) {
					displayText += `${size.age} `;
				}
				displayText += `${size.name} ${size.price}</div>`;
			}
			displayText += `</div>`;
		}
		displayText += `</div>`;
	}
	var displayDiv = document.createElement("div");
	displayDiv.innerHTML = displayText;
	display.appendChild(displayDiv);
}

function dataRequestComplete(event) {
	console.log("data request complete");
	var data = JSON.parse(event.target.responseText);
	console.log("data: ", data);
	displayData(data);
}
function dataRequestFailed(event) {
	console.log("Data request failed");
}

var dogData = new XMLHttpRequest();

dogData.addEventListener("load", dataRequestComplete);
dogData.addEventListener("error", dataRequestFailed);

dogData.open("GET", "dogfood.json");
dogData.send();

var catData = new XMLHttpRequest();

catData.addEventListener("load", dataRequestComplete);
catData.addEventListener("error", dataRequestFailed);

catData.open("GET", "catfood.json");
catData.send();
