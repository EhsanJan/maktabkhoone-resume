import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import "../components/Arrow.css";

function Arrow() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollMore = () => {
    scroll.scrollMore(500);
  };
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <a onClick={scrollMore} className="arrow"></a>
      {isVisible && <a onClick={scrollToTop} className="arrow2"></a>}
    </div>
  );
}

export default Arrow;
