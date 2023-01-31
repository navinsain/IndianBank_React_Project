import "./App.css";
import Sidebar from "./Sidebar";
import {  BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import UserDetails from "./UserDetails";


import ExpenseVoucher from "./ExpenseVoucher";
import UserCreate from "./UserCreate";
import UpdateUser from "./UpdateUser";
import Login from "./Login";
import Welcome from "./Welcome";
import Navbar from "./Navbar";
function App() {
return (
	<Router>
	
	{/* <Sidebar /> */}
	<Routes>
	
		<Route path="/Create_user" exact element={<UserCreate/>} />
		{/* <Route path="/about-us/aim" exact component={OurAim} />
		<Route path="/about-us/vision" exact component={OurVision} /> */}
		<Route path="/User_Details" exact element={<UserDetails/>} />
		<Route path="/Sidebar" exact element={<Sidebar/>} />
		{/* <Route path="/services/services1" exact component={ServicesOne} />
		<Route path="/services/services2" exact component={ServicesTwo} />
		<Route path="/services/services3" exact component={ServicesThree} /> */}
		<Route path="/" exact element={<Login/>} />
		<Route path="/update_user/:Emp_kid" exact element={<UpdateUser/>} />    
		{/* <Route path="/events/events1" exact component={EventsOne} />
		<Route path="/events/events2" exact component={EventsTwo} /> */}
		<Route path="/ExpenseVoucher/:Brncode" exact element={<ExpenseVoucher/>} />
    {/* <Route path="/welcome" exact element={<Welcome/>} /> */}
    {/* <Route path="/" exact element={<Navbar/>} /> */}
	</Routes>
	</Router>
);
}

export default App;

