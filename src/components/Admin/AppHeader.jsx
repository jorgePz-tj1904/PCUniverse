import React, { useState, useEffect } from "react";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllComments } from "../../redux/actions";
import logo from "../../assets/logo.png";
import "./Admin.css";
import { getOrders } from "../API";

const AppHeader = () => {
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const allComments = useSelector((state) => state.allComments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllComments());
    getOrders()
      .then((res) => {
        setOrders(res.products);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
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
        <Badge count={orders.length}>
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
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text>{" "}
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
