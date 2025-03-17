import './App.css'
import {useState} from "react";
import PasswordInput from "./components/PasswordInput.tsx";
import PasswordStrength from "./components/PasswordStrength.tsx";
import CharacterSequenceValidator from "./components/CharacterSequenceValidator.tsx";
import PasswordTimeValidator from "./components/PasswordTimeValidator.tsx";

function App() {
    const [password, setPassword] = useState<string|null>(null);
    const [passwordCreationTimeA] = useState<number>(Date.now());
    return (
        <>
            <h2>My Password Game</h2>
            <PasswordInput passwordValue={password} setter={setPassword}/>
            <br/> <br/>
            <PasswordStrength password={password}/>
            <CharacterSequenceValidator password={password}/>
            <PasswordTimeValidator password={password} passwordCreationTime={passwordCreationTimeA} timeWindow={5000}/>
        </>
    )
}

export default App
