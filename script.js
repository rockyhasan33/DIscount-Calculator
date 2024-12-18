const productPrice = document.getElementById('original_price_data');
const discountPercent = document.getElementById('discount_data');
const finalPrice = document.querySelector('.final_price_data');
const clearAll = document.querySelector('.clear-btn');
const savePrice = document.querySelector('.saved_data_price');


// 

let price = 0;
let discount = 0;
let result = 0;

productPrice.addEventListener('input', CalculateData);
discountPercent.addEventListener('input', CalculateData);

function CalculateData(e) {

    if(e.target.name === 'product_price') {
        price = parseInt(e.target.value);
    }else {

        discount = parseInt(e.target.value);
        if(isNaN(discount)) {
            discount = 0;
        }
        
        
    }


    result = ((price / 100) * discount).toFixed(0);

    finalPrice.textContent = price - result;
    savePrice.textContent = result;
}



