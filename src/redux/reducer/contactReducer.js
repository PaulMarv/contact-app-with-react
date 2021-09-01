const initialState = [
    {
        id:0,
        name:'Paul Marv',
        number: 4556600,
        email: "mp@gm"
    },
    {
        id:1,
        name:'Hello Name',
        number:45567700,
        email: "sp@yh"
    }
];

const contactReducer = (state= initialState, action)=>{
    switch(action.type){
        case 'ADD_CONTACT':
            state = [...state, action.payload]
            return state
        case 'UPDATE_CONTACT':
            const updatedState = state.map((contact)=> contact.id === action.payload.id? action.payload: contact)
            state = updatedState;
            return state;
        case 'DELETE_CONTACT':
            const filterContact = state.filter(contact=> contact.id === action.payload.id && contact)
            state = filterContact;
            return state
        default: return state;
    }
}

export default contactReducer;