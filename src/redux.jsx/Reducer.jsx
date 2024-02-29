const initialState = {
    items: []
  };
  
const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ajouter":
        return {...state,items:[...state.items,...action.payload]}
      case "update":
        return {
            ...state,
            items: state.items.map(item =>
              item.Id === action.payload.Id ? { ...item, ...action.payload } : item
            )
          };
      case "delete":
        return {
          ...state,
          items: state.items.filter(item =>parseInt(item.Id )!==parseInt( action.payload))
        };
      default:
        return state;
    }
  };
  
  export default Reducer;
  