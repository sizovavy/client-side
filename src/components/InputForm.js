import React from 'react';
import { postRequest } from '../api/requests';
import 'react-skeleton-css/styles/skeleton.2.0.4.css'

class InputForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        id: undefined,
        name: undefined,       
        cpu: undefined,
        memory: undefined,
        ram: undefined,
        screen: undefined,
        battery: undefined,
        camera: undefined 
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    handleSubmit(event) {
          
      const formBody = Object.keys(this.state).map(key =>      
          encodeURIComponent(key) + '=' + encodeURIComponent(this.state[key])).join('&');

      // fetch('http://localhost:8000/phones/', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      //   },
      //   body: formBody
      // }).then(response=> {if(response.status===200) alert("Запись прошла успешно")},
      //         error=>{console.log(error); alert("При записи произошла ошибка")});

      postRequest(formBody)
              
      event.preventDefault();
    }
  
    render() {
      return (
        <form className = "container" onSubmit={this.handleSubmit}>
          <h1>Добавьте новый товар:</h1>
              
          <div className = "row">   
            <div className="six columns">
              <label>Артикул(ID)</label>           
            <input className="u-full-width" type="text" name= "id" value={this.state.id} onChange={this.handleChange} />
            </div>        
            <div className="six columns">
              <label>Название</label>           
              <input className="u-full-width" type="text" name= "name" value={this.state.name} onChange={this.handleChange} />
            </div>            
          </div>

          <div className = "row">   
            <div className="six columns">
              <label>Память, Gb</label>           
              <input className="u-full-width" type="number" name= "memory" value={this.state.memory} onChange={this.handleChange} />
              
            </div>        
            <div className="six columns">
              <label>Процессор</label>           
              <input className="u-full-width" type="text" name= "cpu" value={this.state.cpu} onChange={this.handleChange} />
            </div>            
          </div>

          <div className = "row">   
            <div className="six columns">
              <label>Оперативная память, Gb</label>           
              <input className="u-full-width" type="number" name= "ram" value={this.state.ram} onChange={this.handleChange} />
              
            </div>        
            <div className="six columns">
              <label>Батарея, мАч</label>           
              <input className="u-full-width" type="number" name= "battery" value={this.state.battery} onChange={this.handleChange} />
            </div>            
          </div>

          <div className = "row">   
            <div className="six columns">
              <label>Экран</label>           
              <input className="u-full-width" type="text" name= "screen" value={this.state.screen} onChange={this.handleChange} />
              
            </div>        
            <div className="six columns">
              <label>Камера, Мп</label>           
              <input className="u-full-width" type="number" name= "camera" value={this.state.camera} onChange={this.handleChange} />
            </div>            
          </div>
         
          <input className="button-primary" type="submit" value="Отправить" />
        </form>
      );
    }
  }



  export default InputForm