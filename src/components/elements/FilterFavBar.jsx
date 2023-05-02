import { useDispatch } from 'react-redux';
import Modal from "./Modal";
import useModal from "../../hooks/useModal";
import {resetFavs} from '../../redux/slices/photoSlice'

function FilterFavBar(props) {
    const dispatch = useDispatch();
    const { isActive, handleModal } = useModal();
    
    const handleModalDelete = (event) => {
        event.preventDefault()
        dispatch(resetFavs()) 
    }
    return (
        <>
        <div className="filter-bar d-flex justify-between w-100 md-flex-column">
            <div className="d-flex align-center">
                <span className="icon-filter-solid" />
                <span>FILTER BY:</span>
                <ul className='fav-filter-list'>
                    {props.uniqueCategory.map((cat, i) => {
                        return (
                            <li key={i} className={`fav-filter-item ${props.selectedIndex === i ? "active" : ""}`}>
                                <button className="btn btn--label" onClick={(e) => props.handleFavourites(e,i)} value={cat}>{cat}</button>
                        </li>
                        )
                    })}
                    <li key={Math.random(999)} className={`fav-filter-item ${props.selectedIndex === -1 ? "active" : ""}`}>
                        <button className="btn btn--label" onClick={(e) => props.handleFavourites(e,-1)} value="all">all</button>
                    </li>
                </ul>
            </div>
            <button className="btn" onClick={() => handleModal(true)}><span className="icon-trash-can-regular"></span> All</button>
        </div>
        {isActive && (
            <Modal
              isDeleteModal="true"
              isDelete={true}
              isActive={isActive}
              handleModal={handleModal}
              handleModalDelete={handleModalDelete}
            />
          )}
        </>
    );
  }
  
  export default FilterFavBar;

