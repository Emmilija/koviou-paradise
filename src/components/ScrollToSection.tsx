import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollToSection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") return;

    const section = location.state?.scrollTo;

    if (!section) return;

    setTimeout(() => {
      document
        .getElementById(section)
        ?.scrollIntoView({ behavior: "smooth" });

      navigate("/", { replace: true, state: {} });
    }, 100);
  }, [location, navigate]);

  return null;
};

export default ScrollToSection;