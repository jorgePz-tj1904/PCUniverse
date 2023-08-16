import { Menu } from "antd"
import "./Admin.css"
import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
const SideMenu = () => {

  const location = useLocation()
  const [selectedKeys, setSelectedKeys] = useState('/admin')


useEffect(() => {
  const pathName = location.pathname
  setSelectedKeys(pathName)
}, [location.pathname])


  const navigate = useNavigate()
    return (
      <div className="SideMenu">
          <Menu 
          className="SideMenVertical"
          mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
          items = {[
            {
            label: "Dashbord",
            icon:<AppstoreOutlined/>,
            key: "/admin"
          },
          {
            label: "Inventario",
            key: "/admin/inventory",
            icon: <ShopOutlined/>,
          },
          {
            label: "Ordenes",
            key: "/admin/orders",
            icon: <ShoppingCartOutlined/>,
          },
          {
            label: "Clientes",
            key: "/admin/customers",
            icon: <UserOutlined/>
          },
          ]}>

          </Menu>
      </div>
    )
  }
  
  export default SideMenu