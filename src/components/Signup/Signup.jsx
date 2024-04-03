import React, { useState, useEffect } from 'react';
import './Signup.css'; // Make sure this file exists and is in the same directory

const Signup = () => {
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

    if (!formData.name) {
      formIsValid = false;
      newErrors['name'] = 'Name is required';
    }

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

    if (formData.confirmPassword !== formData.password) {
      formIsValid = false;
      newErrors['confirmPassword'] = 'Passwords do not match';
    }

    if (!formData.phoneNumber) {
      formIsValid = false;
      newErrors['phoneNumber'] = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      formIsValid = false;
      newErrors['phoneNumber'] = 'Invalid phone number, must be 10 digits';
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
        <div> Sign up </div>
            <hr/>
        <div className="form-group">
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className={errors.name ? 'error' : ''}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

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
            <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className={errors.confirmPassword ? 'error' : ''}
            />
            {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
        </div>

        <div className="form-group">
            <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className={errors.phoneNumber ? 'error' : ''}
            />
            {errors.phoneNumber && <p className="error-text">{errors.phoneNumber}</p>}
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

export default Signup;