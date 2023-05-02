import React, { useState, useEffect } from "react";
import classes from './Favourites.module.scss';
import Container from '../UI/Container'
import PageContent from '../PageContent'
import { useDispatch, useSelector } from "react-redux";
import PhotoItem from '../elements/PhotoItem'
import FilterFavBar from '../elements/FilterFavBar'

const Favourites = () => {
    const dispatch = useDispatch();
    const { favourites } = useSelector((state) => state.photogallery);

    const uniqueCategory = [...new Set(favourites.map(item => item.data.subreddit))];
    const [filtredFavourites, setFiltredFavourites] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(-1);
      
    const filterFav = (filter) => {
    let filtredFavList = favourites.filter(type => type.data.subreddit === filter);
    return filtredFavList;
    }

    
    useEffect(() => {
        setFiltredFavourites(favourites);
    }, [favourites]);

    const handleFavourites = (e,index) => {
        let typeFav = e.target.value;
        typeFav !== "all"
        ? setFiltredFavourites(filterFav(typeFav))
        : setFiltredFavourites(favourites);
        setSelectedIndex(index)
    }

    

    return (
        <>
            <PageContent>
                <Container>
                    <div className='row'>
                        <div className='col-12'>
                            {/* <h1 className="page-title"><span className="t-red icon-heart-solid"></span> MY FAVOURITES PHOTOS</h1> */}
                            {favourites.length > 0 && <FilterFavBar selectedIndex={selectedIndex} uniqueCategory={uniqueCategory} handleFavourites={handleFavourites} /> }
                            <ul className="image-grid">
                                {filtredFavourites &&
                                filtredFavourites.map((fav, i) => {
                                    return (
                                        <li key={i} className="image-item animate slide">
                                        <PhotoItem {...fav} />
                                    </li>
                                    )
                                })}
                            </ul>
                            <div>{favourites.length === 0 && "no items"}</div>
                        </div>
                    </div>
                </Container>
            </PageContent>
        </>
        
    );
  }
  
  export default Favourites;