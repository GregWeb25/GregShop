import cutPriceLength from "../../../utils/cutPriceLength";

const To = ({minPrice, maxPrice, from, to, setTo, setFrom}) => {
    return(
        <div>
            <div className="d-flex justify-content-center gap-2">
                <div style={{fontSize: 24}} className="text-muted">До:</div>
                <div style={{fontSize: 24}} className="text-muted">{cutPriceLength(to)}</div>
            </div>
            <div className="d-flex justify-content-center">
                <input 
                    onChange={(e)=>{
                        setTo(e.target.value)
                        if (e.target.value <= from && from > minPrice) {
                            setFrom(e.target.value-1)
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