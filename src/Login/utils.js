 export const login = async({userName,password})=>{
    const baseUrl=process.env.REACT_BASE_URL;
    try{
    const response= await fetch(`${baseUrl}/auth/login`,{
        method:"POST",
        headers:{
            'Content-Type':"application/json",
        },
        body:JSON.stringify({userName,password}),
    });
    return response.json();
} catch (error){
    return `Failed to login ${error.message}`;

}
};