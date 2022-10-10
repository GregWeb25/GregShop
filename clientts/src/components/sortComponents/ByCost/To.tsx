import cutPriceLength from "../../../utils/cutPriceLength";
import { IToProps } from "./TypesByCost";

const To = ({minPrice, maxPrice, from, to, setTo, setFrom}: IToProps) => {
    return(
        <div>
            <div className="d-flex justify-content-center gap-2">
                <div style={{fontSize: 24}} className="text-muted">До:</div>
                <div style={{fontSize: 24}} className="text-muted">{cutPriceLength(to)}</div>
            </div>
            <div className="d-flex justify-content-center">
                <input 
                    onChange={(e)=>{
                        const toValue: number = Number(e.target.value);
                        setTo(toValue)
                        if (toValue <= from && from > minPrice) {
                            setFrom(toValue-1)
                        }
                    }} 
                    value={to}
                    type="range" 
                    className="form-range w-75" 
                    min={minPrice+1} 
                    max={maxPrice} 
                    id="customRange2"/>
            </div>
            <div className="d-flex justify-content-between">
                <div style={{fontSize: 14}} className="text-muted ">{cutPriceLength(from)}</div>
                <div style={{fontSize: 14}} className="text-muted ">{cutPriceLength(maxPrice)}</div>
            </div>
        </div>
    )
}

export default To;