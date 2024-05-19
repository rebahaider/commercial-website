import loginImg from "../../assets/login.jpg";

const Login = () => {
    return (
        <div className="bg-base-200">
            <div className="md:flex justify-around items-center gap-6 mt-20 mb-20 mr-10 ml-10">
                <div className="md:w-1/2">
                    <img src={loginImg} alt="" />
                </div>
                <div className="md:w-1/2 shadow-2xl bg-base-100 p-10 mt-20 mb-20">
                    <h1 className="text-5xl font-bold text-center">Log In Now </h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="LogIn" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;