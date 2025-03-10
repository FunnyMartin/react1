import './App.css'
import {useState} from "react";
import PasswordInput from "./components/PasswordInput.tsx";
import PasswordStrength from "./components/PasswordStrength.tsx";
import CharacterSequenceValidator from "./components/CharacterSequenceValidator.tsx";

function App() {
    const [password, setPassword] = useState<string|null>(null);
    return (
        <>
            <h2>My Password Game</h2>
            <PasswordInput passwordValue={password} setter={setPassword}/>
            <br/> <br/>
            <PasswordStrength password={password}/>
            <CharacterSequenceValidator password={password}/>
        </>
    )
}

export default App
