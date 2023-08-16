import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table } from "antd";
import Typography from "antd/es/typography/Typography";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue } from "../../../components/API/index";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getAllComponents } from "../../../redux/actions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  const dispatch = useDispatch()

  const components = useSelector((state) => state.allComponents)

  useEffect(() => {
    getOrders().then(res => {
      setOrders(res.total);
      setRevenue(res.discountedTotal)
    });
    dispatch(getAllComponents());
    getCustomers().then(res => {
      setCustomers(res.total);
    });

  }, [])
  

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashBoardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Pedidos"}
          value={orders}
        />
        <DashBoardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Inventario"}
          value={components.length}
        />
        <DashBoardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Clientes"}
          value={customers}
        />
        <DashBoardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "white",
                backgroundColor: "rgb(153, 0, 255)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Ingresos"}
          value={revenue}
        />
      </Space>
      <Space>
        <RecentORders />
        <DashBoardChart />
      </Space>
    </Space>
  );
};

const DashBoardCard = ({ title, value, icon }) => {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
};

const RecentORders = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text>Pedidos recientes</Typography.Text>
      <Table
        columns={[
          {
            title: "Titulo",
            dataIndex: "title",
          },
          {
            title: "Cantidad",
            dataIndex: "quantity",
          },
          {
            title: "Precio",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
};

const DashBoardChart = () => {
  const [revenuedata, setRevenuedata] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });
      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });
      const dataSource = {
        labels,
        datasets: [
          {
            label: "Ingresos",
            data: data,
            backgroundColor: "rgb(153, 0, 255)",
          },
        ],
      };

      setRevenuedata(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Ingresos por pedidos",
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 350 }}>
      <Bar options={options} data={revenuedata} />
    </Card>
  );
};
export default Dashboard;
