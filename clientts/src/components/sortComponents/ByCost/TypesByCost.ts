
export interface IFromProps {
    from: number ,
    setFrom: (arg0: number) => void,
    to: number,
    minPrice: number,
}

export interface IToProps {
    minPrice: number,
    maxPrice: number,
    from: number,
    to: number,
    setTo:(arg0: number) => void,
    setFrom:(arg0: number) => void,
}