import React, { Component, useState } from 'react';
import styled from 'styled-components'
import './App.css';
import Button from './components/Button'
import Input from './components/Input'
import ClearButton from './components/ClearButton'
import * as math from 'mathjs';

export const App = () => {
  const [input,setInput] = useState('')
  const addToInput = val =>{
    setInput(input + val)
  }
  const handleEqual = () => {
    setInput(math.eval(input))
  }
  return (
    <div className="app">
      <Container>
        <CalcWrapper>
          <Input input={input}></Input>
          <Row>
            <Button handleClick={addToInput}>7</Button>
            <Button handleClick={addToInput}>8</Button>
            <Button handleClick={addToInput}>9</Button>
            <Button handleClick={addToInput}>/</Button>
          </Row>
          <Row>
            <Button handleClick={addToInput}>4</Button>
            <Button handleClick={addToInput}>5</Button>
            <Button handleClick={addToInput}>6</Button>
            <Button handleClick={addToInput}>*</Button>
          </Row>
          <Row>
            <Button handleClick={addToInput}>1</Button>
            <Button handleClick={addToInput}>2</Button>
            <Button handleClick={addToInput}>3</Button>
            <Button handleClick={addToInput}>+</Button>
          </Row>
          <Row>
            <Button handleClick={addToInput}>.</Button>
            <Button handleClick={addToInput}>0</Button>
            <Button handleClick={handleEqual}>=</Button>
            <Button handleClick={addToInput}>-</Button>
          </Row>
          <Row>
            <ClearButton handleClear={() => setInput("")}>Clear</ClearButton>
          </Row>
        </CalcWrapper>
      </Container>
    </div>
  );
}

// class App extends Component {
//   constructor(props){
//     super(props);

//     this.state={
//       input:""
//     };
//   }
//   addToInput = val => {
//     this.setState({ input: this.state.input + val });
//   };
//   handleEqual = () => {
//     this.setState({ input: math.eval(this.state.input)})
//   }
//   render() {
//     return (
//       <div className="app">
//         <Container>
//           <CalcWrapper>
//             <Input input={this.state.input}></Input>
//             <Row>
//               <Button handleClick={this.addToInput}>7</Button>
//               <Button handleClick={this.addToInput}>8</Button>
//               <Button handleClick={this.addToInput}>9</Button>
//               <Button handleClick={this.addToInput}>/</Button>
//             </Row>
//             <Row>
//               <Button handleClick={this.addToInput}>4</Button>
//               <Button handleClick={this.addToInput}>5</Button>
//               <Button handleClick={this.addToInput}>6</Button>
//               <Button handleClick={this.addToInput}>*</Button>
//             </Row>
//             <Row>
//               <Button handleClick={this.addToInput}>1</Button>
//               <Button handleClick={this.addToInput}>2</Button>
//               <Button handleClick={this.addToInput}>3</Button>
//               <Button handleClick={this.addToInput}>+</Button>
//             </Row>
//             <Row>
//               <Button handleClick={this.addToInput}>.</Button>
//               <Button handleClick={this.addToInput}>0</Button>
//               <Button handleClick={this.handleEqual}>=</Button>
//               <Button handleClick={this.addToInput}>-</Button>
//             </Row>
//             <Row>
//               <ClearButton handleClear={() => this.setState({ input:'' })}>Clear</ClearButton>
//             </Row>
//           </CalcWrapper>
//         </Container>
//       </div>
//     );
//   }
// }


const Container= styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  height: 100vh;
  width: 100%;
`
const CalcWrapper = styled.div`
  width: 400px;
  height: 600px;
`
const Row = styled.div`
  display: flex;
  width: 100%;
`



export default App;
