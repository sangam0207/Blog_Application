import { useEffect, useRef } from "react";
import Typed from "typed.js";
import bgImg from '../image/bg.jpg';

const About = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Welcome to The About Page!"],
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
    <div className="relative h-screen flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1
        ref={typedRef}
        className="relative text-6xl font-bold text-center text-white mb-4"
      ></h1>
      <div className="relative text-center text-white text-lg max-w-2xl px-4">
        <p className="text-bold text-2xl">
          We are committed to providing the best services to our customers. Our team is dedicated to ensuring the highest quality of products and exceptional customer service. Thank you for visiting our page, and we look forward to serving you!
        </p>
      </div>
    </div>
  );
};

export default About;
