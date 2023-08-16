import Typography from "antd/es/typography/Typography";
import { useEffect, useState } from "react";
import { getOrders} from "../../../components/API";
import { Avatar, Rate, Space, Table } from "antd";

const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true)
    getOrders().then(res => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Pedidos</Typography.Title>
      <Table
      loading={loading}
        columns={[
          {
            title: "Productos",
             dataIndex: "title",
            },
            {
              title: "Precio",
              dataIndex: "price",
              render: (value) => <span>${value}</span>,
          },
          {
            title: "Precio con descuento",
            dataIndex: "discountedPrice",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Cantidad",
            dataIndex: "quantity",
          },
          {
            title: "Total",
            dataIndex: "total",
          },
        ]}
        dataSource={dataSource}
        pagination={{
            pageSize: 5,
        }}
      ></Table>
    </Space>
  );
};

export default Orders;
