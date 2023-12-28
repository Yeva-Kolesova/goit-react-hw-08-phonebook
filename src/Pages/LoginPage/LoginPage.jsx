import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../store/auth/operations';
import { toast } from 'react-toastify';

export const Login = () => {
  const { register, handleSubmit } = useForm({});
  const dispatch = useDispatch();
  const submit = data => {
    console.log(data);
    dispatch(loginThunk(data))
      .unwrap()
      .then(res => {
        toast.success(`Welcome ${res.user.name}!`);
      })
      .catch(() => {
        toast.error('Something went wrong!!!');
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Email</span>
          <input {...register('email')} placeholder="Enter Email" type="text" />
        </label>
        <label>
          <span>Password</span>
          <input
            {...register('password')}
            placeholder="Enter Password"
            type="password"
          />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};
