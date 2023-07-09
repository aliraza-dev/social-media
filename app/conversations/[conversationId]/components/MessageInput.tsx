"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  placeholder?: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  id: string;
}

const MessageInput: React.FC<MessageInputProps> = ({
  placeholder,
  type,
  required,
  register,
  errors,
  id,
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="text-black font-light py-2 px-4 bg-neutral-100 rounded-full w-full focus:outline-none"
      />
    </div>
  );
};

export default MessageInput;
