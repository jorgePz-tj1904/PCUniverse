import React, { useState, useEffect } from "react";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllComments, getAllOrders } from "../../redux/actions";
import logo from "../../assets/logo.png";
import "./Admin.css";
import { getOrders } from "../API";

const AppHeader = () => {
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const allComments = useSelector((state) => state.allComments);
  const allOrders = useSelector((state) => state.allOrders)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
    const ordersInterval = setInterval(() => {
      dispatch(getAllOrders());
    }, 30000);

    return () => {
      clearInterval(ordersInterval);
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllComments());
    const commentsInterval = setInterval(() => {
      dispatch(getAllComments());
    }, 30000);

    return () => {
      clearInterval(commentsInterval);
    };
  }, [dispatch]);


  return (
    <div className="AppHeader">
      <Image width={40} src={logo} />
      <Typography.Title>Admin Dashboard</Typography.Title>
      <Space>
        <Badge count={allComments.comment?.comentarios} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={allOrders ? allOrders.length : 0}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
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
        <List
          dataSource={allComments.comment}
          renderItem={(item) => {
            return <List.Item>{item.comentarios}</List.Item>;
          }}
        />
      </Drawer>
      <Drawer
        title="Notificaciones"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={allOrders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.products.join(" - ")}</Typography.Text>{" "}
                se ha pedido!
              </List.Item>
            );
          }}
        />
      </Drawer>
    </div>
  );
};

export default AppHeader;
