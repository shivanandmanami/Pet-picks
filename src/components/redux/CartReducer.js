// cartReducer.js
const initialState = {
    items: [],
  };

  const cartReducer = (state = initialState, action1) => {
    switch (action1.type) {
      case 'ADD_TO_CART':
    return {
          ...state,
          items: [...state.items, action1.payload],
          
        };
      case 'INCREMENT_QUANTITY':
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action1.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      case 'DECREMENT_QUANTITY':
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action1.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
        case 'REMOVE_FROM_CART':
          return {
            ...state,
            items: state.items.filter((item) => item.id !== action1.payload),
          };
      default:
        return state;
    }
    
  };
  
  export default cartReducer;
  