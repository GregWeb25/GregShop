
export interface IBrand {
    id: number,
    name: string
}

export interface IBrandItemProps {
    brand: IBrand,
    updateState: (arg0: string) => void,
}