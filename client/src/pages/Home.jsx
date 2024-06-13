import { useEffect, useRef } from "react";
import Typed from "typed.js";
import bgImg from '../image/bg.jpg';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to The Blog Application!",
        "You can create Your Post.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1
        ref={typedRef}
        className="relative text-6xl font-bold text-center text-white"
      ></h1>
    </div>
  );
};

export default Home;
