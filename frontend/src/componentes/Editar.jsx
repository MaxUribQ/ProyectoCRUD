// frontend/src/components/Editar.jsx
import React, { useState } from 'react';
import '../styles/Editar.css';

export default function Editar({ usuario, cerrar, actualizar }) {
  const [nombre, setNombre] = useState(usuario.nombre);
  const [apellido, setApellido] = useState(usuario.apellido);
  const [sexo, setSexo] = useState(usuario.sexo);
  const [telefono, setTelefono] = useState(usuario.telefono);
  const [correo, setCorreo] = useState(usuario.correo);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usuarioActualizado = { nombre, apellido, sexo, telefono, correo };
    await actualizar(usuario.id, usuarioActualizado);
    cerrar();
  };

  return (
    <div className="modal">
      <div className="modal-contenido">
        <h3>Editar Usuario</h3>
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
            <button type="submit">Guardar Cambios</button>
            <button type="button" onClick={cerrar}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
