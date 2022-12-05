import { useEffect, useState } from 'react';
import Login from 'src/components/login/Login';
import SplashScreen from 'src/components/login/SplashScreen';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return <Login />;
}
