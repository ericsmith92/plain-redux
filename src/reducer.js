//a reducer is just a function that accepts to arguments: current state and action
//it's job is to return the new state given current state + action
//lastId is used and incremented to deduce the new ID
//resolved is always false when adding a new bug obviously
//only description should come from payload in this case, ID + resolved is all business logic
//so we are handling all or as much business logic as possible in our reducer
import { BUG_ADDED, BUG_REMOVED, BUG_RESOLVED } from './actionTypes';

let lastId = 0;

export default function reducer(state = [], action){
    if(action.type === BUG_ADDED){
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            } 
        ];
    }else if(action.type === BUG_REMOVED){
        return state.filter(bug => action.payload.id !== bug.id);
    }else if(action.type === BUG_RESOLVED){
        return state.map(bug => 
            bug.id !== action.payload.id ? bug : { ...bug, resolved: true}
        );
    }else{
        return state;
    }
}