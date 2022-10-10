import Accordion from 'react-bootstrap/Accordion';
import TypeBar from './TypeBar';
import BrandBar from './BrandBar';
import ByCost from './sortComponents/ByCost/ByCost';
import Sort from './sortComponents/Sort';
const FilterAccordion = () => {
    return(
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Типы</Accordion.Header>
          <Accordion.Body style={{padding: 3}}>
            <TypeBar/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Брэнды</Accordion.Header>
          <Accordion.Body>
            <BrandBar/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Цена</Accordion.Header>
          <Accordion.Body className="p-2">
            <ByCost/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Сортировка</Accordion.Header>
          <Accordion.Body>
            <Sort/>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
}

export default FilterAccordion;