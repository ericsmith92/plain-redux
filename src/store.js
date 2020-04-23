//steps:
//1. We need createStore from the redux library, we have imported it below
    //we are going to call createStore and pass it our reducer (as an argument), so we need to export that from
    //reducer.js and import it here

import { createStore } from 'redux';
import reducer from './reducer';

//we passed reducer, that means createStore is a high order function (takes func as arg)

const store = createStore(reducer);

export default store;
