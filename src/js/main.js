/* eslint-disable */
import {
  getAthletesMinView, getAllCountries, getAllSports, getMedalsMinView,
} from './data.js';
import data from '../data/atletas/atletas.js';

const fillCountries = function () {
  var ddlCountry = document.getElementById('ddlCountry');
  var ddlCountryMedals = document.getElementById('ddlCountryMedals');

  const countries = getAllCountries(data.atletas);

  countries.forEach((country) => {
    var option = document.createElement("option");
    option.text = country;
    option.value = country;
    ddlCountry.add(option);

    var optionMedal = document.createElement("option");
    optionMedal.text = country;
    optionMedal.value = country;
    ddlCountryMedals.add(optionMedal);
  });
};

const fillSports = function () {
  var ddlSport = document.getElementById('ddlSport');
  var ddlSportMedals = document.getElementById('ddlSportMedals');

  const sports = getAllSports(data.atletas);

  sports.forEach((sport) => {
    var option = document.createElement("option");
    option.text = sport;
    option.value = sport;
    ddlSport.add(option);

    var optionMedal = document.createElement("option");
    optionMedal.text = sport;
    optionMedal.value = sport;
    ddlSportMedals.add(optionMedal);
  });
};

fillCountries();
fillSports();

const btnAthletes = document.getElementById('btnAthletes');
const btnMedals = document.getElementById('btnMedals');
const btnSearchAthlete = document.getElementById('btnSearchAthlete');
const btnSearchMedals = document.getElementById('btnSearchMedals');

btnAthletes.addEventListener('click', function () {
  document.getElementById('divAthletes').classList.remove("hide");
  document.getElementById('divMedals').classList.add("hide");

  document.getElementById('btnAthletes').classList.add('btnMenuFocus');
  document.getElementById('btnMedals').classList.remove('btnMenuFocus');
});

btnMedals.addEventListener('click', function () {
  document.getElementById('divAthletes').classList.add("hide");
  document.getElementById('divMedals').classList.remove("hide");

  document.getElementById('btnAthletes').classList.remove('btnMenuFocus');
  document.getElementById('btnMedals').classList.add('btnMenuFocus');
});

btnSearchAthlete.addEventListener('click', function () {

  let athleteName = document.getElementById('txtSearch').value;
  let country = document.getElementById('ddlCountry').value;
  let sport = document.getElementById('ddlSport').value;
  let medal = document.getElementById('ddlMedal').value;
  let sort = document.getElementById('ddlSort').value;

  const athletes = getAthletesMinView(data.atletas, athleteName, country, sport, medal, sort);

  var divAthletes = document.getElementById('divAthletesList');
  divAthletes.innerHTML = '';

  athletes.forEach((athlete) => {

    let divAthlete = document.createElement('div');
    divAthlete.className = "box person";

    let divImage = document.createElement('div');
    divImage.className = "image round";

    let img = document.createElement('img');

    let randomNumber = Math.floor(Math.random() * 100);
    if (athlete.genero === 'M') {
      img.src = `https://randomuser.me/api/portraits/men/${randomNumber}.jpg`;
    }
    else {
      img.src = `https://randomuser.me/api/portraits/women/${randomNumber}.jpg`;
    }

    divImage.appendChild(img);
    divAthlete.appendChild(divImage);

    var h3 = document.createElement("h3");
    var t = document.createTextNode(athlete.nombre);
    h3.appendChild(t);

    divAthlete.appendChild(h3);

    var pEquipo = document.createElement("p");
    var txtEquipo = document.createTextNode(athlete.equipo);
    pEquipo.appendChild(txtEquipo);
    divAthlete.appendChild(pEquipo);

    var pDeporte = document.createElement("p");
    var txtDeporte = document.createTextNode(athlete.deporte);
    pDeporte.appendChild(txtDeporte);
    divAthlete.appendChild(pDeporte);
    divAthletes.appendChild(divAthlete);
  });
});

btnSearchMedals.addEventListener('click', function () {

  let country = document.getElementById('ddlCountryMedals').value;
  let sport = document.getElementById('ddlSportMedals').value;
  let sort = document.getElementById('ddlSortMedals').value;

  const medals = getMedalsMinView(data.atletas, country, sport, sort);

  var tbMedals = document.getElementById('tbMedals');
  tbMedals.innerHTML = '';

  medals.forEach((medal) => {

    var row = document.createElement("tr");

    var cellCountry = document.createElement("td");
    var cellCountryText = document.createTextNode(medal.country);
    cellCountry.appendChild(cellCountryText);
    row.appendChild(cellCountry);

    var cellBronze = document.createElement("td");
    var cellBronzeText = document.createTextNode(medal.bronze);
    cellBronze.appendChild(cellBronzeText);
    row.appendChild(cellBronze);

    var cellSilver = document.createElement("td");
    var cellSilverText = document.createTextNode(medal.silver);
    cellSilver.appendChild(cellSilverText);
    row.appendChild(cellSilver);

    var cellGold = document.createElement("td");
    var cellGoldText = document.createTextNode(medal.gold);
    cellGold.appendChild(cellGoldText);
    row.appendChild(cellGold);

    var cellTotal = document.createElement("td");
    var cellTotalText = document.createTextNode(medal.total);
    cellTotal.appendChild(cellTotalText);
    row.appendChild(cellTotal);

    tbMedals.appendChild(row);


  });
});


// const optionsMedallas = document.querySelector('#medallas');
// optionsMedallas.addEventListener('click', () => {
//   document.getElementById('seccion-medallas').classList.remove('borrar');
//   document.getElementById('table').classList.add('borrar');
//   document.getElementById('articulos').classList.add('borrar');

//   const btnMostrarMedallas = document.querySelector('#btnMostrarMedallas');
//   const opcionOlimpiadas = document.querySelector('#opcionOlimpiadas');
//   const opcionPais = document.querySelector('#opcionPais');

//   let ciudadSelec;
//   let paisSelec;

//   opcionOlimpiadas.addEventListener('change', (event) => {
//     ciudadSelec = event.target.options[event.target.selectedIndex].getAttribute('data-ciudad');
//   });

//   opcionPais.addEventListener('change', (event) => {
//     paisSelec = event.target.options[event.target.selectedIndex].getAttribute('data-pais');
//   });

//   const tipoOro = 'Gold';
//   const tipoPlata = 'Silver';
//   const tipoBronce = 'Bronze';
//   btnMostrarMedallas.addEventListener('click', () => {
//     const medallasOro = totalMedallas(arrAtletas, paisSelec, ciudadSelec, tipoOro);
//     const medallasPlata = totalMedallas(arrAtletas, paisSelec, ciudadSelec, tipoPlata);
//     const medallasBronce = totalMedallas(arrAtletas, paisSelec, ciudadSelec, tipoBronce);
//     document.getElementById('rootMedallas').innerHTML = `Oro ${medallasOro} `
//       + `Plata ${medallasPlata} `
//       + `Bronce ${medallasBronce}`;
//   });
// });
