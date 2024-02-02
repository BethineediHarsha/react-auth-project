// import { useState, useEffect } from "react";
// import ProfileDetails from "../components/profileDetails";

// const ProfilePage = (user) => {

//     const [users, setUsers] = useState(null);
//     const handleSubmit = async(e) => {
//         e.preventDefault();

//         const response = await fetch('/api/users/');
//         const json = await response.json();

//         if(response.ok) {
//             setUsers(json);
//         }
//     }

//     return (
//         <div className="ProfilePage">
//             {users && users.map((user) => (
//                 <ProfileDetails key={user._id} user={user}/>
//             ))}
//         </div>
//     )
// }

const ProfileDetails = ({user}) => {
    return (
        <div className="ProfileDetails">
            <h4>{user.first_name} {user.last_name}</h4>
            <p>email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p>DOB: {user.DOB}</p>
            <p>Contact: {user.phone_no}</p>
        </div>
    )
}

export default ProfileDetails;