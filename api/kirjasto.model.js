const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Ehdokkaat = new Schema({
  ehdokas_etunimi: {
    type: String
  },
  ehdokas_sukunimi: {
    type: String
  },
  ehdokas_sukupuoli: {
    type: String
  },
  ehdokas_syntymapaiva: {
    type: Date
  },
  ehdokas_osoite: {
    type: String
  },
  ehdokas_postinnumero: {
    type: String
  },
  ehdokas_postitoimipaikka: {
    type: String
  },
  ehdokas_sahkoposti: {
    type: String
  },
  ehdokas_puhelin: {
    type: String
  },
  ehdokas_sertifikaatit_nimi: {
    type: String
  },
  ehdokas_sertifikaatit: {
    type: String
  },
  
},{
    collection: 'ehdokas'
});

module.exports = mongoose.model('Ehdokkaat', Ehdokkaat);
