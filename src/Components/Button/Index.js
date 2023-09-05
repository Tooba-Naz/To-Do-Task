import React from "react";

const varients = {
  primary:"bg-indigo-600 text-white hover:anabled:bg-indigo-700 focus:ring-indigo-500",
  danger: "bg-red-600 text-white hover:anabled:bg-red-700 focus:ring-red-500",
  naked: "hover:text-gray-600 text-gray-500 shadow-none",
  taskButton: "rounded-r-full w-64 h-14 mt-11 text-white bg-black font-bold items-center justify-center",
  locationButton:"rounded-r-full w-64 h-14 mt-6 bg-white text-black font-bold hover:bg-black hover:text-white",
  logoutButton:"rounded-r-full w-64 h-14 mb-0 bg-white text-black font-bold mt-16 hover:bg-black hover:text-white",
  formButton:"bg-black text-white hover:anabled:bg-black w-96 h-14 ",
  secondformButton:"bg-white text-black hover:anabled:bg-black w-96 h-14 "
};
const sizes = {
  small: "px-2 py-1 text-xs leading-1",
  medium: "px-4 py-2 text-sm ",
  large: "px-4 py-2 text-base ",
};
export const Button = ({
  className,
  varient = "primary",
  size = "small",
  ...props
}) => {
  return (
    <button
      className={`inline-flex justify-center  items-center  border border-transparent
              font-md  focus:outline-none focus:ring-2 focus:ring-offset-2
             disabled:opactiy-50 disabled:cursor-not-allowed
             ${className}
             ${varients[varient]}
             ${sizes[size]}
             `}
      {...props}
    />
  );
};