import { useEffect } from "react";


const UserProfile = () => {

    // set dynamic title
    useEffect(() => {
        document.title = "Commercial website | User Profile"
    })
    return (
        <div>
            <h2 className="text-3xl">i am form user profile</h2>
        </div>
    );
};

export default UserProfile;