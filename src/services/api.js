import axios from 'axios';

export const TransactionsAPI = {
    async getUserTransactions() {
        const { data } = await axios.get(`/api/transactions`);
        return data;
    }
}

export const TransactionCategoriesAPI = {
  async getTransactionCategories() {
    const { data } = await axios.get(`/api/transaction-categories`);
    return data;
  },
};

export const TransactionSummaryAPI = {
  async getTransactionSummary({ month, year }) {
    //  {month, year} must be numbers!

    const { data } = await axios.get(
      `/api/transactions-summary?month=${month}&year=${year}`
    );
    return data;
  },
};