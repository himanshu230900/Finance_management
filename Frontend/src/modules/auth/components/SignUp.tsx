import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useDispatch } from 'react-redux';
import { signUp } from '../../auth/services/auth'; // Adjust path as needed
import { AppDispatch } from '../../../store';

const signUpSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords must match',
  path: ['confirmPassword'],
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

const Signup: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormValues) => {
    try {
      await signUp(data.email, data.password, dispatch);
      alert('Signup successful');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 shadow-md rounded-lg w-80"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            {...register('email')}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            {...register('password')}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            {...register('confirmPassword')}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Signup;
