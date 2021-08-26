  
export const actions = {
    fetch: 'FETCH',
    success: 'SUCCESS',
  };
  
  export const fetchAction = () => {
      console.log("In init")
    return {
      type: actions.fetch,
    }
  };
  
  export const successAction = (ingredients:any) => {
    return {
      type: actions.success,
      ingredients: ingredients
    };
  };