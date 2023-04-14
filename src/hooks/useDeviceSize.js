import { useMemo, useState, useEffect } from 'react';

export function useDeviceSize() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize, false);
    return window.removeEventListener('resize', handleResize);
  }, []);

  const deviceType = useMemo(() => {
    if (window.width < 768) {
      return 'mobile';
    }
    if (window.width < 1280) {
      return 'tablet';
    }
    return 'descktop';
  });

  return {
    width: dimensions.width,
    height: dimensions.height,
    deviceType,
  };
}
