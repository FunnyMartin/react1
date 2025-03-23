import { useEffect, useState } from 'react';
import './App.css';

import PasswordInput from './components/PasswordInput';
import PasswordStrength from './components/PasswordStrength';
import CharacterSequenceValidator from './components/CharacterSequenceValidator';
import PasswordTimeValidator from './components/PasswordTimeValidator';
import CountryFlagValidator from './components/CountryFlagValidator';

function App() {
    const [password, setPassword] = useState<string>("");
    const [passwordCreationTime, setPasswordCreationTime] = useState<number>(0);
    const [isPasted, setIsPasted] = useState<boolean>(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPassword(prev => {
                if (prev.length === 0) return prev;
                const action = Math.random() < 0.5 ? 'add' : 'remove';
                if (action === 'add') {
                    return prev + "😜";
                } else {
                    const index = Math.floor(Math.random() * prev.length);
                    return prev.slice(0, index) + prev.slice(index + 1);
                }
            });
        }, 10000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="container mt-4">
            <h2>My Password Game</h2>
            <PasswordInput passwordValue={password} setter={setPassword} setCreationTime={setPasswordCreationTime} setPasted={setIsPasted}/>
            <PasswordStrength password={password} />
            <CharacterSequenceValidator password={password} />
            <PasswordTimeValidator password={password} passwordCreationTime={passwordCreationTime} timeWindow={5000} isPasted={isPasted}/>
            <CountryFlagValidator password={password} />
        </div>
    );
}

export default App;