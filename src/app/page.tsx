"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [hamburgers, setHamburgers] = useState(
    []);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch hambúrgueres da API
  const fetchHamburgers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/hamburgers");
      const data = await res.json();
      setHamburgers(data.data);
    } catch (err) {
      setError("Erro ao buscar os hambúrgueres.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHamburgers();
  }, []);

  
  const addHamburger = async () => {
    if (!name || price <= 0 || !description) {
      alert("Preencha todos os campos corretamente!");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/hamburgers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price, description }),
      });

      if (!res.ok) throw new Error("Erro ao adicionar hambúrguer.");

    
      await fetchHamburgers();

   
      setName("");
      setPrice(0);
      setDescription("");
    } catch (err) {
      setError("Erro ao adicionar hambúrguer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Hambúrguer CRUD</h1>

      {/* Formulário */}
      <div className="my-4">
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={addHamburger}
          className="bg-blue-500 text-white p-2"
          disabled={isLoading}
        >
          {isLoading ? "Adicionando..." : "Adicionar"}
        </button>
      </div>

      {/* Erros */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Lista de Hambúrgueres */}
      {isLoading && <p>Carregando...</p>}
      {!isLoading && (
        <ul>
          {hamburgers.map((burger: any) => (
            <li key={burger.id} className="border p-2 my-2">
              <strong>{burger.name}</strong> - R${burger.price.toFixed(2)} <br />
              {burger.description}
            </li>
          ))}
        </ul>
      )}

      {/* Mensagem de vazio */}
      {!isLoading && hamburgers.length === 0 && <p>Nenhum hambúrguer cadastrado.</p>}
    </main>
  );
}
