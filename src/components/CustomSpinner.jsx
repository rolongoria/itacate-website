import logo from "../assets/logo.png";

export default function CustomSpinner() {
  return (
    <div className="w-full h-[calc(100vh-250px)] flex items-center justify-center">
      <div className="relative w-20 h-20">
        {/* Spinner ring */}
        <div className="absolute inset-0 rounded-full border-4 border-pink-500 border-t-transparent animate-spin"></div>

        {/* Your image in the center */}
        <img
          src={logo}
          alt="Loading"
          className="absolute inset-2 object-contain w-16 h-16 "
        />
      </div>
    </div>
  );
}
