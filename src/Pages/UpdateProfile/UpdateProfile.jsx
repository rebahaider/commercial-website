import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";



const UpdateProfile = () => {

    // set dynamic title
    useEffect(() => {
        document.title = "Commercial website | Update Profile"
    })

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const onSubmit = (data) => {
                // update profile
                updateProfile(user, {
                    displayName: data.name,
                    photoURL: data.photo,
                })
                    .then(() => {
                        Swal.fire({
                            title: "User Successfully Updated",
                            showClass: {
                                popup: `
                                animate__animated
                                animate__fadeInUp
                                animate__faster
                              `
                            },
                            hideClass: {
                                popup: `
                                animate__animated
                                animate__fadeOutDown
                                animate__faster
                              `
                            }
                        });
                    })
                    .catch(error => {
                        console.log(error.message);
                        Swal.fire({
                            title: "User already exist",
                            showClass: {
                                popup: `
                                animate__animated
                                animate__fadeInUp
                                animate__faster
                              `
                            },
                            hideClass: {
                                popup: `
                                animate__animated
                                animate__fadeOutDown
                                animate__faster
                              `
                            }
                        });
                    });

        reset();
        navigate("/")
    };

    return (
        <div className="bg-base-200">
            <div className="ml-80 p-10">
                <div className="md:w-1/2 shadow-2xl bg-base-100 p-10 mt-20 mb-20">
                    <h1 className="text-5xl font-bold text-center">Update Your Profile</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        {/* name field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} {...register("name")} placeholder="Name" name="name" className="input input-bordered" />
                        </div>
                        {/* email field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" defaultValue={user.email} {...register("email")} className="input input-bordered" />
                        </div>
                        {/* photo field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" defaultValue={user.photoURL} {...register("photo")} placeholder="Photo URL.." className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Update Profile" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;