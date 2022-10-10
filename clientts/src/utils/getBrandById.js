const getBrandByID = (id, arr) => {
    let result = '';

    arr.map((element) => {
        if(element.id == id){
            result = element.name;
        }
    });

    return result;
}

export default getBrandByID;