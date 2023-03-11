import React from "react";
import { useState } from "react";

function List() {
  let menulist = [
    "COFFEE" ,
    "MENU",
    "STORE",
    "RESPONSIBILITY",
    "STARBUCKS REWARDS",
    "CORPORATE SALES",
    "WHAT'S NEW",
  ];

  // console.log(menulist);

  return (
    <div style={{ display: "flex" }}>
      {menulist.map((i , index) => {
          
        return (
          <div style={{ margin: "0 10px" }} key={i}>
            <li style={{ listStyle: "none" }} onMouseOver={()=>{
               document.querySelector('.listsub').style.display = 'block'
              
            }} onMouseOut={()=>{
              document.querySelector('.listsub').style.display = 'none'              

            }}>{i}</li>
          

            <div className="listsub"
              style={{
                position: "absolute",
                top: "100px",
                width: "100vw",
                height: "300px",
                backgroundColor: "black",
                display : 'none',
               
                
              }}
            > 
           

                

            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;


// function List() {
//   let menulist = [
//     {"COFFEE" : {}} ,
//     {"MENU" : {}},
//     {"STORE" :{}},
//     {"RESPONSIBILITY" :{}},
//     {"STARBUCKS REWARDS" :{}},
//     {"CORPORATE SALES" :{}},
//     {"WHAT'S NEW" :{}},
//   ];
