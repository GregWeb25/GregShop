import {Container, Form } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../index";
import {observer} from 'mobx-react-lite';
import { fetchDevices } from "../../../http/deviceAPI";
import {checkPrice} from "../../../utils/checkParam";
import From from "./From";
import To from "./To";
import { IDevice } from "../../comments/types/TypesComents";

const ByCost = observer(() => {
    const {device, sort} = useContext(Context);
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(0);
    const [from, setFrom] = useState<number>(0);
    const [to, setTo] = useState<number>(Infinity);

    const updatePrices = (data: IDevice[]) => {
        const {min, max} = checkPrice(data);
        setMinPrice(min);
        setMaxPrice(max);
        setFrom(minPrice);
        setTo(maxPrice);
    }

    useEffect(()=>{
        if(sort?.isPriceFilter){
            fetchDevices(
                device.selectedType.id == 0 ? null : device.selectedType.id, 
                device.selectedBrand.id == 0 ? null : device.selectedBrand.id, 
                 1, 999).then(data =>{ 
                updatePrices(data);
            });
        } else {
            fetchDevices(null, null, 1, 999).then(data =>{ 
                updatePrices(data);
            });
        }
    },[minPrice, maxPrice, sort?.isPriceFilter, device?.selectedType, device?.selectedBrand])

    useEffect(()=>{
        device?.setPage(1);
    },[minPrice, maxPrice, sort?.isPriceFilter, device?.selectedType, device?.selectedBrand, to, from])

    useEffect(()=>{
        sort?.setPriceFilter({min: Number(from), max: Number(to)});
    },[to,from, maxPrice])

    return(
        <Container >
            <div className={sort?.isPriceFilter ? 
            'card border-primary pt-2 p-3 container'
            : 'card p-2 container'
             }>
                <div className="row">
                    <div className="d-flex align-items-center justify-content-center gap-2 mb-1">
                        <div style={{fontSize: 16}} className="text-muted">Фильтр</div>
                        <Form.Check 
                            checked={sort?.isPriceFilter? true : false}
                            type="switch"
                            id="custom-switch"
                            className="mt-1"
                            onChange={()=>sort?.setIsPriceFilter(!sort?.isPriceFilter)}
                        />
                    </div>
                    {sort?.isPriceFilter &&
                        <div>
                            <From
                                from={from}
                                setFrom={setFrom}
                                to={to}
                                minPrice={minPrice}
                            />
                            <To
                                minPrice={minPrice}
                                maxPrice={maxPrice}
                                from={from}
                                to={to}
                                setFrom={setFrom}
                                setTo={setTo}
                            />
                        </div>
                    }
                </div>
            </div>
        </Container>
    )
})

export default ByCost;