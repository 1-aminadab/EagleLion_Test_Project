import { createAsyncThunk } from "@reduxjs/toolkit";
import TransactionService from "../../../../infrastructure/api/services/transaction.service";

export const fetchTransactionsByUserId = createAsyncThunk(
    'transactions/fetchByUserId',
    async (userId: string, { rejectWithValue }) => {
      try {
        console.log('Fetching transactions for userId:', userId);
        
        const response = await TransactionService.getTransactionHistoryByUser(userId);
        return response;
      } catch (error: any) {
        console.error('Error fetching transactions by userId:', error);
        return rejectWithValue(error.response?.data || 'Failed to fetch transactions');
      }
    }
  );