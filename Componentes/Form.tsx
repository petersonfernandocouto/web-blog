import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    game: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, game, message } = formData;
    const whatsappURL = `https://api.whatsapp.com/send/?phone=5519991955915&text=${encodeURIComponent(
      `Nome: ${name}\nJogo: ${game}\nMensagem: ${message}`
    )}&type=phone_number&app_absent=0`;

    window.location.href = whatsappURL;
  };

  return (
    <div className='bg-[#000E29] flex flex-col justify-center rounded-[20px] lg:w-[500px] w-[315px] lg:h-[450px] 2xl:w-[600px] 2xl:h-[550px]'>
      <h1 className='lg:text-[28px] text-[25px] text-center font-bold pt-14 pb-7'>Quais jogos Busca?</h1>
      <form className='flex flex-col gap-4 items-center' onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          placeholder="Seu nome"
          className="bg-white text-black w-[90%] h-[40px] rounded-[10px] p-4"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          id="game"
          type="text"
          placeholder="Jogos (EX:Red Dead 2)"
          className="bg-white text-black w-[90%] h-[40px] rounded-[10px] p-4"
          value={formData.game}
          onChange={handleChange}
        />
        <input
          id="message"
          type="text"
          placeholder="Mensagem"
          className="bg-white text-black w-[90%] h-[40px] rounded-[10px] p-4"
          value={formData.message}
          onChange={handleChange}
        />
        <button className='bg-[#F75922] lg:my-3 lg:hover:-translate-y-2 transition-transform duration-700 hover:text-[#000E29] font-bold w-[90%] h-[50px] rounded-[10px]' type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
