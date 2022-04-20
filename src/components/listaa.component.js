import React, { Component } from 'react';
import axios from 'axios';
import TauluRivi from './TauluRivit';
import { Routes, Route, Link } from 'react-router-dom';
import Luo from './luo.component';

export default class Listaa extends Component {

  constructor(props) {
      super(props);
      
      this.state = {ehdokas: []};
    }

    componentDidUpdate() {
      axios.get('http://localhost:4000/ehdokas')
      .then(response => {
      this.setState({ ehdokas: response.data });
      })
      .catch(function (error) {
      console.log(error);
      })
      }

    componentDidMount(){
      axios.get('http://localhost:4000/ehdokas')
        .then(response => {
          this.setState({ ehdokas: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    tabRow(){
      return this.state.ehdokas.map(function(object, i){
          return <TauluRivi obj={object} key={i} />;
      });
    }

    onChangeOtsikko() {
      this.setState({
        otsikko: "LUO"
      });
    }

    render() {
      return (
        
        <div className='ehdokasListaa'>
          
          <nav class="navbar navbar-light bg-light">
            <form class="form-inline">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" class="form-control" placeholder="Etunimi" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>
            </form>
          </nav>
           <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th></th>
                <th>NIMI</th>
                <th>SUKUNIMI</th>
                <th>Sertifikaatit</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }
