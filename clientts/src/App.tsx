import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from 'mobx-react-lite';
import { useContext, useEffect, useState } from "react";
import {Context} from "./index"
import { check } from "./http/userAPI";
import { getAllUsers } from "./http/userAPI";
import Loading from "./components/Loading";

const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    if(localStorage.getItem('token')){
      check().then(data => {
        if(data){
          user?.setUser(data);
          user?.setIsAuth(true);
        }
      }).finally(()=> {
        setLoading(false);
      });
    } else setLoading(false)
    getAllUsers().then(data=>user?.setUsers(data));
  },[])




  if(loading) {
    return(
      <Loading/>
    )
  }

  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
})

export default App;
