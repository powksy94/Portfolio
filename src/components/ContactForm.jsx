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

  return (
    <form
      className="contact-form flex flex-col gap-4 max-h-[70vh] overflow-y-auto"
      onSubmit={onSubmit}
    >
      <input
        className="contact-input p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="name"
        placeholder="Jean"
        required
      />

      <input
        className="contact-input p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="email"
        name="email"
        placeholder="example@gmail.com"
        required
      />

      <textarea
        className="contact-textarea p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="message"
        placeholder="Votre message"
        required
      />

      <button
        type="submit"
        className="px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-700 via-purple-500 to-indigo-500 hover:scale-105 transition"
      >
        Envoyer
      </button>

      {result && <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{result}</p>}
    </form>
  );
}
