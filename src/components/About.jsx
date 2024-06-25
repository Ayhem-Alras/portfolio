// src/components/About.js
import React from 'react';
import './About.css';

// استيراد الصورة
import profileImage from '../assets/images/profile.jpg';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <img src={profileImage} alt="Profile" className="profile-image" />
      <p>أنا [اسمك]، متخصص في [مجالك]. حصلت على درجة [الدرجة الأكاديمية] من [اسم الجامعة]، وعملت على [نوع المشاريع أو الأدوار المهنية] على مدى [عدد السنوات] الماضية.</p>
      <p>أنا شغوف بـ [المجال أو النشاط الذي تهتم به] وأحب العمل على مشاريع التي تشمل [التخصصات أو المهارات التي تبرز فيها].</p>
    </section>
  );
}

export default About;
