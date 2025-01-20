import axios from "axios";
import { useEffect, useState } from "react";


 const Display=()=>{

    const [mydata, setmydata]=useState([]);

      const loadData=async()=>{
              let api="http://localhost:8000/cludenary/dataDisplay";
           const  response =await axios.get(api)
             console.log(response.data)
             setmydata(response.data)

      }
      useEffect(()=>{
               loadData();
      },[])


      const ans =mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.rollno}</td>
                <td>{key.email}</td>
                <td> 
                    <img src={key.image} width="200px" height="150px"/>
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
                <th>city</th>
                <th>rollno</th>
                <th>gmail</th>
                <th> </th>
            </tr>
            {ans}
        </table>

        </>
    )
 }
 export default Display;