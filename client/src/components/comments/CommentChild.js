import CommentItem from "./CommentItem";
import { useCallback } from "react";

const CommentChild = ({id, comments, setAnswerId}) => {
    const childs = useCallback(comments.filter(comment => {
        if (comment.parrentId == id) {
            return true;
        }
    }),[comments])
    return(
        <div className=" col-11">
            {childs.map(comment => <CommentItem setAnswerId={setAnswerId} key={comment.id} comment={comment} comments={comments} />)}
        </div>
    )
}

export default  CommentChild;