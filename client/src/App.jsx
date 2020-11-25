import React from 'react';
import LogIn from './Pages/SignIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import DailyLog from './Pages/DailyLog/DailyLog';

function App() {
  return (
    <div>
      <h1>
        <AppContextProvider>
          <Router>
            <Switch>
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/dailylog" component={DailyLog} />
            </Switch>
          </Router>
        </AppContextProvider>
      </h1>
    </div>
  );
}

export default App;
