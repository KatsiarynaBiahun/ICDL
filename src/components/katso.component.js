import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ImageKopio from '../duplicate.png';

export default function Katso() {
  const params = useParams();

  const [ehdokas_etunimi, setEhdokasEtunimi] = useState('');
  const [ehdokas_sukunimi, setEhdokasSukunimi] = useState('');
  const [ehdokas_sukupuoli, setEhdokasSukupuoli] = useState('');
  const [ehdokas_syntymapaiva, setEhdokasSyntymapaiva] = useState('');
  const [ehdokas_osoite, setEhdokasOsoite] = useState('');
  const [ehdokas_postinnumero, setEhdokasPostinnumero] = useState('');
  const [ehdokas_postitoimipaikka, setEhdokasPotitoimipaikka] = useState('');
  const [ehdokas_sahkoposti, setEhdokasSahkoposti] = useState('');
  const [ehdokas_puhelin, setEhdokasPuhelin] = useState('');
  const [ehdokas_sertifikaatit_nimi, setEhdokasSertifikaatitNimi] = useState('');
  const [ehdokas_sertifikaatit, setEhdokasSertifikaatit] = useState('');

  useEffect(() =>  
      axios.get('http://localhost:4000/ehdokas/look/'+ params.id)
          .then(response => {
                const {ehdokas_etunimi, ehdokas_sukunimi, ehdokas_sukupuoli,
                  ehdokas_syntymapaiva, ehdokas_osoite, ehdokas_postinnumero,
                  ehdokas_postitoimipaikka, ehdokas_sahkoposti, ehdokas_puhelin,
                  ehdokas_sertifikaatit_nimi, ehdokas_sertifikaatit } = response.data;
                
                setEhdokasEtunimi(ehdokas_etunimi);
                setEhdokasSukunimi(ehdokas_sukunimi);
                setEhdokasSukupuoli(ehdokas_sukupuoli);

                var year = ehdokas_syntymapaiva.split("-")[0];
                var month = ehdokas_syntymapaiva.split("-")[1];
                var day = ehdokas_syntymapaiva.split("-")[2].split("T")[0];
                var date = day + '/' + month + '/' + year ;
                setEhdokasSyntymapaiva(date);

                setEhdokasOsoite(ehdokas_osoite);
                setEhdokasPostinnumero(ehdokas_postinnumero);
                setEhdokasPotitoimipaikka(ehdokas_postitoimipaikka);
                setEhdokasSahkoposti(ehdokas_sahkoposti);
                setEhdokasPuhelin(ehdokas_puhelin);
                setEhdokasSertifikaatitNimi(ehdokas_sertifikaatit_nimi); 
                setEhdokasSertifikaatit(ehdokas_sertifikaatit);     
          })
          .catch(function (error) {
              console.log(error);
          }),[params.id]);

    return (
        <div className='ehdokasKatso' style={{ marginTop: 80 }}>
          <table className="table table-hover">
            <tbody>
              <tr>
                <th scope="col">Etunimi: </th>
                <td>{ehdokas_etunimi}</td>
              </tr>
              <tr>
                <th scope="col">Sukunimi: </th>
                <td>{ehdokas_sukunimi}</td>
              </tr>
              <tr>
                <th scope="col">Sukupuoli: </th>
                <td>{ehdokas_sukupuoli}</td>
              </tr>
              <tr>
                <th scope="col">Syntymäpäivä: </th>
                <td>{ehdokas_syntymapaiva}</td>
              </tr>
              <tr>
                <th scope="col">Osoite: </th>
                <td>{ehdokas_osoite}</td>
              </tr>
              <tr>
                <th scope="col">Postinnumero: </th>
                <td>{ehdokas_postinnumero}</td>
              </tr>
              <tr>
                <th scope="col">Postitoimipaikka: </th>
                <td>{ehdokas_postitoimipaikka}</td>
              </tr>
              <tr>
                <th scope="col" >Sähköposti: </th>
                <td>{ehdokas_sahkoposti}</td>
              </tr>
              <tr>
                <th scope="col">Puhelin: </th>
                <td>{ehdokas_puhelin}</td>
              </tr>
              <tr>
                <th scope="col">Sertifikaatin Nimike: </th>
                <td>
                  {ehdokas_sertifikaatit_nimi}
                  <CopyToClipboard text={ehdokas_sertifikaatit}
                    onCopy={ehdokas_sertifikaatit}>
                    <button className="btn btn-light"><img src={ImageKopio} alt="profile" style={{width: 20}}/> </button>
                  </CopyToClipboard>
                </td>
              </tr>
              
            </tbody>
          </table>     
     </div>
    );
}