const sorts = (data, sort) => {
    switch (sort) {
        case 'chipper':
            data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
            break;
        case 'expencive':
            data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
            break;
        case 'rating':
            data.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
            break;
    
        default:
            break;
    }
}

export default sorts;