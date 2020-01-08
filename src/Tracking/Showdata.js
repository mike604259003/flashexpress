import React from 'react';

export default class Showdata extends React.Component{
    render(){
        var _data = this.props.DataRecords;
        let status = this.props.status;
       
        return(
            status != true ? 
            <div className="container">
                <br/>
                <br/>
            <div className="alert alert-danger custom-message text-center"><i className="fa fa-close"></i>ไม่พบข้อมูล<i className="fa fa-close"></i></div>
            </div>
            :
            <div className="container">
                <div className="col-md-12">
                    <strong>ผลการค้นหา</strong>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>เลขพัสดุ</th>
                            <th>ผู้ส่ง</th>
                            <th>สถานที่จัดส่ง</th>
                            <th>สถานะ</th>
                        </tr>
                    </thead>
                    <tbody>
                        { _data.map(function (obj,i){
                            if(obj.end_flg)
                            return(
                        <tr key={i}>
                            <td>{obj.abw_code}</td>
                            <td>{obj.staff_code}</td>
                            <td>{obj.created_date}</td>
                            <td>{obj.name}</td>
                        </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
            
        )
    }
}