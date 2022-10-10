
export interface IAdmin {
    id: number,
    email: string,
}

export interface IAdminItemProps {
    admin: IAdmin,
    updateState: (arg0: string) => void,
}