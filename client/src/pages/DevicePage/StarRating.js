import { useMemo } from "react";

const StarRating = ({size, count, rating, onRating,  addRating}) => {

    const starRating = useMemo(()=>{
        return Array(count).fill(false).map((_,i) =>{
            if(i+1 <= rating){
                return true;
            } else return false;
        })
    },[rating])

    return(
        <div className="mt-3 mb-2 row">
            <div className="card h-100 d-flex align-items-center justify-content-center pb-2" >
                <h3  style={{marginBlockEnd:0, marginBlockStart:0}}>Оцените товар :</h3>
                <div className="d-flex gap-1 flex-column align-items-center justify-content-center">
                    <div>
                        {starRating.map((star,i) => {
                            return(
                                <i 
                                    key={i} 
                                    className={star? "bi bi-star-fill" : "bi bi-star"}
                                    style={{cursor:'pointer', fontSize: size}}
                                    onClick={()=>onRating(i+1)}
                                >
                                </i>
                            )
                        })}
                    </div>
                    <div onClick={()=>addRating()} className="btn w-50  btn-success mt-1">оценить</div>
                </div>
            </div>
        </div>
    )
}

export default StarRating;