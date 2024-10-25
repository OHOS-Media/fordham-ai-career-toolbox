const PageContainer = ({ children, className = "", limitedWidth = true }) => {
  return (
    <div className={`w-full mx-auto ${limitedWidth && "max-w-6xl px-10"} ${className}`}>
      {children}
    </div>
  );
};

export default PageContainer;
