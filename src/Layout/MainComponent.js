import React from 'react';
import HeaderComponent from '../Layout/HeaderComponent';
import FooterComponent from './FooterComponent';
import {Redirect, Route , Switch} from 'react-router-dom';
import routes from '../routes';


class MainComponent extends React.Component{
    render(){
        return(
            <div>
                <div className="padding-tracking">
                    <HeaderComponent/>  
                </div>
                
                <div className="layout-min-height">
                
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
                        <Redirect from="/" to="/tracking" />
                    </Switch>
                
                </div>

                <div>
                    <FooterComponent/>
                </div>
                
            </div>
        )
    }
}
export default MainComponent;