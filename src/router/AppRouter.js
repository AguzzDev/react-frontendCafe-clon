import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        path="/"
                        component={DashboardRoutes}
                    />
                </Switch>
            </div>
        </Router>
    )
}
