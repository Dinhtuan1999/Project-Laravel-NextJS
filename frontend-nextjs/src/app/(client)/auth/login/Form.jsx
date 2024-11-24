"use client"

import { handleLogin } from '../action'
import React from 'react'

export default function Form() {
  return (
    <div>
      <form action={
        async (formData) => {
            const response = await handleLogin(formData);
        }
      }>
        <div className='mb-3'>
            <label htmlFor="">Email</label>
            <input
             type="text"
             name="email"
             className='form-control'
             placeholder='Email...'
             required
                  />
        </div>
        <div className='mb-3'>
            <label htmlFor="">Mat Khau</label>
            <input
             type="password"
             name="password"
             className='form-control'
             placeholder='Password...'
             required
                  />
        </div>
        <div className='d-grid'>
            <button className='btn btn-primary'>Dang nhap</button>
        </div>
      </form>
    </div>
  )
}
