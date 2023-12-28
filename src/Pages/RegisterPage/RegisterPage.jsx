import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../store/auth/operations';
import { toast } from 'react-toastify';

export const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submit = data => {
    console.log(data);
    dispatch(registerThunk(data))
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
          <span>Name</span>
          <input {...register('name')} placeholder="Enter Name" type="text" />
        </label>
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
        <button>Register</button>
      </form>
    </div>
  );
};
