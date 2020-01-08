import React from 'react';
import Loadable from 'react-loadable';
import MainComponent from './Layout/MainComponent';

function Loading(){
    return <div>Loading...</div>;
}

const Homeshabu = Loadable({
    loader: () => import ('./Food/Homeshabu'),
    loading: Loading,
});



const routes =[
    { path: '/', exact: true, name: "Home", component: MainComponent },
    { path: '/homeshabu', name: 'Homeshabu', component: Homeshabu },
  

  
];

export default routes;