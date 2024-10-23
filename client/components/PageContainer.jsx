const PageContainer = ({ children, className = "" }) => {
  return <div className={`max-w-6xl mx-auto px-4 w-full ${className}`}>{children}</div>;
};

export default PageContainer;
