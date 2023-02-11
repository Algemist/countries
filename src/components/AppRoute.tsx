import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';

const AppRoute = () => (
    <Routes>
        {Object.values(routeConfig).map((el) => (
            <Route
                key={el.path}
                path={el.path}
                element={el.element}
            />
        ))}
    </Routes>
);

export default AppRoute;
