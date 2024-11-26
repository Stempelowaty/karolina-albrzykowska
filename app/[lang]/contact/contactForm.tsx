"use client";
import { useState } from "react";
import { getDictionary } from "./dictionary";
interface ContactFormProps {
  lang: string;
}
export const ContactForm = (props: ContactFormProps) => {
  const dict = getDictionary(props.lang);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(dict.sending);

    if (
      formData?.email?.length > 0 &&
      formData?.name?.length > 0 &&
      formData?.message?.length > 0
    ) {
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
          setStatus(dict.success);
          setFormData({ name: "", email: "", message: "" });
        } else {
          setStatus(data.message || dict.error);
        }
      } catch {
        setStatus(dict.error);
      }
    } else setStatus(dict.validate);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-lexend">
      <div className="flex gap-2">
        <div className="w-1/2">
          <label htmlFor="name">{dict.name}</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 bg-background rounded"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="email">{dict.email}</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 bg-background rounded"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message">{dict.message}</label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full border px-3 py-2 bg-background rounded"
        />
      </div>
      <div className="flex items-center gap-2">
        <button
          type="submit"
          disabled={!!status}
          className="bg-blue-500 text-white px-4 py-2"
        >
          {dict.send}
        </button>
        <p>{status}</p>
      </div>
    </form>
  );
};
