import { useReducer } from "react";

// function reducer(state : any , action : any){

//     switch (action.type){
//         case 'INCREMENT' :
//             return state + 1;
//         case 'DECREMENT' : 
//             return state - 1;
//         default :
//             return state;
//     }
    
// }

function reducer(state : any, action : any) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  }

const Counter = () => {
    const [number, dispatch] = useReducer(reducer, 0);


    const onIncrement = () => {
        console.log("실행중.")
        dispatch({type:'INCREMENT'});
    }

    const onDecrement = () => {
        dispatch({type:"DECREMENT"});
    }

    return(
        <div>
        <h1>{number}</h1>
        <button onClick={onIncrement}> +1 </button>
        <button onClick={onDecrement}> -1 </button>
        </div>

    )
}

export default Counter;
