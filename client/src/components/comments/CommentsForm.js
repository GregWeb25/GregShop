import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { createComment } from '../../http/commentAPI';

const CommentsForm = ({user, deviceId, answer, update}) => {
    const [text, setText] = useState('');

    const addComment = async() => {
        if(text != ''){
            const comment = {
                deviceId,
                userId: user.user.id,
                parrentId: answer.answerId,
                text
            }
            await createComment(comment);
            setText('');
            update({});
        }
    }

    return(
        <div className="mb-2">
            <Form>
                <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>
                        <div className=' d-flex justify-content-start gap-3 align-items-center ms-2'>
                            <i style={{fontSize: 48}} className="bi bi-person-circle"></i>
                            <div>
                                <h5>{user.user.email}</h5>         
                            </div>
                        </div>
                    </Form.Label>
                    <Form.Control
                     onChange={(e)=>setText(e.target.value)}
                     value={text}
                     as="textarea" rows={3} />
                </Form.Group>
                <div className="d-flex justify-content-end gap-3">
                    {answer.answerId > 0 && 
                        <div className='border p-1 border-primary ms-4 rounded d-flex justify-content-center align-items-center gap-2'>
                            <div>
                                <span style={{fontWeight: 'bold'}}>
                                    Ответ
                                </span>
                            </div>
                            <Button
                                onClick={()=>answer.setAnswerId(0)}
                            ><i className="bi bi-x-circle"></i></Button>
                        </div>
                    }
                    <Button
                        onClick={()=>addComment()}
                    >Добавить</Button>
                </div>
            </Form>
        </div>
    )
}

export default CommentsForm;