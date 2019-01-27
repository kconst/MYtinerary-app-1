
const initState = {
message: "Hello World"
}

const helloReducer = (state = initState) => {
console.log(state)
      return state;
  }

export default helloReducer;
