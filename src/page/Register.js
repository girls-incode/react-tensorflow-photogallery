import React, { useState } from 'react';
import firebase from '../config/firebase';
import { Redirect, useHistory } from 'react-router-dom';

function Register() {
  const cStyle = 'w-full p-2 rounded shadow';
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [form, setForm] = useState({ email: '', pass: '' });
  const history = useHistory();

  function handleForm(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(form.email, form.pass)
      .then((res) => {
        setLoading(false);
        setErrors([]);
        history.replace('/');
      })
      .catch((err) => {
        setLoading(false);
        setErrors(err.message);
      });
  }

  function handleField(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className='w-2/5 m-auto shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-800'>
      <form className='p-5' onSubmit={handleForm}>
        <h1 className='text-3xl text-center text-white pb-6'>Register</h1>
        <input
          type='email'
          name='email'
          value={form.email}
          onChange={handleField}
          className={` ${cStyle} mb-3`}
          placeholder='email'
        />
        <input
          type='password'
          name='pass'
          value={form.pass}
          onChange={handleField}
          className={`${cStyle} mb-8`}
          placeholder='password'
        />
        <button
          type='submit'
          className={`${cStyle} bg-gradient-to-tr from-yellow-600 to-yellow-500 text-black font-bold`}
        >
          {loading ? (
            <i className='fas fa-circle-notch fa-spin'></i>
          ) : (
            'Sign Up'
          )}
        </button>
        {errors.length > 0 && <p className='mt-4 text-white'>{errors}</p>}
      </form>
    </div>
  );
}

export default Register;
