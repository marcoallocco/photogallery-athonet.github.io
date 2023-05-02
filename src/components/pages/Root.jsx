import { Outlet, useNavigation } from 'react-router-dom';

import MainNavigation from '../common/MainNavigation';
import MainFooter from '../common/MainFooter';

function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
        <div id="arrowUpToTop"></div>
      </main>
      <MainFooter />
    </>
  );
}

export default RootLayout;
