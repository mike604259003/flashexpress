import React from 'react';

export default class Search extends React.Component{
    render(){
        return(
            <section id="services" className="section-bg">
            <div className="container">
      
              <header className="section-header">
                <h3>ตรวจสอบ-ติดตามสถานะพัสดุ</h3>
              </header>
      
              <div className="row">
      
                <div className="col-md-8 offset-lg-2 wow bounceInUp" data-wow-duration="1.4s">
                  <div className="box">
                   <form id="from-search" onSubmit={this.props.onSearchSubmit}>
                       <div className="form-group row">
                           <div className="col-md-3 text-right">
                                <label htmlFor=""> เลขพัสดุ :</label>
                                
                           </div>
                           <div className="col-md-7">
                           <input className="form-control" type="number" id="awb" name="awb" onChange={this.props.onSearchKeyWordChange} placeholder=""/>
                           </div>
                       </div>

                        <div className="form-group row">
                            <div className="col-md-12 text-center">
                                <button className="btn btn-primary" type="submit">
                                    <i className="fa fa-search tracking-icon-white"></i> ค้นหา
                                </button>
                                &nbsp;&nbsp;&nbsp;
                                <button className="btn btn-info" type="button">
                                    <i className="fa fa-refresh tracking-icon-white"></i> ล้างข้อมูล
                                </button>
                            </div>
                        </div>
                      
                   </form>
                  </div>
                </div>
                
              </div>
      
            </div>
          </section>
        )
    }
}