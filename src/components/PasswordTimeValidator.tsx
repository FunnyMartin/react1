import React, { useEffect, useState } from 'react';

interface PasswordTimeValidatorProps {
    password: string;
    passwordCreationTime: number;
    timeWindow: number;
    isPasted: boolean;
}

const PasswordTimeValidator: React.FC<PasswordTimeValidatorProps> = ({ password, passwordCreationTime, timeWindow, isPasted }) => {
    const [isValid, setIsValid] = useState<boolean>(false);

    useEffect(() => {
        const currentTime = Date.now();
        const timeDiff = currentTime - passwordCreationTime;
        if (password !== "" && !isPasted && timeDiff >= timeWindow) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [password, passwordCreationTime, timeWindow, isPasted]);

    return (
        <div>
            {isValid ? (
                <p style={{ color: "green" }}>Password was entered manually.</p>
            ) : (
                <p style={{ color: "red" }}>Password was pasted or entered too quickly. Please type it manually.</p>
            )}
        </div>
    );
};

export default PasswordTimeValidator;