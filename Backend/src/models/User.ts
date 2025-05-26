export interface User {
  id: string;
  email: string;
  created_at: string;
  updated_at: string;
  first_name?: string;
  last_name?: string;
}

export interface CreateUserDto {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
}

export interface UpdateUserDto {
  first_name?: string;
  last_name?: string;
}

export interface AuthResponse {
  user: User | null;
  token: string | null;
  error?: string;
}
