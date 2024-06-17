import logo from './logo.svg';
import './App.css';
import Login from'./page/login/Login'
import SignUp from './page/signup/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom"; //aide a definir le path
import Home from './page/Home/Home';
import Books from './page/Books/Books';
import Student from './page/Student/Student';
import Admin from './page/Admin/Admin';
import AddBook from './page/AddBook/AddBook';
import IssueBook from './page/Books/IssueBook';
import AllStudent from './page/Student/AllStudent';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/student/page/:id" element={<Student />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Admin/AddBook" element={<AddBook />} />
          <Route path="/Admin/IssueBook" element={<IssueBook />} />
          <Route path="/Admin/AllStudent" element={<AllStudent />} />
         


        </Routes>
     
      </BrowserRouter>
      
  );
}

export default App;
