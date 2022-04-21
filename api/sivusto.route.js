const alert = require('alert');

const express = require('express');
const sivustoRoutes = express.Router();
let Ehdokkaat = require('./model');

// Ehdokkaan lisääminen polku
sivustoRoutes.route('/add').post(function (req, res) {
  let ehdokas = new Ehdokkaat(req.body);
  ehdokas.save()
    .then(ehdokas => {
      alert('Tallennettiin');
    })
    .catch(err => {
      alert('Ei tallennetu');
    });
});

// Alkuperäinen polku ja polku projektista -sivu
sivustoRoutes.route('/').get(function (req, res) {
    Ehdokkaat.find(function(err, ehdokas){
    if(err){
      console.log(err);
    }
    else {
      res.json(ehdokas);
    }
  });
});

// Ehdokkaan tietojen muokkaamisen polku
sivustoRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Ehdokkaat.findById(id, function (err, ehdokas){
      res.json(ehdokas);
  });
});

// Ehdokkaan katsomisen polku
sivustoRoutes.route('/look/:id').get(function (req, res) {
  let id = req.params.id;
  Ehdokkaat.findById(id, function (err, ehdokas){
      res.json(ehdokas);
  });
});


// Ehdokkaan päivittämisen polku
sivustoRoutes.route('/update/:id').post(function (req, res) {
    Ehdokkaat.findById(req.params.id, function(err, ehdokas) {
    if (!ehdokas)
      alert('Tietoa ei löydy');
    else {
      
      ehdokas.ehdokas_nimi = req.body.ehdokas_nimi;
      ehdokas.ehdokas_sukunimi = req.body.ehdokas_sukunimi;
      ehdokas.ehdokas_sukupuoli = req.body.ehdokas_sukupuoli;
      ehdokas.ehdokas_syntymapaiva = req.body.ehdokas_syntymapaiva;
      ehdokas.ehdokas_osoite = req.body.ehdokas_osoite;
      ehdokas.ehdokas_postinnumero = req.body.ehdokas_postinnumero;
      ehdokas.ehdokas_postitoimipaikka = req.body.ehdokas_postitoimipaikka;
      ehdokas.ehdokas_sahkoposti = req.body.ehdokas_sahkoposti;
      ehdokas.ehdokas_puhelin = req.body.ehdokas_puhelin;
      ehdokas.ehdokas_sertifikaatit_nimi = req.body.ehdokas_sertifikaatit_nimi;
      ehdokas.ehdokas_sertifikaatit = req.body.ehdokas_sertifikaatit;

      ehdokas.save().then(ehdokas => {
          alert('Päivitettiin');
      })
      .catch(err => {
            alert('Ei päivitetty');
      });
    }
  });
});

// Ehdokkaan poistamisen polku
sivustoRoutes.route('/delete/:id').get(function (req, res) {
    Ehdokkaat.findByIdAndRemove({_id: req.params.id}, function(err, ehdokas){
        if(err) res.json(err);
        else alert('Poistettiin'); 
    });
});

module.exports = sivustoRoutes;