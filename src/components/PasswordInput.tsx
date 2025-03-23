import React, {Dispatch, SetStateAction, useState} from 'react';

interface PasswordInputProps {
    passwordValue: string;
    setter: Dispatch<SetStateAction<string>>;
    setCreationTime: Dispatch<SetStateAction<number>>;
    setPasted: Dispatch<SetStateAction<boolean>>;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ passwordValue, setter, setCreationTime, setPasted }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setter(e.target.value);
    };

    const handleFocus = () => {
        if (passwordValue === "") {
            setCreationTime(Date.now());
        }
    };

    const handlePaste = () => {
        setPasted(true);
        setCreationTime(Date.now());
    };

    const handleKeyDown = () => {
        setPasted(false);
    };

    return (
        <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">Enter Password:</label>
            <div className="input-group">
                <input
                    id="passwordInput"
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    value={passwordValue}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onPaste={handlePaste}
                    onKeyDown={handleKeyDown}
                />
                <button className="btn btn-outline-secondary" type="button" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "Hide" : "Show"}
                </button>
            </div>
        </div>
    );
};

export default PasswordInput;