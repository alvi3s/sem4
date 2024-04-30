import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from "react-dom/client";
import Message from "./message";
import Content from "./content";
import Carrusel from "./carrusel";

const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Single from './single';
import Basic from './layout/basic';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Basic />,
        children: [
            {
                path: '',
                element: <>
                   
                    <div className="row">
                        <div className="col-md-6">

                            <Carrusel></Carrusel>
                            <Message></Message>
                        </div>

                        <div className="col-md-3">
                            <h2>Rellene el formulario de inscripción</h2>
                            <Content></Content>
                        </div>
                    </div>

                    
                </>
            },
            {
                path: "/detalle/:slug",
                element: <Single />,
            },
        ],
    },

]);

const root = createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
)