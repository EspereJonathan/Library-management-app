import { SET_TRUE, SetSignedInActionTypes, SET_FALSE } from './actionTypes';

const initialState = {
    isSignedIn:false
}

export const setIsSignedIn = ( state = initialState, action: SetSignedInActionTypes) => {
    switch(action.type) {
        case SET_TRUE: 
            return { isSignedIn: true }
        case SET_FALSE: 
            return { isSignedIn: false}
    }
}

export type RootState = ReturnType<typeof setIsSignedIn>