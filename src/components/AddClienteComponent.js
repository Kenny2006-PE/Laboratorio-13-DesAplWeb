import React, { useEffect, useState } from 'react';
import ClienteService from '../services/ClienteService';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const AddClienteComponent = () => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateCliente = (e) => {
    e.preventDefault();
    const cliente = { nombre, apellidos, email };

    if (id) {
      ClienteService.updateCliente(id, cliente)
        .then(() => navigate('/clientes'))
        .catch(error => console.log(error));
    } else {
      ClienteService.createCliente(cliente)
        .then(() => navigate('/clientes'))
        .catch(error => console.log(error));
    }
  };

  useEffect(() => {
    if (id) {
      ClienteService.getClienteById(id)
        .then((response) => {
          setNombre(response.data.nombre);
          setApellidos(response.data.apellidos);
          setEmail(response.data.email);
        })
        .catch(error => console.log(error));
    }
  }, [id]);

  return (
    <div className="container" style={{ marginTop: '80px' }}>
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          <h2 className="text-center">{id ? 'Actualizar Cliente' : 'Registrar Cliente'}</h2>
          <div className="card-body">
            <form onSubmit={saveOrUpdateCliente}>
              <div className="form-group mb-2">
                <label className="form-label">Nombre:</label>
                <input
                  type="text"
                  placeholder="Escriba su nombre"
                  className="form-control"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Apellidos:</label>
                <input
                  type="text"
                  placeholder="Escriba sus apellidos"
                  className="form-control"
                  value={apellidos}
                  onChange={(e) => setApellidos(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  placeholder="Escriba su email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">Guardar</button>
              <Link to="/clientes" className="btn btn-secondary" style={{ marginLeft: '10px' }}>Cancelar</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClienteComponent;
