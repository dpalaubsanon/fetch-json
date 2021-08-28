const productList = document.querySelector('.product-list');

eventListeners();

function eventListeners(){
	window.addEventListener('DOMContentLoaded', () => {
		loadJSON();
	});
}

function loadJSON(){
	fetch('assets/json/products.json')
	.then(response => response.json())
	.then(data => {
		let html = '';
		data.forEach(products => {
			html += `
			<div class="col-lg-4 col-md-4 col-sm-4 item">
				<div class="card">
					<img src="${products.image}">
					<p>${products.name}</p>
					<p>${products.price}</p>
				</div>
			</div>
			`;
		});
		productList.innerHTML = html;
	})
}