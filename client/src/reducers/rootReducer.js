import { composeWithDevTools } from "redux-devtools-extension";

const initState = {
message: "Hello World"
}

// export const sayHello = () => ({
//     type: "HELLO_WORLD"
// })

const rootReducer = (state = initState, action) => {
 
      return state;
  }

export default rootReducer;
