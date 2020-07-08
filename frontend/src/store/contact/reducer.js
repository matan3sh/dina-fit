const initialState = {
  contacts: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_CONTACTS':
      return {
        ...state,
        contacts: action.payload
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case 'REMOVE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload
        )
      };
    default:
      return state;
  }
}
