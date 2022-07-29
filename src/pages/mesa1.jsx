import React, {Component} from "react";
import axios from "axios";

export default class Mesa1 extends Component {

    state = {
        registros: [],
        form:{
            "garzon":"",
            "subtotal":"",
            "pago":"",
        },
        error:false,
        errorMsg:""
    }

    async componentDidMount(){
       this.getRegistro();
    }

    getRegistro = async () =>{
        const res = await axios.get('http://127.0.0.1:8000/mesa1');
        this.setState ({registros: res.data})
    }

   manejadorChange = async e =>{
    await this.setState({
        form:{
           ...this.state.form,
           [e.target.name]: e.target.value 
        }
    })
   }

   manejadorBoton=()=>{
    let url = 'http://127.0.0.1:8000/mesa1';
    axios.post(url,this.state.form)
    .then (response => {
        console.log(response);
    })
   }

   deleteRegistro = async (id) =>{
    await axios.delete ('http://127.0.0.1:8000/mesa1/' + id)
    this.getRegistro();
   }

    render(){
        return(
            <div >
                <div >
                    <h3>Nueva mesa</h3>
                    <form>
                        <div>nombre</div>
                        <input  name="garzon" onChange={this.manejadorChange} />
                        <div> subtotal </div>
                        <input  name="subtotal" onChange={this.manejadorChange} />
                        <div>pedido</div>
                        <input></input>
                        <div> pago </div>
                        <input  name="pago" onChange={this.manejadorChange} />
                        <button type="submit" onClick={this.manejadorBoton}> Enviar </button>
                    </form>
                </div>
                <div >
                        {this.state.registros.map(registro =>
                        <ul key={registro.ID}>
                            <li>Garzon: {registro.garzon}</li>
                            <li>{registro.fecha}</li>
                            <li>subtotal: {registro.subtotal}</li>
                            <li >propina: {registro.propina = ((registro.subtotal * 10)/100)}</li>
                            <li> total: {registro.total = registro.propina + registro.subtotal}</li>
                            <button type="submit" onClick={() => this.deleteRegistro(registro.ID)}>Borrar</button>
                        </ul>
                        )}
                    
                </div>
            </div>
        )
    }
}