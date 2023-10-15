import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ show, handleClose, treatment, selectedDate, setTreatment, refetch }) => {
    const { name, slots, } = treatment;
    const { user } = useContext(AuthContext);

    const date = format(selectedDate, 'PP');

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patient = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient,
            slot,
            email,
            phone
        }

        fetch('https://final-server-it3x6jsvd-aliwebdev1.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Booking Confiremed");
                    refetch()
                }
                else {
                    toast.error(data.message)
                }
            })


        setTreatment(null)

    }



    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='border-0 mb-3' closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleBooking}>

                        <Form.Group className="mb-3">
                            <Form.Control value={date} disabled />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Select name='slot' >
                                {
                                    slots.map((slot, i) => <option
                                        key={i}
                                        value={slot}
                                    >
                                        {slot}
                                    </option>)
                                }
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control defaultValue={user?.displayName} name='name' type='text' placeholder='Full Name' />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control name='phone' type='number' placeholder='Phone Number' />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control defaultValue={user?.email} name='email' type='email' placeholder='Email' />
                        </Form.Group>

                        <Button className='my-2 btn btn-secondary w-100' type="submit">Submit</Button>

                    </Form>


                </Modal.Body>
            </Modal>
        </>
    );
};

export default BookingModal;