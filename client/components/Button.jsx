export default function Button({ text }) {
  // TODO: Add logic to dynamically render icons if one is passed as a prop
  return (
    <button className="bg-primary text-neutral font-bold py-2 px-10 rounded-lg">{text}</button>
  );
}
