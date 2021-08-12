import './App.css';
import { Route, Switch} from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import { Container } from 'react-bootstrap';
import CardList from '../CardList/CardList';
import SettingCards from '../SettingCards/SettingCards';

function App() {
  return (
    <div className="d-flex justify-content-center">
      <Navigation />
      <Container style={{ marginTop: '100px' }}>
        <Switch>
          <Route exact path="/">
            <CardList/>            
          </Route>
          <Route exact path="/setting">
            <SettingCards/>
          </Route>      
        </Switch>
      </Container>
    </div>
  );
}

export default App;
