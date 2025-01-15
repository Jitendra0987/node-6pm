import axios from "axios"


const App=()=>{
  
  const handlesubmit=async()=>{
    try {
    
      let api="http://localhost:8000/home";
      const response= await axios.get(api);
         console.log(response.data);
      
    } catch (error) {
      console.log(error);
      alert(error.response.data)
      
    }
    
      }


      const handlesubmit1=async()=>{
        try {
        
          let api="http://localhost:8000/about";
          const response= await axios.get(api);
             console.log(response.data);
          
        } catch (error) {
          console.log(error);
          alert(error.response.data)
          
        }
      }
  return(
    <>
    
    <button onClick={handlesubmit}> Click here</button>
    <button onClick={handlesubmit1}>about page here</button>

    </>
  )
}
export default App;