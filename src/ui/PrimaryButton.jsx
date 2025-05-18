const PrimaryButton = ({ children, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-secondary hover:bg-primary hover:text-white text-black font-bold py-2 px-4 rounded-md  transition duration-300 ${color}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
