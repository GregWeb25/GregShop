
const calculateCost = (basketContent)=>{
    let result = 0;
    if(basketContent){
        basketContent.map(device =>{
            result += device.device.price;
        })
    }
    return(result);
}

export default calculateCost;