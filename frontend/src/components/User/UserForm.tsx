import React, { FC } from 'react';
import { CreateUserDto } from '../../store';

export interface UserFormProps {
  onFinish;
  formType: 'signup' | 'signin';
}

export const UserForm: FC<UserFormProps> = (props) => {
  const { onFinish, formType } = props;
  const [values, setValues] = React.useState({} as CreateUserDto);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const title = formType === 'signup' ? 'Sign Up' : 'Sign In';
  return (
    <div className='user-form-container'>
      <h2 className='border-b-[1px] pb-3'>{title}</h2>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          onFinish({
            variables: {
              userData: {
                ...values,
              },
            },
          });
          console.log(values);
        }}
      >
        <label htmlFor='username'>Username:</label>
        <input
          required
          autoComplete='off'
          type='text'
          id='username'
          name='username'
          placeholder='username'
          onChange={onChange}
        />
        <label htmlFor='password'>Password:</label>
        <input
          required
          autoComplete='off'
          type='password'
          id='password'
          name='password'
          placeholder='password'
          onChange={onChange}
        />
        <button className='button m-[auto] rounded-md' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
