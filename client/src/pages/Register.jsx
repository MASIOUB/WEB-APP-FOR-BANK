import React, { useState } from "react";

import AuthService from "../services/auth.service";

const Register = () => {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        CIN: '',
        phone: '',
        email: '',
        password: '',
        ville: '',
    });
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
        console.log(value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        AuthService.register(user).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                console.log(response.data.message);
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setSuccessful(false);
            }
        );
    };

    return (
        <div className="h-screen">
            <div className="px-6 h-full text-gray-800">
                <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                    <div
                        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                    >
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full"
                            alt=""
                        />
                    </div>

                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form onSubmit={onSubmit}>
                            {message && (
                                <div className="mb-6">
                                    <div
                                        className={ successful
                                            ? "bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700"
                                            : "bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700" }
                                        role="alert"
                                    >
                                        {message}
                                    </div>
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0 text-center">
                                        Don't have an account?
                                        <a
                                            href="/"
                                            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                        >Register</a>
                                    </p>
                                </div>
                            )}
                            {!successful && (
                            <div>
                                {/* First Name */}
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name="firstName"
                                        value={user.firstName}
                                        onChange={onChange}
                                        placeholder="First Name..."
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name="lastName"
                                        value={user.lastName}
                                        onChange={onChange}
                                        placeholder="Last Name..."
                                    />
                                </div>

                                {/* CIN */}
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name="CIN"
                                        value={user.CIN}
                                        onChange={onChange}
                                        placeholder="CIN..."
                                    />
                                </div>

                                {/* Phone */}
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name="phone"
                                        value={user.phone}
                                        onChange={onChange}
                                        placeholder="Phone..."
                                    />
                                </div>

                                {/* Email */}
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name="email"
                                        value={user.email}
                                        onChange={onChange}
                                        placeholder="Email..."
                                    />
                                </div>

                                {/* Password */}
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name="password"
                                        value={user.password}
                                        onChange={onChange}
                                        placeholder="Password..."
                                    />
                                </div>

                                {/* Ville */}
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name="ville"
                                        value={user.ville}
                                        onChange={onChange}
                                        placeholder="Ville..."
                                    />
                                </div>

                                <div className="text-center lg:text-left">
                                    <button
                                        type="submit"
                                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Login
                                    </button>
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Don't have an account?
                                        <a
                                            href="/"
                                            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                        >Register</a>
                                    </p>
                                </div>
                            </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Register;