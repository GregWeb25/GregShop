import CommentItem from "./CommentItem";
import { observer } from "mobx-react-lite";
import { useContext} from "react";
import { Context } from "../..";
import { IComment, ICommentContentProps } from "./types/TypesComents";

const CommentsContent = observer(({setAnswerId, update}: ICommentContentProps) => {

    const {comments} = useContext(Context);


    return(
        <div className=" p-2">
            {comments?.comments.map((comment: IComment ) => {
                if(comment.parrentId == 0){
                    return(
                        <div>
                            <CommentItem 
                                update={update}
                                setAnswerId={setAnswerId} 
                                key={comment.id} 
                                comment={comment} 
                            />
                        </div>
                    )
                }
            })}
        </div>
    )
})

export default CommentsContent;