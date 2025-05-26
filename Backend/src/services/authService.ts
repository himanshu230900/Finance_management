import supabase from "../config/database";
import { AuthResponse, CreateUserDto, User } from "../models/User";
import { BadRequestError, UnauthorizedError } from "../utils/errors";
import { User as SupabaseUser } from "@supabase/auth-js";

export const adaptSupabaseUser = (supabaseUser: SupabaseUser): User => {
  return {
    id: supabaseUser.id,
    email: supabaseUser.email || "",
    created_at: supabaseUser.created_at || new Date().toISOString(),
    updated_at: supabaseUser.updated_at || new Date().toISOString(),
    // Optional fields can be passed through directly as they're already optional
    first_name: supabaseUser.user_metadata?.first_name,
    last_name: supabaseUser.user_metadata?.last_name,
  };
};

export const register = async (
  userData: CreateUserDto,
): Promise<AuthResponse> => {
  // Register user with Supabase
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: userData.email,
    password: userData.password,
  });

  if (authError) {
    throw new BadRequestError(authError.message);
  }

  if (!authData.user) {
    throw new BadRequestError("Failed to create user");
  }

  // Store additional user data in profiles table
  if (userData.first_name || userData.last_name) {
    const { error: profileError } = await supabase.from("profiles").insert({
      id: authData.user.id,
      first_name: userData.first_name,
      last_name: userData.last_name,
    });

    if (profileError) {
      console.error("Error creating profile:", profileError);
    }
  }

  return {
    user: adaptSupabaseUser(authData.user),
    token: authData.session?.access_token || null,
  };
};

export const login = async (
  email: string,
  password: string,
): Promise<AuthResponse> => {
  // Login with Supabase
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new UnauthorizedError("Invalid credentials");
  }

  if (!data.user || !data.session) {
    throw new UnauthorizedError("Invalid credentials");
  }

  return {
    user: adaptSupabaseUser(data.user),
    token: data.session.access_token,
  };
};

export const logout = async (token: string): Promise<void> => {
  // Logout with Supabase
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new BadRequestError(error.message);
  }
};
