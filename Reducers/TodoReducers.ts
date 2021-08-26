import { Cmd, loop } from 'redux-loop'
import { fetchWeather,weatherFetchSuccessfulAction,weatherFetchFailedAction } from '../Actions/index';
const initialState ={
    list:[],
    initStarted: false,
}




const TodoReducers =(state=initialState,action:any)=>{
    console.log("In TodoReducers  ");
    switch(action.type){
        case "FETCH_DATA" :
             // const{id, data} = action.payload;
            return loop(
                { ...state, initStarted: true },
                Cmd.run(fetchWeather, {
                     args:[],
                    successActionCreator: weatherFetchSuccessfulAction,
                    failActionCreator: weatherFetchFailedAction

                })
            );

         case "DATA_FETCH_SUCCESSFUL":
             
            return { ...state, list: action.data };
            

         case "DATA_FETCH_FAILED":
             console.log("failed....")
            return { ...state, error: action.error };

        //    default: return state
            
    }
    return state;

} 
// function TodoReducers(state = initialState, action:any) {
//     switch(action.type) {
//     case 'INIT':
//       return loop(
//         {...state, initStarted: true},
//         Cmd.run(fetchUser, {
//           successActionCreator: userFetchSuccessfulAction,
//           failActionCreator: userFetchFailedAction,
//           args: ['123']
//         })
//       );
  
//     case 'USER_FETCH_SUCCESSFUL':
//       return {...state, user: action.user};
  
//     case 'USER_FETCH_FAILED':
//       return {...state, error: action.error};
  
//     default:
//       return state;
//     }
//   }


export default TodoReducers;