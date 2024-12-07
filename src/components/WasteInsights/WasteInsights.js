import React, { useState, useEffect } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './WasteInsights.css';

// Register the necessary Chart.js components
Chart.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WasteInsights = () => {
    // Initial state with structures preventing undefined errors
    const initialState = {
        labels: [],
        datasets: [{
            label: '',
            data: [],
            backgroundColor: []
        }]
    };

    const [pieData, setPieData] = useState(initialState);
    const [barData, setBarData] = useState(initialState);

    useEffect(() => {
        fetchPieData();
        fetchBarData();
    }, []);

    const fetchPieData = async () => {
        const data = {
            labels: ['Organic', 'Plastic', 'Metal', 'Other'],
            datasets: [{
                label: 'Waste Composition',
                data: [300, 50, 100, 80],
                backgroundColor: ['green', 'blue', 'red', 'yellow'],
            }]
        };
        setPieData(data);
    };

    const fetchBarData = async () => {
        const data = {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [{
                label: 'Monthly Waste Reduction',
                data: [40, 60, 70, 90],
                backgroundColor: 'darkgreen',
            }]
        };
        setBarData(data);
    };

    return (
        <div className="waste-insights">
            <h1>Waste Insights</h1>
            {pieData.datasets[0].data.length > 0 && (
                <div className="chart-container">
                    <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
            )}
            {barData.datasets[0].data.length > 0 && (
                <div className="chart-container">
                    <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
            )}
        </div>
    );
}

export default WasteInsights;
