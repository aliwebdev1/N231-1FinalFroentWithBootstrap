import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://final-server-it3x6jsvd-aliwebdev1.vercel.app/users')
            const data = await res.json()
            return data;
        },

    })

    const handleMakeAdmin = (user) => {
        fetch(`https://final-server-it3x6jsvd-aliwebdev1.vercel.app/users/admin/${user?._id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success(`${user?.name} Make Admin Successfully`)
                    refetch()
                }
            })
    }


    return (
        <div className=''>
            <h3 className='my-3'>All Users</h3>
            <div className='vh-100'>
                <table className="table">
                    <thead className='bg-secondary-subtle'>
                        <tr>
                            <th scope="col">Serial</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.map((user, i) => <tr
                                key={user._id}>
                                <th scope="row">{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user)} className='btn btn-sm bg-black text-white'>Make Admin</button>}</td>
                                <td><button className='btn btn-sm bg-black text-white'>Remove User</button></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;