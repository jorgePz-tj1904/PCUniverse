import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Rate, Space, Table, Typography } from "antd";
import { getAllComponents } from "../../../redux/actions";

const Inventory = () => {
  const dispatch = useDispatch();
  const allComponents = useSelector((state) => state.allComponents);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllComponents());
    // Simulate loading delay for demonstration purposes
    setTimeout(() => {
      setLoading(false);
    }); // You can adjust the delay time here
  }, [dispatch]);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventario</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Imagen",
            dataIndex: "img",
            render: (link) => <Avatar src={link} />,
          },
          {
            title: "Modelo",
            dataIndex: "modelo",
          },
          {
            title: "Precio",
            dataIndex: "precio",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Clasificación",
            dataIndex: "rating",
            render: (rating) => <Rate value={rating} allowHalf disabled />,
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },
          {
            title: "Categoria",
            dataIndex: "categoria",
          },
        ]}
        dataSource={allComponents}
        pagination={{
          pageSize: 5,
        }}
      />
    </Space>
  );
};

export default Inventory;
