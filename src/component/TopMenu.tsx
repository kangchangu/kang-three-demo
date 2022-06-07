import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import BoxSampePage from "../page/BoxSamplePage";


const TopMenu = () => {
    return(
        <BrowserRouter>
            <div style={{padding : 20 , border :'5px solid gray'}}>
                <Link to="/" style={{paddingLeft : 20}}>Box Example</Link>
                {/* <Link to="/test" style={{paddingLeft : 20}}>React Testing</Link>
                <Link to="/fetch" style={{paddingLeft : 20}}> Fetch Testing </Link>
                <Link to="/form-validation" style={{paddingLeft : 20}}>Form Validation</Link> */}
            </div>
            <Routes>
                <Route path="/" element={<BoxSampePage/>}></Route>
                {/* <Route path="/test" element={<Counter/>}></Route>
                <Route path="/fetch" element={<Fetch/>}></Route>
                <Route path="form-validation" element={<FormValidation/>}></Route> */}
            </Routes>
        </BrowserRouter>
    )
}

export default TopMenu;