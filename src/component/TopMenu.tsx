import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import BoxSampePage from "../page/BoxSamplePage";
import ProductPage from "../page/ProductPage";
import Counter from "./Counter";
import EventMesh from "./EventMesh";
import InputSample from "./InputSample";
import UserList from "./UserList";
import UserListReducer from "./UserListReducer";


const TopMenu = () => {
    return(
        <BrowserRouter>
            <div style={{padding : 20 , border :'5px solid gray'}}>
                <Link to="/" style={{paddingLeft : 20}}>Box Example</Link>
                <Link to="/product/list" style={{paddingLeft : 20}}>Product List Page(React Query)</Link>
                <Link to="/mesh/event" style={{paddingLeft : 20}}>Event Mesh Example</Link>
                <Link to="/input/sampe" style={{paddingLeft : 20}}>Input Sampe</Link>
                <Link to="/userlist/arry" style={{paddingLeft : 20}}>UserList Array Sample</Link>
                <Link to="/counter/reducer" style={{paddingLeft : 20}}>Counter Reducer Sample</Link>
                <Link to="/userlist/reducer" style={{paddingLeft : 20}}>USERLIST Reducer Sample</Link>
                {/* <Link to="/test" style={{paddingLeft : 20}}>React Testing</Link>
                <Link to="/fetch" style={{paddingLeft : 20}}> Fetch Testing </Link>
                <Link to="/form-validation" style={{paddingLeft : 20}}>Form Validation</Link> */}
            </div>
            <Routes>
                <Route path="/" element={<BoxSampePage/>}></Route>
                <Route path="/product/list" element={<ProductPage/>}></Route>
                <Route path="/mesh/event" element={<EventMesh/>}></Route>
                <Route path="/input/sampe" element={<InputSample/>}></Route>
                <Route path="/userlist/arry" element={<UserList/>}></Route>
                <Route path="/counter/reducer" element={<Counter/>}></Route>
                <Route path="/userlist/reducer" element={<UserListReducer/>}></Route>

                {/* <Route path="/test" element={<Counter/>}></Route>
                <Route path="/fetch" element={<Fetch/>}></Route>
                <Route path="form-validation" element={<FormValidation/>}></Route> */}
            </Routes>
        </BrowserRouter>
    )
}

export default TopMenu;