import Auth from "./layouts/Auth"
import Admin from "./layouts/Admin";
import routes from "./routes/index";
import { BrowserRouter, Route } from "react-router-dom";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Providers from "./store/Providers";

function App() {
    return (
        <>
            <Providers>
                <BrowserRouter>
                    <Switch>
                        {routes.map((route,index) => {
                            switch (route.layout) {
                                case "admin":
                                    return (
                                        <Route exact path={route.path} key={index}>
                                            <Admin>
                                                <route.component />
                                            </Admin>
                                        </Route>
                                    );
                                case "auth":
                                    return (
                                        <Route exact path={route.path} key={index}>
                                            <Auth>
                                                <route.component />
                                            </Auth>
                                        </Route>
                                    );
                            }
                        })}
                        <Redirect to="/" />
                    </Switch>
                </BrowserRouter>
            </Providers>
        </>
    );
}

export default App;
