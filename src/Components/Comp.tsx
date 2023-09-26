import react, { useState, useEffect, useRef, createRef } from 'react';
import {Typography, Divider,  Row, Col, Card} from 'antd';
import { Rnd } from 'react-rnd';

const { Title, Text } = Typography

// interface IPerson {
//   name: string;
//   text: string;
//   role:number
// }

// interface IProps{
//   width: number,
//   setWidth: React.Dispatch<React.SetStateAction<number>>,
//   height: number,
//   Data: IPerson[ ]
// }
interface Iprops{
}

interface IState{
  id: string,
  width: number,
  height: number,
  x: number,
  y: number,
  background: string
}


const style = {
  padding:'10px',
  border: "solid 1px #ddd",
  zIndex:'1',
  background: "#F0FFFF"
} as const;


const Comp:React.FC<Iprops> = () => {

  var Users = [
    {
      id: '1',
      width: 200,
      height: 200,
      x: 10,
      y: 10,
      background: 'green'
    },
    {
      id: '2',
      width: 200,
      height: 200,
      x: 30,
      y: 30,
      background: 'blue'
    },
    {
      id:'3',
      width: 200,
      height: 200,
      x: 40,
      y: 50,
      background: 'red'
    }
  ]

  var Users1 = [
    {
      id: '1',
      width: 200,
      height: 200,
      x: 10,
      y: 10,
      background: 'green'
    }
  ]
  var [rndObj, setRndObj] =useState<IState[]>(Users)
  var [rndObj1, setRndObj1] =useState<IState[]>(Users1)
  var rndRef = createRef<Rnd>()

  const update = (x:number, y:number) => {
    // console.log('this',this.rnd.current?.updateSize({width:500,height:500}))
    rndRef.current?.updateSize({ width: x, height: y });
  }

  console.log('ref', rndRef)
    return(
      <>
      <Row> 
        <Col xs={12} xl={12}>
          <Card className='card' style={{height: '100vh', width:650}}>
            <Title level={2}>RnD Component 1</Title>
            {rndObj.map((row, index) => (
        <Rnd 
        key={index}
        ref={rndRef}
        bounds="window"
        style={{background: row.background}}
        // enableResizing={false}
        // default={{
        //   x:row.x,
        //   y:row.y,
        //   width:row.width,
        //   height:row.height
        // }}
        overflow='hidden'
        onDragStop={(e, d) => {
          update(d.x,d.y)
          setRndObj([...rndObj].map(object => {
            if(object.id === row.id) {
              console.log('delta', d)
              return {
                ...object,
                x: d.x,
                y: d.y,
                background: 'yellow'
              }
            }
            else return object
          }))
          console.log('x and y', row.x, row.y)
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          console.log('rndObj', rndObj, ref)
          setRndObj([...rndObj].map(object => {
            if(object.id === row.id) {
              return {
                ...object,
                width:500,
                height:500,

                background: 'yellow'
              }
            }
            else return object;
          }))

            }}
        onDragStart={e=> e.stopPropagation()}
        >
          Rnd
        </Rnd>
        ))}
          </Card>
        </Col>
        <Col xs={12} xl={12}>
          <Card className='card' style={{height: '100vh', marginLeft:'5%', width:600}}>
            <Title level={2}>RnD Component 2</Title>
            
          </Card>
        </Col>
      </Row>
      
        </>
    )
}

export default Comp