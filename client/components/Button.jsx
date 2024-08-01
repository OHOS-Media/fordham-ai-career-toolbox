export default function Button({ text }) {
  return (
    <button className="bg-primary text-neutral font-bold py-2 px-10 rounded-lg">
      {text}
    </button>
  );
}
