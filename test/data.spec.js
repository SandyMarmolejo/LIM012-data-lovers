/* eslint-disable */
import {
  getAthletesMinView, sortByName, filterBySport, totalMedallas,
} from '../src/js/data.js';

const input = [
  {
    nombre: 'Matteo Bisiani',
    genero: 'M',
    altura: '184',
    peso: '85',
    fecha: 1976,
    deporte: 'Archery',
    equipo: 'Italy',
    noc: 'ITA',
  },
  {
    nombre: 'Nataliya Andrivna Burdeina',
    genero: 'F',
    altura: '165',
    peso: '63',
    fecha: 1974,
    deporte: 'Archery',
    equipo: 'Ukraine',
    noc: 'UKR',
  },
  {
    nombre: 'Ilario Di Bu',
    genero: 'M',
    altura: '175',
    peso: '90',
    fecha: 1966,
    deporte: 'Swing',
    equipo: 'Italy',
    noc: 'ITA',
  },
];

const medallero = [
  {
    nombre: 'Matteo Bisiani',
    genero: 'M',
    altura: '184',
    peso: '85',
    nacimiento: 1976,
    deporte: 'Archery',
    equipo: 'Italy',
    noc: 'ITA',
    disciplinas: [
      {
        disciplina: "Archery Men's Team",
        temporada: 'Summer',
        año: 2000,
        ciudad: 'Sydney',
        medalla: 'Silver',
      },
    ],
  },
  {
    nombre: 'Nataliya Andrivna Burdeina',
    genero: 'F',
    altura: '165',
    peso: '63',
    nacimiento: 1974,
    deporte: 'Archery',
    equipo: 'Ukraine',
    noc: 'UKR',
    disciplinas: [
      {
        disciplina: "Archery Women's Team",
        temporada: 'Summer',
        año: 2000,
        ciudad: 'Sydney',
        medalla: 'Silver',
      },
    ],
  },
  {
    nombre: 'Ilario Di Bu',
    genero: 'M',
    altura: '175',
    peso: '90',
    nacimiento: 1966,
    deporte: 'Archery',
    equipo: 'Italy',
    noc: 'ITA',
    disciplinas: [
      {
        disciplina: "Archery Men's Team",
        temporada: 'Summer',
        año: 2000,
        ciudad: 'Sydney',
        medalla: 'Silver',
      },
      {
        disciplina: "Archery Men's Team",
        temporada: 'Summer',
        año: 2008,
        ciudad: 'Beijing',
        medalla: 'Silver',
      },
    ],
  },
];

describe('getAthletesMinView', () => {
  it('is a function', () => {
    expect(typeof getAthletesMinView).toBe('function');
  });
  it('Deberia retornar un array con las propiedades: nombre, deporte, equipo, genero', () => {
    const output = [
      {
        nombre: 'Matteo Bisiani',
        deporte: 'Archery',
        equipo: 'Italy',
        genero: 'M'
      },
      {
        nombre: 'Nataliya Andrivna Burdeina',
        deporte: 'Archery',
        equipo: 'Ukraine',
        genero: 'F'
      },
      {
        nombre: 'Ilario Di Bu',
        deporte: 'Swing',
        equipo: 'Italy',
        genero: 'M'
      },
    ];

    expect(getAthletesMinView(input,'','','','','')).toEqual(output);
  });
});

describe('sortByName', () => {
  it('is a function', () => {
    expect(typeof sortByName).toBe('function');
  });

  it('Deberia retornar un array ordenado alfabeticamente a partir de la propiedad nombre', () => {
    const twoOutput = [
      {
        nombre: 'Ilario Di Bu',
        genero: 'M',
        altura: '175',
        peso: '90',
        fecha: 1966,
        deporte: 'Swing',
        equipo: 'Italy',
        noc: 'ITA',
      },
      {
        nombre: 'Matteo Bisiani',
        genero: 'M',
        altura: '184',
        peso: '85',
        fecha: 1976,
        deporte: 'Archery',
        equipo: 'Italy',
        noc: 'ITA',
      },
      {
        nombre: 'Nataliya Andrivna Burdeina',
        genero: 'F',
        altura: '165',
        peso: '63',
        fecha: 1974,
        deporte: 'Archery',
        equipo: 'Ukraine',
        noc: 'UKR',
      },
    ];

    expect(sortByName(input, 'asc')).toEqual(twoOutput);
  });
});

describe('filterBySport', () => {
  it('is a function', () => {
    expect(typeof filterBySport).toBe('function');
  });

  it('Deberia retornar un array con objetos tengan el mismo tipo de deporte', () => {
    const threeOutput = [
      {
        nombre: 'Matteo Bisiani',
        genero: 'M',
        altura: '184',
        peso: '85',
        fecha: 1976,
        deporte: 'Archery',
        equipo: 'Italy',
        noc: 'ITA',
      },
      {
        nombre: 'Nataliya Andrivna Burdeina',
        genero: 'F',
        altura: '165',
        peso: '63',
        fecha: 1974,
        deporte: 'Archery',
        equipo: 'Ukraine',
        noc: 'UKR',
      }
    ];

    expect(filterBySport(input, 'Archery')).toEqual(threeOutput);
  });
});