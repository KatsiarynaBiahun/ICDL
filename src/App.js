import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Luo from './components/luo.component';
import Muokkaa from './components/muokkaa.component';
import Listaa from './components/listaa.component';
import Katso from './components/katso.component';
import Image from './profile.png';
class App extends Component {

  constructor(props){
    super(props);
    this.onChangeOtsikko = this.onChangeOtsikko.bind(this); 
    this.onChangeOtsikkoLisaa = this.onChangeOtsikkoLisaa.bind(this);  
    this.state = {
      otsikko: 'ICDL Finland Oy',
    }
  }

  onChangeOtsikko() {
    this.setState({
      otsikko: "Ehdokkaat"
    });
  }

  onChangeOtsikkoLisaa() {
    this.setState({
      otsikko: "Lisää ehdokas"
    });
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light">
          <div class="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item" >
                  <Link to={'/create'} className="nav-link" onClick={this.onChangeOtsikkoLisaa}>Lisää ehdokas</Link>
                </li>
                <li className="nav-item" active>
                  <Link to={'/index'} className="nav-link" onClick={this.onChangeOtsikko}>Ehdokkaat </Link>
                </li>
              </ul>
           </div>
            <Link to={'/'} className="navbar-brand"><img src={Image} alt="profile" style={{width: 50}}/> </Link>
          </nav> <br/>
          <h1 className='otsikko'>{this.state.otsikko}</h1>
          </div>
          <Routes>
              <Route exact path='/create' element={<Luo />}/>
              <Route path='/edit/:id' element={<Muokkaa />} />
              <Route path='/index' element={<Listaa />} />
              <Route path='/look/:id' element={<Katso />} />
          </Routes> 
      </Router>
    );
  }
}

export default App;
