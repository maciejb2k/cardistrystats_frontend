import {compose} from "redux";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";

import SignIn from "./SignIn";
import {signIn} from "Pages/Accounts/actions";

const mapStateToProps = ({accounts}) => ({
  appState: accounts,
});

const mapDispatchToProps = {
  signIn,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: "accountSignInForm",
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })
);

export default enhancer(SignIn);
