import React, { useEffect, useState } from 'react';

interface CharacterSequenceValidatorProps {
    password: string;
}

const CharacterSequenceValidator: React.FC<CharacterSequenceValidatorProps> = ({ password }) => {
    const [valid, setValid] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);
    const sequenceRe = /[a-z][A-Z][0-9][!@#$%^&*+]/g;

    useEffect(() => {
        const matches = password.match(sequenceRe);
        if (matches && matches.length > 0) {
            setValid(true);
            setCount(matches.length);
        } else {
            setValid(false);
            setCount(0);
        }
    }, [password]);

    return (
        <div>
            <p>
                Character sequence check: {valid ? `Found ${count} valid sequence(s)` : "No valid sequence found"}
            </p>
        </div>
    );
};

export default CharacterSequenceValidator;