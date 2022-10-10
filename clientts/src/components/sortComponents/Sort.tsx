import {useContext } from "react";
import { Form } from "react-bootstrap";
import {observer} from 'mobx-react-lite';
import { Context } from "../..";

const Sort = observer(() => {
    const {sort: sortStore} = useContext(Context);

    return(
        <div style={{fontSize: 16}} className="text-muted">
            <Form.Check
                checked={sortStore?.sort == 'rating' ? true : false}
                inline
                label="Сперва лучший рейтинг"
                name="group1"
                type='radio'
                onChange={()=>{sortStore?.setSort('rating')}}
                id={`inline-radio-3`}
            />
            <Form.Check
                checked={sortStore?.sort == 'chipper' ? true : false}
                inline
                label="Сперва дешевые"
                name="group1"
                type='radio'
                onChange={()=>{sortStore?.setSort('chipper')}}
                id={`inline-radio-1`}
            />
            <Form.Check
                checked={sortStore?.sort == 'expencive' ? true : false}
                inline
                label="Сперва дорогие"
                name="group1"
                type='radio'
                onChange={()=>{sortStore?.setSort('expencive')}}
                id={`inline-radio-2`}
            />
        </div>
    )
})

export default Sort;