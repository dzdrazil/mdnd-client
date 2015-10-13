import {Record as createRecordClass} from 'immutable';

export let Floor = createRecordClass({
  id: -1,
  walkable: true,
  color: 'white'
});

export let Wall = createRecordClass({
  id: -1,
  walkable: false,
  color: 'black'
});

export let Door = createRecordClass({
  id: -1,
  walkable: false,
  color: '#AA5303'
});
