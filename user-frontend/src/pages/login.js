import { useState} from "react";
import { Link } from "react-router-dom";

//import ProfileDetails from "./profile";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [passd, setPassd] = useState('');
  const [users, setUsers] = useState(null);

  const [error, setError] = useState(null);
  const [isLog, setIsLog] = useState(false);


  const ProfileDetails = ({user}) => {
    
      return (
          <div className="ProfileDetails">
              <h4>{user.first_name} {user.last_name}</h4>
              <p>email: {user.email}</p>
              <p>Age: {user.age}</p>
              <p>DOB: {user.DOB}</p>
              <p>Contact: {user.phone_no}</p>
              <button onClick={Logout}>Logout</button>
          </div>

      )
  }


  const Logout = () => {
    setIsLog(false);
  }


    const handleSubmit = async(e) => {
        e.preventDefault();

        const user = {email, passd};
        const response = await fetch('/api/users/login', {
            method: "POST", 
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if(response.ok) {
          console.log(json.length);
          if(json.length > 0) {
            setEmail('');
            setPassd('');
            setError(null);
            console.log(json);
            setIsLog(true);
            setUsers(json);
            // const id = json._id
            // // navigate('/profile:'+id);
          } else {
            setError("Please Check your Details");
          }
        }
        else {
          setError(json.error);
          setIsLog(false);
        }
    }

  return (
    <>
    {!isLog? (
      <form className='loginForm' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Email</label>
        <input type='text'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
        />
        <br/>
        <label>Password</label>
        <input type='text'
            onChange={(e) => setPassd(e.target.value)}
            value={passd}
        />
        <br/>
        <button type="submit">Login</button>
        <nav>
          <Link to="/register">Register</Link>
        </nav>
        {error && <div className="error">{error}</div>}
      </form>
    ) : (
      <>
        <h2>Profile</h2>
        {
          users && users.map((user) => (
            <ProfileDetails key={user._id} user={user} />
          ))
        }
      </>
  )
    }
      </>
  );
}

export default LoginPage;