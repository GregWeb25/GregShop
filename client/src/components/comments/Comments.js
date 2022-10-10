import CommentsContent from "./CommentsContent";
import CommentsForm from "./CommentsForm";
import { useContext, useEffect, useState } from 'react';
import { Context } from "../../index"
import { observer } from 'mobx-react-lite';
import { fetchComments } from "../../http/commentAPI";

const Comments = observer(({device}) => {
    const {user, comments} = useContext(Context);
    const [answerId, setAnswerId] = useState(0);
    const [state, update] = useState();

    const getAllComment = async() => {
        await fetchComments({deviceId: device.id}).then((data)=>comments.setComments(data));
    }

    useEffect(()=>{
        getAllComment();
    },[state])

    return(
        <div className='mb-4 card p-2'>
            {user.isAuth &&
                <CommentsForm answer={{answerId, setAnswerId}} update={update} user={user} deviceId={device.id}/>
            }
            <CommentsContent update={update} setAnswerId={setAnswerId} comments={comments.comments} />
        </div>
    )
})

export default Comments;