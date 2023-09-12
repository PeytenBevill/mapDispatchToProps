import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { deleteCar } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cars: state.cars
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCar: (index) => dispatch(deleteCar(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)