import React, { useState } from 'react';
import './ExpenseModal.css';

const categories = ['Select category','Food', 'Utilities', 'Transportation', 'Entertainment', 'Other'];

const ExpenseModal = ({ isOpen, onClose }) => {
	const [changed, setChanged] = useState(false);
	const [expenseTitle, setExpenseTitle] = useState('');
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState('');
	const [customCategory, setCustomCategory] = useState('');

	const handleExpenseChange = (event) => {
		setExpenseTitle(event.target.value);
	};

	const handleCategoryChange = (event) => {
		setChanged(true);
		setCategory(event.target.value);
		if (event.target.value !== 'other') {
		setCustomCategory(''); // Reset custom category when other is not selected
		}
	};

	const handlePriceChange = (event) => {
		setPrice(event.target.value);
	};

	const handleCustomCategoryChange = (event) => {
		setCustomCategory(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = {
		expenseTitle,
		category: category !== 'other' ? category : customCategory,
		price,
		};
		console.log('Expense added:', data);
		setExpenseTitle('');
		setCategory('');
		setCustomCategory('');
		setPrice('');
		onClose(); // Close the modal after submission
	};

	return (
		<div className={isOpen ? 'modal-overlay open' : 'modal-overlay'} onClick={onClose}>
		<div className="modal" onClick={(e) => e.stopPropagation()}>
			<button className="close-button" onClick={onClose}>×</button>
			<h2>Add Expense</h2>
			<form onSubmit={handleSubmit}>
				<div className="input-group">
					<select value={category} onChange={handleCategoryChange}>
					{categories.map((item, index) => (
						<option key={item} value={item}>
						{item}
						</option>
					))}
					</select>
					{changed && category === 'Select category' && (
					<span className='category-select'> Please select a category from the dropdown</span>
					)}
				</div>

				{/* Display custom category input only when 'other' is selected */}
				{category === 'other' && (
					<input
					type="text"
					value={customCategory}
					onChange={handleCustomCategoryChange}
					placeholder="Enter custom category..."
					className="input-custom-category"
					/>
				)}

				<input type="text" value={expenseTitle} onChange={handleExpenseChange} required placeholder="Enter expense title..." />
				<input type="number" value={price} onChange={handlePriceChange} required placeholder="Enter price..." />
				<button type="submit">Add</button>
				</form>

		</div>
		</div>
	);
};

export default ExpenseModal;
