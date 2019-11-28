import React from 'react';
import Loadable from 'react-loadable';
import MainComponent from './Layout/MainComponent';

function Loading(){
    return <div>Loading...</div>;
}

const Tracking = Loadable({
    loader: () => import ('./Tracking/Tracking'),
    loading: Loading,
});


const routes =[
    { path: '/', exact: true, name: "Home", component: MainComponent },
    { path: '/tracking', name: 'Tracking', component: Tracking },
];

export default routes;