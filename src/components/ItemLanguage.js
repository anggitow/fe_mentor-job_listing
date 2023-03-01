const ItemLanguage = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="font-semibold bg-light-cyan cursor-pointer transition-all duration-200 px-2 py-1 rounded hover:bg-dark-cyan hover:text-white"
    >
      {children}
    </div>
  );
};

export default ItemLanguage;
