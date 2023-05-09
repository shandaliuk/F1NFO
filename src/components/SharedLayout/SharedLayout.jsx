import { Outlet } from 'react-router-dom';
import { Header } from 'components/SharedLayout/Header/Header';
import { Footer } from 'components/SharedLayout/Footer/Footer';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
