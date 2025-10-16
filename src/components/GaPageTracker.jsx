// src/components/GaPageTracker.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const GaPageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const TRACKING_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

    // Pastikan ID ada sebelum mengirim event
    if (TRACKING_ID) {
        // Mengirim event 'pageview' ke GA4
        ReactGA.send({ 
            hitType: "pageview", 
            page: location.pathname + location.search, 
            title: location.pathname 
        });
        console.log(`GA4: Pageview dilacak: ${location.pathname}`);
    }
  }, [location]); 
  
  // Komponen ini tidak me-return elemen visual, hanya untuk logika
  return null; 
};

export default GaPageTracker;