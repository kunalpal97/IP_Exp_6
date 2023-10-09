import React from 'react'

const Call = (props) => {
    const [mssg,setmssg]=React.useState('');
    const handlechange=(event)=>{
        setmssg(event.target.value);
    }
    const handleClick=()=>{
        alert(`The mssg value is ${mssg}`)
    }
  return (
    <div>
        My name is {props.name}
        <br>
        </br>
        My rollno is {props.id}
        <br></br>
        My age is {props.age}
        <br></br>
        My phone number is {props.phone}
        <br></br>
        <input
        type="text"
        placeholder="Type your message"
        value={mssg}
        onChange={handlechange}
      />
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Call