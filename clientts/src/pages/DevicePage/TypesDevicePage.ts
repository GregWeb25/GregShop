import { IDevice } from "../../components/comments/types/TypesComents";
import { IInfo } from "../../components/modals/DeviceModal/TypesDeviceModal";

export interface IBuyPanelProps{
    id: number,
    device: IDevice,
}

export interface IInfoItemProps{
    descItem: IInfo,
    infoCount: number,
}

export interface IStarRatingProps {
    size: number, 
    count: number,
    rating: number, 
    onRating: (rate: number) => void,  
    addRating: () => void
}