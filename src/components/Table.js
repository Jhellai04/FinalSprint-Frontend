import React from 'react';

const Table = ({ vehicle }) => {
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
            { (vehicle.length > 0) ? vehicle.map( (vehicle, index) => {
                vehicle.vin = undefined;
                vehicle.color = undefined;
                console.log(vehicle.length)
                return (
                    <tr key={ index }>
                        <td>{ vehicle.id }</td>
                        <td>{ vehicle.year }</td>
                        <td>{ vehicle.brand }</td>
                        <td>{ vehicle.model }</td>
                        <td>{ vehicle.color }</td>
                        <td>{ vehicle.vin }</td>
                        <td>{ vehicle.cost }</td>

                        <td>"..."</td>
                    </tr>
                )
            }) : <tr><td colSpan="10">On progress...</td></tr> }
            </tbody>
        </table>
    );
}

export default Table

