import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import About from './components/about/About';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import Profile from './components/profile/Profile';
import OnlCourses from './components/onlcourses/OnlCourses';
import GetCertificate from './components/getcertificate/GetCertificate';
import './App.css';
import { UserProvider } from './contexts/UserContext';
import Layout from './Layout'; // Import the layout component

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route path='/about' exact>
            <Layout>
              <About />
            </Layout>
          </Route>
          <Route path='/courses' exact>
            <Layout>
              <CourseHome />
            </Layout>
          </Route>
          <Route path='/team' exact>
            <Layout>
              <Team />
            </Layout>
          </Route>
          <Route path='/pricing' exact>
            <Layout>
              <Pricing />
            </Layout>
          </Route>
          <Route path='/login' exact>
            <Login />
          </Route>
          <Route path='/signup' exact>
            <SignUp />
          </Route>
          <Route path='/profile' exact>
            <Profile />
          </Route>
          <Route path='/contact' exact>
            <Layout>
              <Contact />
            </Layout>
          </Route>
          <Route path='/onlcourses' exact>
            <OnlCourses />
          </Route>
          <Route path='/get-certificate' exact>
            <Layout>
              <GetCertificate />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;