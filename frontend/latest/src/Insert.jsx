import { useState } from "react";
import axios from "axios";


const Insert=()=>{
    const [input, setInput]=useState({});
    const [imagee, SetImage]=useState("");



           
    const handleChange=async(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}))
        console.log(input)

    }

    const handleImage=(e)=>{
        console.log(e.target.files[0]);
         SetImage(e.target.files[0]);

    }


    
    const HandelSubmit=async(e)=>{
        e.preventDefault();
        const formData= new FormData();
        formData.append("file",imagee);
        formData.append("upload_preset","MERN_img")
        formData.append("cloud_name", 'demb9ri8a')
        const response = await axios.post('https://api.cloudinary.com/v1_1/demb9ri8a/image/upload', formData); 
        console.log(response.data.url);

        let api="http://localhost:8000/cludenary/datasave";
        const res1= axios.post(api, {image:response.data.url,...input});
            alert("data sucessfulley inserted !!!!")
            console.log(res1.data)
    }





    return(
        <>
        EnterName : <input type="text" name="name" value={input.name} onChange={handleChange}/><br />
        EnterCity : <input type="text" name="city" value={input.city}onChange={handleChange}/><br />
        EnterRollno : <input type="number" name="rollno" value={input.number} onChange={handleChange} /><br />
        EnterGmail : <input type="email" name="email" value={input.email} onChange={handleChange} /><br />
        upload Image : <input type="file" name="file" onChange={handleImage} /><br />
        <button onClick={HandelSubmit}>upload</button> <br /><br />

        </>
    )
}
 export default Insert;