import React from 'react';

const Table = ({ vehicle }) => {
    // Log the vehicle data to inspect its structure
    console.log("Vehicle data in Table component:", vehicle);
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Id</th>
                <th>Year</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Color</th>
                <th>Vin</th>
                <th>Cost</th>
            </tr>
            </thead>
            <tbody>
            {vehicle.length > 0 ? (
                vehicle.map((v, index) => (
                    <tr key={index}>
                        <td>{v.id}</td>
                        <td>{v.year}</td>
                        <td>{v.brand}</td>
                        <td>{v.model}</td>
                        <td>{v.color || "N/A"}</td> {/* Handle missing data */}
                        <td>{v.vin || "N/A"}</td>   {/* Handle missing data */}
                        <td>{v.cost}</td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="7">No vehicles available</td>
                </tr>
            )}
            </tbody>
        </table>
    );
}

export default Table;
