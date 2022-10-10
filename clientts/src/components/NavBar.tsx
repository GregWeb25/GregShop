import { useContext, useState } from "react";
import { Context } from "..";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from "react-router-dom";
import {Button} from 'react-bootstrap';
import {observer} from 'mobx-react-lite';
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE} from '../utils/consts.js';
import Confirming from "./modals/Confirming";

const NavBar = observer( () => {
    const {user} =  useContext(Context);
    const navigate = useNavigate();
    const [confirmingVisible, setConfirmingVisible] = useState(false);

    const logOut = () => {
      user?.setUser({})
      user?.setIsAuth(false);
      localStorage.clear();
      setConfirmingVisible(false);
      navigate(LOGIN_ROUTE);
    }

    return(
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <NavLink style={{color: 'white'}} to={SHOP_ROUTE}><h1>GregShop</h1></NavLink>
            {!user?.isAuth &&
                <Nav className="ml-auto">
                <Button onClick={()=> {
                  navigate(LOGIN_ROUTE);
                }}  variant={"outline-light"}>Войти</Button>
                </Nav>
            }
            {user?.isAuth &&
                <Nav className="ml-auto" style={{gap: 4}}>
                  {user?.user.role === 'ADMIN' && 
                    <Button onClick={()=>{
                      navigate(ADMIN_ROUTE)
                      }} variant={"outline-light"}  >Админ. панель</Button>
                  }
                <Button onClick={()=>{
                  navigate(BASKET_ROUTE)
                  }} variant={"outline-light"}
                  
                  >Корзина</Button>
                <Button 
                  onClick={()=>setConfirmingVisible(true)} 
                  variant={"outline-light"} 
                >Выйти</Button>
                </Nav>
            }
        </Container>
      </Navbar>
      <Confirming 
        callback={()=>logOut()} 
        text={"Вы уверены, что хотите выйти?"} 
        onHide={()=>{setConfirmingVisible(false)}} 
        show={confirmingVisible}
      />
    </>
    )
})
export default NavBar;