import classes from './PhotoItem.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import {savePhoto, deletePhoto} from '../../redux/slices/photoSlice'
import {unEscape, retrivePreview} from '../../utils/func'

import Modal from "./Modal";
import useModal from "../../hooks/useModal";

const PhotoItem = (props) => {
    
    let unEscapedStr =unEscape(retrivePreview(props));
    const dispatch = useDispatch();
    const { favourites } = useSelector((state) => state.photogallery);
    
    let prefHandelerAdd = (event) => {
        dispatch(savePhoto(props))
    }
    let prefHandelerRemove = (event) => {
        dispatch(deletePhoto(props))
    }

    let favItems = favourites.map(a => a.data.thumbnail);
    let isIncluded = favItems.includes(props.data.thumbnail);
    const { isActive, handleModal } = useModal();

    return (
        <>
        {!isIncluded && <span onClick={prefHandelerAdd} className="icon-heart-regular"></span>}
        {isIncluded && <span onClick={prefHandelerRemove} className="icon-heart-solid"></span>}
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        <img src={unEscapedStr}   onClick={() => handleModal(true)}></img>
        <div className='meta-bar' onClick={() => handleModal(true)}>
            <p>{props.data.title}</p>
        </div>
        {isActive && (
            <Modal
              isActive={isActive}
              handleModal={handleModal}
              title={props.data.title}
              author={props.data.author}
              imgUrl={unEscapedStr}
            />
          )}
          </>
        );
  };
  
  export default PhotoItem;