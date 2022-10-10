import CommentChild from "./CommentChild";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Context } from "../..";
import getUserName from "../../utils/getUserName";
import { deleteComment } from "../../http/commentAPI";
import Confirming from "../modals/Confirming";


const CommentItem = observer(({comment, comments, setAnswerId, update}) => {
    const {user} = useContext(Context);
    const [confirming, setConfirming] = useState(false);

    const deleteCommentAndUpdate = async() => {
        await deleteComment({id: comment.id});
        update({});
    }

    return(
        <div>
            <div className="card p-2 mb-1">
                {user.user.role == "ADMIN" &&
                    <div 
                        onClick = {()=>setConfirming(true)}
                        className="position-absolute" style={{right:10}}>
                        <i className="bi bi-x-square"></i>
                    </div>
                }
                <div className=" d-flex justify-content-start gap-3" >
                    <i style={{fontSize: 48}} className="bi bi-person-circle"></i>
                    <div>
                        <h5>{getUserName(comment.userId, user.users)}</h5>
                        <div>
                            {comment.text}
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <Button
                        onClick={()=>setAnswerId(comment.id)}
                    >
                        Ответить
                    </Button>
                </div>
            </div>
            <div className="row d-flex justify-content-end">
                <CommentChild setAnswerId={setAnswerId}  id={comment.id} comments={comments} />
            </div>
            <Confirming
                show={confirming}
                onHide={()=>setConfirming(false)}
                text={"Вы уверены, что хотите удалить комментарий?"}
                callback={()=>deleteCommentAndUpdate()}
            />
        </div>
    )

})

export default CommentItem; 