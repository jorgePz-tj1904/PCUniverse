import Typography from "antd/es/typography/Typography";
import { useEffect, useState } from "react";
import { getOrders} from "../../../components/API";
import { Avatar, Rate, Space, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../../redux/actions";

const Orders = () => {
  const [loading, setLoading] = useState(false);
  const allOrders = useSelector((state) => state.allOrders);
  const dispatch = useDispatch();
  
  useEffect(() => {
    setLoading(true)
    dispatch(getAllOrders())
      setLoading(false);
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Pedidos</Typography.Title>
      
      <Table
      
      loading={loading}
        columns={[
          {
            title: "Productos",
             dataIndex: "products",
            },
            {
              title: "Precio",
              dataIndex: "amount",
              render: (value) => <span>${value}</span>,
          },
          {
            title: "Clientes",
            dataIndex: "userId"
          }
        ]}
        dataSource={allOrders}
        pagination={{
            pageSize: 5,
        }}
        
      ></Table>
    </Space>
  );
};

export default Orders;
