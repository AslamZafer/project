import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getEmailId, getPassword, getError, getIsLoading, loginAction } from "../../redux/reducers/login";

import Loginpage from './LoginPage.Components';


const mapStateToProps = createStructuredSelector({
  email: getEmailId,
  password: getPassword,
  error: getError,
  loading: getIsLoading
})

const mapDispatchToProps = {
  login: loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Loginpage);