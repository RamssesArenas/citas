import React,{Fragment, useState} from 'react';

const Formulario = () => {

  //Crear state de Citas
  const [cita, actualizarCita] = useState({ 
    mascota:'',
    propietario:'',
    fecha:'',
    hora:'',
    sintomas:''
  });
  //Funcion que se ejecuta cada quel usuario escribe en un input
  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]:e.target.value
    })
  }
  //Extraer Valores
  const {mascota,propietario,fecha,hora,sintomas} = cita;

  //Cunado el usuario preciona agregar cita
  const submitCita = e => {
    e.preventDefault();
    //Validar citas
    
    //Asignar un ID
    
    //Crear una cita
    
    //Reiniciar Form
  }

  return (
    <Fragment>
      <h2>Crear Citas</h2>
      <form
        onSubmit={submitCita}
      >
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del dueño de la mascota"
          onChange={actualizarState}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Síntomas</label>
        <textarea
          type="submit"
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button
          type="submit"
          className="u-full-width button-primary" 
        >Agregar Cita</button>
      </form>
    </Fragment>
  );
}

export default Formulario; 
