// frontend/src/components/Agregar.jsx
import React, { useState } from 'react';
import '../styles/Agregar.css';

export default function Agregar({ cerrar, guardar }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [sexo, setSexo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoUsuario = { nombre, apellido, sexo, telefono, correo };
    await guardar(nuevoUsuario);  //aqui se envia al backend
    cerrar(); //cierra la interfaz
  };

  return (
    <div className="modal">
      <div className="modal-contenido">
        <h3>Agregar Usuario</h3>
        <form onSubmit={handleSubmit}>
          <div className="campoNombre">
            <label>Nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="campoApellido">
            <label>Apellido:</label>
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
            />
          </div>

          <div className="campoSexo">
            <label>Sexo:</label>
            <select
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
              required
            >
              <option value="">Genero</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
          </div>

          <div className="campoTelefono">
            <label>Teléfono:</label>
            <input
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>

          <div className="campoCorreo">
            <label>Correo:</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          <div className="botones">
            <button type="submit">Guardar</button>
            <button type="button" onClick={cerrar}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
