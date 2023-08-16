import logo from "../../assets/logo.png";
import { Badge, Drawer, Image, List, Space, Typography, notification } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import "./Admin.css";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../API";
const AppHeader = () => {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);

  return (
    <div className="AppHeader">
      <Image width={40} src={logo}></Image>
      <Typography.Title>Admin Dashboard</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled style={{ fontSize: 24 }} onClick={() => {
              setNotificationsOpen(true);
            }} />
        </Badge>
      </Space>
      <Drawer
        title="Comentarios"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List dataSource={comments} renderItem={(item)=>{
          return <List.Item>{item.body}</List.Item>
        }}></List>
      </Drawer>
      <Drawer
        title="Notificaciones"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <List dataSource={orders} renderItem={(item)=>{
          return <List.Item><Typography.Text strong>{item.title}</Typography.Text> se ha pedido!</List.Item>
        }}></List>
      </Drawer>
    </div>
  );
};

export default AppHeader;
