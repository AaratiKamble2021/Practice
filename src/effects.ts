  
const url = 'http://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=9cd0ec3941a057ca0741c2bf3ff6494c';

export const fetchIngredientsEffect = () => {
  return fetch(url).then(resp => resp.json()).then(resp => {
    // return Object.values(resp).map((ingredient:any) => {
    //   return {
    //     name: ingredient.data,
        
    //   }
    // })
    console.log("response..",resp.data)
  });
};