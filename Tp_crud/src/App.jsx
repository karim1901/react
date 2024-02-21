import { useEffect } from "react"
import { useState } from "react"

function App() {

  const [personData ,setPersondata] = useState([])

  const [indexUpdate ,setindexUpdate] =useState(null)

  const [search ,setSearch] =useState('')

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


  const onSearch = (e)=>{
    setSearch(e.target.value)
  }



  const add =()=>{  
    if(indexUpdate === null){
      setPersondata([...personData ,person])
      setPerson({
        name:'',
        age:''
      })
    }else{

      const newdata = [...personData]
      newdata[indexUpdate] = person 
      setindexUpdate(null)
      setPersondata(newdata)
      setPerson({
        name:'',
        age:''
      })

    }

  }


  const Delete =(index)=>{
    const newdata = [...personData]

    newdata.splice(index,1)

    setPersondata(newdata)

    // setPersondata(personData.filter(person => person.id != id))
  }


  const update = (index)=>{

    setPerson(personData[index])
    setindexUpdate(index)
  }







  return <div className="app">
    <form>
      <input type="text" name="name" value={person.name} onChange={(e)=>{handelChange(e)}}  placeholder="name"/>
      <input type="text" name="age" value={person.age}  onChange={(e)=>{handelChange(e)}} placeholder="age" />
      <button  type="button" onClick={add} >{ indexUpdate == null ? 'add' : 'update'}</button>
    </form>

    <input type="text" name="search" onChange={(e)=>{onSearch(e)}} placeholder="search"  />

    <div className="persons">
      {
        personData.filter(person => person.name.toLowerCase().includes(search.toLowerCase()) )
        .map((person,index) => {
          return <div className="person">
            <p>{person.id}</p>
            <p>{person.name}</p>
            <p>{person.age}</p>
            <button onClick={()=>{Delete(index)}}>delete</button>
            <button onClick={()=>{update(index)}}>update</button>
          </div>
        })
      }
    </div>

  </div>
}

export default App
