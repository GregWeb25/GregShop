export const checkPrice = (arr) => {
    let min = Infinity;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if(min>=arr[i].price){
            min = arr[i].price;
        }
        if(max<=arr[i].price){
            max = arr[i].price;
        }
    }
    return {min, max}
}
