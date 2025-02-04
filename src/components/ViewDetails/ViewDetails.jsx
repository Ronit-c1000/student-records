import { useParams,Link  } from "react-router-dom";
import './ViewDetails.css'
import { useEffect, useState } from "react";
const ViewDetails = () => {

  const {studentid} = useParams();
  const [studentData , setStudentData] = useState();

  useEffect(()=>{
    fetch(`http://localhost:8000/students/${studentid}`)
    .then((res)=>res.json())
    .then((data)=>setStudentData(data))
    .catch((err)=>console.log(err.message)
    )
  })

  return (
    <div className="view-details">
     <h1>Student Details</h1>
     {studentData && <div className="details">
       <p><strong>ID : </strong>{studentData.id}</p>
       <p><strong>Name : </strong>{studentData.name}</p>
       <p><strong>Place : </strong>{studentData.place}</p>
       <p><strong>Phone : </strong>{studentData.phone}</p>
     </div>}
     <div className='btn-div'>
      <Link to='/' className='back-btn'>Back</Link>
     </div>
    </div>
  )
}

export default ViewDetails

