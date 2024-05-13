export default function Greetings() {
  const greetingMessage = () => {
    let hour = new Date().getHours();
    switch (true) {
      case hour <= 5:
        return "Boa madrugada";
      case hour < 12:
        return "Bom dia";
      case hour < 18:
        return "Boa tarde";
      default:
        return "Boa noite";
    }
  };

  return <section className="font-semibold text-3xl">{greetingMessage()}</section>;
}
