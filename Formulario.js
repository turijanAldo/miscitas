import React from 'react';
import uuid from 'uuid';

class Formulario extends React.Component {

    //refs  
   
    nombreMascota = React.createRef(); 
    nombreCliente = React.createRef();
    DatoFecha =     React.createRef();
    DatoHora  =     React.createRef();
    DatoSintomas = React.createRef();    

    state = {
      ObjectData : []
    }

    AddCita = (e) => {
      e.preventDefault();

      const ObjNomMascota   = this.nombreMascota.current.value,
            ObjNomCliente   = this.nombreCliente.current.value,
            ObjDatoFecha    = this.DatoFecha.current.value,
            ObjDatoHora     = this.DatoHora.current.value,
            ObjDatoSintoma  = this.DatoSintomas.current.value;


      const ObjectData = {

        ObjNomMascota ,
        ObjNomCliente , 
        ObjDatoFecha  ,
        ObjDatoHora   ,
        ObjDatoSintoma,
        CitaID : uuid()
      }

      this.props.metodoCrearCitaAppjs(ObjectData);
    }
 
  render(){return (
    <div className="card mt-5">
      <h2 className="card-title text-center mb-5">Agregar las citas aqui</h2>
      <form onSubmit={this.AddCita}>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Nombre de Mascota</label>
            <div className="col-sm-6">
              <input ref = {this.nombreMascota} type="text" readOnly={false} className="form-control-plaintext" />
            </div>
          </div>
          
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Nombre del Cliente</label>
            <div className="col-sm-6">
              <input ref={this.nombreCliente} readOnly={false} className="form-control-plaintext"  />
            </div>
          </div>
          
          <div className="form-group row">
            <label  className="col-sm-2 col-form-label">Fecha</label>
            <div className="col-sm-4">
              <input ref={this.DatoFecha} type="date" readOnly={false} className="form-control-plaintext" />
            </div>
            <label  className="col-sm-2 col-form-label">Hora</label>
            <div className="col-sm-4">
              <input ref={this.DatoHora} type="time" className="form-control" />
            </div>
           </div>
          <div className="form-group row">
              <label className="col-sm-2 col-form-label" >Sintomas</label>
              <textarea ref={this.DatoSintomas} className="col-sm-8 id" rows="3"></textarea>
          </div>

          <input type ="submit" value="Agregar Cita"/>
       </form>
    </div>
  )}

}

export default Formulario;
