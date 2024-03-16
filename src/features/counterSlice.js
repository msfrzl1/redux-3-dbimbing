const initialState = {
   counter: 0,
   showCounter: true,
};

const counterReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'counter/increment':
         return { ...state, counter: state.counter + action.payload };
      case 'counter/decrement':
         return { ...state, counter: state.counter - action.payload };
      case 'counter/incrase':
         return { ...state, counter: state.counter + action.payload };
      case 'counter/toggle':
         return { ...state, showCounter: !state.showCounter };
      default:
         return state;
   }
};

export const increment = (num) => {
   return {
      type: 'counter/increment',
      payload: num,
   };
};

export const decrement = (num) => {
   return {
      type: 'counter/decrement',
      payload: num,
   };
};

export const toggle = () => {
   return {
      type: 'counter/toggle',
   };
};

export const incrase = (num) => {
   return {
      type: 'counter/incrase',
      payload: num,
   };
};

export default counterReducer;
