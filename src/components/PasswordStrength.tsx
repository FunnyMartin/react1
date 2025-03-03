import React, {useState} from 'react';

interface PasswordStrengthProps {
    password: string | null
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({password}: PasswordStrengthProps) => {

    const errorArray: Array<string> = [];
    const [toggle, setToggle] = useState(false);


    if (password === null) {return ("Write something");}
    if (password.length < 8){
        errorArray.push('Too short');
    }
    if(password.search("[A-Z]") === -1) {errorArray.push('Include upper case letter')}
    if(password.search(("[0-9]")) === -1) {errorArray.push('Include a number')}
    if(password.search(("[!@#$%^&*?]")) === -1) {errorArray.push('Include a special character')}
    if(password.search(/[😀-🙏]/u) === -1) {errorArray.push('Include an emoji')}

    return (
        <>

            <button onClick={() => setToggle(!toggle)}>Toggle visibility</button>
            {toggle && (
                <>
                    {errorArray.map((value, index) => (
                        <p key={index}>{value}</p>
                    ))}
                </>
            )}
        </>
    );
}

export default PasswordStrength;