import React, { useState } from 'react';

export default function CadastroNext() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [telephone, setTelephone] = useState('');

  const handleCadastro = async (e) => {
    e.preventDefault();

    // Verificar se as senhas coincidem
    if (password !== confirmPassword) {
      console.error('As senhas não coincidem');
      return;
    }

    try {
      const response = await fetch('https://api.postman.com/collections/29962160-409ec5f0-9287-4fe6-8940-79f3a8ad6be5?access_key=PMAT-01HF5F8WP2G81RTV5DQAMWS530', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          name,
          cpf,
          birthdate,
          telephone,
        }),
      });

      if (response.ok) {
        // Cadastro realizado com sucesso, redirecione ou faça algo aqui
        console.log('Cadastro realizado com sucesso!');
      } else {
        // Tratar erro no cadastro
        console.error('Erro ao cadastrar usuário');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
    }
  };

  return (
    <>
      <div id="cadastro">
        <div className="cadastroHeader">
          <a href="/">
            <img src="technology portocycle header.png" alt="logo" />
          </a>
        </div>

        <div className="cadastroCard">
          <form onSubmit={handleCadastro}>
            <h2>CADASTRO</h2>

            <div className="username">
              <p>Nome de usuario</p>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="username">
              <p>Email</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="username">
          <p>Nome</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="username">
          <p>CPF</p>
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>

        <div className="username">
          <p>Data de Nascimento</p>
          <input
            type="text"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            required
          />
        </div>

        <div className="username">
          <p>Telefone</p>
          <input
            type="text"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            required
          />
        </div>
        <div className="password">
              <p>Senha</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="password">
              <p>Confirmar senha</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button><a href="/cadastroBike">CONTINUAR</a></button>
            <a href="/cadastro">Voltar</a>
          </form>

          <div className="imgCard">
            <img src="cadastro img.png" alt="imagen" />
          </div>
        </div>
      </div>
    </>
  );
}
