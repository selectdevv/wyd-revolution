import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const FormComponent: React.FC = (props) => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!recaptchaToken) {
      alert('Por favor, complete o reCAPTCHA.');
      return;
    }

    const response = await fetch('/api/verify-recaptcha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: recaptchaToken }),
    });

    const data = await response.json();
    if (data.success) {
      console.log('Form submitted successfully');
    } else {
      alert('reCAPTCHA verification failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <form
        className="flex flex-col gap-4  bg-black/50 p-10 rounded-2xl w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <label htmlFor="login" className="text-lg font-medium">Login</label>
        <input
          type="text"
          name="Login"
          id="login"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
        />

        <label htmlFor="email" className="text-lg font-medium">Email</label>
        <input
          type="email"
          name="Email"
          id="email"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
        />

        <label htmlFor="senha" className="text-lg font-medium">Senha</label>
        <input
          type="password"
          name="Senha"
          id="senha"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
        />

        <ReCAPTCHA
          sitekey="6LcNwPIqAAAAALX0LT_A1AaN_w-MzfCCrM2mBcoU"
          onChange={handleRecaptchaChange}
        />

        <input
          type="submit"
          value="Cadastrar"
          className="p-2 bg-green-500 text-white rounded transition duration-300 ease-in-out hover:bg-green-600 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default FormComponent;