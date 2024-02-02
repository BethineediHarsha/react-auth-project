import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {

    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    const [DOB, setDOB] = useState('');
    const [phone_no, setPhone_no] = useState('');
    const [passd, setPassd] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(first_name === ''|| last_name === '' || email === '' || age === 0 || DOB === '' || phone_no === '' ) {
            setError("Enter All details");
        }

        const user = {first_name, last_name, email, age, DOB, phone_no, passd};
        const response = await fetch('/api/users/create', {
            method: "POST", 
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if(response.ok) {
            setFirst_name('');
            setLast_name('');
            setAge(0);
            setDOB('');
            setPhone_no('');
          setEmail('');
          setPassd('');
          console.log(json);
        }
        else {
        }
    }

  return (
      <form className='registerForm' onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label>First Name:</label>
        <input type='text'
            onChange={(e) => setFirst_name(e.target.value)}
            value={first_name}
        />
        <br/>

        <label>Last Name:</label>
        <input type='text'
            onChange={(e) => setLast_name(e.target.value)}
            value={last_name}
        />
        <br/>

        <label>Email</label>
        <input type='text'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
        />
        <br/>

        <label>Age</label>
        <input type='text'
            onChange={(e) => setAge(e.target.value)}
            value={age}
        />
        <br/>

        <label>DOB: </label>
        <input type='text'
            onChange={(e) => setDOB(e.target.value)}
            value={DOB}
        />
        <br/>

        <label>phone_no: </label>
        <input type='text'
            onChange={(e) => setPhone_no(e.target.value)}
            value={phone_no}
        />
        <br/>

        <label>Password</label>
        <input type='text'
            onChange={(e) => setPassd(e.target.value)}
            value={passd}
        />
        <br/>
        <button type="submit">Register</button>
        <nav>
          <Link to="/">Login</Link>
        </nav>
        {error && <div className="error">{error}</div>}
      </form>
  );
}

export default RegisterPage;