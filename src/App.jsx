import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Apple from './Apple'
import Actor from './Actor'

function App() {
  const actors=[
    {id:1, name:'Shakib Khan', age:45},
    {id:2, name:'Riaz Ahmed', age:48},
    {id:3, name:'Ferdous', age:45},
    {id:4, name:'Omorsani', age:55},
    {id:5, name:'Apurbo', age:35},
    {id:6, name:'Afran Nisho', age:36}
  ]

  return (
    <div style={{
      display:'grid',
      gridTemplateColumns:"repeat(3, 1fr)"
    }}>
    <Person></Person>
    <Todo task="I am Learning React"></Todo>
    <Todo task="I am practicing"></Todo>
    <Todo task="I am developing React"></Todo>
    <Todo task="I am advanced in React"></Todo>
    <Student name="Md. Nazrul Islam" stdId="21204005" courseId="CSE 6303" courseName="Wireless Networking & Mobile Computing" courseTeacher="Prof Dr. Md. Obaidur Rahman"></Student>
    <Student name="Abrar Hamim Sowad" stdId="21204002" courseId="CSE 6303" courseName="Wireless Networking & Mobile Computing" courseTeacher="Prof Dr. Md. Obaidur Rahman"></Student>
    <Student name="Mrs. Distry Islam" stdId="21204004" courseId="CSE 6303" courseName="Wireless Networking & Mobile Computing" courseTeacher="Prof Dr. Md. Obaidur Rahman"></Student>
    <Device device="laptop" model="HP Pavilion 14" price={55000} isBuy={true}></Device>
    <Device device="Mobile" model="Samsung M12" price={20000} isBuy={true}></Device>
    <Device device="iPAD" model="Apple 6CB" price={30000} isBuy={true}></Device>
    <Apple device='laptop' price={120000} isBuy={true}></Apple>
    <Apple device='iPhone' price={60000} isBuy={false}></Apple>
    <Apple device='iPAD' price={40000} isBuy={false}></Apple>
    <Apple device='iWatch' price={50000} isBuy={false}></Apple>
    <Apple device='iGlass' price={60000} isBuy={true}></Apple>
    {
      actors.map(({name,age,id})=>{
        return <Actor key={id} name={name} age={age}></Actor>
      })
    }
    </div>
  )
}

function Person(){
  const age=39;
  const designation="Maintenance Engineer";
  const personStyle={
    margin:'20px',
    padding:'20px',
    border:'2px solid green',
    textAlign:'justify',
    borderRadius:'16px'
  }
  return (
    <div style={personStyle}>
      <h3>I am a person</h3>
      <p>My Age is: {age}</p>
      <p>My designation: {designation}</p>
    </div>
  )
}
function Student({name, stdId, courseId, courseName, courseTeacher}){
  return(
    <div className="student">
      <h3>Student Name: {name}</h3>
      <p>Student ID: {stdId}</p>
      <p>Course ID: {courseId}</p>
      <p>Course Title: {courseName}</p>
      <p>Course Teacher: {courseTeacher}</p>
    </div>
  )
}
function Device({device, model, price}){
  return (
    <div style={{
      margin:'20px',
      padding:'20px',
      border:'2px solid orange',
      textAlign:'justify',
      borderRadius:'16px'
    }}>
      <h3>Device: {device}</h3>
      <p>Model: {model}</p>
      <p>Price: {price}</p>
    </div>
  )
}
export default App
