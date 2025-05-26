import supabase from "../config/database";
import { NotFoundError } from "../utils/errors";
import { UpdateUserDto, User } from "../models/User";

export const getUserProfile = async (userId: string): Promise<User> => {
  // First get basic user info
  const { data: userData, error: userError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (userError || !userData) {
    throw new NotFoundError("User not found");
  }

  return userData as unknown as User;
};

export const updateUserProfile = async (
  userId: string,
  updateData: UpdateUserDto,
): Promise<User> => {
  // Check if user exists
  const { data: existingUser, error: checkError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (checkError || !existingUser) {
    throw new NotFoundError("User not found");
  }

  // Update user profile
  const { data: updatedUser, error: updateError } = await supabase
    .from("profiles")
    .update(updateData)
    .eq("id", userId)
    .select("*")
    .single();

  if (updateError || !updatedUser) {
    throw new Error("Failed to update user profile");
  }

  return updatedUser as unknown as User;
};
