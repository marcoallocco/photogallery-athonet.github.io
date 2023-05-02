import classes from './PageContent.module.scss';

function PageContent({ title, children }) {

  return (
    <div className={classes.content}>
      {children}
    </div>
  );
}

export default PageContent;