import { useEffect } from "react";


const UpdateProfile = () => {

    // set dynamic title
    useEffect(() => {
        document.title = "Commercial website | Update Profile"
    })
    return (
        <div>
            <h2 className="text-3xl">i am form update profile</h2>
        </div>
    );
};

export default UpdateProfile;