import React from 'react';
import Cabezera from './Componentes/Cabezera';
import './App.css';
import Formulario from './Componentes/Formulario'; 
import ListaCitas from './Componentes/ListaCitas';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  
  state = {
    arrayCitas : []
  }

  componentDidMount(){
    const CitasLS = localStorage.getItem('citas');
    
    if(CitasLS){
      this.setState({
        arrayCitas : JSON.parse(CitasLS)
      })
    }

  }

  componentWillUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.arrayCitas))
  }

  ReciveDataCita = (dataCitaForm) => {
    //console.log("Mi nombre es "+dataCitaForm.CitaID);

    const citas = [...this.state.arrayCitas, dataCitaForm];
    //console.log(citas);

    this.setState({
      arrayCitas : citas
    });

    
  }

  borrarCita = (IdDeCita) => {
    console.log("El ID seleccionado "+IdDeCita);

    const CitasActuales = [...this.state.arrayCitas];
    console.log(CitasActuales);
    const FilerCitas = CitasActuales.filter(cita => cita.CitaID !== IdDeCita);

    console.log("despues " + FilerCitas);

    this.setState ({
      arrayCitas : FilerCitas
    });

  }

  render(){return (
    <div className="container">
        <div className="row">
            <div className="col-12">
              <Cabezera title = "Administrador de Pacientes"/> 
            </div>  
        </div>
        <div className="row">
             <div className="col"> 
                <Formulario 
                      metodoCrearCitaAppjs = {this.ReciveDataCita}
                />
            </div>
        <div className="col">    
             <ListaCitas 
                 LaListaDeCitas = {this.state.arrayCitas}
                 borrarCita = {this.borrarCita}
                
              />     
        </div>
    </div>      
    </div>           
  )}
}

export default App;
