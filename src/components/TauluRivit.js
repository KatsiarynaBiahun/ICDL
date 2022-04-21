import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ImageKopio from '../duplicate.png';

class TauluRivit extends Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete() {
    axios.get('http://localhost:4000/ehdokas/delete/'+this.props.obj._id)
      .then(console.log('Poistettu'))
      .catch(err => console.log(err))
  }

  state = {
    value: this.props.obj.ehdokas_sertifikaatit ,
    copied: false,
  };
   
  render() {    
    return (
        <tr >
          <td className='btn-table'>
            <Link to={"/look/"+this.props.obj._id} className="btn btn-primary"><h6>Katso tiedot</h6></Link>
          </td>
          <td className='info-table'>
            {this.props.obj.ehdokas_etunimi}
          </td>
          <td className='info-table'>
            {this.props.obj.ehdokas_sukunimi}
          </td>
          <td className='info-table'>
            {this.props.obj.ehdokas_sertifikaatit_nimi} 
            <CopyToClipboard text={this.props.obj.ehdokas_sertifikaatit}
              onCopy={() => this.setState({copied: true})}>
            <button className="btn btn-light"><img src={ImageKopio} alt="profile" style={{width: 20}}/> </button>
            </CopyToClipboard>
          </td>
          <td className='btn-table'>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary" ><h6>Muokkaa</h6></Link>
            </td>
          <td className='btn-table'>
            <button onClick={this.delete} className="btn btn-danger"><h6>Poista</h6></button>
          </td>
        </tr>
    );
  }
}

export default TauluRivit;
