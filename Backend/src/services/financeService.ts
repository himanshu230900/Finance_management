import supabase from "../config/database";
import {
  CreateTransactionDto,
  Transaction,
  UpdateTransactionDto,
} from "../models/Finance";
import { NotFoundError } from "../utils/errors";

export const getAllTransactions = async (
  userId: string,
): Promise<Transaction[]> => {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", userId)
    .order("date", { ascending: false });

  if (error) {
    throw new Error("Failed to fetch transactions");
  }

  return data as Transaction[];
};

export const getTransactionById = async (
  transactionId: string,
  userId: string,
): Promise<Transaction> => {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("id", transactionId)
    .eq("user_id", userId)
    .single();

  if (error || !data) {
    throw new NotFoundError("Transaction not found");
  }

  return data as Transaction;
};

export const createTransaction = async (
  userId: string,
  transactionData: CreateTransactionDto,
): Promise<Transaction> => {
  const newTransaction = {
    ...transactionData,
    user_id: userId,
  };

  const { data, error } = await supabase
    .from("transactions")
    .insert(newTransaction)
    .select()
    .single();

  if (error || !data) {
    throw new Error("Failed to create transaction");
  }

  return data as Transaction;
};

export const updateTransaction = async (
  transactionId: string,
  userId: string,
  updateData: UpdateTransactionDto,
): Promise<Transaction> => {
  // Check if transaction exists and belongs to user
  const { data: existingTransaction, error: checkError } = await supabase
    .from("transactions")
    .select("*")
    .eq("id", transactionId)
    .eq("user_id", userId)
    .single();

  if (checkError || !existingTransaction) {
    throw new NotFoundError("Transaction not found");
  }

  // Update the transaction
  const { data, error } = await supabase
    .from("transactions")
    .update(updateData)
    .eq("id", transactionId)
    .eq("user_id", userId)
    .select()
    .single();

  if (error || !data) {
    throw new Error("Failed to update transaction");
  }

  return data as Transaction;
};

export const deleteTransaction = async (
  transactionId: string,
  userId: string,
): Promise<void> => {
  // Check if transaction exists and belongs to user
  const { data: existingTransaction, error: checkError } = await supabase
    .from("transactions")
    .select("*")
    .eq("id", transactionId)
    .eq("user_id", userId)
    .single();

  if (checkError || !existingTransaction) {
    throw new NotFoundError("Transaction not found");
  }

  // Delete the transaction
  const { error } = await supabase
    .from("transactions")
    .delete()
    .eq("id", transactionId)
    .eq("user_id", userId);

  if (error) {
    throw new Error("Failed to delete transaction");
  }
};
