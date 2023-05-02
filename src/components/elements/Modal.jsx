let Modal = ({
    isDeleteModal,
    title,
    author,
    imgUrl,
    handleModal,
    handleModalDelete,
    isActive,
    ref
  }) => {
    return (
      <div ref={ref} className={`modal ${isActive ? "show" : ""} `} >
        <div className="modal-backdrop" onClick={() => handleModal(false)}></div>
        <div className={`modal-section ${isDeleteModal === "true" ? "small" : ""} `} onBlur={() => alert(1)}>
          <div className="modal-header">
            <button onClick={() => handleModal(false)}>X</button>
          </div>
          {isDeleteModal != "true" && 
            <div className="modal-body">
              <img src={imgUrl}></img>
              <div className="data-panel">
                  <label>Title:</label>
                  <p>{title}</p>
                  <label>Author:</label>
                  <p>{author}</p>
              </div>
            </div>
          }
          {isDeleteModal === "true" && 
            <div className="modal-body">
              <div className="panel-confirm">
                <h3 className="modal-header__title mt-0">Are you sure?</h3>
                <p>Lorem ipsum dolor sit amet</p>
                <button className="btn" onClick={() => handleModal(false)}>CANCEL</button>
                <button className="btn btn-orange" onClick={(e) => handleModalDelete(e)}>CONFIRM</button>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }

  export default Modal