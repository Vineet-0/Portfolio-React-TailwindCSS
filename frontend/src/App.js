import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';

import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/shared/Header.jsx'
import Footer from './components/shared/Footer.jsx'
// import useScrollToTheTop from './hooks/useScrollToTheTop.jsx';

const AboutMe = lazy(() => import('./pages/AboutMe.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));

function App() {
    return (
        
            <AnimatePresence>
                <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
                    <div className="dot-grid-container w-full min-h-screen">
                        <Router>
                            <ScrollToTop />
                            <Header />
                            <Suspense fallback={""}>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="projects" element={<Projects />} />
                                    <Route
                                        path="projects/single-project"
                                        element={<ProjectSingle />}
                                    />

                                    <Route path="about" element={<AboutMe />} />
                                    <Route path="contact" element={<Contact />} />
                                </Routes>
                            </Suspense>
                            <Footer />
                        </Router>
                        
                        {/* <UseScrollToTheTop /> */}
                    </div>
                </div>
            </AnimatePresence>
    );
}

export default App;
