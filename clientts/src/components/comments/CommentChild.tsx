import CommentItem from "./CommentItem";
import { IComment, ICommentChild } from "./types/TypesComents";
import { useContext, useMemo } from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";

const CommentChild = observer(({id, setAnswerId, update}: ICommentChild) => {
    const {comments} = useContext(Context);
    const childs = useMemo(() => {return(comments?.comments?.filter((comment:IComment ) => {
        if (comment.parrentId == id) {
            return true;
        }
    }))},[])
    return(
        <div className=" col-11">
            {childs?.map((comment:IComment ) => <CommentItem update={update} setAnswerId={setAnswerId} key={comment.id} comment={comment}/>)}
        </div>
    )
})

export default  CommentChild;