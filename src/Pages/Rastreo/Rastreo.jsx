import React, { useState } from "react";
import { Link } from "react-router-dom";
import Principal from "../Principal";
import axiosClient from "../../Config/axios";

export default function PaqueteriaApp() {
  const [packages, setPackages] = useState([]);
  const [newId, setNewId] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [trackingInput, setTrackingInput] = useState("");
  const [trackingResult, setTrackingResult] = useState(null);

  const addPackage = () => {
    if (!newId || !newStatus || !newLocation) {
      alert("Todos los campos son obligatorios");
      return;
    }
    const newPackage = { id: newId.toUpperCase(), status: newStatus, location: newLocation };
    setPackages([...packages, newPackage]);
    setNewId("");
    setNewStatus("");
    setNewLocation("");
  };

  const updateStatus = (index) => {
    const updated = [...packages];
    const newStatus = prompt("Nuevo estado:", updated[index].status);
    if (newStatus !== null) {
      updated[index].status = newStatus;
      setPackages(updated);
    }
  };

  const updateLocation = (index) => {
    const updated = [...packages];
    const newLocation = prompt("Nueva ubicación:", updated[index].location);
    if (newLocation !== null) {
      updated[index].location = newLocation;
      setPackages(updated);
    }
  };

  const trackPackage = () => {
    const result = packages.find(p => p.id === trackingInput.toUpperCase());
    setTrackingResult(result || null);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="dropdown-container">
          <button className="tracking-button" type="submit"><Link to='/'>Main page</Link></button>
          <button className="tracking-button" type="submit">Account</button>
        </div>
        <div className="auth-container">
          <button className="login-button" type="submit"><Link to='/Login'>Login</Link></button>
          <button className="login-button" type="submit"><Link to='/Register'>Register</Link></button>
        </div>
      </div> 
      <div style={{ fontFamily: 'Arial', padding: '30px', background: 'transparent', WebkitBackdropFilter: 'blur(30px)', backdropFilter: 'blur(30px)' }}>
      <div style={{ maxWidth: '400px', margin: 'auto', background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 0 12px rgba(0,0,0,0.1)' }}>
        <h2>Rastrea tu paquete</h2>
        <input
          type="text"
          value={trackingInput}
          onChange={e => setTrackingInput(e.target.value)}
          placeholder="Ingresa tu número de guía"
          style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        <button onClick={trackPackage} style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '6px' }}>Rastrear</button>
        <p style={{ padding: '30px'  ,marginBottom: '0px'}}>No tienes cuenta? <Link to='/Register'>Regitrate</Link></p>
        {trackingResult && (
          <div style={{ marginTop: '20px', padding: '15px', background: '#e9ecef', borderRadius: '6px' }}>
            <strong>Estado:</strong> {trackingResult.status}<br />
            <strong>Ubicación:</strong> {trackingResult.location}
          </div>
        )}
        {trackingResult === null && trackingInput && (
          <div style={{ marginTop: '20px', padding: '15px', background: '#e9ecef', borderRadius: '6px' }}>
            No se encontró información para ese número de guía.
          </div>
        )}
      </div>

      <div style={{ maxWidth: '900px', margin: '40px auto', background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>Panel de Empresa - Gestión de Paquetes</h1>

        <div style={{ marginBottom: '30px' }}>
          <h2>Agregar Nuevo Paquete</h2>
          <input type="text" value={newId} onChange={e => setNewId(e.target.value)} placeholder="ID de seguimiento" style={inputStyle} />
          <input type="text" value={newStatus} onChange={e => setNewStatus(e.target.value)} placeholder="Estado (Ej: En camino)" style={inputStyle} />
          <input type="text" value={newLocation} onChange={e => setNewLocation(e.target.value)} placeholder="Ubicación (Ej: Ciudad)" style={inputStyle} />
          <button onClick={addPackage} style={buttonStyle}>Agregar</button>
        </div>

        <h2>Lista de Paquetes</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Estado</th>
              <th>Ubicación</th>
              <th>Actualizar Estado</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg, index) => (
              <tr key={index}>
                <td>{pkg.id}</td>
                <td>{pkg.status}</td>
                <td>{pkg.location}</td>
                <td><button onClick={() => updateStatus(index)} style={buttonStyle}>Actualizar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </nav>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc'
};

const buttonStyle = {
  padding: '8px 16px',
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  marginBottom: '10px'
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
  border: '1px solid #ddd'
};
