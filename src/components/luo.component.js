import React, { useState, Component } from 'react';
import axios from 'axios';
import "../index.css";

export default class Luo extends Component {
  
  constructor(props) {
    
    super(props);
 
    this.onChangeEhdokasEtunimi = this.onChangeEhdokasEtunimi.bind(this); 
    this.onChangeEhdokasSukunimi = this.onChangeEhdokasSukunimi.bind(this); 
    this.onChangeEhdokasSukupuoli = this.onChangeEhdokasSukupuoli.bind(this);
    this.onChangeEhdokasSyntymapaiva = this.onChangeEhdokasSyntymapaiva.bind(this);
    this.onChangeEhdokasOsoite = this.onChangeEhdokasOsoite.bind(this); 
    this.onChangeEhdokasPostinnumero = this.onChangeEhdokasPostinnumero.bind(this);
    this.onChangeEhdokasPostitoimipaikka = this.onChangeEhdokasPostitoimipaikka.bind(this);
    this.onChangeEhdokasSahkoposti = this.onChangeEhdokasSahkoposti.bind(this); 
    this.onChangeEhdokasPuhelin = this.onChangeEhdokasPuhelin.bind(this);
    this.onChangeEhdokasSertifikaatitNimi = this.onChangeEhdokasSertifikaatitNimi.bind(this);
    this.onChangeEhdokasSertifikaatit = this.onChangeEhdokasSertifikaatit.bind(this);
   
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      ehdokas_etunimi: '',
      ehdokas_sukunimi: '',
      ehdokas_sukupuoli: '',
      ehdokas_syntymapaiva: '',
      ehdokas_osoite: '',
      ehdokas_postinnumero: '',
      ehdokas_postitoimipaikka: '',
      ehdokas_sahkoposti: '',
      ehdokas_puhelin: '',
      ehdokas_sertifikaatit_nimi: '',
      ehdokas_sertifikaatit: '',
    }
  }
  
  onChangeEhdokasEtunimi(e) {
    this.setState({
      ehdokas_etunimi: e.target.value
    });
  }
  onChangeEhdokasSukunimi(e) {
    this.setState({
      ehdokas_sukunimi: e.target.value
    });
  }
  onChangeEhdokasSukupuoli(e) {
    this.setState({
      ehdokas_sukupuoli: e.target.value
    });
  }
  onChangeEhdokasSyntymapaiva(e) {
    this.setState({
      ehdokas_syntymapaiva: e.target.value
    });
  }
  onChangeEhdokasOsoite(e) {
    this.setState({
      ehdokas_osoite: e.target.value
    });
  }
  onChangeEhdokasPostinnumero(e) {
    this.setState({
      ehdokas_postinnumero: e.target.value
    });
  }
  onChangeEhdokasPostitoimipaikka(e) {
    this.setState({
      ehdokas_postitoimipaikka: e.target.value
    });
  }
  onChangeEhdokasSahkoposti(e) {
    this.setState({
      ehdokas_sahkoposti: e.target.value
    });
  }
  onChangeEhdokasPuhelin(e) {
    this.setState({
      ehdokas_puhelin: e.target.value
    });
  }
  onChangeEhdokasSertifikaatitNimi(e) {
    this.setState({
      ehdokas_sertifikaatit_nimi: e.target.value
    });
  }
  onChangeEhdokasSertifikaatit(e) {
    this.setState({
      ehdokas_sertifikaatit: e.target.value
    });
  }
  
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      ehdokas_etunimi: this.state.ehdokas_etunimi,
      ehdokas_sukunimi: this.state.ehdokas_sukunimi,
      ehdokas_sukupuoli: this.state.ehdokas_sukupuoli,
      ehdokas_syntymapaiva: this.state.ehdokas_syntymapaiva,
      ehdokas_osoite: this.state.ehdokas_osoite,
      ehdokas_postinnumero: this.state.ehdokas_postinnumero,
      ehdokas_postitoimipaikka: this.state.ehdokas_postitoimipaikka,
      ehdokas_sahkoposti: this.state.ehdokas_sahkoposti,
      ehdokas_puhelin: this.state.ehdokas_puhelin,
      ehdokas_serifikaatit: this.state.ehdokas_sertifikaatit_nimi,
      ehdokas_serifikaatit: this.state.ehdokas_sertifikaatit,
    };
    axios.post('http://localhost:4000/ehdokas/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      ehdokas_etunimi: '',
      ehdokas_sukunimi: '',
      ehdokas_sukupuoli: '',
      ehdokas_syntymapaiva: '',
      ehdokas_osoite: '',
      ehdokas_postinnumero: '',
      ehdokas_postitoimipaikka: '',
      ehdokas_sahkoposti: '',
      ehdokas_puhelin: '',
      ehdokas_sertifikaatit_nimi: '',
      ehdokas_sertifikaatit: '',
   })
  }

  render() {
    return (
        <div className='ehdokasLuo' style={{ marginTop: 20 }} >            
            <form onSubmit={this.onSubmit} >
                <div className="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="">Etunimi</span>
                    </div>
                    <input type="text" class="form-control"  value={this.state.ehdokas_etunimi}
                      onChange={this.onChangeEhdokasEtunimi}/>
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="">Sukunimi</span>
                    </div>
                    <input type="text" class="form-control" value={this.state.ehdokas_sukunimi}
                      onChange={this.onChangeEhdokasSukunimi} />
                  </div>
                </div>
                <div className="form-group">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Sukupuoli</label>
                  </div>
                    <select class="custom-select form-control" value={this.state.ehdokas_sukupuoli}
                      onChange={this.onChangeEhdokasSukupuoli} id="inputGroupSelect01">
                      <option selected>Valitse...</option>
                      <option value="Mies">Mies</option>
                      <option value="Nainen">Nainen</option>
                      <option value="Muu">Muu</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="">Syntymäpäivä</span>
                    </div>
                    <input type="date" class="form-control" value={this.state.ehdokas_syntymapaiva}
                      onChange={this.onChangeEhdokasSyntymapaiva} />
                  </div>
                </div>
                <div className="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="">Osoite</span>
                    </div>
                    <input type="text" class="form-control" value={this.state.ehdokas_osoite}
                      onChange={this.onChangeEhdokasOsoite} />
                  </div>
                </div>
                <div className="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="">Postinnumero</span>
                    </div>
                    <input type="text" class="form-control"  value={this.state.ehdokas_postinnumero}
                      onChange={this.onChangeEhdokasPostinnumero}/>
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="">Postitoimipaikka</span>
                    </div>
                    <input type="text" class="form-control" value={this.state.ehdokas_postitoimipaikka}
                      onChange={this.onChangeEhdokasPostitoimipaikka} />
                  </div>
                </div>
                <div className="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="">Sähköposti</span>
                    </div>
                    <input type="text" class="form-control" value={this.state.ehdokas_sahkoposti}
                      onChange={this.onChangeEhdokasSahkoposti} />
                  </div>
                </div>
                <div className="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="">Puhelin</span>
                    </div>
                    <input type="text" class="form-control" value={this.state.ehdokas_puhelin}
                      onChange={this.onChangeEhdokasPuhelin} />
                  </div>
                </div>
                <div className="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="">Sertifikaatin Nimike</span>
                    </div>
                    <input type="text" class="form-control" value={this.state.ehdokas_sertifikaatit_nimi}
                      onChange={this.onChangeEhdokasSertifikaatitNimi} />
                  </div>
                </div>
                <div className="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="">Sertifikaatin Linkki</span>
                    </div>
                    <input type="text" class="form-control" value={this.state.ehdokas_sertifikaatit}
                      onChange={this.onChangeEhdokasSertifikaatit} />
                  </div>
                </div>
               
                <div className="form-group">
                    <input type="submit" value="LISÄÄ" className="btn btn-primary"/>
                </div>
            </form>
          
        </div>
    )
  }
}
