const PrimaryButton = ({ title }) => {
  return (
    <button
      type="button"
      className="font-poppins text-white bg-theme-lightpurple hover:bg-theme-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center"
    >
      {title}
    </button>
  );
}

export default PrimaryButton;