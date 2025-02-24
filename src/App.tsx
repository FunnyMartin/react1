import './App.css'
import {useState} from "react";
import PasswordInput from "./components/PasswordInput.tsx";
import PasswordStrength from "./components/PasswordStrength.tsx";

function App() {
    const [password, setPassword] = useState<string|null>(null);
    return (
        <>
            <h2>My Password Game</h2>
            <PasswordInput passwordValue={password} setter={setPassword}/>
            <PasswordStrength password={password}/>
        </>
    )
}

export default App
