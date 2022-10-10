
export interface ISingInProps {
    isLogin: boolean, 
    userData: IUserData, 
    clickHandler: boolean, 
    setClickHandler: (agr0:boolean) => void,
}

export interface IUserData {
    password: string,
    email: string, 
    confirm: string,
}