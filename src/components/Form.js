import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" name="name"></input> 
            <label>Your Email</label>
            <input type="email" name="email"></input>
            <label>Subject</label>
            <input type="text" name=" text"></input>
            <label>Message</label>
            <textarea name="" id="" cols="30" rows="10" placeholder="type your message here" />
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form