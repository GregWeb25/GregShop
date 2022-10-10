import CommentItem from "./CommentItem";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "../..";

const CommentsContent = observer(({setAnswerId, update}) => {

    const {comments} = useContext(Context);


    return(
        <div className=" p-2">
            {comments.comments.map(comment => {
                if(comment.parrentId == 0){
                    return(
                        <div>
                            <CommentItem 
                                update={update}
                                setAnswerId={setAnswerId} 
                                key={comment.id} 
                                comment={comment} 
                                comments={comments.comments} />
                        </div>
                    )
                }
            })}
        </div>
    )
})

export default CommentsContent;