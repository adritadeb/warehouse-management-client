import React from 'react';
import { Table } from 'react-bootstrap';

const MyItem = ({ addedItem, handleDeleteItem }) => {
    const { _id, img, name, supplier, price, quantity } = addedItem;

    return (
        <div>
            {/* Table body */}
            <Table striped bordered hover size="sm">
                <tbody>
                    <tr>
                        <td className='table-img'>
                            <img className='w-75' src={img} alt="" />
                        </td>
                        <td className='table-name'>{name}</td>
                        <td className='table-supplier'>{supplier}</td>
                        <td className='table-price'>{price}</td>
                        <td className='table-quantity'>{quantity}</td>
                        <td><button onClick={() => handleDeleteItem(_id)} className='btn btn-danger border-0'>X</button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default MyItem;