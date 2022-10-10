import { observer } from "mobx-react-lite";
import { Context } from "..";
import { useContext, useMemo } from "react";
import { Pagination } from "react-bootstrap";


const Pages = observer(() => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages: number[] = [];

    useMemo(() =>{for(let i = 0; i < pageCount; i++){
        pages.push(i+1)}
    },[device.page, pageCount])

    return (
        <div>
            <Pagination className="mt-5" >
                {pages.map(page => 
                    <Pagination.Item 
                        active={device.page === page} 
                        key={page} 
                        onClick={()=> device.setPage(page)}
                    >
                        {page}
                    </Pagination.Item>
                )}
            </Pagination>
        </div>
    )
})

export default Pages;