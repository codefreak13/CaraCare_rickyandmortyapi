import {GET_CHARACTERS} from './apollo/gql';

const statusData = [
  {label: 'Alive', value: 'Alive'},
  {label: 'Dead', value: 'Dead'},
];

const mockData = [
  {
    request: {
      query: GET_CHARACTERS,
    },
    results: {
      data: {
        result: [
          {
            id: '123',
            name: 'Mark',
            status: 'Alive',
            gender: 'Male',
            origin: {id: '11', name: 'Earth'},
            species: 'human',
            episode: {id: '11', name: 'Pilot'},
          },
          {
            id: '124',
            name: 'Mary',
            status: 'Dead',
            gender: 'Female',
            origin: {id: '12', name: 'Mars'},
            species: 'human',
            episode: {id: '11', name: 'Final'},
          },
          {
            id: '125',
            name: 'Paul',
            status: 'Unknown',
            gender: 'Male',
            origin: {id: '11', name: 'Earth'},
            species: 'unknnown',
            episode: {id: '11', name: 'Pilot'},
          },
        ],
      },
    },
  },
];

export {statusData, mockData};
