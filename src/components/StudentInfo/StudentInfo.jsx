import { useEffect,useState } from 'react'
import './StudentInfo.css'
import { Link, useNavigate } from 'react-router-dom'

const StudentInfo = () => {

  const [students, setStudents] = useState('');
  const navigate = useNavigate();
  const DisplayDetail =(id)=>{
    navigate(`/student/view/${id}`)
  }

  const editHandler =(id)=>{
    navigate(`/student/edit/${id}`)
  }
  const deletHandler =(id)=>{
    if (window.confirm(`Are you sure you want to delete id ${id}`)) {
      fetch(`http://localhost:8000/students/${id}`,{
      method:'DELETE',
    })
   .then(()=>{
     alert('Student Data deleted Successfully');
     window.location.reload()

    //  refreshing pagr without reloading
    //  fetch('http://localhost:8000/students')
    // .then((res)=>res.json())  
    // .then((data)=>setStudents(data))
    // .catch((err)=>console.log(err.message));
 
   })
  }
    }
    

  useEffect(() => {
    fetch('http://localhost:8000/students')
    .then((res)=>res.json())  
    .then((data)=>setStudents(data))
    .catch((err)=>console.log(err.message));
  }, []);

  return (
    <div className="student-info">
      <h1> Student Records</h1>
      <div className="table-container">
      <div className='btn-div'>
        <Link to='/student/create' className="add-btn">Add new Student</Link>
      </div>
        <div>
           <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>ID</th>
              <th>Name</th>
              <th>Place</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            students && students.map((item,index)=>(
               <tr key={item.id}  className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>{index+1}.</td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.place}</td>
              <td>{item.phone}</td>
              <td>
                <button onClick={()=>DisplayDetail(item.id)} className='action-btn'>View</button>
                <button onClick={()=>editHandler(item.id)} className='action-btn'>Edit</button>
                <button onClick={()=>deletHandler(item.id)} className='action-btn'>Delete</button>
              </td>
            </tr>
          ))
          }
          </tbody>
        </table>
        </div>
       
      </div>
    </div>
  )
}

export default StudentInfo