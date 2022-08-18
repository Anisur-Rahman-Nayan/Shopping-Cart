
function updateProductNumber(product,isIncreasing ,price){
    const productInput = document.getElementById( product + '-number')
    let productNumber = productInput.value;

    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
        productInput.value = productNumber
    
    const productTotal = document.getElementById(product +'-total')
    productTotal.innerText = productNumber * price;


    calculateTotal();
        
}
 
document.getElementById('case-plus').addEventListener('click',function(){
    updateProductNumber( 'case',true, 59)
})

document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case',false, 59)
})



document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',true,1219)
})

document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',false,1219)
})

function getInputValue(product){
    const productInput = document.getElementById(product + '-number')
    const productNumber = parseInt(productInput.value)
    return productNumber
}

function calculateTotal(){
    
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59
    const subTotal = phoneTotal + caseTotal

    document.getElementById('sub-total').innerText = subTotal;
    

    const tax = subTotal / 10 ;
    document.getElementById('tax-amount').innerText = tax;

    const totalPrice = subTotal + tax;
    document.getElementById('total-price').innerText = totalPrice;
}