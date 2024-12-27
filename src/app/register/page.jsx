"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiArrowLeft, FiEye, FiEyeOff } from "react-icons/fi";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    dob: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Remove o erro ao digitar novamente
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validação dos campos
    if (!formData.dob.trim()) newErrors.dob = "Date of birth is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!validateEmail(formData.email)) newErrors.email = "Please enter a valid email address.";
    if (!formData.password.trim()) newErrors.password = "Password is required.";
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";

    setErrors(newErrors);

    // Se não houver erros, processa o cadastro
    if (Object.keys(newErrors).length === 0) {
      console.log("Form Data:", formData);
      router.push("/login");
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url("/background-forms.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Camada de fundo escuro */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Formulário */}
      <div className="relative w-full max-w-md bg-[#1E1E2E] rounded-lg shadow-lg p-8">
        {/* Header com logo e botão de voltar */}
        <div className="flex items-center justify-center mb-6 relative">
          <button
            onClick={() => router.push("/")}
            className="absolute left-0 text-white text-2xl"
          >
            <FiArrowLeft />
          </button>
          <img src="/logo.png" alt="Logo" className="h-16" />
        </div>

        {/* Título */}
        <h1 className="text-2xl font-bold text-center mb-2 flex items-center justify-center">
          <div className="flex-grow border-t border-[#C8B8E4] mx-2"></div>
          Sign Up
          <div className="flex-grow border-t border-[#C8B8E4] mx-2"></div>
        </h1>
        <p className="text-sm text-center text-[#C8B8E4] mb-6">
          Enjoy magical features including the official sorting ceremony, portrait maker, and more!
        </p>

        {/* Formulário */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Data de Nascimento */}
          <div>
            <label htmlFor="dob" className="block text-sm font-medium mb-2">
              Date of Birth
            </label>
            <input
              type="text"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-[#2D254A] rounded-md text-white focus:outline-none ${
                errors.dob ? "ring-2 ring-red-500" : "focus:ring-2 focus:ring-[#6E54A3]"
              }`}
              placeholder="DD/MM/YYYY"
            />
            {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-[#2D254A] rounded-md text-white focus:outline-none ${
                errors.email ? "ring-2 ring-red-500" : "focus:ring-2 focus:ring-[#6E54A3]"
              }`}
              placeholder="youremail@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Senha */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-[#2D254A] rounded-md text-white focus:outline-none ${
                errors.password ? "ring-2 ring-red-500" : "focus:ring-2 focus:ring-[#6E54A3]"
              }`}
              placeholder="Your password"
            />
            <div
              className="absolute right-4 top-10 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <FiEyeOff className="text-white" />
              ) : (
                <FiEye className="text-white" />
              )}
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Nome e Sobrenome */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-[#2D254A] rounded-md text-white focus:outline-none ${
                  errors.firstName ? "ring-2 ring-red-500" : "focus:ring-2 focus:ring-[#6E54A3]"
                }`}
                placeholder="First Name"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-[#2D254A] rounded-md text-white focus:outline-none ${
                  errors.lastName ? "ring-2 ring-red-500" : "focus:ring-2 focus:ring-[#6E54A3]"
                }`}
                placeholder="Last Name"
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>

          {/* Botão de Sign Up */}
          <div className="pt-5">
            <button
                type="submit"
                className="w-full py-2 bg-[#6E54A3] text-white rounded-md hover:bg-[#543F7E] transition"
            >
                Sign Up
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-[#C8B8E4]"></div>
          <span className="px-4 text-sm text-[#C8B8E4]">OR</span>
          <div className="flex-grow border-t border-[#C8B8E4]"></div>
        </div>

        {/* Log In */}
        <div className="text-center">
          <p className="mb-2 text-sm">Already have an account?</p>
          <a
            href="/login"
            className="block w-full py-2 border border-[#6E54A3] text-[#6E54A3] rounded-md hover:bg-[#6E54A3] hover:text-white transition"
          >
            Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
