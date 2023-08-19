import AppHeader from './AppHeader'
import SideMenu from './SideMenu'
import PageContent from './PageContent'
import "./Admin.css"
import { useEffect, useState } from 'react'

const Admin = () => {
  const [access, setAccess]=useState(false);

  const handleAccess=async()=>{
    const usuarioJSON = localStorage.getItem('usuario');
    const usuario = await JSON.parse(usuarioJSON);
    if(usuario.email==='somospixis123@gmail.com'){
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
            </div></>:<><h1>QUE HACES ACAAAA???</h1> <img width={400} src="https://i.ibb.co/X8pgt14/imagen-2023-08-18-182407073.png" alt="imagen-2023-08-18-182407073" border="0"/></>}
    </div>
  )
}

export default Admin