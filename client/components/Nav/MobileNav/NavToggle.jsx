export default function NavToggle({ isOpen, setIsOpen }) {
  return (
    <button className="absolute top-2 right-2" onClick={() => setIsOpen((prevState) => !prevState)}>
      <input
        id="checkbox2"
        className="hidden"
        type="checkbox"
        checked={isOpen}
        onChange={() => setIsOpen((prevState) => !prevState)}
      />
      <label
        className="toggle toggle2 flex flex-col items-center justify-center w-[45px] h-[45px] gap-[9px] cursor-pointer"
        for="checkbox2"
      >
        <div id="bar1" className="bars bg-primary"></div>
        <div id="bar2" className="bars bg-primary"></div>
        <div id="bar3" className="bars bg-primary"></div>
      </label>
    </button>
  );
}
