const {useState} = require("react");
const {json} = require("react-router-dom");

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [passd, setPassd] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        const user = {email, passd};
        const response = await fetch('api/login', {
            method: "POST", 
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'applicatiton/json'
            }
        });

        const json = await response.json();

        if(response.ok)
            console.log("Logged in");
        else
            console.log("Faleled in");
    }
}