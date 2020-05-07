import {compose} from "redux";
import {connect} from "react-redux";

import FlourishesAdd from "./FlourishesAdd";
import {addNewFlourish} from "./actions";

const mapStateToProps = ({addFlourish}) => ({
  appState: addFlourish,
});

const mapDispatchToProps = {
  addNewFlourish,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhancer(FlourishesAdd);
