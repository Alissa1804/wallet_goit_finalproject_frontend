import React from 'react';
import DashboardLayout from 'components/DashboardLayout/DashboardLayout';
import Currency from 'components/Currency/Currency';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDeviceSize } from 'hooks/useDeviceSize';

function CurrencyPage() {
  const navigate = useNavigate();
  const { deviceType } = useDeviceSize();

  useEffect(() => {
    if (deviceType !== 'mobile') {
      navigate('/home');
    }
  }, [deviceType, navigate]);

  return (
    <DashboardLayout>
      <Currency />
    </DashboardLayout>
  );
}

export default CurrencyPage;
