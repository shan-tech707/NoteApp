import {createStore} from 'redux';
import notesReducer from './notesApp';

const Store= createStore(notesReducer);

export default Store;