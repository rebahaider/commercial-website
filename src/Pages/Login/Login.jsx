import { Link } from "react-router-dom";
import loginImg from "../../assets/login.jpg";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {


    const [showPassword, setShowPassword] = useState('');

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className="bg-base-200">
            <div className="md:flex justify-around items-center gap-6 mt-20 mb-20 mr-10 ml-10">
                <div className="md:w-1/2">
                    <img className="rounded-lg" src={loginImg} alt="" />
                </div>
                <div className="md:w-1/2 shadow-2xl bg-base-100 p-10 mt-20 mb-20">
                    <h1 className="text-5xl font-bold text-center">Log In Now </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" {...register("email", { required: true })} className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} placeholder="password" name="password" {...register("password", { required: true })} className="input input-bordered" />
                            <span className="absolute bottom-32 right-48" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                            {errors.password && <span className="text-red-600">Password is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="LogIn" />
                        </div>
                    </form>
                    <p className="text-center">New Here, Please <Link to="/signUp" className="underline text-blue-700 font-bold">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;