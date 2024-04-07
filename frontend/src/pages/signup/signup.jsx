import { useState } from "react";
import Role from "./Role";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
	
	const handleCheckboxChange = (role) => {
		setInputs({ ...inputs, role });
	}
	
	const handleSubmit =  (e) => {
		e.preventDefault();
		console.log(inputs)
	}

	
  return (
    <div className=" rounded-lg flex flex-col items-center justify-center min-w-96 mx-auto p-8">
      <div className="  w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-300"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name" className="w-full input input-bordered  h-10 "  value={inputs.fullName}
			onChange={(e)=>setInputs({...inputs,fullName: e.target.value})}
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">E-mail</span>
            </label>
            <input
              type="email"
              placeholder="123@gmail.com"
              className="w-full input input-bordered h-10" value={inputs.email} onChange={(e) => setInputs({...inputs,email: e.target.value})}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10" value={inputs.password} onChange={(e) => setInputs({...inputs,password: e.target.value})}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10" value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs,confirmPassword: e.target.value})}
            />
          </div>
<label className="label p-2 mt-5">
  <span className="text-base label-text">Role</span>
		<Role onCheckboxChange={handleCheckboxChange} selectedRole={inputs.role} />
</label>


          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block"
            href="#"
          >
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
