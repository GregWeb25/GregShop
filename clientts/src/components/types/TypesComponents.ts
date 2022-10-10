import { IDevice } from "../comments/types/TypesComents";

export interface IDeviceListProps {
    updateState: (arg0: string) => void,
}

export interface IDeviceItemProps {
    device: IDevice,
    deleteFunction: (id: number) => void
}

export interface IBasketDeviceItemProps {
    device:IBascetDevice,
    deleteFunction: (id: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export interface IBascetDevice{
    device: IDevice,
    id: number

}