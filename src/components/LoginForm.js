import React from "react";

const LoginForm = () => {
  return (
    <form action="/auth" method="POST">
      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          placeholder="add your email"
          name="email"
          id="email"
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="form-floating my-2">
        <input
          type="password"
          className="form-control"
          placeholder="enter your password"
          name="password"
          id="password"
        />
        <label htmlFor="password">Password</label>
      </div>
      <button className="btn btn-primary d-block w-100 my-2">Log In</button>
    </form>
  );
};

export default LoginForm;
