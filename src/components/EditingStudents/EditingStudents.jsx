import { useState, useEffect} from "react";
import { Link, useNavigate,useParams } from "react-router-dom";

const EditStudents = () => {
  const {studentid} = useParams();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    fetch(`http://localhost:8000/students/${studentid}`)
    .then((res)=>res.json())
    .then((data)=>{setId(data.id)
      setName(data.name)
      setPlace(data.place)
      setPhone(data.phone)
    })
    .catch((err)=>console.log(err.message)
    )
  },[studentid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = { id, name, place, phone };
    fetch(`http://localhost:8000/students/${studentid}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(studentData),
    }).then(() => {
      alert("Student Data Updated Successfully");
      navigate("/");
    });
  };
  return (
    <div className="create-student">
      <h2>Edit Student Details</h2>
      <form className="create-stu-form" onSubmit={handleSubmit}>
        <label htmlFor="id"> ID:</label>
        <input
          required
          type="number"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          onMouseDown={() => setValidation(true)}
          name="id"
        />
        {id.length === 0 && validation && (
          <span className="input-warning">!Pease Enter Your ID</span>
        )}

        <label htmlFor="name"> Name:</label>
        <input
          required
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onMouseDown={() => setValidation(true)}
          name="name"
        />
        {name.length === 0 && validation && (
          <span className="input-warning">!Please Enter Your Name</span>
        )}

        <label htmlFor="place"> Place:</label>
        <input
          required
          type="text"
          id="place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          onMouseDown={() => setValidation(true)}
          name="place"
        />
        {place.length === 0 && validation && (
          <span className="input-warning">!Please Enter Your Place</span>
        )}

        <label htmlFor="phone"> Phone:</label>
        <input
          required
          type="number"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onMouseDown={() => setValidation(true)}
          name="phone"
        />
        {phone.length === 0 && validation && (
          <span className="input-warning">!Please Enter Your Phone</span>
        )}

        <div className="create-btn">
          <button className="save-btn">Update</button>
          <Link to="/" className="cancel-btn">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditStudents;
