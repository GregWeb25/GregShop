import { IInfo } from "../../modals/DeviceModal/TypesDeviceModal";

export interface IComment {
    id: number,
    text: string,
    deviceId: number,
    userId: number,
    parrentId: number,
}

export interface IUser {
    id: number,
    email: string,
}

export interface IAnswer {
    setAnswerId: (arg0: number) => void,
    answerId: number,
}

export interface IDevice {
    id: number,
    name: string,
    price: number,
    rating: number,
    typeId: number,
    brandId: number,
    img: string,
    info: IInfo[],
}

export interface ICommentsProps {
    device: IDevice,
}

export interface ICommentContentProps {
    setAnswerId: (arg0: number) => void,
    update: (arg0: string) => void,
}

export interface ICommentItemProps {
    comment: IComment,
    setAnswerId: (arg0: number) => void,
    update: (arg0: string) => void,
}

export interface ICommentChild {
    id: number,
    setAnswerId: (arg0: number) => void,
    update: (arg0: string) => void,
}

export interface ICommentsForm {
    user: IUser,
    answer: IAnswer,
    update: (arg0: string) => void,
    deviceId: number,
}