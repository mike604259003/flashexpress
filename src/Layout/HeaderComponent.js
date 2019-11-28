import React from 'react';

export default class HeaderComponent extends React.Component{
    render(){
        return(
            <header id="header" className="fixed-top">
    <div className="container">

      <div className="logo float-left">
      
        <a href="#intro" className="scrollto"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>
      </div>

      <nav className="main-nav float-right d-none d-lg-block">
        <ul>
          <li className="active"><a href="#intro">หน้าแรก</a></li>
          <li className="drop-down"><a href="#about">เกี่ยวกับเรา</a>
          <ul>
            <li><a href="">ประวัติ</a></li>
            <li><a href="">พื้นที่บริการ</a></li>
          </ul>
          </li>
          <li><a href="#services">อัตราค่าบริการ</a></li>
          <li><a href="#portfolio">ข่าวสาร</a></li>
          <li><a href="#team">ติดต่อเรา</a></li>
          <li><a href="">สมัครงาน</a></li>
        </ul>
      </nav>
      
    </div>
  </header>
        )
    }
}