import React from 'react';
import ComponentCita from './ComponentCita';
import 'bootstrap/dist/css/bootstrap.min.css';
class ListaCitas extends React.Component {
  
  
  render(){
 

    const NumCitas = this.props.LaListaDeCitas;

    const mensaje = Object.keys(NumCitas).length === 0 ? "No hay Citas" : "Administra Citas";
    console.log(Object.keys(NumCitas).length);
    return (
    <div className="card mt-5">
      <h2>Lista de citas</h2>
      <h2>{mensaje}</h2>
        <div>      
         { //esto es js
         Object.keys(this.props.LaListaDeCitas).map(cita => ( 
           <ComponentCita 
               key = {cita}
               LaCita = {this.props.LaListaDeCitas[cita]}
               BorraCita = {this.props.borrarCita} 
           />
           )
        )
        //fin de js 
        }
        </div>
    </div>
  )}
}

export default ListaCitas;
