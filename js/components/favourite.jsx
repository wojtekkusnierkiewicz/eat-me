import React, { Component } from 'react';

const Favourite = (props) => {
  console.log(props.list);
    return (
      <ul>
        {
          props.list.map((item, index) =>{
            return <li key={item.href}>{item.title}</li>
          })
        }
      </ul>
    )
}

export default Favourite;
