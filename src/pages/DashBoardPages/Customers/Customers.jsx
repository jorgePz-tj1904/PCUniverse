import React, { useEffect, useState } from "react";
import { Select, Space, Table, Button, Typography, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllusers, updateUserRole } from "../../../redux/actions";

const Customers = () => {
  const [loading, setLoading] = useState(false);
  const [showRoleOptionsMap, setShowRoleOptionsMap] = useState({});
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

  const handleRoleChange = async (id, newRole) => {
    console.log(`Nuevo rol para ${getUserNameById(id)}: ${newRole}`);
    
    if (newRole === "Administrador") {
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
    }

    // Oculta las opciones de rol después de cambiarlo
    setShowRoleOptionsMap({ ...showRoleOptionsMap, [id]: false });
  };

  const getRoleName = (roleId) => {
    return roleId === 1 ? "Administrador" : "Usuario";
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
      title: "Rol",
      render: (_, record) => (
        <span>
          {getRoleName(record.role)}{" "}
          {record.role !== 1 && (
            <div>
              {showRoleOptionsMap[record.id] ? (
                <Select
                  defaultValue={record.role}
                  style={{ width: 120 }}
                  onChange={(newRole) => handleRoleChange(record.id, newRole)}
                >
                  <Select.Option value="Usuario">Usuario</Select.Option>
                  <Select.Option value="Administrador">Administrador</Select.Option>
                </Select>
              ) : (
                <>
                  {record.role}
                  <Button
                    onClick={() => setShowRoleOptionsMap({ ...showRoleOptionsMap, [record.id]: true })}
                    style={{ marginLeft: 20 }}
                  >
                    Cambiar Rol
                  </Button>
                </>
              )}
            </div>
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
