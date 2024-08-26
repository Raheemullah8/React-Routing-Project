import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const { userid } = useParams();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-slate-500 text-white p-6 rounded-lg shadow-lg text-center">
                <h1 className="text-4xl md:text-6xl font-bold">
                    {userid ? `User: ${userid}` : 'User ID not found'}
                </h1>
            </div>
            <div className="mt-8">
                {/* Placeholder for additional user information */}
                <p className="text-lg text-gray-700">Here you can add more details about the user.</p>
            </div>
        </div>
    );
}

export default User;
