"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiArrowLeft, FiEye, FiEyeOff } from "react-icons/fi";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({ email: "", general: "" });
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: "", general: "" }); // Limpar erros ao digitar
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação do e-mail
    if (!validateEmail(formData.email)) {
      setError({ ...error, email: "Please enter a valid email address." });
      return;
    }

    // Simulação de validação de login (backend fictício)
    const mockEmail = "test@example.com";
    const mockPassword = "password123";

    if (formData.email !== mockEmail || formData.password !== mockPassword) {
      setError({
        ...error,
        general:
          "We can't find this email and password combination. Have you been Confunded? Try again.",
      });
      return;
    }

    // Se passar na validação, redireciona para outra página (exemplo: dashboard)
    router.push("/dashboard");
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
      {/* Camada de fundo escuro para contraste */}
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
        <h1 className="text-2xl font-bold text-center mb-4 flex items-center justify-center">
          <div className="flex-grow border-t border-[#C8B8E4] mx-2"></div>
          Login
          <div className="flex-grow border-t border-[#C8B8E4] mx-2"></div>
        </h1>

        {/* Formulário */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Input de Email */}
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
              className="w-full px-4 py-2 bg-[#2D254A] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#6E54A3]"
              placeholder="youremail@example.com"
            />
            {error.email && (
              <p className="text-sm text-red-500 mt-1">{error.email}</p>
            )}
          </div>

          {/* Input de Senha */}
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
              className="w-full px-4 py-2 bg-[#2D254A] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#6E54A3]"
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
            {error.general && (
              <p className="text-sm text-red-500 mt-1">{error.general}</p>
            )}
          </div>

          {/* Link de "Forgot Password?" */}
          <div className="text-right">
            <a href="/forgot-password" className="text-sm text-[#6E54A3] hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Botão de Log In */}
          <button
            type="submit"
            className="w-full py-2 bg-[#6E54A3] text-white rounded-md hover:bg-[#543F7E] transition"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-[#C8B8E4]"></div>
          <span className="px-4 text-sm text-[#C8B8E4]">OR</span>
          <div className="flex-grow border-t border-[#C8B8E4]"></div>
        </div>

        {/* Sign Up */}
        <div className="text-center">
          <p className="mb-2 text-sm">Don't have an account?</p>
          <a
            href="/register"
            className="block w-full py-2 border border-[#6E54A3] text-[#6E54A3] rounded-md hover:bg-[#6E54A3] hover:text-white transition"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
