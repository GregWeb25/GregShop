const cutPriceLenth = (price) => {
    let result = 0;
    if(price.toString().length > 3){
        result = Math.floor(price/1000) + 'k'
        
    }
    return result
}

export default cutPriceLenth;