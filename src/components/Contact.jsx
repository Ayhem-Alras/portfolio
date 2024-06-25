// src/components/Contact.js
import React from 'react';
import './Contact.css'; // سنضيف الأسلوب لاحقًا

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>يمكنك الاتصال بي عبر البريد الإلكتروني أو حسابات وسائل التواصل الاجتماعي التالية:</p>
      <ul>
        <li>البريد الإلكتروني: [عنوان بريدك الإلكتروني]</li>
        <li>الهاتف: [رقم الهاتف]</li>
        <li>LinkedIn: <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">ملفي الشخصي على LinkedIn</a></li>
        <li>GitHub: <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">ملفي الشخصي على GitHub</a></li>
      </ul>
    </section>
  );
}

export default Contact;
