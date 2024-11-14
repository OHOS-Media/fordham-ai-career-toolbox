const TestimonialCard = ({ quote, text, name, title, year }) => (
  <div className="flex flex-col items-center justify-start w-auto h-auto bg-fordham-white/5 p-6 rounded-[16px] gap-6">
    <h3 className="h5">&quot;{quote}&quot;</h3>
    <p className="body-txt text-fordham-light-gray/60">{text}</p>
    <div className="w-full text-left">
      <p className="body-txt-sm font-medium text-fordham-white">{name}</p>
      <p className="body-txt-sm text-fordham-light-gray/60">
        {title}, {year}
      </p>
    </div>
  </div>
);

export default TestimonialCard;
