import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Spline from '@splinetool/react-spline';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Full interactive Spline 3D model */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/qInkHtDE-2iThi69/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      
      {/* Larger black box to properly cover the watermark */}
      <div className="absolute bottom-0 right-0 w-40 h-16 bg-black z-10"></div>
      
      {/* Home navigation that doesn't interfere with the model interaction */}
      <div className="absolute top-4 right-4 z-20">
        <a 
          href="/" 
          className="opacity-0 w-10 h-10"
          aria-label="Return to home"
        ></a>
      </div>
    </div>
  );
};

export default NotFound;