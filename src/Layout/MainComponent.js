import React from 'react';
import HeaderComponent from '../Layout/HeaderComponent';
import FooterComponent from './FooterComponent';

export default class MainComponent extends React.Component{
    render(){
        return(
            <div>
                <HeaderComponent/>
                <div className="layout-min-height">

                </div>
                <FooterComponent/>
            </div>
        )
    }
}