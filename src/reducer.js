const initialState = {
  lightMode: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'lightMode':
      return { ...state, lightMode: !state.lightMode };
    default:
      return state;
  }
}

export default reducer;
