import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentInfo from './components/StudentInfo/StudentInfo'
import CreateStudent from './components/CreateStudent/CreateStudent'
import EditingStudent from './components/EditingStudents/EditingStudents'
import ViewDetails from './components/ViewDetails/ViewDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StudentInfo/>}></Route>
        <Route path='student/create' element={<CreateStudent/>}></Route>
        <Route path='student/edit/:studentid' element={<EditingStudent/>}></Route>
        <Route path="/student/view/:studentid" element={<ViewDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App 