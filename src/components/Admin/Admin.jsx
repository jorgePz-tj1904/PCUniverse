import AppHeader from './AppHeader'
import SideMenu from './SideMenu'
import PageContent from './PageContent'
import "./Admin.css"

const Admin = () => {
  return (
    <div className="App">
        <AppHeader/>
            <div className='SideMenuAndPageContent'>
                <SideMenu></SideMenu>
                <PageContent></PageContent>
            </div>
    </div>
  )
}

export default Admin