import React, { useState, useEffect } from "react";
import "./AuthForms.css";

type User = {
  email: string;
  username: string;
  password: string;
  role: string;
};

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, [isLogin]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSignup = () => {
    if (!email || !username || !password || !role) {
      return setError("All fields are required.");
    }
    if (!validateEmail(email)) {
      return setError("Invalid email format.");
    }
    if (password.length < 6) {
      return setError("Password must be at least 6 characters.");
    }

    const users = JSON.parse(localStorage.getItem("evidwan-users") || "[]");
    const exists = users.find((u: User) => u.email === email);
    if (exists) return setError("Email already registered.");

    const newUser = { email, username, password, role };
    users.push(newUser);
    localStorage.setItem("evidwan-users", JSON.stringify(users));
    localStorage.setItem("evidwan-current-user", JSON.stringify(newUser));

    alert("Signup successful! You're now logged in.");
    setIsLogin(true);
  };

  const handleLogin = () => {
    if (!email || !password) {
      return setError("Email and password are required.");
    }
    const users = JSON.parse(localStorage.getItem("evidwan-users") || "[]");
    const user = users.find(
      (u: User) => u.email === email && u.password === password
    );
    if (!user) return setError("Invalid email or password.");

    localStorage.setItem("evidwan-current-user", JSON.stringify(user));
    alert("Login successful!");
    window.location.href = "/home";
  };

  return (
    <div className="form-modal">
      <div className="form-toggle">
  <button
    id="login-toggle"
    onClick={() => setIsLogin(true)}
    style={
      isLogin
        ? { backgroundColor: "#393e46", color: "#fff" }
        : { backgroundColor: "#eeeeee", color: "#393e46" }
    }
  >
    log in
  </button>
  <button
    id="signup-toggle"
    onClick={() => setIsLogin(false)}
    style={
      !isLogin
        ? { backgroundColor: "#393e46", color: "#fff" }
        : { backgroundColor: "#eeeeee", color: "#393e46" }
    }
  >
    sign up
  </button>
</div>
      <form>
        {!isLogin && (
          <>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Choose username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <select
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option>Student</option>
              <option>Instructor</option>
              <option>Admin</option>
            </select>
            <button type="button" className="btn signup" onClick={handleSignup}>
              create account
            </button>
            <p>
              Clicking <strong>create account</strong> means that you agree to
              our <a href="#">terms of services</a>.
            </p>
          </>
        )}

        {isLogin && (
          <>
            <input
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" className="btn login" onClick={handleLogin}>
              login
            </button>
            <p>
              <a href="#">Forgotten account</a>
            </p>
          </>
        )}
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        <hr />
        <button type="button" className="btn -box-sd-effect">
          <i className="fab fa-google fa-lg" /> {isLogin ? "sign in" : "sign up"} with Google
        </button>
        <button type="button" className="btn -box-sd-effect">
          <i className="fab fa-linkedin fa-lg" /> {isLogin ? "sign in" : "sign up"} with LinkedIn
        </button>
        <button type="button" className="btn -box-sd-effect">
          <i className="fab fa-windows fa-lg" /> {isLogin ? "sign in" : "sign up"} with Microsoft
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
