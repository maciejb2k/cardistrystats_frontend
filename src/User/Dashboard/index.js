import {compose} from "redux";
import {connect} from "react-redux";

import Dashboard from "./Dashboard";
import {toggleNav} from "./actions";

const mapStateToProps = ({userDashboard}) => ({
  appState: userDashboard,
});

const mapDispatchToProps = {
  toggleNav,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhancer(Dashboard);
