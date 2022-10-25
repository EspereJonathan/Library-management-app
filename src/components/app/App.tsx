import React, { useEffect} from 'react';
import { BrowserRouter as Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from '../Header';
import Homepage from '../../pages/Homepage';
import Bookspage from '../../pages/Bookspage';
import LogsPage from '../../pages/LogsPage';
import LoadToken from '../../api/LoadToken';
import UserPage from '../../pages/UserPage'; 
import LoanPage from '../../pages/LoanPage';
import { useSelector, useDispatch} from 'react-redux';
import { RootState } from '../../store/reducers';
import { setIsSignedInTrue } from '../../store/actions';

const App: React.FC = () => {
  const isSignedIn = useSelector((state: RootState)=>state.isSignedIn);
  const dispatch = useDispatch();
  useEffect( () => LoadToken(dispatch(setIsSignedInTrue)),[dispatch]);
  return (
    <>
      <Switch>
        { isSignedIn === false ? 
          <Route exact path="/"/>
        :
        <>
          <Header  />
          <Route exact path="/" component={Homepage}/>
          <Route path="/users" component={UserPage}/>
          <Route path="/books" component={Bookspage}/>
          <Route path="/loans" component={LoanPage}/>
          <Route path="/logs" component={LogsPage}/>
         </>
        }
      </Switch>
    </>
  );
}

export default App;
