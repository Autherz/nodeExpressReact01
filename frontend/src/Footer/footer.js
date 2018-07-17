import React, { Component } from 'react';

var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "10%",
  width: "100%",
}

var phantom = {
display: 'block',
padding: '20px',
height: '15%',
width: '100%',
}

var children = <h1>Atisit Thongbai</h1>  

function Footer() {
  return (
      <div>
          <div style={phantom} />
          <div style={style}>
              <h3>Atisit thongbai </h3>
              <p>Dorm 16 Khonkaen University 40002 0831095105 bom_144440@outlook.co.th</p>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
          </div>
      </div>
  )
}

export default Footer