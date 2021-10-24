import remove from 'lodash.remove';
export const ADD_NOTE='ADD_NOTE';
export const DELETE_NOTE='DELETE_NOTE';
export const EDIT_NOTE='EDIT_NOTE';

let noteID=0;

// Action
export function addnote(note){
    return{
        type:ADD_NOTE,
        id:noteID++,
        note
    }
}

export function deletenote(id){
    return{
        type:DELETE_NOTE,
        payload:id
    }
}

export function editNote(id){
    return{
        type:EDIT_NOTE,
    }
}

// Reducers

const initialState=[]

function notesReducer(state=initialState,action){
    switch (action.type) {
        case ADD_NOTE:
            return[
                ...state,
                {
                    id:action.id,
                    note:action.note
                }
            ]
        case DELETE_NOTE:
            const deleteNewArray=remove(state,obj=>{
                return obj.id !=action.payload
            })
            return deleteNewArray;
        default:
            return state; 
            
    }
}

export default notesReducer;