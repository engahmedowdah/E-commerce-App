import React from 'react';

function ContactInfo(): React.ReactNode {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-secondary-container/20 p-6 rounded-3xl flex flex-col items-center text-center">
        <span className="material-symbols-outlined text-secondary text-3xl mb-3">mail</span>
        <h3 className="font-label-bold text-label-bold text-on-surface mb-1">البريد الإلكتروني</h3>
        <p className="font-body-sm text-body-sm text-secondary">hello@solestyle.com</p>
      </div>
      <div className="bg-primary-container/10 p-6 rounded-3xl flex flex-col items-center text-center">
        <span className="material-symbols-outlined text-primary text-3xl mb-3">call</span>
        <h3 className="font-label-bold text-label-bold text-on-surface mb-1">اتصل بنا</h3>
        <p className="font-body-sm text-body-sm text-primary">+966 50 123 4567</p>
      </div>
      <div className="bg-tertiary-container/10 p-6 rounded-3xl flex flex-col items-center text-center">
        <span className="material-symbols-outlined text-tertiary text-3xl mb-3">schedule</span>
        <h3 className="font-label-bold text-label-bold text-on-surface mb-1">ساعات العمل</h3>
        <p className="font-body-sm text-body-sm text-tertiary">9:00 ص - 10:00 م</p>
      </div>
    </div>
  );
}

export default ContactInfo;
