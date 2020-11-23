import React from 'react';
import { getRequest } from '../api/requests';
import 'react-skeleton-css/styles/skeleton.2.0.4.css'
import Table from './Table'
import ReactDOM from 'react-dom';

class SearchForm extends React.Component {
    
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
      
      const formBody = Object.keys(this.state).filter(key => this.state[key]).map(key =>          
            encodeURIComponent(key) + '=' + encodeURIComponent(this.state[key])).join('&');
      
      getRequest(formBody)
            .then(data => ReactDOM.render(<Table params = {data}/>,document.getElementById("forTable")))
            
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
          <form className = "container" onSubmit={this.handleSubmit}>          
            <label>Название</label>           
            <input className="u-full-width" type="text" name= "name" value={this.state.name} onChange={this.handleChange} />
          
            <div className = "row">   
              <div className="two columns">
                <label>Память, Gb</label>           
                <input className="u-full-width" type="number" name= "memory" value={this.state.memory} onChange={this.handleChange} />
                
              </div>        
              <div className="two columns">
                <label>Процессор</label>           
                <input className="u-full-width" type="text" name= "cpu" value={this.state.cpu} onChange={this.handleChange} />
              </div>            
  
              <div className="two columns">
                <label>RAM, Gb</label>           
                <input className="u-full-width" type="number" name= "ram" value={this.state.ram} onChange={this.handleChange} />
                
              </div>        
              <div className="two columns">
                <label>Батарея, мАч</label>           
                <input className="u-full-width" type="number" name= "battery" value={this.state.battery} onChange={this.handleChange} />
              </div>            
    
              <div className="two columns">
                <label>Экран</label>           
                <input className="u-full-width" type="text" name= "screen" value={this.state.screen} onChange={this.handleChange} />
                
              </div>        
              <div className="two columns">
                <label>Камера, Мп</label>           
                <input className="u-full-width" type="number" name= "camera" value={this.state.camera} onChange={this.handleChange} />
              </div>            
            </div>
          
            <input className="button-primary" type="submit" value="Найти" />
          </form>
          <div id="forTable"></div>
        </div>
      );
    }
   
  }
  export default SearchForm