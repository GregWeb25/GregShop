import CommentsContent from "./CommentsContent";
import CommentsForm from "./CommentsForm";
import { useContext, useEffect, useState } from 'react';
import { Context } from "../../index"
import { observer } from 'mobx-react-lite';
import { fetchComments } from "../../http/commentAPI";
import { IComment, ICommentsProps } from "./types/TypesComents";

const Comments = observer(({device}: ICommentsProps) => {
    const {user, comments} = useContext(Context);
    const [answerId, setAnswerId] = useState<number>(0);
    const [state, update] = useState<string>('');

    const getAllComment = async() => {
        await fetchComments({deviceId: device.id}).then((data: IComment)=>comments?.setComments(data));
    }

    useEffect(()=>{
        getAllComment();
    },[state])

    return(
        <div className='mb-4 card p-2'>
            {user?.isAuth &&
                <CommentsForm answer={{answerId, setAnswerId}} update={update} user={user.user} deviceId={device.id}/>
            }
            <CommentsContent update={update} setAnswerId={setAnswerId}/>
        </div>
    )
})

export default Comments;