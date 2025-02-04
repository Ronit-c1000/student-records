import { Link, useNavigate } from "react-router-dom"
import './CreateStudent.css'
import { useState } from "react"
const CreateStudent = () => {

  const [id ,setId]=useState('');
  const [name ,setName]=useState('');
  const [place ,setPlace]=useState('');
  const [phone ,setPhone]=useState('');
  const [validation, setValidation]= useState(false)
  const navigate = useNavigate();


  const handleSubmit= (e)=>{
    e.preventDefault();
    const studentData = {id,name,place,phone};
    fetch('http://localhost:8000/students',{
    method:'POST',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(studentData)
    })
    .then(()=>{
      alert('Student Data Saved Successfully');
      navigate('/')
    })
  }

  return (
    <div className="create-student">
    <h2>Add New Student</h2>
    <form className="create-stu-form" onSubmit={handleSubmit}>
      <label htmlFor="id"> ID:</label>
      <input required type="number" id="id" value={id} onChange={e=>setId(e.target.value)} onMouseDown={()=>setValidation(true)} name="id"/>
      {id.length === 0 && validation && <span className="input-warning">!Pease Enter Your ID</span>}

      <label htmlFor="name"> Name:</label>
      <input required type="text" id="name" value={name} onChange={e=>setName(e.target.value)} onMouseDown={()=>setValidation(true)} name="name"/>
      {name.length===0 && validation && <span className="input-warning">!Please Enter Your Name</span>}


      <label htmlFor="place"> Place:</label>
      <input required type="text" id="place" value={place} onChange={e=>setPlace(e.target.value)} onMouseDown={()=>setValidation(true)} name="place"/>
      {place.length===0 && validation && <span className="input-warning">!Please Enter Your Place</span>}


      <label htmlFor="phone"> Phone:</label>
      <input required type="number" id="phone" value={phone} onChange={e=>setPhone(e.target.value)} onMouseDown={()=>setValidation(true)} name="phone"/>
      {phone.length===0 && validation && <span className="input-warning">!Please Enter Your Phone</span>}

      <div className="create-btn">
        <button className="save-btn">Add</button>
        <Link to='/' className="cancel-btn">Back</Link>
      </div>
    </form>
    </div>
  )
}

export default CreateStudent
