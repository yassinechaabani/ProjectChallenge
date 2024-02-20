document.addEventListener("DOMContentLoaded", function () {
    
   
 fetch(`https://fakestoreapi.com/products/${2}`)
        .then(res => res.json())
        .then(product => displayItemDetails(product))
        
    function displayItemDetails(product) {
        const itemDetailsContainer = document.getElementById('ProductDetails');

       
        const itemDetailsHTML = `
        
            <div class="item-details-image-container"   >
                <img src="${product.image}" alt="${product.title}" class="item-details-image">
            </div>
            <div class="p"></div>
            <div class="item-details-text">
            <p class="ProductTitle1">${product.title}</p>
            <div class="test">
            <div class="ProductRatingg">
                    <img src="https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/uhlym2mrhob6aoklzd0h.png" alt="Rating" class="item-rating">
                </div>
                <p class="ProductPrice1">
                $${Math.floor(product.price - (product.price * 20 / 100)).toFixed(2)}
            </p>
                <p class="ProductDescription"> ${product.description}</p>
                
                <div class="add-to-cart-container">
                <p class="item-title">Quantity:</p>
                <input type="number" class="quantityInput" value="1" min="1" max="10">
                    <button class="add-to-cart-button" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
                <div>
                <div class="buttons">
                <button class="PDDES" ><b>Product Description</button>
                <button class="ADDINFO" >Additional Info</button>
                <p class="desc">Welcome to the world of natural and organic. Here you can discover the bounty of nature.</br> We have grown on the principles of health,<br> ecology, and care. We aim to give our customers a healthy </br> chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple <br> sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
                </div>
            </div>
            </div>
        

        `;

        itemDetailsContainer.innerHTML = itemDetailsHTML;
    }
});