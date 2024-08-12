import React from 'react';

const Table = ({ vehicle }) => {
<<<<<<< HEAD
=======
    // Log the vehicle data to inspect its structure
    console.log("Vehicle data in Table component:", vehicle);
>>>>>>> Phase-2
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
<<<<<<< HEAD

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
=======
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
>>>>>>> Phase-2
            </tbody>
        </table>
    );
}

<<<<<<< HEAD
export default Table

=======
export default Table;
>>>>>>> Phase-2
