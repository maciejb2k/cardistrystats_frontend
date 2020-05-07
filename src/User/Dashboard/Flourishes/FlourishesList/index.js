import {compose} from "redux";
import {connect} from "react-redux";

import FlourishesList from "./FlourishesList";
import {fetchFlourishes, deleteFlourish} from "./actions";

const mapStateToProps = ({listFlourishes}) => ({
  appState: listFlourishes,
});

const mapDispatchToProps = {
  fetchFlourishes,
  deleteFlourish,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhancer(FlourishesList);
