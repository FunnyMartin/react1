import React, {useState, useEffect} from 'react';

interface PasswordTimeValidatorProps{
    password: string | null
    passwordCreationTime: number;
    timeWindow: number;
}

const PasswordTimeValidator: React.FC<PasswordTimeValidatorProps> = ({password, passwordCreationTime, timeWindow}) => {
    const [isPasswordValid, setIsPasswordValid] = useState<boolean | null>(null);

    useEffect(() => {
        const currentTime = Date.now();
        const timeDifference = currentTime - passwordCreationTime;

        if ((timeDifference < timeWindow) && password === null) {
            setIsPasswordValid(false);
        } else if ((timeDifference > timeWindow) && password != null){
            setIsPasswordValid(true);
        }
    }, [password, passwordCreationTime, timeWindow]);

    return (
        <>
            {isPasswordValid ? (<p>Password is not copy pasted</p>) : (<p>Password is invalid. It was entered too quickly.</p>)}
        </>
    );
};

export default PasswordTimeValidator;