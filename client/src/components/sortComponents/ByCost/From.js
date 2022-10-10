import cutPriceLength from "../../../utils/cutPriceLength";

const From = ({from, setFrom, to, minPrice}) => {
    return(
        <div>
            <div className="d-flex justify-content-center gap-2">
                <div style={{fontSize: 24}} className="text-muted">От:</div>
                <div style={{fontSize: 24}} className="text-muted">{cutPriceLength(from)}</div>
            </div>
            <div className="d-flex justify-content-center">
                <input
                    onChange={(e)=>{setFrom(e.target.value)}} 
                    value={from}
                    type="range" 
                    className="form-range w-75" 
                    min={minPrice} 
                    max={to-1}
                    id="customRange2"
                />
            </div>
            <div className="d-flex justify-content-between">
                <div style={{fontSize: 14}} className="text-muted ">{cutPriceLength(minPrice)}</div>
                <div style={{fontSize: 14}} className="text-muted ">{cutPriceLength(to)}</div>
            </div>
        </div>
    )
}

export default From;