import React, { useState } from 'react'

const InquiryForm = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [message,setMessage] = useState('')
    const [submitted,setSubmitted] = useState(false)
    const [error,setError] = useState('')

    const handlesumbit = (e)=>{
        e.preventDefault()

        if(name && email && phone && message){
            setSubmitted(true)
            setError('')
        }
        else{
            setError("please fill out all fields!")
        }
    }


  return (
    <div className='form-container'>
        {!submitted ? (
            <form onSubmit={handlesumbit}>
                <h2>Product Inquiry Form</h2>
                {error && <div className='alert error'>{error}</div>}
                <div>
                    <input type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)} 
                    placeholder='Enter your Name'/>
                </div>
                <div>
                    <input type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} 
                    placeholder='Enter your Email'/>
                </div>
                <div>
                    <input type="tel"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)} 
                    placeholder='Enter your Phone Number'/>
                </div>
                <div>
                    <textarea
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)} 
                    placeholder='Enter your Message'/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        ) : (
            <div className='thank-you-message'>
                <h2>Thank you for Your Inquiry</h2>
                <p>Name:{name}</p>
                <p>Email:{email}</p>
                <p>Phone:{phone}</p>
                <p>Message:{message}</p>
            </div>    

        )
    }
    </div>
  )
}

export default InquiryForm