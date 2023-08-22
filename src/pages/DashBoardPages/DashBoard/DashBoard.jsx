import React, { useEffect, useState } from "react";
import { Row, Col, Card, Space, Statistic, Typography, Table } from "antd";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getAllComponents, getAllOrders, getAllusers } from "../../../redux/actions";
import { getOrders, getRevenue } from "../../../components/API/index";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


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
  const [revenue, setRevenue] = useState(0);

  const dispatch = useDispatch();
  const components = useSelector((state) => state.allComponents);
  const allUsers = useSelector((state) => state.allUsers);
  const allOrders = useSelector((state) => state.allOrders);
  const amountTotal = useSelector((state) => state.amountTotal);
  console.log("productos", allOrders);

  useEffect(() => {
    dispatch(getAllOrders())
    dispatch(getAllComponents());
    dispatch(getAllusers());
  }, []);

    return (
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8} lg={6}>
          <DashBoardCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: "green",
                  backgroundColor: "rgba(0,255,0,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Pedidos"}
            value={allOrders.length}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <DashBoardCard
            icon={
              <ShoppingOutlined
                style={{
                  color: "blue",
                  backgroundColor: "rgba(0,0,255,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Inventario"}
            value={components.length}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <DashBoardCard
            icon={
              <UserOutlined
                style={{
                  color: "purple",
                  backgroundColor: "rgba(0,255,255,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Clientes"}
            value={allUsers.length}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
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
            value={amountTotal}
          />
        </Col>
        <Col xs={24} md={12}>
          <RecentOrders />
        </Col>
        <Col xs={24} md={12}>
          <div style={{ width: "100%", height: 350 }}>
            <DashBoardChart />
          </div>
        </Col>
      </Row>
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

const RecentOrders = () => {
  const [loading, setLoading] = useState(false);
  const allOrders = useSelector((state) => state.allOrders)
  const dispatch = useDispatch()


  useEffect(() => {
    setLoading(true);
    dispatch(getAllOrders())
      setLoading(false);
  }, []);

  return (
    <div>
      <Typography.Text>Pedidos recientes</Typography.Text>
      <Table
        columns={[
          {
            title: "Titulo",
            dataIndex: "products",
            render: (products => products.join(" - "))
          },
          {
            title: "Precio",
            dataIndex: "amount",
          },
          {
            title: "Cliente",
            dataIndex: "userId"
          }
        ]}
        loading={loading}
        dataSource={allOrders}
        pagination={false}
      ></Table>
    </div>
  );
};

const DashBoardChart = () => {
  const [revenuedata, setRevenuedata] = useState({
    labels: [],
    datasets: [],
  });

  const allOrders = useSelector((state) => state.allOrders);

  useEffect(() => {
    const labels = allOrders.map((order) => {
      return `User-${order.userId}`;
    });
    const data = allOrders.map((order) => {
      return order.amount;
    });

    const dataSource = {
      labels,
      datasets: [
        {
          label: 'Ingresos',
          data,
          backgroundColor: 'rgb(153, 0, 255)',
        },
      ],
    };

    setRevenuedata(dataSource);
  }, [allOrders]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
    <Card style={{ width: "100%", height: 500 }}>
      <Bar options={options} data={revenuedata} />
    </Card>
  );
};

export default Dashboard;
