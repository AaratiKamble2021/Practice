import { loop, Cmd } from 'redux-loop';
import { actions, successAction } from './actions';
import { fetchIngredientsEffect } from './effects';


export const initialState = {
  ingredients: [],
  loading: false
};

const handleFetch = (state:any) => {
    console.log("fetch Succeeedd")
  const loadingState = {
    loading: true,
    ingredients: state.ingredients
  };

  //side effect description
  const cmd = Cmd.run(fetchIngredientsEffect, {
    successActionCreator: successAction
  });

  return loop(loadingState, cmd);
};

const handleSuccess = (state:any, action:any) => {
    console.log("Succeeedd")
  return {
    // loading: false,
    // ingredients: action.ingredients
    
  }
};


const reducer = (state = initialState, action:any) => {
  switch (action.type) {
    case actions.fetch:
      return handleFetch(state);  
    case actions.success:
      return handleSuccess(state, action)
    default:
      return state;
  }
};

export default reducer;