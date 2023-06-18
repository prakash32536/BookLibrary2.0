import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import AddBook from "./pages/addBook/AddBook";
import ViewBook from "./pages/ViewBook/ViewBook";
import EditBook from "./pages/EdditBook/EdditBook";


function App() {
  return (
    <div className="App">
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/add-book" element={<AddBook/>}></Route>
                <Route path="/view-book" element={<ViewBook/>}></Route>
                <Route path="/edit-book/:id" element={<EditBook/>}></Route>
              </Routes>
    </div>
  );
}

export default App;
