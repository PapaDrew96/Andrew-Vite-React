// Third-party imports
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Style imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Contexts
import { AuthProvider } from './context/AuthContext';

// Components
import PopUpMenu from './components/PopUpMenu/PopUpMenu';

// Lazy-loaded components
const HomePageHeader = lazy(() => import('./components/HomePageHeader/HomePageHeader'));
const LogInButton = lazy(() => import('./components/LogInButton/LogInButton'));
const SignUpButton = lazy(() => import('./components/SignUpButton/SignUpButton'));
const LoginForm = lazy(() => import('./components/LoginForm/LoginForm'));
const SignUpForm = lazy(() => import('./components/SignUpForm/SignUpForm'));
const AboutUsPage = lazy(() => import('./components/pages/AboutUsPage/AboutUsPage'));
const AboutTimeCapsulePage = lazy(() => import('./components/pages/AboutTimeCapsulePage/AboutTimeCapsulePage'));
const PapadrewToolsPage = lazy(() => import('./components/pages/PapadrewToolsPage/PapadrewToolsPage'));
const ComingSoonPage = lazy(() => import('./components/pages/ComingSoonPage/ComingSoonPage'));
const FileUploadPage = lazy(() => import('./components/pages/FileUploadPage/FileUploadPage'));

function App() {
  return (
    <AuthProvider>
      <Router>
        <PopUpMenu />
        <div className="App">
          <Suspense fallback={<div>Loading...</div>}>
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
              {/* Auth routes */}
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignUpForm />} />
              
              {/* Static pages */}
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/about-time-capsule" element={<AboutTimeCapsulePage />} />
              <Route path="/papadrew-tools" element={<PapadrewToolsPage />} />
              <Route path="/coming-soon" element={<ComingSoonPage />} />
              
              {/* Feature pages */}
              <Route path="/upload" element={<FileUploadPage />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
