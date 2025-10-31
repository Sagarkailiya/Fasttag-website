import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Mainlayout from './layout/mainlayout';
import Home from './pages/home';
import GoogleSignIn from './pages/signin/signin';
import { Toaster } from 'react-hot-toast';
import Account from './components/account/account';
import TermsAndConditions from './components/termandcondition/term';
import PrivacyPolicy from './components/privacy/privacy';

function App() {
  return (
    <BrowserRouter>
     <Toaster
        // position="top-right"
        toastOptions={{
          success: { style: { background: "#10B981", color: "#fff" } },
          error: { style: { background: "#EF4444", color: "#fff" } },
        }}
      />
      <Routes>
        <Route path='/' element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path='/signin' element={<GoogleSignIn/>} />
          <Route path='/account' element={<Account/>}/>
          <Route path='/termandcondition' element={<TermsAndConditions/>}/>
          <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;