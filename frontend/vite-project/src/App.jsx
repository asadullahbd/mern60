import axios from "axios";
import { useState,useEffect } from "react";

function App() {

  const [users,setUsers] = useState([]);

  const [name,setName] = useState("");
  const [age,setAge] = useState(0);
  const [email,setEmail] = useState("");
  
  useEffect( ()=>{
    axios.get("http://localhost:4000/users")
    .then((response)=>{
      setUsers(response.data)
    })
  },[])
  
  
  const addUser = (e)=>{
     (async ()=>{
      try {
        await axios.post("http://localhost:4000/addUser",{
          name ,
          age,
          email
        })
        .then((response) =>{
          setUsers([
            ...users,
            {
              name,
              age,
              email
            }
          ])
        })
      } catch (error) {
        console.log(error);
      }
    })();
  };
  
  return (
    <>
      {users.map((item,index)=>{
        return(
          <div key={index}>
            <h1>{item.name}</h1>
            <h1>{item.age}</h1>
            <h1>{item.email}</h1>
            <hr />
          </div>
        )
      })}

      <form action="">
        <input type="text" name="" id="" placeholder="Name..." onChange={(event)=>{setName(event.target.value)}} /> <br/>
        <input type="number" name="" id="" placeholder="Age..." onChange={(event)=>{setAge(event.target.value)}} /><br/>
        <input type="email" name="" id="" placeholder="Email..." onChange={(event)=>{setEmail(event.target.value)}} /><br/>
        <button type="submit" onClick={addUser}>Add User</button>
      </form>
      
    </>
  )
}

export default App
