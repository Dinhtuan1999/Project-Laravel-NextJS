"use server";

export const handleCreateUser = async (fromData) => {
    const data = Object.fromEntries(fromData);
    const response = await fetch(`${process.env.SERVER_API}/users`,{
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
        body: JSON.stringify(data),
    })
    const responseBody = await response.json();
    if(responseBody.success){
        return true
    }
    return false
    
};

export const handleUpdateUser = async (fromData) => {
    const {id, ...data} = Object.fromEntries(fromData);

    const response = await fetch(`${process.env.SERVER_API}/users/${id}`,{
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
        body: JSON.stringify(data),
    })
    const responseBody = await response.json();
    if(responseBody.success){
        return true
    }
    return false
    
};