
export interface IType {
    id: number,
    name: string
}

export interface ITypeItemProps {
    type: IType,
    updateState: (arg0: string) => void,
}