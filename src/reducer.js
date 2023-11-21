const initialState = {
  language: 'it',
  lightMode: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'language':
      return { ...state, language: action.payload }
    case 'lightMode':
      return { ...state, lightMode: !state.lightMode };
    default:
      return state;
  }
}

export default reducer;
