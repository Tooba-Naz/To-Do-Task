import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../Components/Input/Index";
import { Button } from "../../Components/Button/Index";

const Login = () => {
    const onSubmit = (event) => {
        event.preventDefault();
        console.log("data", event);
    };
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    }
    return (
        <>
            <div className="w-full flex justify-center items-center min-h-screen">
                <div className="w-full max-w-lg">
                    <form
                        onSubmit={onSubmit}
                        className="justify-center items-center  bg-white rounded px-12 pt-6 pb-8 mb-4">
                        <h3 className="justify-center items-center text-center text-3xl mb-5 font-semibold font-sans pb-9">Login</h3>
                        <div className="mb-4">
                            <Input
                                name={'Email'}
                                id={'Email'}
                                placeholder={'Email'}
                                varient={'LoginPage'}
                                className={""} />
                        </div>
                        <div className="mb-6 relative">
                            <Input
                                id={'password'}
                                varient={'LoginPage'}
                                type={showPassword ? "text" : "password"}
                                placeholder={'Password'} />
                            <div className="absolute top-3 right-12 font-semibold">
                                <button
                                    type="button"
                                    onClick={handlePasswordToggle}
                                    className=" text-black cursor-pointer text-lg"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>
                        <div>
                            <Link to={'/todo'}> <Button
                                type="submit"
                                size='large'
                                varient="formButton"
                                className={'rounded-full'}
                            >
                                Sign In
                            </Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div></>
    );
};
export default Login;