import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Rate, Space, Table, Typography, Input, Button, message } from "antd";
import { getAllComponents, updatePrice, updateStock } from "../../../redux/actions";

const Inventory = () => {
  const dispatch = useDispatch();
  const allComponents = useSelector((state) => state.allComponents);
  const [loading, setLoading] = useState(true);
  const [localPrices, setLocalPrices] = useState({});
  const [localStock, setLocalStock] = useState({});

  useEffect(() => {
    dispatch(getAllComponents());
    // Simulate loading delay for demonstration purposes
  }, [dispatch]);

  const handlePriceEdit = async (id, newPrice) => {
    try {
      await dispatch(updatePrice(id, newPrice));
      message.success("Precio actualizado exitosamente");
      console.log(`Precio actualizado para el ID ${id} a ${newPrice}`);
    } catch (error) {
      message.error("Error al actualizar el precio");
    }
  };

  const handleStockEdit = async (id, newStock) => {
    try {
      await dispatch(updateStock(id, newStock));
      message.success("Stock actualizado exitosamente");
      console.log(`Stock actualizado para el ID ${id} a ${newStock}`);
    } catch (error) {
      message.error("Error al actualizar el Stock");
    }
  };

  const columns = [
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
      render: (value, record) => (
        <span>
          <Input
            type="number"
            value={localPrices[record.id] !== undefined ? localPrices[record.id] : value}
            onChange={(e) => {
              const newValue = parseFloat(e.target.value);
              setLocalPrices((prevPrices) => ({
                ...prevPrices,
                [record.id]: newValue,
              }));
            }}
          />
          <Button
            onClick={async () => {
              const newValue = parseFloat(localPrices[record.id]) || value;
              await handlePriceEdit(record.id, newValue);
            }}
          >
            Guardar
          </Button>
        </span>
      ),
    },
    {
      title: "Clasificación",
      dataIndex: "rating",
      render: (rating) => <Rate value={rating} allowHalf disabled />,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      render: (value, record) => (
        <span>
          <Input
            type="number"
            value={localStock[record.id] !== undefined ? localStock[record.id] : value}
            onChange={(e) => {
              const newValueStock = parseFloat(e.target.value);
              setLocalStock((prevStock) => ({
                ...prevStock,
                [record.id]: newValueStock,
              }));
            }}
          />
          <Button
            onClick={async () => {
              const newValueStock = parseFloat(localStock[record.id]) || value;
              await handleStockEdit(record.id, newValueStock);
            }}
          >
            Guardar
          </Button>
        </span>
      ),
    },
    {
      title: "Categoria",
      dataIndex: "categoria",
    },
  ];

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventario</Typography.Title>
      <Table
        
        columns={columns}
        dataSource={allComponents}
        pagination={{
          pageSize: 5,
        }}
      />
    </Space>
  );
};

export default Inventory;
