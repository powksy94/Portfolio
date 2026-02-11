import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "1efcf400-2b8c-4637-a7b1-60005ab95773");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data.success ? "Success! Message sent" : "Error! Try again");
    } catch (err) {
      setResult("Error! Try again");
      console.error(err);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl " +
    "bg-white/80 dark:bg-white/10 " +
    "border border-blue-100 dark:border-white/10 " +
    "text-slate-900 dark:text-white " +
    "placeholder-slate-400 dark:placeholder-gray-400 " +
    "focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 " +
    "transition";

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <input
        className={inputClass}
        type="text"
        name="name"
        placeholder="Nom"
        required
      />

      <input
        className={inputClass}
        type="email"
        name="email"
        placeholder="Email"
        required
      />

      <textarea
        className={`${inputClass} min-h-28 resize-none`}
        name="message"
        placeholder="Votre message"
        required
      />

      <button
        type="submit"
        className="w-full px-6 py-3 rounded-xl text-white font-semibold bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-md shadow-blue-500/20 hover:scale-105 active:scale-95 transition"
      >
        Envoyer
      </button>

      {result && <p className="text-sm text-center text-blue-600 dark:text-cyan-400 mt-1">{result}</p>}
    </form>
  );
}
