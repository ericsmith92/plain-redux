import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions';
//lets dispatch an action to update our state...
//this action should have two properties - type && payload 

//let's also subscribe to our store (before dispatching an action) 
//here we pass a function that is called everytime the state of the store gets changed
//basically, something we are doing in the UI layer everytime the store changes
//if we are working in vanilla JS, we would work directly with our DOM elements here
//if we are working with REACT, we would trigger a re-render
//UI components should SUBSCRIBE to the store so they get notified when the store changes
store.subscribe(() => {
    console.log('Store changed', store.getState());
});

store.dispatch(bugAdded('First Bug'));

//store.dispatch(bugRemoved(1));

store.dispatch(bugResolved(1));

console.log(store.getState());
