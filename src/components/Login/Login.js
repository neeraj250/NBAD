import React, { useState, useEffect } from 'react';
import '../Signup/Signup.css';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });
  const [errors, setErrors] = useState({});
  const [typedText, setTypedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const textToType = "Expense Tracker";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentCharIndex < textToType.length) {
        setTypedText(prevTypedText => prevTypedText + textToType[currentCharIndex]);
        setCurrentCharIndex(prevIndex => prevIndex + 1);
      }
    }, 150); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, [currentCharIndex]);

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    if (!formData.email) {
      formIsValid = false;
      newErrors['email'] = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      newErrors['email'] = 'Email is not valid';
    }

    if (!formData.password) {
      formIsValid = false;
      newErrors['password'] = 'Password is required';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form is valid:', formData);
      // Submit form logic here
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="form-container bg-gray-dark-mktg">
        <div className="logo">
          <span>{typedText}</span>
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
        <div> Login </div>
            <hr/>

        <div className="form-group">
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={errors.email ? 'error' : ''}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="form-group">
            <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className={errors.password ? 'error' : ''}
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
        </div>

        <div className="form-group">
            <button type="submit">Sign Up</button>
        </div>
        <div>
          Already have an account? <a href='Login'>Login</a>
        </div>
        </form>
    </div>
  );
};

export default Login;