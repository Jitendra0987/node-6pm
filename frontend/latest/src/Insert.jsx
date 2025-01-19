import axios from "axios";
import { useState } from "react";


const Insert=()=>{
    const [input, setInput]=useState({})
    const [uploadImage, setUploadImage]=useState("")

    const handelChange=async(e)=>{
        let name= e.target.name;                          
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}))
        console.log(input)
    }

    const handelImage=(e)=>{
        console.log(e.target.files[0]);
        setUploadImage(e.target.files[0])

    }
   
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const formData= new FormData();
        formData.append("file", uploadImage);
        formData.append("upload_preset","MERN_img")
        formData.append("cloud_name", 'demb9ri8a')

        const response = await axios.post('https://api.cloudinary.com/v1_1/demb9ri8a/image/upload', formData); 
        console.log(response.data.url);


        let api="http://localhost:8000/cloudnary/datasave";
        const res1 = await axios.post(api,{imgname:response.data.url,...input});
        alert("data succesfully inserted!!!!");
    }
      



    return(
        <>
      Enter name:  <input type="text" name="stuname" value={input.stuname}  onChange={handelChange} /><br />
      Enter roolno: <input type="text" name="rollno" value={input.rollno} onChange={handelChange}/><br />
      Enter city <input type="text" name="city"   value={input.city} onChange={handelChange} /><br />
      Enter email  <input type="email" name="email"value={input.email} onChange={handelChange} /><br />
      Upload photo  <input  type="file" name="file"  onChange={handelImage}/><br />
        <button onClick={handleSubmit}>click here</button>

        </>
    )
}
export default Insert;