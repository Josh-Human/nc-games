import { useEffect, useState } from "react";
import { getUser } from "../utils/api";

const Profile = ({ username }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        getUser(username).then((result) => {
            setUser(result);
        });
    }, [username]);

    return (
        <div>
            <p>{user.username}</p>
            <img src={user.avatar_url} />
            <p>{user.name}</p>
        </div>
    );
};

export default Profile;
