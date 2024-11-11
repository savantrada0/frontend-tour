import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import Login from "./screens/Login";
import Overview from "./screens/Overview";
import Tour from "./screens/Tour";
import AuthLayout from "./layout/AuthLayout";
import Layout from "./layout/Layout";

function App() {
    return (
        <Routes>
			{/* Protected Route */}
			<Route path='/' element={<Layout />}>
				<Route path="/" element={<Overview />} />
				<Route path="/tour" element={<Tour/>}/>
			</Route>
			{/* Public Route */}
			<Route path="/" element={<AuthLayout />}>
				<Route path="/signin" element={<Login />} />
				{/* <Route path="/signup" element={<SignUp />} /> */}
			</Route>
			<Route path='*' element={<NotFound />}/>
		</Routes>
    );
}

export default App;
