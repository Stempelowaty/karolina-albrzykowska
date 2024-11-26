import { type AvailableLocalesType } from "@/app/utils";

const dictionaries = {
  "en-US": {
    contact: "Contact me",
    formLabel: "Or use this form!",
    find: "You can find me here!",
    email: "Email",
    name: "Name",
    message: "Message",
    send: "Send",
    sending: "Sending...",
    validate: "Fill the form!",
    success: "Message sent!",
    error: "An error occurred. Please try again.",
  },
  "pl-PL": {
    contact: "Skontaktuj się",
    formLabel: "Albo wypełnij formularz!",
    find: "Jestem dostępna tu!",
    email: "Email",
    name: "Imię",
    message: "Wiadomość",
    send: "Wyślij",
    sending: "Wysyłanie...",
    validate: "Uzupełnij formularz!",
    success: "Pomyślnie wysłano wiadomość!",
    error: "Błąd wysyłania wiadomości, spróbuj jeszcze raz!",
  },
};

export const getDictionary = (locale: string) =>
  dictionaries[locale as AvailableLocalesType];
