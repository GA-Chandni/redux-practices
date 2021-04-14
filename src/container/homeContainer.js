//Conncet package
import {connect} from 'react-redux';

//Custom files
import Home from '../components/home';

//Action Files
import {addToCart,RemoveToCart} from '../services/action/action';

//calling state from reducer 
const mapStateToProps=state => ({ 
    //for multiple object we are removing cardData
    data:state.CartItems
});

//calling action 
const mapDispatchToProps =dispatch=>({
    addToCartHandler:data =>dispatch(addToCart(data)),
    RemoveToCartHandler:data =>dispatch(RemoveToCart(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(Home)




























