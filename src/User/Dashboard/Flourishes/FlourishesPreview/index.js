import {compose} from "redux";
import {connect} from "react-redux";

import FlourishesPreview from "./FlourishesPreview";
import {
  getFlourishData,
  addPhoto,
  deletePhoto,
  addTracking,
  deleteTracking,
} from "./actions";

const mapStateToProps = ({previewFlourish}) => ({
  appState: previewFlourish,
});

const mapDispatchToProps = {
  getFlourishData,
  addPhoto,
  deletePhoto,
  addTracking,
  deleteTracking,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhancer(FlourishesPreview);

