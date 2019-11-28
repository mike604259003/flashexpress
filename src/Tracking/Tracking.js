import React from 'react';
import Search from './Search';
import Showdata from './Showdata';

export default class Tracking extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: [],
            keyword: '',
            status:null
        }
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onSearchKeyWordChange = this.onSearchKeyWordChange.bind(this);
        //console.log('key1='+this.state.keyword);
    }

    onSearchKeyWordChange(e) {
        this.setState({ keyword: e.target.value });
        //console.log('key2='+this.state.keyword);
      
    }

    onSearchSubmit(e){
        let keyword = this.state.keyword;
        if(keyword == ""){
        this.setState({ status: null });
        }else{
        this.onPageChange("http://localhost/flash_express/tracking/search?abw_code="+keyword);
        e.preventDefault();
    }
    }

    onPageChange(url){
        fetch(url)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    data: result.data,
                    status: result.status
                });
                console.log('status:'+ this.state.status);
                
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
                <Search onSearchKeyWordChange={this.onSearchKeyWordChange} onSearchSubmit={this.onSearchSubmit}/>
               {
                   this.state.status != null ?
                <Showdata DataRecords={this.state.data} status={this.state.status}/>
                
                : ""
               }
            </div>
        )
    }
}