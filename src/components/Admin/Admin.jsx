import AppHeader from './AppHeader'
import SideMenu from './SideMenu'
import PageContent from './PageContent'
import prohibido from '../../images/prohibido.png'
import "./Admin.css"
import { useEffect, useState, } from 'react'
import { useDispatch, useSelector } from "react-redux";

const Admin = () => {
  const [access, setAccess]=useState(false);
  const emailAdmins = useSelector((state)=> state.emailAdmins);
  const dispatch = useDispatch();

  const handleAccess=async()=>{
    const usuarioJSON = localStorage.getItem('usuario');
    const usuario = await JSON.parse(usuarioJSON);
    if(emailAdmins.includes(usuario.email)){
      setAccess(true);
    }
  }

  useEffect(()=>{
    handleAccess();
  },[]);

  return (
    <div className="App">
        {access?<><AppHeader/>
            <div className='SideMenuAndPageContent'>
                <SideMenu></SideMenu>
                <PageContent></PageContent>
            </div></>:<><h1>PROHIBIDO INGRESAR SIN SER ADMIN</h1> <img src={prohibido} alt="prohibido" /></>}
    </div>
  )
}

export default Admin