import React from 'react';
import {Redirect, Route , Switch} from 'react-router-dom';
import routes from '../routes';


class MainComponent extends React.Component{
    render(){
        return(
            <div>
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component ? (<Route key={idx} path={route.path}
                                exact = {route.exact}
                                name = {route.name}
                                render = {props => (
                                    <route.component { ...props} />
                                )}
                                />)
                                    :(null);
                        },
                        )}
                        <Redirect from="/" to="/homeshabu" />
                    </Switch>
            </div>
        )
    }
}
export default MainComponent;