import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useQuery} from '@apollo/client';
import {media} from './gql/Query';

// Components
import { Navbar }from './components/Navbar';
import { MusicPlayer } from './components/MusicPlayer';
import { Loading } from './components/Loading';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Residents from './pages/Residents';
import Resident from "./pages/Resident";
import Mixes from "./pages/Mixes";
import Contact from './pages/Contact';
import Mix from "./pages/Mix";
import Play from "./pages/Play";

// Styling & Assets
import '../src/styling/_app.scss';
import ScrollToTopOnRouteChange from './components/ScrollToTop';
import { Error } from './components/Error';

const routes = [
    { path: '/', name: 'home', element: <Home /> },
    { path: '/about', name: 'about', element: <About /> },
    { path: '/residents', name: 'residents', element: <Residents /> },
    { path: '/mixes', name: 'Mixes', element: <Mixes/>},
    { path: '/residents/:name', name: 'resident', element: <Resident/>},
    { path: '/play', name: 'Play', element: <Play/>},
    { path: '/contact', name: 'contact', element: <Contact /> },
    { path: '/mixes/:slug', name: 'mix', element: <Mix/>}
];

export const App = () => {
  const { error, loading } = useQuery(media);
  const [showLoading, setShowLoading] = useState(true);

  // const { audioUrl } = useSelector((state: any) => state.media)
  const mediaState = useSelector((state: any) => state.media);
  const audioUrl = mediaState.audioSource;

  useEffect(() => {
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 0);
      return () => clearTimeout(timer);
    }, []);

  if (showLoading || loading) {
      return <Loading />
  }

    if (error) {
        return <Error/>;
    }

    return (
        <Router>
          <ScrollToTopOnRouteChange/>
            <Navbar routes={routes}/>
            <div className="page-container background fade-in">
                <div className="route-container">
                    <Routes>
                        {routes.map((route, index) => (
                            <Route key={index} path={route.path} element={route.element}/>
                        ))}
                    </Routes>
                </div>
                <MusicPlayer/>
            </div>
        </Router>
    );
}

export default App;
