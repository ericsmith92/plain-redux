import { BUG_ADDED, BUG_REMOVED, BUG_RESOLVED } from './actionTypes';

export function bugAdded(description){
    return{
        type: BUG_ADDED,
        payload: {
            description,
            resolved: false
        }
    };
}

export function bugRemoved(id){
    return{
        type:  BUG_REMOVED,
        payload: {
            id
        }
    };
}

export function bugResolved(id){
    return{
        type: BUG_RESOLVED,
        payload: {
            id
        }
    }
}