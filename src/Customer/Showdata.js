import React from 'react';

export default class Showdata extends React.Component{

    render(){

        var _data = this.props.DataRecords;
        

        return(
            <section id="why-us" className="wow fadeIn">
      <div className="container">
        <header className="section-header">
          <h3>Customer</h3>
          
        </header>

        <div className="row row-eq-height justify-content-center">
            {
                _data.map(function(obj,i){
                    return(
                        <div className="col-lg-4 mb-4" key={i}>
                        <div className="card wow bounceInUp">
                            <i className="fa fa-address-card-o"></i>
                            <i className="fa fa-bacon"></i>
                          <div className="card-body">
                                <h5 className="card-title">{obj.name} {obj.lastname}</h5>
                                <p className="card-text">{obj.mobile}</p>
                            
                          </div>
                        </div>
                      </div>

                    )

                })
            }
         

          


        </div>

        
      </div>
    </section>

        )
    }
}