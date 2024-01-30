const initialState = {
  count: undefined,
  current: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'count':
      return { ...state, count: action.payload };
    case 'current':
      return { ...state, current: action.payload };
    default:
      return state;
  }
}

export default reducer;