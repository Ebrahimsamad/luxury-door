const SecondaryButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-secondary text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90"
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
