
export interface IInfo {
    title: string,
    description: string,
    number: number,
}

export interface IInfo {
    title: string,
    description: string,
    number: number,
}

export interface IDeviceModalProps {
    show: boolean,
    onHide: () => void
}

export interface IDeviceInfoProps {
    info: IInfo[],
    setInfo: (arg0: IInfo[]) => void,
    descItem: IInfo,
}
