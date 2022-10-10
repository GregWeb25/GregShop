import {Container, Form, Card, Button} from 'react-bootstrap';
import {NavLink, useLocation} from 'react-router-dom';
import { useState} from 'react';
import {observer} from 'mobx-react-lite';
import SingIn from './SingIn';

const Auth = observer( () => {
    const location = useLocation();
    const isLogin = location.pathname === "/login";
    const [clickHandler, setClickHandler] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control 
                        className="mt-4"
                        placeholder="Введите e-mail..."
                        onChange={(e)=>{setEmail(e.target.value)}}
                        value={email}
                    />
                    <Form.Control 
                        className="mt-4"
                        placeholder="Введите пароль..."
                        onChange={(e)=>{setPassword(e.target.value)}}
                        value={password}
                        type="password"
                    />
                    {!isLogin &&
                        <Form.Control 
                            className="mt-4"
                            placeholder="Подтвердите пароль..."
                            onChange={(e)=>{setConfirm(e.target.value)}}
                            value={confirm}
                            type="password"
                        />
                    }
                    <Button 
                        className="align-self-end mt-4" 
                        variant={"outline-success"} 
                        onClick={()=>{setClickHandler(true)}}
                    >
                    {isLogin ? 'Войти' : 'Зарегистрироваться'}
                    </Button>
                    {isLogin ?
                     <div > Нет аккаунта? <NavLink to="/registration">Зарегистрируйтесь!</NavLink> </div>
                     : <div > Уже есть аккаунт? <NavLink to="/login">Войдите!</NavLink> </div>
                     }

                </Form>
            </Card>
            <SingIn
                isLogin={isLogin}
                userData={{ 
                    email,
                    password,
                    confirm
                }}
                clickHandler={clickHandler}
                setClickHandler={setClickHandler}
            />
        </Container>
    )
})

export default Auth;