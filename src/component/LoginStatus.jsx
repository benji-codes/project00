import { useState } from "react";
function LoginStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
            <h1>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h1>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Log Out" : "Log In"}
            </button>
        </div>
    );
}
export default LoginStatus;