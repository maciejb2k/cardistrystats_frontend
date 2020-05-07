import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {FiEdit, FiMaximize2, FiVideo, FiPlus} from "react-icons/fi";
import Carousel, {Modal as GalleryModal, ModalGateway} from "react-images";
import Modal from "react-modal";

import {ROUTES} from "App/constants";
import {categoryToText, skillLevelToText} from "App/__helpers__/flourishes";
import {confirmErrorDialog} from "App/__helpers__/alerts/";

import FlourishesProgressBar from "User/Dashboard/__components__/FlourishesProgressBar";
import PageLoader from "User/Dashboard/__components__/PageLoader";

import AddTrackingForm from "./__components__/AddTrackingForm";

import {
  TimelineDotStart,
  TimelineDotClickable,
  TimelineProgress,
  TimelineArrowStart,
  TimelineArrowEnd,
} from "./__styles__/FlourishesPreview.styled";

import styles from "./__styles__/FlourishesPreview.module.scss";

export default function FlourishesPreview(props) {
  const {getFlourishData, deletePhoto, addPhoto, addTracking, deleteTracking} = props;
  const {appState: {isLoading, flourishData, flourishGallery, flourishTracking}} = props;

  const {id: routerFlourishId} = useParams();
  const history = useHistory();

  const [isAddTrackingOpen, setIsAddTrackingOpen] = useState(false);
  const [progress, setProgress] = useState(-1);
  const [galleryPhotos, setGalleryPhotos] = useState([]);
  const [isGalleryEdit, setIsGalleryEdit] = useState(false);
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    selectedIndex: 0,
  });

  useEffect(() => {
    const validateFlourishId = (id) => {
      if (id.trim().length === 0) {
        return false;
      }
      if (Number.isNaN(Number(id))) {
        return false;
      }
      return true;
    };

    if (validateFlourishId(routerFlourishId)) {
      getFlourishData(routerFlourishId);
    }
    else {
      history.push(ROUTES.USER.FLOURISHES.LIST);
    }
  }, [getFlourishData, history, routerFlourishId]);

  useEffect(() => {
    if (flourishTracking.length) {
      setProgress(
        skillLevelToText(flourishTracking[0].skill_level)[1]
      );
    }
    return () => {
      setProgress(-1);
    };
  }, [flourishTracking]);

  useEffect(() => {
    const gallery = flourishGallery.map((item, index) => {
      return {
        src: item.photo,
      };
    });

    setGalleryPhotos(gallery);
  }, [flourishGallery]);


  const toggleLightbox = (selectedIndex) => {
    setLightboxState({
      isOpen: !lightboxState.isOpen,
      selectedIndex,
    });
  };

  const toggleGalleryEdit = (e) => {
    e.preventDefault();
    setIsGalleryEdit(!isGalleryEdit);
  };

  const submitGalleryPhoto = (e) => {
    if (e.target.files.length) {
      const photo = e.target.files[0];
      addPhoto({
        photo,
        id: flourishData.id,
      });
    }
  };

  const deleteGalleryPhoto = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const id = e.target.attributes.rowid.value;

    if (e.target.attributes.hasOwnProperty("rowid")) {
      confirmErrorDialog("Confirm Deletion", "You won't be able to revert this action.")
        .then((res) => {
          if (res.value) {
            deletePhoto(id);
            setIsGalleryEdit(!isGalleryEdit);
          }
        });
    }
  };

  const toggleTrackingModal = (e) => {
    e.preventDefault();
    setIsAddTrackingOpen(!isAddTrackingOpen);
  };

  const submitTrackingForm = (values) => {
    addTracking({
      video_link: values.video_link,
      what_improved: values.what_improved,
      skill_level: values.skill_level,
      id: flourishData.id,
    });
    setIsAddTrackingOpen(!isAddTrackingOpen);
  };

  const deleteTrackingItem = (e) => {
    if (e.currentTarget.attributes.hasOwnProperty("data-rowid")) {
      const id = Number(e.currentTarget.attributes["data-rowid"].value);

      confirmErrorDialog("Confirm Deletion", "You won't be able to revert this action.")
        .then((res) => {
          if (res.value) {
            deleteTracking(id);
          }
        });
    };
  };

  return isLoading ? <PageLoader /> : (
    <div className={styles["FlourishWrapper"]}>
      <div className={styles["Flourish"]}>
        <div className={styles["Main"]}>
          <h1 className={styles["Main-title"]}>
            {flourishData.name}
          </h1>
          <div className={styles["Main-infoSection"]}>
            <p className={styles["Main-info"]}>
              Category:
              <span className={styles["Main-infoBold"]}>
                {categoryToText(flourishData.category)}
              </span>
            </p>
            <p className={styles["Main-info"]}>
              Creator:
              <span className={styles["Main-infoBold"]}>
                {flourishData.creator}
              </span>
            </p>
          </div>
          <FlourishesProgressBar progress={progress} />
          <p className={styles["Main-desc"]}>
            {flourishData.desc}
          </p>
        </div>
        <div className={styles["Gallery"]}>
          <header className={styles["GalleryHeader"]}>
            <div className={styles["GalleryHeader-texts"]}>
              <h2 className={styles["GalleryHeader-title"]}>Gallery</h2>
            </div>
            <div className={styles["GalleryHeader-buttons"]}>
              <button
                disabled={flourishGallery.length === 0 ? true : false}
                onClick={toggleGalleryEdit}
                className={`
                  ${styles["GalleryButton"]} 
                  ${styles["GalleryButton-edit"]} 
                  ${isGalleryEdit ? `${styles["GalleryButton-edit--active"]}` : ""}`}>
                <FiEdit />
              </button>
              <div className={styles["FileUpload"]}>
                <input
                  onChange={submitGalleryPhoto}
                  disabled={flourishGallery.length === 5 ? true : false}
                  className={styles["FileUpload-input"]}
                  type="file"
                  name="photo"
                  id="UploadPholto"
                />
                <label
                  className={styles["FileUpload-label"]}
                  htmlFor="UploadPholto">
                  <FiPlus />
                </label>
              </div>
            </div>
          </header>
          <div className="row">
            {flourishGallery.map((photo, photoIndex) => (
              <div key={photoIndex} className="col-md-6">
                <figure onClick={() => toggleLightbox(photoIndex)} className={styles["Photo"]}>
                  {isGalleryEdit ? (
                    <button
                      onClick={deleteGalleryPhoto}
                      rowid={photo.id}
                      className={styles["Photo-deleteButton"]}
                    >
                      X
                    </button>
                  ) : null}
                  <img className={styles["Photo-image"]} src={photo.photo} alt="" />
                  <div className={styles["Photo-overlay"]}>
                    <FiMaximize2 />
                  </div>
                </figure>
              </div>
            ))}
          </div>
          {!flourishGallery.length
            ? (<p className={styles["Gallery-note"]}>You haven't uploaded any photos yet.</p>)
            : (<p className={styles["Gallery-note"]}>You can upload up to 5 photos.</p>)
          }
        </div>
      </div>
      <div className={styles["Tracking"]}>
        <header className={styles["TrackingHeader"]}>
          <h2 className={styles["TrackingHeader-title"]}>
            <span className={styles["TrackingHeader-title--light"]}>Progress</span> Tracking
          </h2>
          <p className={styles["TrackingHeader-desc"]}>Track progress of current flourish using this timeline.</p>
        </header>
        <div className={styles["Timeline"]}>
          <div className={styles["TimelineEnd"]}>
            <TimelineArrowEnd />
            <div className={styles["TimelineEnd-content"]}>
              <button onClick={toggleTrackingModal} className={styles["TimelineEnd-add"]}>
                <FiPlus />
              </button>
              <p className={styles["TimelineEnd-text"]}>
                Add new tracking point.
              </p>
            </div>
          </div>
          {flourishTracking.map((item, index) => (
            <div key={index} className={styles["TimelineFragment"]}>
              <TimelineDotClickable
                onClick={deleteTrackingItem}
                data-rowid={item.id}
                order={flourishTracking.length - index}
                progress={skillLevelToText(item.skill_level)[2]}
              />
              <h3 className={styles["TimelineFragment-title"]}>
                {skillLevelToText(item.skill_level)[0]}
                <TimelineProgress progress={skillLevelToText(item.skill_level)[2]}>
                  - {skillLevelToText(item.skill_level)[1]}%
                </TimelineProgress>
              </h3>
              <p className={styles["TimelineFragment-date"]}>{item.date.split("T")[0]}</p>
              <p className={styles["TimelineFragment-desc"]}>
                <span className={styles["TimelineFragment-desc--note"]}>Note:</span>
                "{item.what_improved}"
              </p>
              {item.video_link
                ? (
                  <a href={item.video_link} target="blank" rel="noopener" className={styles["TimelineFragment-video"]}>
                    <FiVideo />
                  </a>
                )
                : null}
            </div>
          ))}
          <div className={styles["TimelineStart"]}>
            <TimelineDotStart />
            <TimelineArrowStart />
            <p className={styles["TimelineStart-text"]}>
              And the journey with this flourish started...
            </p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isAddTrackingOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsAddTrackingOpen(false)}
        closeTimeoutMS={200}
        className={styles["TrackingModal"]}
        overlayClassName={styles["TrackingModalOverlay"]}
      >
        <AddTrackingForm
          onSubmit={submitTrackingForm}
        />
      </Modal>

      <ModalGateway>
        {lightboxState.isOpen && !isLoading ? (
          <GalleryModal onClose={toggleLightbox}>
            <Carousel
              currentIndex={lightboxState.selectedIndex}
              views={galleryPhotos}
              frameProps={{
                accessibility: true,
              }}
              styles={{
                view: (base) => ({
                  ...base,
                  "alignItems": "center",
                  "display": "flex ",
                  "height": "calc(100vh)",
                  "justifyContent": "center",

                }),
              }}
            />
          </GalleryModal>
        ) : null}
      </ModalGateway>
    </div >
  );
}
