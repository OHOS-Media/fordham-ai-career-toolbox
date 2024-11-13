const PageContainer = ({ children, className = "", limitedWidth = true, marginBottom = true }) => {
  return (
    <div
      className={`w-full mx-auto mt-20 ${marginBottom && "mb-20"}  ${limitedWidth && "max-w-5xl"} ${className}`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
