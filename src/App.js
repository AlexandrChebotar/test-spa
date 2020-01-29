import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import CoursesList from './pages/CoursesList';
import StudentsList from './pages/StudentsList';
// import {initApp} from './store/actions';

import './App.scss';

// const mapDispatchToProps = (dispatch) => {
//   return {    
//     initApp: () => dispatch(initApp()),
//   }
// };

const App = ({initApp}) => {
  // useEffect(initApp, []);
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Switch className="content">
          <Redirect from="/" to="/courses" exact/>
          <Route path="/courses/:courseId" component={StudentsList} exact />
          <Route path="/courses" component={CoursesList} exact />
          <Redirect from="/courses" to="/courses"/>

          <Route path="/students/:studentId" component={CoursesList} exact />
          <Route path="/students" component={StudentsList} exact />
          <Redirect from="/students" to="/students"/>

          <Route path="/404" exact render={() => <p>Error 404: page not found</p>} />
          <Redirect from="/" to="/404"/>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
// export default connect(null, mapDispatchToProps)(App);
