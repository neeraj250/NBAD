import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import './Homepage.css'; // Assuming you have a CSS file for styles
import ExpenseModal from '../ExpenseModal/ExpenseModal';

function Homepage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
        <NavBar/>
        <div>
            These are the latest budgets that are added,<span className="navbar-item" onClick={openModal}><a href="#">Want to add New Expenses?</a></span>
        </div>
        <div className="table-container">
            <table>
            <thead>
                <tr>
                <th>Category</th>
                <th>Title</th>
                <th>Budget</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Category 1</td>
                <td>Title 1</td>
                <td>$1000</td>
                </tr>
                <tr>
                <td>Category 2</td>
                <td>Title 2</td>
                <td>$2000</td>
                </tr>
            </tbody>
            </table>
        </div>
        <ExpenseModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

export default Homepage;