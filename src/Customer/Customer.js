import React from 'react';
import Showdata from './Showdata';

export default class Customer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: [],
        }

      
       
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        let url = "http://localhost/flash_express/customers/fetchall";
        fetch(url)
        .then(res => res.json())
        .then(result => {
            this.setState({
                data: result
               
            });
            //console.log('data:'+ this.state.data);
            
        },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render(){
        return(
            <div>
                <Showdata DataRecords={this.state.data}/>
            </div>
        )
    }
}