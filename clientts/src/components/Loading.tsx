import { Spinner } from "react-bootstrap";

const Loading = () => {
    return(
        <div style={{ height: window.innerHeight }} className="container">
            <div className="d-flex align-items-center justify-content-center h-100">
            <Spinner animation={'grow'} />
            </div>
        </div>
    )
}

export default Loading;