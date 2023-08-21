import React, { useEffect, useState } from "react";
import { Space, Table, Button, Typography, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllusers, updateUserRole } from "../../../redux/actions";

const Customers = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);

  useEffect(() => {
    setLoading(true);
    dispatch(getAllusers());
    setLoading(false);
  }, [dispatch]);

  const getUserNameById = (id) => {
    const user = allUsers.find((user) => user.id === id);
    return user ? user.name : "";
  };

  const handleRoleChange = async (id) => {
    console.log(`Cambiando a Administrador para ${getUserNameById(id)}`);
    
    try {
      // Cambiar el rol a "Administrador" (rolId: 1) en el backend
      await dispatch(updateUserRole(id, 1));
      console.log("Rol cambiado a Administrador exitosamente.");

      // Mostrar una notificación de éxito
      notification.success({
        message: "Cambio de Rol Exitoso",
        description: `El rol de ${getUserNameById(id)} se cambió a Administrador exitosamente.`,
      });

    } catch (error) {
      console.error("Error cambiando el rol:", error);
    }
  };

  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
    },
    {
      title: "Apellido",
      dataIndex: "last_name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Ciudad",
      dataIndex: "city",
    },
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Rol",
      render: (_, record) => (
        <span>
          {record.role !== 1 && (
            <>
              <Button
                onClick={() => handleRoleChange(record.id)}
              >
                Cambiar a Administrador
              </Button>
            </>
          )} 
        </span>
      ),
    },
  ];

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Clientes</Typography.Title>
      <Table
        loading={loading}
        columns={columns}
        dataSource={allUsers}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
};

export default Customers;
