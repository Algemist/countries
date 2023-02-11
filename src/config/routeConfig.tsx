import {RouteProps} from "react-router-dom";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import HomePage from "../pages/Homepage/HomePage";

export enum AppRoutes {
    MAIN = 'main',
    DETAILS = 'details',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.DETAILS]: '/country/:name',
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <HomePage />,
    },
    [AppRoutes.DETAILS]: {
        path: RoutePath.details,
        element: <DetailsPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    }
};
