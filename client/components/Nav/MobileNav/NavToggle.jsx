export default function NavToggle({ isOpen, setIsOpen }) {
  return (
    <button className="p-2 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
      <div className="w-6 h-6 flex flex-col justify-between">
        <span
          className={`
          block h-0.5 w-full bg-fordham-white transition-all duration-300
          ${isOpen ? "rotate-45 translate-y-2.5" : ""}
        `}
        />
        <span
          className={`
          block h-0.5 w-full bg-fordham-white transition-all duration-300
          ${isOpen ? "opacity-0" : ""}
        `}
        />
        <span
          className={`
          block h-0.5 w-full bg-fordham-white transition-all duration-300
          ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}
        `}
        />
      </div>
    </button>
  );
}
