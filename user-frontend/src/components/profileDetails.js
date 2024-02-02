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