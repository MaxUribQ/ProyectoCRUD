import React, { useState, useEffect } from 'react';
import Agregar from './Agregar';
import Editar from './Editar';
import Busqueda from './Busqueda';
import axios from 'axios';
import '../styles/Usuarios.css';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [usuarioEditar, setUsuarioEditar] = useState(null);
  const [mostrarEditar, setMostrarEditar] = useState(false);
  const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);

  const cargarUsuarios = async () => {
    const res = await axios.get('http://localhost:3001/usuarios');
    setUsuarios(res.data);
    setUsuariosFiltrados(res.data);
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const agregarUsuario = async (usuario) => {
    await axios.post('http://localhost:3001/usuarios', usuario);
    cargarUsuarios();
  };

  const actualizarUsuario = async (id, usuarioActualizado) => {
    await axios.put(`http://localhost:3001/usuarios/${id}`, usuarioActualizado);
    cargarUsuarios();
  };

  const buscarUsuarios = (criterio) => {
    const filtro = criterio.toLowerCase();

    const resultado = usuarios.filter((u) =>
      u.id.toString().includes(filtro) ||
      u.nombre.toLowerCase().includes(filtro) ||
      u.apellido.toLowerCase().includes(filtro) ||
      u.correo.toLowerCase().includes(filtro)
    );

    setUsuariosFiltrados(resultado);
  };

  return (
    <div className="contenedor">
      <h2 className="titulo">Gestión de Usuarios</h2>
      <button className="btn-agregar" onClick={() => setMostrarFormulario(true)}>
        Agregar
      </button>

      {mostrarFormulario && (
        <Agregar cerrar={() => setMostrarFormulario(false)} guardar={agregarUsuario} />
      )}

      {mostrarEditar && usuarioEditar && (
        <Editar
          usuario={usuarioEditar}
          cerrar={() => {
            setUsuarioEditar(null);
            setMostrarEditar(false);
          }}
          actualizar={actualizarUsuario}
        />
      )}

      <Busqueda onBuscar={buscarUsuarios} />

      <table className="tabla-usuarios">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Sexo</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellido}</td>
              <td>{usuario.sexo}</td>
              <td>{usuario.telefono}</td>
              <td>{usuario.correo}</td>
              <td>
                <button onClick={() => {
                  setUsuarioEditar(usuario);
                  setMostrarEditar(true);
                }}>✏️</button>
                <button onClick={async () => {
                  await axios.delete(`http://localhost:3001/usuarios/${usuario.id}`);
                  cargarUsuarios();
                }}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
