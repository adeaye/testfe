// src/index.js
import { fetchData } from './fetcher';

document.addEventListener("DOMContentLoaded", async () => {
    const productListElement = document.getElementById('productList');

    try {
        const products = await fetchData();

        // Display products using Bootstrap cards
        products.slice(0, 12).forEach((product, index) => {
            if (index % 4 === 0) {
                // Start a new row for every 4 items
                productListElement.innerHTML += '<div class="w-100 mb-4"></div>';
            }

            const cardElement = document.createElement('div');
            cardElement.classList.add('col-md-3');
            cardElement.innerHTML = `
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">$${product.price}</p>
                    </div>
                </div>
            `;

            productListElement.appendChild(cardElement);
        });
    } catch (error) {
        console.error('Error:', error);
    }
});
