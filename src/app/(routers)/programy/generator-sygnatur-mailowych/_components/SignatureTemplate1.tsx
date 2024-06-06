'use client';

import React from 'react';

interface SignatureTemplateProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

const SignatureTemplate1: React.FC<SignatureTemplateProps> = ({ firstName, lastName, phoneNumber, email }) => {
  return (
    <div className="p-4 border rounded-md shadow-sm">
      <p className="text-lg font-semibold">{firstName} {lastName}</p>
      <p className="text-sm text-gray-500">{phoneNumber}</p>
      <p className="text-sm text-gray-500">{email}</p>
    </div>
  );
};

export default SignatureTemplate1;