import React, {useEffect, useState} from 'react';

interface CharacterSequenceProps {
    password: string | null
}

const CharacterSequenceValidator: React.FC<CharacterSequenceProps> = ({password}: CharacterSequenceProps) =>  {
    const [valid, setValid] = useState(false);
    const [count, setCount] = useState<null | number>(null);
    const re: RegExp = /[a-z][A-Z][0-9][!@#$%^&*+]/g;

    useEffect(() => {
        if (password?.match(re)) {
            setValid(true);
            setCount(password.match(re)?.length || 0);
        } else {
            setValid(false);
            setCount(0);
        }
    }, [password]);

    return (
        <>
            <p>Password contains sequence: {valid ? 'Yes' : 'No'}, {count} time(s)</p>
        </>
    );
}

export default CharacterSequenceValidator;