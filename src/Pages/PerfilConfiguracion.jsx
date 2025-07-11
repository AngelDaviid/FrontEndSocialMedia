import React, { useState } from 'react';

function PerfilConfiguracion  () {
  const [profile, setProfile] = useState({
    name: '',
    bio: '',
    location: '',
    website: '',
    twitter: '',
    avatar: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleFileChange = (e) => {
    setProfile({ ...profile, avatar: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría el envío a la API o lógica de guardado
    console.log('Perfil guardado:', profile);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h3>Configuración de perfil</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={profile.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Biografía</label>
          <textarea
            className="form-control"
            name="bio"
            rows="3"
            value={profile.bio}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Ubicación</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={profile.location}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Sitio web</label>
          <input
            type="url"
            className="form-control"
            name="website"
            value={profile.website}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Twitter</label>
          <input
            type="text"
            className="form-control"
            name="twitter"
            placeholder="@usuario"
            value={profile.twitter}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Foto de perfil</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Guardar cambios
        </button>
      </form>
    </div>
  );
};

export default PerfilConfiguracion;
