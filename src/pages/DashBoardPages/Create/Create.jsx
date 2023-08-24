import React, { useState } from "react";
import { Space, Table, Typography, Input, Button, Form, Upload, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Create = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null)
  const dispatch = useDispatch();
  const allComponents = useSelector((state) => state.allComponents);

  const [newComponent, setNewComponent] = useState({
    modelo: "",
    especificaciones: "",
    precio: 0,
    stock: 0,
    categoria: "",
    cantidad: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewComponent((prevComponent) => ({
      ...prevComponent,
      [name]: value,
    }));
  };

  const handleFile = (e) => {
    setFile(e.file) 
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Datos a enviar al servidor:", newComponent);
  
    const form = new FormData();
    
    // Convierte los campos a formato JSON usando JSON.stringify
    form.append("modelo", JSON.stringify(newComponent.modelo));
    form.append("especificaciones", JSON.stringify(newComponent.especificaciones));
    form.append("precio", newComponent.precio);
    form.append("stock", newComponent.stock);
    form.append("img", file);
    form.append("categoria", JSON.stringify(newComponent.categoria));
    form.append("cantidad", newComponent.cantidad);
  
    setLoading(true);
    try {
      const response = await axios.post("https://pc-universe.vercel.app/newcomponente", form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("Respuesta del servidor:", response.data);
      setLoading(false);
      setNewComponent({
        modelo: "",
        especificaciones: "",
        precio: 0,
        stock: 0,
        categoria: "",
        cantidad: 0,
      });
      message.success("Componente creado exitosamente.");
    } catch (error) {
      setLoading(false);
      console.error("Error al crear un componente", error);
      console.error("Detalles del error:", error.response.data);
      message.error("Error al crear el componente. Por favor, intenta de nuevo.");
    }
  };

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Subir Componente</Typography.Title>

      <Form onSubmit={handleSubmit}>
        <Form.Item label="Modelo">
          <Input
            name="modelo"
            value={newComponent.modelo}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Especificaciones">
          <Input
            name="especificaciones"
            value={newComponent.especificaciones}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Precio">
          <Input
            name="precio"
            type="number"
            value={newComponent.precio}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Stock">
          <Input
            name="stock"
            type="number"
            value={newComponent.stock}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="img">
          <Upload
            type="file"
            name="img"
            onChange={handleFile}
            showUploadList={false}
            beforeUpload={() => false}
          >
            <Button>Seleccionar Imagen</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Categoria">
          <Input
            name="categoria"
            value={newComponent.categoria}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Cantidad">
          <Input
            name="cantidad"
            type="number"
            value={newComponent.cantidad}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Crear Componente
          </Button>
        </Form.Item>
      </Form>

    </Space>
  );
};

export default Create;
