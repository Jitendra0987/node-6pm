import axios from "axios";
import { useEffect, useState } from "react";


const Display=()=>{
   const [mydata, setMydata]=useState([])
    const loadData=async()=>{

        let api="http://localhost:8000/cloudnary/dataDisplay";
        const response = await axios.get(api)
                 console.log(response.data)
                 setMydata(response.data)
    
    }


    useEffect(()=>{
             loadData();
    },[])



      const ans =mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.stuname}</td>
                <td>{key.rollno}</td>
                <td>{key.city}</td>
                <td>{key.email}</td>
                <td>
                    <img src={key.imgname} width="200px" height="150px" />
                </td>
            </tr>
            </>
        )

     })

    return(
        <>
        <table>
            <tr>
                <th>name</th>
                <th>rollno</th>
                <th>city</th>
                <th>email</th>
                <th></th>
            </tr>
            {ans}

        </table>
        </>
    )
}
export default Display;
