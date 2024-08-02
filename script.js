const switchEl = document.querySelector(".checkbox");
const basicPriceEl = document.querySelector(".basic-annual-price");
const proPriceEl = document.querySelector(".pro-annual-price");
const masterPriceEl = document.querySelector(".master-annual-price");

function switchPrice() {
	const dollar = '<span class="dollar">&dollar;</span>';


  if (switchEl.checked) {
    basicPriceEl.innerHTML = dollar +'19.99';
	proPriceEl.innerHTML = dollar +"24.99";
	masterPriceEl.innerHTML = dollar +"39.99";
  } else {
     basicPriceEl.innerHTML = dollar +"199.99";
	proPriceEl.innerHTML = dollar +"249.99";
	masterPriceEl.innerHTML = dollar +"399.99";
  }
}
switchPrice();

switchEl.addEventListener("change", switchPrice);