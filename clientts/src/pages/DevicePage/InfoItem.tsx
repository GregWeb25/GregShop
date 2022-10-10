import { IInfoItemProps } from "./TypesDevicePage";

const InfoItem = ({descItem, infoCount}:IInfoItemProps) => {

    return(
        <div className={(infoCount%2 === 0)? "list-group-item" : "list-group-item-dark list-group-item"}>
            <div className="row">
                <div className="col-6">{descItem.title}:</div>
                <div className="col-6">{descItem.description}</div>
            </div>
        </div>
    )
}

export default InfoItem;