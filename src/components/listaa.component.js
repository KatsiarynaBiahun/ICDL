import React, { Component } from 'react';
import axios from 'axios';
import TauluRivi from './TauluRivit';

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

    render() {
      return (
        <div className='ehdokasListaa'>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th></th>
                <th>NIMI</th>
                <th>SUKUNIMI</th>
                <th>SERTIFIKAATIT</th>
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
