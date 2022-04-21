import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function Muokkaa() {
  const params = useParams();
  const navigate = useNavigate();

  const [ehdokas_etunimi, setEhdokasEtunimi] = useState('');
  const [ehdokas_sukunimi, setEhdokasSukunimi] = useState('');
  const [ehdokas_sukupuoli, setEhdokasSukupuoli] = useState('');
  const [ehdokas_syntymapaiva, setEhdokasSyntymapaiva] = useState('');
  const [ehdokas_osoite, setEhdokasOsoite] = useState('');
  const [ehdokas_postinnumero, setEhdokasPostinnumero] = useState('');
  const [ehdokas_postitoimipaikka, setEhdokasPostitoimipaikka] = useState('');
  const [ehdokas_sahkoposti, setEhdokasSahkoposti] = useState('');
  const [ehdokas_puhelin, setEhdokasPuhelin] = useState('');
  const [ehdokas_sertifikaatit_nimi, setEhdokasSertifikaatitNimi] = useState('');  
  const [ehdokas_sertifikaatit, setEhdokasSertifikaatit] = useState('');  

  useEffect(() => 
      axios.get('http://localhost:4000/ehdokas/edit/'+ params.id)
          .then(response => {
                const {ehdokas_etunimi, ehdokas_sukunimi, ehdokas_sukupuoli,
                  ehdokas_syntymapaiva, ehdokas_osoite, ehdokas_postinnumero,
                  ehdokas_postitoimipaikka, ehdokas_sahkoposti, ehdokas_puhelin,
                  ehdokas_sertifikaatit_nimi, ehdokas_sertifikaatit } = response.data;
                setEhdokasEtunimi(ehdokas_etunimi);
                setEhdokasSukunimi(ehdokas_sukunimi);
                setEhdokasSukupuoli(ehdokas_sukupuoli);

                var date = ehdokas_syntymapaiva.split("T")[0];
                setEhdokasSyntymapaiva(date);
                
                setEhdokasOsoite(ehdokas_osoite);
                setEhdokasPostinnumero(ehdokas_postinnumero);
                setEhdokasPostitoimipaikka(ehdokas_postitoimipaikka);
                setEhdokasSahkoposti(ehdokas_sahkoposti);
                setEhdokasPuhelin(ehdokas_puhelin);
                setEhdokasSertifikaatitNimi(ehdokas_sertifikaatit_nimi);
                setEhdokasSertifikaatit(ehdokas_sertifikaatit);
                
          }).catch(function (error) {
              console.log(error);
          }),[params.id]);

  function onChangeEhdokasEtunimi(e) {
    setEhdokasEtunimi(e.target.value);
  }
  function onChangeEhdokasSukunimi(e) {
    setEhdokasSukunimi(e.target.value);
  }
  function onChangeEhdokasSukupuoli(e) {
    setEhdokasSukupuoli(e.target.value);
  }
  function onChangeEhdokasSyntymapaiva(e) {
    setEhdokasSyntymapaiva(e.target.value);
  }
  function onChangeEhdokasOsoite(e) {
    setEhdokasOsoite(e.target.value);
  }
  function onChangeEhdokasPostinnumero(e) {
    setEhdokasPostinnumero(e.target.value);
  }
  function onChangeEhdokasPostitoimipaikka(e) {
    setEhdokasPostitoimipaikka(e.target.value);
  }
  function onChangeEhdokasSahkoposti(e) {
    setEhdokasSahkoposti(e.target.value);
  }
  function onChangeEhdokasPuhelin(e) {
    setEhdokasPuhelin(e.target.value);
  }
  function onChangeEhdokasSertifikaatitNimi(e) {
    setEhdokasSertifikaatitNimi(e.target.value);
    if (e.target.value==='Database Advanced'){
      setEhdokasSertifikaatit('https://openbadgefactory.com/v1/assertion/6999d0b33e72813949bc9f7a7ac2f2073779d593');
    } else if (e.target.value==='2D Design'){
      setEhdokasSertifikaatit('https://openbadgefactory.com/v1/assertion/832ff61558d3146f13832a385f9cc3f3a7d8e493');
    } 
  }

  function onSubmit(e) {
    e.preventDefault();
    const obj = {
      ehdokas_etunimi: ehdokas_etunimi,
      ehdokas_sukunimi: ehdokas_sukunimi,
      ehdokas_sukupuoli: ehdokas_sukupuoli,
      ehdokas_syntymapaiva: ehdokas_syntymapaiva,
      ehdokas_osoite: ehdokas_osoite,
      ehdokas_postinnumero: ehdokas_postinnumero,
      ehdokas_postitoimipaikka: ehdokas_postitoimipaikka,
      ehdokas_sahkoposti: ehdokas_sahkoposti,
      ehdokas_puhelin: ehdokas_puhelin,
      ehdokas_sertifikaatit_nimi: ehdokas_sertifikaatit_nimi,
      ehdokas_sertifikaatit: ehdokas_sertifikaatit,
    };
    axios.post('http://localhost:4000/ehdokas/update/'+ params.id, obj) 
        .then(res => console.log(res.data));
    navigate("/index");
  }

  return (
        <div className='ehdokasMuokkaa' style={{ marginTop: 80 }} >
            <form onSubmit={onSubmit} >
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="">Etunimi</span>
                    </div>
                    <input type="text" className="form-control"  value={ehdokas_etunimi}
                      onChange={onChangeEhdokasEtunimi}/>
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="">Sukunimi</span>
                    </div>
                    <input type="text" className="form-control" value={ehdokas_sukunimi}
                      onChange={onChangeEhdokasSukunimi} />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label className="input-group-text" htmlFor="inputGroupSelect01">Sukupuoli</label>
                    </div>
                    <select className="custom-select form-control" value={ehdokas_sukupuoli}
                      onChange={onChangeEhdokasSukupuoli} id="inputGroupSelect01">
                      <option defaultValue>Valitse...</option>
                      <option value="Mies">Mies</option>
                      <option value="Nainen">Nainen</option>
                      <option value="Muu">Muu</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="">Syntymäpäivä</span>
                    </div>
                    <input type="date" className="form-control" value={ehdokas_syntymapaiva}
                      onChange={onChangeEhdokasSyntymapaiva} />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="">Osoite</span>
                    </div>
                    <input type="text" className="form-control" value={ehdokas_osoite}
                      onChange={onChangeEhdokasOsoite} />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="">Postinnumero</span>
                    </div>
                    <input type="text" className="form-control"  value={ehdokas_postinnumero}
                      onChange={onChangeEhdokasPostinnumero}/>
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="">Postitoimipaikka</span>
                    </div>
                    <input type="text" className="form-control" value={ehdokas_postitoimipaikka}
                      onChange={onChangeEhdokasPostitoimipaikka} />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="">Sähköposti</span>
                    </div>
                    <input type="text" className="form-control" value={ehdokas_sahkoposti}
                      onChange={onChangeEhdokasSahkoposti} />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="">Puhelin</span>
                    </div>
                    <input type="text" className="form-control" value={ehdokas_puhelin}
                      onChange={onChangeEhdokasPuhelin} />
                  </div>
                </div>
                <div className="form-group">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect02">Sertifikaatin Nimike</label>
                  </div>
                    <select className="custom-select form-control" value={ehdokas_sertifikaatit_nimi}
                      onChange={onChangeEhdokasSertifikaatitNimi} id="inputGroupSelect02">
                      <option defaultValue>Valitse...</option>
                      <option value="Database Advanced">Database Advanced</option>
                      <option value="2D Design">2D Design</option>
                    </select>
                  </div>
                </div>
                <div className="form-group" hidden>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="">Sertifikaatin Linkki</span>
                    </div>
                    <input type="text" className="form-control" value={ehdokas_sertifikaatit}/>
                  </div>
                </div>
               
                <div className="form-group">
                    <input type="submit" 
                      value="Päivitä" 
                      className="btn btn-primary"/>
                </div>
            </form>           
        </div>
    );
}