import { Route, Router } from '@solidjs/router';
import Layout from '../layout/Layout';

const RouterProvider = () => {
    return (
        <Router root={Layout}>
            <Route path="/">
            </Route>
        </Router>
    )
}

export default RouterProvider;