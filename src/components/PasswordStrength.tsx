import React, { useState } from 'react';

interface PasswordStrengthProps {
    password: string;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
    const [showDetails, setShowDetails] = useState<boolean>(false);

    const criteria = [
        { test: password.length >= 8, message: "At least 8 characters" },
        { test: /[A-Z]/.test(password), message: "Must include an uppercase letter" },
        { test: /[0-9]/.test(password), message: "Must include a number" },
        { test: /[!@#$%^&*]/.test(password), message: "Must include a special character (!@#$%^&*)" },
        { test: /[😀-🙏]/u.test(password), message: "Must include an emoji" }
    ];

    const passedCriteria = criteria.filter(c => c.test).length;
    let strengthLabel;
    let borderColor;

    if (passedCriteria === criteria.length) {
        strengthLabel = "Strong";
        borderColor = "green";
    } else if (passedCriteria >= 3) {
        strengthLabel = "Medium";
        borderColor = "orange";
    } else {
        strengthLabel = "Weak";
        borderColor = "red";
    }

    return (
        <div>
            <h5>Password Strength: {strengthLabel}</h5>
            <hr style={{ borderColor: borderColor }} />
            <button className="btn btn-secondary btn-sm mb-2" onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? "Hide details" : "Show details"}
            </button>
            {showDetails && (
                <div>
                    {criteria.map((c, index) => (
                        <p key={index} style={{ color: c.test ? "green" : "red", margin: "0" }}>
                            {c.message} {c.test ? "✓" : "✗"}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PasswordStrength;