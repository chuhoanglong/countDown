import { convertDate } from '../redux/rootAction';
import { connect } from 'react-redux';
import SettingComponent from '../componentScreen/SettingComponent';
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        convertDate: (year, month, day) => {
            dispatch(convertDate(year, month, day));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingComponent);