import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {resetPhoto, getPhotosStart} from '../redux/slices/photoSlice'


function useSearchPhoto(query, pageNum, after) {
  const [isLoading, setIsLoading] = useState(false);
  const [funcError, setFuncError] = useState(false);
  const [Photos, setPhotos] = useState([]);

  const dispatch = useDispatch();
  const { querySaved } = useSelector((state) => state.photogallery);
  const { error } = useSelector((state) => state.photogallery);

  useEffect(() => {
    setPhotos([]);
  }, [query, querySaved]);

  useEffect(() => {
    setFuncError(false);
    
    if (query != querySaved) {
      dispatch(resetPhoto())
      after = "";
    } 

    if(query != "" && query.length > 2) {
      if (after != null) {
        let data = {query: query, after: after}   
        dispatch(getPhotosStart(data)) 
      } 
    }
  }, [query, pageNum]);

  return { isLoading, error, Photos };
}

export default useSearchPhoto;
