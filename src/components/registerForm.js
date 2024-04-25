import React, { useState } from "react";

export default function Register() {


    const [registerForm, setregisterForm] = useState({
        Name: "",
        Email: "",
        userName: "",
        passward: "",
        confirmPassward: "",
    });

    const [registerFormErrors, setregisterFormErrors] = useState({
        Name: null,
        Email: null,
        userName: null,
        passward: null,
        confirmPassward: null,
    });



    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setregisterForm({
            ...registerForm,
            [name]: value,
        });
        console.log(name)
        console.log(value)
        console.log(event.target)
        setregisterFormErrors({
            ...registerFormErrors,
            [name]:
                value.length === 0
                    ? "This field is required"
                    : (name === "Name" && value.length < 3) ? "min length is 3"
                        : (name === "Email" && !/\S+@\S+\.\S+/.test(value)) ? "Invalid email format"
                        : (name === "userName" && value.includes(" "))  ? "no space"
                        : (name === "passward" && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/.test(value))
                        ? "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character"
                                : (name === "confirmPassward" && value !== registerForm.passward)
                         ? "Passwords and confitmpassward don't match"
                        : null,
        });
    };


    const handleSubmitForm = (event) => {
        event.preventDefault();
        console.log(registerForm);
    };

    return (

        <div class="container py-5 h-100">
            <div class="card" style={{ 'border-radius': '.75rem', 'background-color': "#eff1f2                        " }}>
                <form onSubmit={handleSubmitForm} className="container my-5">
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className={`form-control ${registerFormErrors.title ? "border-danger" : ""
                                }`}
                            name="Name"
                            onChange={handleFormChange}
                        />
                        {registerFormErrors.Name && (
                            <div className="form-text text-danger">{registerFormErrors.Name}</div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Email1" className="form-label">
                            Email
                        </label>
                        <input
                            type="text"
                            className={`form-control ${registerFormErrors.Email ? "border-danger" : ""
                                }`}
                            name="Email"
                            onChange={handleFormChange}
                        />
                        {registerFormErrors.Email && (
                            <div className="form-text text-danger">{registerFormErrors.Email}</div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="userName" className="form-label">
                            userName
                        </label>
                        <input
                            type="text"
                            className={`form-control ${registerFormErrors.userName ? "border-danger" : ""
                                }`}
                            name="userName"
                            onChange={handleFormChange}
                        />
                        {registerFormErrors.userName && (
                            <div className="form-text text-danger">{registerFormErrors.userName}</div>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passward" className="form-label">
                            passward
                        </label>
                        <input
                            type="password"
                            className={`form-control ${registerFormErrors.passward ? "border-danger" : ""
                                }`}
                            name="passward"
                            onChange={handleFormChange}
                        />
                        {registerFormErrors.passward && (
                            <div className="form-text text-danger">{registerFormErrors.passward}</div>
                        )}

                        <div className="mb-3">
                            <label htmlFor="confirmPassward" className="form-label">
                                confirm Passward
                            </label>
                            <input
                                type="password"
                                className={`form-control ${registerFormErrors.confirmPassward ? "border-danger" : ""
                                    }`}
                                name="confirmPassward"
                                onChange={handleFormChange}
                            />
                            {registerFormErrors.confirmPassward && (
                                <div className="form-text text-danger">{registerFormErrors.confirmPassward}</div>
                            )}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

