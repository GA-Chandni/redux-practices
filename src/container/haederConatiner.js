import {connect} from 'react-redux'
import Header from '../components/header'

const mapStateToProps=state => ({ 
    //for multiple object we are removing cardData
    data:state.CartItems
})
//calling action 
const mapDispatchToProps =dispatch=>({
    //not required for remove function
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)





