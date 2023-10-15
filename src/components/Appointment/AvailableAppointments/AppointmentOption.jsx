import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';

const AppointmentOption = ({ appointmentOption, selectedDate, refetch }) => {
    const { name, slots } = appointmentOption;

    const [treatment, setTreatment] = useState(null)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleBookingOpne = () => setShow(true);


    return (
        <>
            <div className="col text-center">
                <div className="card p-3 ">
                    <div className="card-body">
                        <h5 className="card-title py-3 text-primari">{name}</h5>
                        <p className='text-secondary'>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
                        <p className='text-secondary'>{slots.length} {slots.length > 1 ? "Spaces" : "Space"} Availble </p>

                        <button
                            disabled={slots.length === 0}
                            onClick={() => handleBookingOpne(setTreatment(appointmentOption))}
                            className='mb-5 mb-md-0 btn-primari bg-primari'
                        >Make Appintment</button>

                    </div>
                </div>
            </div>


            {
                treatment && <BookingModal
                    refetch={refetch}
                    show={show}
                    handleClose={handleClose}
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                ></BookingModal>
            }


        </>
    );
};

export default AppointmentOption;