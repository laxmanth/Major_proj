import React from 'react';
import './About.css';
import ProfileCard from './ProfileCard';
import LaxmanthImage from './vdv.png';
import SatvikImage from './satvik.png';
import RuthvikImage from './Ruth.jpg';

const About = () => {
  const teamMembers = [
    {
      name: "Laxmanth Reddy",
      title: "Cybersecurity Lead",
      handle: "laxmanthsec",
      status: "Online",
      avatarUrl: LaxmanthImage,
      miniAvatarUrl: LaxmanthImage,
      contactText: "View Profile",
      gradient: "linear-gradient(145deg, #4e54c8 0%, #8f94fb 100%)",
      socialLinks: [
        { icon: 'linkedin', url: '#' },
        { icon: 'github', url: '#' },
        { icon: 'twitter', url: '#' }
      ]
    },
    {
      name: "Satvik Reddy",
      title: "Risk Analyst & OWASP Researcher",
      handle: "satvikowasp",
      status: "Online",
      avatarUrl: SatvikImage,
      miniAvatarUrl: SatvikImage,
      contactText: "View Profile",
      gradient: "linear-gradient(145deg, #11998e 0%, #38ef7d 100%)",
      socialLinks: [
        { icon: 'linkedin', url: '#' },
        { icon: 'github', url: '#' },
        { icon: 'medium', url: '#' }
      ]
    },
    {
      name: "Ruthvik",
      title: "Vulnerability Engineer",
      handle: "ruthviksec",
      status: "Online",
      avatarUrl: RuthvikImage,
      miniAvatarUrl: RuthvikImage,
      contactText: "View Profile",
      gradient: "linear-gradient(145deg, #f46b45 0%, #eea849 100%)",
      socialLinks: [
        { icon: 'linkedin', url: '#' },
        { icon: 'twitter', url: '#' },
        { icon: 'gitlab', url: '#' }
      ]
    }
  ];

  return (
    <div className="about-page">
      <div className="about-header">
        <h1 className="about-title">Meet Our Team</h1>
        <p className="about-subtitle">The cybersecurity experts behind your protection</p>
      </div>
      
      <div className="profile-cards-container">
        {teamMembers.map((member, index) => (
          <ProfileCard
            key={index}
            name={member.name}
            title={member.title}
            handle={member.handle}
            status={member.status}
            avatarUrl={member.avatarUrl}
            miniAvatarUrl={member.miniAvatarUrl}
            contactText={member.contactText}
            innerGradient={member.gradient}
            socialLinks={member.socialLinks}
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log(`Contacting ${member.name}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default About;