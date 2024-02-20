import { useEffect } from "react"
import { useState } from "react"

function App() {

  const [personData ,setPersondata] = useState([])

  const [person ,setPerson] = useState({
    id: Date.now(),
    name:'',
    age:''
  })

  const handelChange =(e)=>{
    setPerson(
      {...person ,
       [e.target.name]:e.target.value
      }
    )
  }

  // useEffect(()=>{console.log(person)},[person])




  const add =()=>{  
    setPersondata([...personData ,person])
    setPerson({
      name:'',
      age:''
    })
  }


  const Delete =(index)=>{
    const newdata = [...personData]

    newdata.splice(index,1)

    setPersondata(newdata)

    // setPersondata(personData.filter(person => person.id != id))
  }





  return <div className="app">
    <form>
      <input type="text" name="name" value={person.name} onChange={(e)=>{handelChange(e)}}  placeholder="name"/>
      <input type="text" name="age" value={person.age}  onChange={(e)=>{handelChange(e)}} placeholder="age" />
      <button  type="button" onClick={add}>add</button>
    </form>

    <div className="persons">
      {
        personData.map((person,index) => {
          return <div className="person">
            <p>{person.id}</p>
            <p>{person.name}</p>
            <p>{person.age}</p>
            <button onClick={()=>{Delete(index)}}>delete</button>
            <button>update</button>
          </div>
        })
      }
    </div>

  </div>
}

export default App
