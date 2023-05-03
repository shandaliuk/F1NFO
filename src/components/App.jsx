import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="schedule" />
        <Route path="standings" />
        <Route path="drivers-teams" />
      </Route>
    </Routes>
  );
};
