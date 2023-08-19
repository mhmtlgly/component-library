import React, { FC, InputHTMLAttributes } from "react"
import { Controller } from "react-hook-form"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  error?: string
}

const Input: FC<InputProps> = ({ label, error, name, ...rest }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <Controller
        name={name}
        render={({ field }) => (
          <input
            className={`mt-1 p-2 border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300 ${
              error ? "border-red-500" : "border-gray-300"
            }`}
            {...field}
            {...rest}
          />
        )}
      />
      {error && <p className="text-red-500 mt-1">{error}</p>}
    </div>
  )
}

export default Input
