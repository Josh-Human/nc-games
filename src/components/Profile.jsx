import { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import { getUser } from "../utils/api";
import "./css/Profile.css";

const Profile = ({ username }) => {
    const [user, setUser] = useState({});
    const [isProfileLoading, setIsProfileLoading] = useState(true);

    useEffect(() => {
        setIsProfileLoading(true);
        getUser(username).then((result) => {
            setUser(result);
            setIsProfileLoading(false);
        });
    }, [username]);

    return (
        <div>
            {isProfileLoading ? (
                <GridLoader />
            ) : (
                <div className="profile">
                    <p>{user.username}</p>
                    <img src={user.avatar_url} />
                    <p>{user.name}</p>
                </div>
            )}
        </div>
    );
};

export default Profile;
