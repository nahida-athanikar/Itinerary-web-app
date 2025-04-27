function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-600 active:bg-blue-700"
    >
      {children}
    </button>
  );
}

export default Button;
