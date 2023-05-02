import classes from './MainFooter.module.scss';
import Container from '../UI/Container'

const MainFooter = () => {
    return (
        <>
            <footer className={classes.mainFooter} id="main-footer">
                <Container>
                    <div className='row'>
                        <div className='col-12'>
                            <p>FOOTER</p>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    );
  }
  
  export default MainFooter;

