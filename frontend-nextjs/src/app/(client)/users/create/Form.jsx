"use client";

import React, {useState, useRef} from 'react'
import { handleCreateUser } from '../action';

export default function Form() {
    const [msg, setMsg] = useState("");
    const formRef = useRef();
  return (
    <div>
      <form 
      ref={formRef}
      action={async (formData) => {
        const response = await handleCreateUser(formData);
        if(!response){
            setMsg('Da co loi xay ra. Vui long thu lai sau!');
            return;
        }
        setMsg("Them nguoi dung thanh cong.")
        formRef.current.reset();
      }} >
            <div className="mb-3">
                <label htmlFor="">Ten</label>
                <input type="text" name="name" id="" className="form-control" placeholder="Ten..."/>
            </div>
            <div className="mb-3">
                <label htmlFor="">Email</label>
                <input type="email" name="email" id="" className="form-control" placeholder="Email..."/>
            </div>
            <div className="mb-3">
                <label htmlFor="">Mat khau</label>
                <input type="password" name="password" id="" className="form-control" placeholder="Mat khau..."/>
            </div>
            <button className="btn btn-primary">Them Moi</button>
            {msg && <span className="text-danger">{msg}</span>}
        </form>
    </div>
  )
}
