import { Route, Switch } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';

export function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile/:name" component={Profile} />
    </Switch>
  );
}