import { connect } from 'react-redux';
import HomeComponent from '../componentScreen/HomeComponent';
const mapStateToProps = (state) => {
    return {
        date: state.SettingReducer.date
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeComponent);