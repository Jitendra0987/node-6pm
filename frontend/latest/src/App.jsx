import axios from "axios"

const App=()=>{

  const loadData1=()=>{
    let api="http://localhost:8000/home";
    axios.get(api ).then((res)=>{
        console.log(res.data)
    })

  }

  const loadData2=()=>{
    let api="http://localhost:8000/about";
    axios.get(api ).then((res)=>{
      console.log(res.data)
    
    })

  }

  const loadData3=()=>{
    let api="http://localhost:8000/contact";
    axios.get(api ).then((res)=>{
      console.log(res.data)
    
    })

  }

  const loadData4=()=>{
    let api="http://localhost:8000/delete";
    axios.get(api ).then((res)=>{
      console.log(res.data)
    
    })

  }

  return(
    <>
      <h1>Middlewear </h1>
         <button onClick={()=>{loadData1()}}>Home</button>
         <button onClick={()=>{loadData2()}}>About</button>
         <button onClick={()=>{loadData3()}}>Contact</button>
         <button onClick={()=>{loadData4()}}>Delete</button>
    </>
  )
}
 export default App;