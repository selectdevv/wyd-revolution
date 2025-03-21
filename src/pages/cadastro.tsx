import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

const FormComponent: React.FC = (props) => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const loadRecaptcha = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          console.log('reCAPTCHA v3 carregado');
        });
      }
    };

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.onload = loadRecaptcha;
    document.head.appendChild(script);
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!window.grecaptcha) {
      alert('Erro ao carregar o reCAPTCHA.');
      return;
    }

    const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' });
    setRecaptchaToken(token);

    try {
      const recaptchaResponse = await axios.post('/api/verify-recaptcha', { token });

      if (recaptchaResponse.data.success) {
        const userResponse = await axios.post('/api/users', { login, email, password });

        if (userResponse.status === 201) {
          alert('Usuário criado com sucesso');
          setLogin('');
          setEmail('');
          setPassword('');
          setRecaptchaToken(null);
        } else {
          alert('Erro ao criar usuário');
        }
      } else {
        alert('Verificação do reCAPTCHA falhou. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      alert('Erro ao criar usuário');
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <form
        className="flex flex-col gap-4 bg-black/50 p-10 rounded-2xl w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <label htmlFor="login" className="text-lg font-medium">Login</label>
        <input
          type="text"
          name="Login"
          id="login"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
          onChange={(e) => setLogin(e.target.value)}
        />

        <label htmlFor="email" className="text-lg font-medium">Email</label>
        <input
          type="email"
          name="Email"
          id="email"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="senha" className="text-lg font-medium">Senha</label>
        <input
          type="password"
          name="Senha"
          id="senha"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="p-2 bg-green-500 text-white rounded transition duration-300 ease-in-out hover:bg-green-600 cursor-pointer">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default FormComponent;