import classes from './SearchBar.module.scss';

function SearchBar(props) {
  return (
    <div className={classes.searchBarWrapper}>
      <div className={classes.searchBarInput}>
        <input type="text" placeholder="search something..." onChange={(e) => props.handleChange(e)} value={props.inputValue} />
        {props.inputValue != "" && <button onClick={(e) => props.handleReset(e)} className={classes.reset}><span className='icon-delete-left-solid'></span></button>}
      </div>
    </div>
  );
}

export default SearchBar;