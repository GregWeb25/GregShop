const getTypeByID = (id, arr) => {
    let result = '';

    arr.map((element) => {
        if(element.id == id){
            let str = element.name;
            str = str.slice(0, -1); 
            result = str;
        }
    });

    return result;
}

export default getTypeByID;