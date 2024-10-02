"use client";

import React, {useState, useRef} from 'react'
import { handleUpdateUser } from "../../action";

export default function Form({user, id}) {
    const [msg, setMsg] = useState("");
    const formRef = useRef();
  return (
    <div>
      <form 
      ref={formRef}
      action={async (formData) => {
        formData.append("id", id);
        const response = await handleUpdateUser(formData);
        if(!response){
            setMsg('Da co loi xay ra. Vui long thu lai sau!');
            return;
        }
        setMsg("Cap nhat nguoi dung thanh cong.")
      }} >
            <div className="mb-3">
                <label htmlFor="">Ten</label>
                <input type="text" name="name" id="name" className="form-control" defaultValue={user.name} placeholder="Ten..."/>
            </div>
            <div className="mb-3">
                <label htmlFor="">Email</label>
                <input type="email" name="email" id="email" className="form-control" defaultValue={user.email} placeholder="Email..."/>
            </div>
            <div className="mb-3">
                <label htmlFor="">Mat khau</label>
                <input type="password" name="password" id="password" className="form-control" placeholder="Mat khau..."/>
            </div>
            <button className="btn btn-primary">Cap nhat</button>
            {msg && <span className="text-danger">{msg}</span>}
        </form>
    </div>
  )
}
