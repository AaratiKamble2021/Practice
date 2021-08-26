import React,{Component} from 'react'
import {View ,Button,Text} from 'react-native'
import { initAction }  from '../Actions/index'
import { fetchAction } from '../src/actions';
import {connect} from 'react-redux';
import { AnyAction, bindActionCreators } from 'redux';

interface dispatchAdd{
  
    fetchIngredients:any
  
  }

class Home extends Component<dispatchAdd>{
    
    componentWillMount(){
    this.props.fetchIngredients()        
        
    }
    render()
    {
        return(
            <View>
               
                <Text>Hii</Text>
            </View>
        );
    }
}

// function mapStateToProps(state:any){
   
//     return{
//          weatherList:state.TodoReducers
//       }
    
    
//   }
// const mapDispatchToProps = (dispatch:any) => bindActionCreators({ initAction }, dispatch);
// export default connect(mapStateToProps, mapDispatchToProps)(Home)
const mapStateToProps = (state:any) => {
    return {
      loading: state.loading,
      ingredients: state.ingredients
    };
  };
  
  const mapDispatchToProps = (dispatch:any) => {
    return {
      fetchIngredients: () => dispatch(fetchAction())
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
  