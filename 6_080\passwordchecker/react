import React,{useState} from "react";
function PasswordStrengthChecker(){
    const [password,setPassword]=useState('');
    const [strength,setStrength]=useState('');
    const evaluatePasswordStrength=(pwd)=>{
        const hasUpperCase=/[A-Z]/.test(pwd);
        const hasLowerCase=/[a-z]/.test(pwd);
        const hasDigit=/\d/.test(pwd);
        const hasSpecialChar=/[!@#$%^&*()_+-~{}>,/]/.test(pwd);
        if(pwd.length>=12 && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar){
            return 'Strong';
        }else if(pwd.length>=8 && hasUpperCase && hasLowerCase && (hasDigit || hasSpecialChar)){
            return 'Medium';
        }else if(pwd.length>0 && (hasUpperCase || hasLowerCase || hasDigit || hasSpecialChar)){
            return 'Weak';
        }else{
            return 'Very Weak';
        }
    };
    const handlePasswordChange=(event) => {
        const new_password=event.target.value;
        setPassword(new_password);
        setStrength(evaluatePasswordStrength(new_password));
    };
    return(
        <div>
            <h2>PASSWORD STRENGTH CHECKER</h2>
            Password:
            <input type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
            <p>Password strength:<strong>{strength}</strong></p>
        </div>
    );
}
export default PasswordStrengthChecker
