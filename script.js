
    const itemDetailsContainer = document.getElementById('ProductDetails');

document.addEventListener("DOMContentLoaded", function () {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => displayProductsItems(json.slice(0, 12)))
        
    function displayProductsItems(data) {
        const ProductsContainer = document.getElementById('ProductsContainer');
        data.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.style.width = '850px';
            productItem.style.height = '1400px';
            productItem.innerHTML = `
                <div class="image-container">
                    <img src="https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266044/Clothy/giywnwhsomoybyi9vgxj.png" alt="Rating" class="ProductType"> 
                    <img src="https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/q1pbhfwzuy1u8xqq6cbd.png" alt="Rating" class="ProductCart"> 
                    <div class="Product-text">${product.category}</div>
                </div>
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.title}" class="ProductImage">
                </div>
                <div class="ProductTextCcontainer">
                    <p class="ProductTitle">${product.title}</p>
                    <hr class="ProductDivider">
                    <div class="ProductDetails">
                        <p class="ProductPrice">
                            
                            $${Math.floor(product.price - (product.price * 20 / 100)).toFixed(2)}
                        </p>
                        <div class="item-rating-container">
                            <img src="https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/uhlym2mrhob6aoklzd0h.png" alt="Rating" class="ProductRating">
                        </div>
                    </div>
                </div>
            `;

            

            ProductsContainer.appendChild(productItem);
        });
    }
});


ProductsContainer.addEventListener('click', function() {
    window.location.href = (`ShopSingle.html`);
})
