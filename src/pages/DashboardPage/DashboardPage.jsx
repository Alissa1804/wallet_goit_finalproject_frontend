import React from 'react';
import Transactions from 'components/Transactions/Transactions';
import { AddTransactionBtn } from 'components/AddBtn/AddTransactionBtn';
import DashboardLayout from 'components/DashboardLayout/DashboardLayout';

function DashboardPage() {
  return (
    <DashboardLayout>
      <Transactions />
      <AddTransactionBtn />
    </DashboardLayout>
  );
}

export default DashboardPage;
