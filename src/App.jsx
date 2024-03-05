import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {AuthProvider} from './context/AuthContext.jsx';
import PopUpMenu from './components/PopUpMenu/PopUpMenu.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const HomePageHeader = lazy(() => import('./components/HomePageHeader/HomePageHeader.jsx'));
const LogInButton = lazy(() => import('./components/LogInButton/LogInButton.jsx'));
const SignUpButton = lazy(() => import('./components/SignUpButton/SignUpButton.jsx'));
const LoginForm = lazy(() => import('./components/LoginForm/LoginForm.jsx'));
const SignUpForm = lazy(() => import('./components/SignUpForm/SignUpForm.jsx'));
const AboutUsPage = lazy(() => import('./components/pages/AboutUsPage/AboutUsPage.jsx'));
const AboutTimeCapsulePage = lazy(() => import('./components/pages/AboutTimeCapsulePage/AboutTimeCapsulePage.jsx'));
const PapadrewToolsPage = lazy(() => import('./components/pages/PapadrewToolsPage/PapadrewToolsPage.jsx'));
const ComingSoonPage = lazy(() => import('./components/pages/ComingSoonPage/ComingSoonPage.jsx'));
const FileUploadPage = lazy(() => import('./components/pages/FileUploadPage/FileUploadPage.jsx')); // Lazy-load FileUploadPage

function App() {
  return (
    <AuthProvider> 
      <Router>
        <PopUpMenu />
        <div className="App">
          <Suspense fallback={<div>Loading...</div>}> {/* Fallback component shown during load */}
            <Routes>
              <Route path="/" element={
                <>
                  <HomePageHeader />
                  <div className="buttons-container">
                    <SignUpButton />
                    <LogInButton />
                  </div>
                </>
              } />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/about-time-capsule" element={<AboutTimeCapsulePage />} />
              <Route path="/papadrew-tools" element={<PapadrewToolsPage />} />
              <Route path="/coming-soon" element={<ComingSoonPage />} />
              <Route path="/upload" element={<FileUploadPage />} /> 
            </Routes>
          </Suspense>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
