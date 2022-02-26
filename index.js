//////////// initialize the redux library//////////////
const redux = require("redux");
//////////// Create Store ////////////////////////////
const createStore = redux.createStore();
///////////Create Action for redux///////////

const BYE_Cakes = "bye_Cakes";

function byeCake() {
  return {
    type: "BYE_Cakes",
    info: "This is first Action writen by me!",
  };
}
/////////Create State for Redux//////////////
const initialState = {
  numOfCakes: 10,
};
//////////////Create Reducer For redux/////////////
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BYE_Cakes:
      return {
        ...state,
        rumOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
/////////////// use of createStore method. It Accept reducer function as a parameter///////
const store = createStore(reducer);
console.log("Initial", store.getState());
/////////////Add restener to store//////////
//store.subscribe(() => console.log(store.getState()));
//////////// unsubscribe method for end listener////////
const unsubscribe = store.subscribe(() => console.log);
//////////// now dispatch the the action/////////////
store.dispatch(byeCake());
store.dispatch(byeCake());
store.dispatch(byeCake());

unsubscribe();
