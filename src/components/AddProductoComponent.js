import React, { useEffect, useState } from 'react';
import ProductoService from '../services/ProductoService';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const AddProductoComponent = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateProducto = (e) => {
    e.preventDefault();
    const producto = { nombre, descripcion, precio };

    if (id) {
      ProductoService.updateProducto(id, producto)
        .then(() => navigate('/productos'))
        .catch(error => console.log(error));
    } else {
      ProductoService.createProducto(producto)
        .then(() => navigate('/productos'))
        .catch(error => console.log(error));
    }
  };

  useEffect(() => {
    if (id) {
      ProductoService.getProductoById(id)
        .then((response) => {
          setNombre(response.data.nombre);
          setDescripcion(response.data.descripcion);
          setPrecio(response.data.precio);
        })
        .catch(error => console.log(error));
    }
  }, [id]);

  return (
    <div className="container" style={{ marginTop: '80px' }}>
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          <h2 className="text-center">{id ? 'Actualizar Producto' : 'Registrar Producto'}</h2>
          <div className="card-body">
            <form onSubmit={saveOrUpdateProducto}>
              <div className="form-group mb-2">
                <label className="form-label">Nombre:</label>
                <input
                  type="text"
                  placeholder="Escriba el nombre del producto"
                  className="form-control"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Descripción:</label>
                <input
                  type="text"
                  placeholder="Escriba una descripción"
                  className="form-control"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Precio:</label>
                <input
                  type="number"
                  placeholder="Escriba el precio"
                  className="form-control"
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">Guardar</button>
              <Link to="/productos" className="btn btn-secondary" style={{ marginLeft: '10px' }}>Cancelar</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductoComponent;
