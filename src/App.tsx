import React, { useState, useEffect } from 'react';
import {Typography, Divider,  Row, Col, Card} from 'antd';
import './App.css';
import { Rnd } from 'react-rnd';
import CompSecond from './Components/Comp';
import Comp from './Components/Comp';

const { Title } = Typography

const style = {
  padding:'5px',
  border: "solid 1px #ddd",
  background: "#f0f0f0"
} as const;

interface IProps{
}

// interface IState{
//   height: number,
//   width: number
// }

const number = [
  {
    value: 1,
    label: "Rnd 1",
  },
  {
    value: 2,
    label: "Rnd 2",
  }
];

const App:React.FC<IProps> = () => {





  return (
    <div className="App">
      <Title level={2} className="App-header">
        React Rnd Examples
      </Title>
      
    </div>
  );
}

export default App;
