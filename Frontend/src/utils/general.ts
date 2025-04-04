import { AuthError } from "../types/auth";

export const getLoginSignUpErrorMessage = (error: AuthError): string => {
  switch (error.code) {
    case "auth/email-already-in-use":
      return "This email is already in use. Please try another.";
    case "auth/invalid-email":
      return "Invalid email format.";
    case "auth/user-not-found":
      return "No user found with this email.";
    case "auth/wrong-password":
      return "Incorrect password.";
    default:
      return "An unexpected error occurred.";
  }
};
