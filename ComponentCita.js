import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class ComponentCita extends React.Component {


  EliminarEstaCita = () =>{

    this.props.BorraCita(this.props.LaCita.CitaID);
  }
 

  render() {
      const {ObjNomMascota, ObjNomCliente, ObjDatoFecha, ObjDatoHora, ObjDatoSintoma, CitaID} = this.props.LaCita;
      return (
      <div className="card mt-5">
        <p><span className="card-tex">La mascota es :</span> {ObjNomMascota}  </p>
        <p><span className="card-tex">El cliente es :</span> {ObjNomCliente}  </p>
        <p><span className="card-tex">Fecha Recibido :</span>{ObjDatoFecha}   </p>
        <p><span className="card-tex">Hora recibido  </span> {ObjDatoHora}     </p>
        <p><span className="card-tex">Los sintomas  </span> {ObjDatoSintoma}   </p>
      <p><button value={CitaID} onClick={this.EliminarEstaCita}>Eliminar </button></p>
      </div>
    )
  }
}

export default ComponentCita;
