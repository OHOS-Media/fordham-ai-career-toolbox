export default function NavToggle({ menuIsOpen, setMenuIsOpen }) {
  return (
    <button className="focus:outline-none ml-2 mr-4" onClick={() => setMenuIsOpen(!menuIsOpen)}>
      <div className="w-6 h-6 flex flex-col justify-around">
        <span
          className={`
          block h-[2.5px] w-full bg-fordham-white transition-all duration-300 rounded
          ${menuIsOpen ? "rotate-45 translate-y-2" : ""}
        `}
        />
        <span
          className={`
          block h-[2.5px] w-full bg-fordham-white transition-all duration-300 rounded
          ${menuIsOpen ? "opacity-0" : ""}
        `}
        />
        <span
          className={`
          block h-[2.5px] w-full bg-fordham-white transition-all duration-300 rounded
          ${menuIsOpen ? "-rotate-45 -translate-y-2" : ""}
        `}
        />
      </div>
    </button>
  );
}
