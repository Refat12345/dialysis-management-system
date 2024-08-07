import React from 'react'
const BusinessCard = ({ name, title, phone, email, qrCode }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
        <div className="flex items-center">
          <img className="w-12 h-12 rounded-full mr-4" src={qrCode} alt="QR Code" />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{name}</p>
            <p className="text-gray-600">{title}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-600">Phone: {phone}</p>
          <p className="text-gray-600">Email: {email}</p>
        </div>
      </div>
    );
  };
  
  const UserInvites = () => {
    const cards = [
      {
        name: 'اسم الشخص',
        title: 'المسمى الوظيفي',
        phone: '+963 9993444444',
        email: 'name@example.com',
        qrCode: 'path/to/qr-code.png',
      },
    ];
  
    return (
      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <BusinessCard key={index} {...card} />
        ))}
      </div>
    );
  };
  
  export default UserInvites;
