import gsap from "gsap";
import PropTypes from "prop-types";
import { useEffect } from "react";

const Logo = ({ color = "text-primary-black" }) => {
  useEffect(() => {
    gsap.fromTo(
      ".logo-dot-pulsing",
      {
        opacity: 0,
      },
      {
        duration: 0.6,
        opacity: 1,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      }
    );
  }, []);

  return (
    <div className={`font-bold leading-6 text-xl ${color}`}>
      <span className="text-3xl leading-none logo-dot-pulsing text-primary-black">
        .
      </span>
      Ali
    </div>
  );
};

Logo.propTypes = {
  color: PropTypes.string,
};

export default Logo;
