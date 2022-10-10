
export interface IAlertProps {
    show: boolean,
    onHide: () => void,
    text: string,
}

export interface IConfirmingProps {
    show: boolean,
    onHide: () => void,
    text: string,
    callback: (args: any) => any,
}

export interface IModalProps {
    show: boolean,
    onHide: () => void,
}