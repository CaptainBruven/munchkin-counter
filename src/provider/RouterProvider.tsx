import { Route, Router } from '@solidjs/router';
import Layout from '../layout/Layout';
import Default from '../pages/default/Default';
import TeamCreation from '../pages/teamCreation/TeamCreation';

const RouterProvider = () => {
    return (
        <Router root={Layout}>
            <Route path="/">
                <Route path="team" component={TeamCreation} />
                <Route path="*" component={Default} />
            </Route>
        </Router>
    )
}

export default RouterProvider;