const PageContainer = ({ children, className = "", limitedWidth = true, marginBottom = true }) => {
  return (
    <div
      className={`w-full mx-auto mt-24 ${marginBottom && "mb-24"}  ${limitedWidth && "max-w-5xl"} ${className}`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
