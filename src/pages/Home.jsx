import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 3rem;
  min-height: 80vh;
`;

const ProfileSection = styled.div`
  flex: 1;
  text-align: center;
`;

const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: 0 auto 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
`;

const ContentSection = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  color: #7f8c8d;
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Subtitle = styled.h2`
  color: #7f8c8d;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 500;
`;

const Description = styled.p`
  color: #95a5a6;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const Highlight = styled.span`
  color: #e67e22;
  font-weight: 600;
`;

const ContactButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const Home = () => {
  const handleContactClick = () => {
    const email = 'abinav.rvkrish@gmail.com';
    const subject = 'Hello Abinav - Let\'s Connect!';
    const body = 'Hi Abinav,\n\nI came across your portfolio and would love to connect with you.\n\nBest regards,';
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <HomeContainer>
      <ProfileSection>
        <ProfileImage>
          👨‍💻
        </ProfileImage>
      </ProfileSection>
      
      <ContentSection>
        <Title>Hi, I'm Abinav</Title>
        <Subtitle>Machine Learning Engineer & MLOps Specialist</Subtitle>
        <Description>
          I'm passionate about converting mathematical models into production-grade software that drives real business value. 
          With over 4 years of experience in <Highlight>Machine Learning Operations (MLOps)</Highlight>, 
          <Highlight>Computer Vision</Highlight>, and <Highlight>Medical Imaging</Highlight>, I specialize in building 
          scalable, reliable systems that make AI accessible and impactful.
        </Description>
        <Description>
          Currently working as a Senior Engineer at <Highlight>ACV Auctions</Highlight>, I lead MLOps initiatives 
          and scale machine learning infrastructure. My expertise spans from developing deep learning models to 
          implementing automated deployment pipelines and monitoring systems for production ML applications.
        </Description>
        <ContactButton onClick={handleContactClick}>
          📧 Get In Touch
        </ContactButton>
      </ContentSection>
    </HomeContainer>
  );
};

export default Home; 