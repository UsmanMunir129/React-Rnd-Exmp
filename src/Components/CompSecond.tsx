import react, { useState } from 'react';
import {Typography} from 'antd';
import { Rnd } from 'react-rnd';

const { Title, Text } = Typography

interface IPerson {
  name: string;
  text: string;
  role:number
}

interface IProps{
  width: number,
  height: number,
  Data: IPerson[ ]
}



const style = {
  padding:'10px',
  border: "solid 1px #ddd",
  zIndex:'1',
  background: "#F0FFFF"
} as const;


const CompSecond:React.FC<IProps> = ({width, height, Data}) => {
  console.log('data', Data)

    const [data1, setData1] =useState(Data)
    console.log('data1', data1)
    return(
      <>
      {Data.map((row, index) => (
        <Rnd 
        key={index}
        bounds="window"
        style={style}
        onDragStop={(e, d) => {
          console.log('xxxx', d.x, d.y)
          if(d.x>250){
            var compleet = row.text;
            var len = compleet.length;


            var firstHalf = compleet.substring(0, len / 2);
            var secondHalf = compleet.substring(len / 2);
            console.log('half', firstHalf)
          }
        }}
        default={{
          x:20,
          y:90,
          width:width,
          height:height
        }}
        onDragStart={e=> e.stopPropagation()}
        // onDragStop={e=> }
        >
        <Title level={3}>{row?.name}</Title>
        <Text>{row?.text}</Text>
        </Rnd>
        ))}
        </>
    )
}

export default CompSecond