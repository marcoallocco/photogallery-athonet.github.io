import classes from './Photogallery.module.scss';
import Container from '../UI/Container'
import PageContent from '../PageContent'
import SearchBar from '../elements/SearchBar'
import PhotoItem from '../elements/PhotoItem'

import { useDispatch, useSelector } from "react-redux";
import {resetPhoto} from '../../redux/slices/photoSlice'
import {isValidHttpUrl, retrivePreview} from '../../utils/func'

import React, { useState, useRef, useCallback, useEffect } from "react";
import useSearchPhoto from "../../hooks/UseSearchPhoto";

const Photogallery = () => {

    const dispatch = useDispatch();
    const { photos } = useSelector((state) => state.photogallery);
    const { urlAfter } = useSelector((state) => state.photogallery);
    const { querySaved } = useSelector((state) => state.photogallery);
    const { loading } = useSelector((state) => state.photogallery);
    
    const [query, setQuery] = useState(querySaved);
    const [pageNum, setPageNum] = useState(1);

    const { error } = useSearchPhoto(query, pageNum, urlAfter);
    const observer = useRef();
    const lastPhotoElementRef = useCallback(
        (node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
            console.log("load altri")
            setPageNum((prev) => prev + 1);
            }
        });
        if (node) observer.current.observe(node);
        },
        [loading]
    );

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleReset = (e) => {
        setQuery("");
        dispatch(resetPhoto()) 
    }

    return (
        <>
            <PageContent>
                <Container>
                    <div className='row'>
                        <div className='col-12'>
                            {/* <h1 className="page-title">PHOTOGALLERY</h1> */}
                            <SearchBar inputValue={query} handleReset={handleReset} handleChange={handleChange}/>
                            <ul className="image-grid">
                                
                                {photos.map((photo, i) => {
                                    if (isValidHttpUrl(retrivePreview(photo))) {
                                        if (photos.length === i + 1) {
                                            return (
                                                <li key={i} ref={lastPhotoElementRef} className="image-item animate slide">
                                                    <PhotoItem {...photo} />
                                                </li>
                                            );
                                        } else {
                                            return (
                                                <li key={i}  className="image-item animate slide">
                                                    <PhotoItem {...photo} />
                                                </li>
                                            );
                                        }
                                    }
                                })}
                            </ul>
                            <div>{loading ? "Loading..." : photos.length === 0 ? "no items" : ''}</div>
                            {/* <div>{error && "Error..."}</div> */}

                        </div>
                    </div>
                </Container>
            </PageContent>
        </>
        
    );
  }
  
  export default Photogallery;