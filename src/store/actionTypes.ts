export const SET_TRUE = "SET_TRUE";
export const SET_FALSE = "SET_FALSE";


interface SetSignedIntTrueAction {
    type: typeof SET_TRUE;
}

interface SetSignedIntFalseAction {
    type: typeof SET_FALSE;
}

export type SetSignedInActionTypes = SetSignedIntFalseAction | SetSignedIntTrueAction;
export type SetAnyActionTypes = any;