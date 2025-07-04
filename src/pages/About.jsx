import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SiPython, SiC, SiGnubash, SiJavascript, SiCplusplus, SiNumpy, SiScipy, SiPandas, SiScikitlearn, SiPytorch, SiTensorflow, SiOpencv, SiFastapi, SiPydantic, SiStreamlit, SiPostgresql, SiMongodb, SiAmazondynamodb, SiDuckdb, SiSqlite, SiKubernetes, SiJenkins, SiTerraform, SiGitlab, SiMlflow,SiGooglecloud,SiOpenai,SiHuggingface,SiOllama,SiGooglegemini,SiLangchain,SiElasticsearch } from 'react-icons/si';
import { FaRust, FaJava, FaDocker, FaAws,FaBookReader } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";


const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 2.5rem;
`;

const Subtitle = styled.h2`
  color: #5a6c7d;
  margin: 2rem 0 1rem 0;
  font-size: 1.8rem;
  border-bottom: 3px solid #3498db;
  padding-bottom: 0.5rem;
  font-weight: 600;
`;

const Intro = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1rem 0;
`;

const SkillCategory = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #3498db;
  min-height: 200px;
  position: relative;
`;

const SkillTitle = styled.h3`
  color: #000000;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
`;

const LogoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;
  justify-content: flex-start;
`;

const TechLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 0.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
`;

const LogoIcon = styled.div`
  font-size: 2rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
`;

const LogoText = styled.span`
  font-size: 0.7rem;
  color: #2c3e50;
  font-weight: 500;
  text-align: center;
  max-width: 60px;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid #e9ecef;
  color: #000000;
  font-weight: 500;
  &:last-child {
    border-bottom: none;
  }
`;

const CompanyGroup = styled.div`
  margin: 1.5rem 0;
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Company = styled.div`
  color: #2c3e50;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-align: left;
`;

const ExperienceItem = styled.div`
  background: white;
  padding: 1.5rem;
  margin: 0;
  border-radius: 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-left: 4px solid #27ae60;

  &:last-child {
    border-radius: 0 0 8px 8px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #e9ecef;
  }
`;

const ResearchItem = styled.div`
  background: #fff3cd;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 8px;
  border-left: 4px solid #ffc107;
`;

const TimelineContainer = styled.div`
  position: relative;
  padding-left: 2rem;
  margin: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: -2.5rem;
    top: 0.5rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #3498db;
    border: 3px solid white;
    box-shadow: 0 0 0 2px #3498db;
  }
`;

const TimelineContent = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-left: 4px solid #3498db;
  margin-left: 1rem;

  &:hover {
    transform: translateX(5px);
    transition: transform 0.2s ease;
  }
`;

const CompanyName = styled.div`
  color: #3498db;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  text-align: left;
`;

const JobTitle = styled.h3`
  color: #000000;
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: left;
`;

const Duration = styled.div`
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  text-align: left;
`;

const EducationItem = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 8px;
  border-left: 4px solid #e74c3c;
`;

const PromotionIndicator = styled.div`
  background: #27ae60;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  display: inline-block;
  margin-left: 0.5rem;
`;

const About = () => (
  <AboutContainer>
    <Section>
      <Subtitle>Outside Work</Subtitle>
      <p>
        When I'm not building machine learning systems, you can find me exploring the latest developments in AI research,
        contributing to open-source projects, or sharing knowledge through technical writing and community talks.
      </p>
      <p>
        I'm passionate about privacy-preserving technologies, Security and responsible AI development.
      </p>
      <p>
        In my free time, I like to stay active through gym and Yoga, and I'm always eager to learn new
        programming languages and frameworks to expand my technical toolkit.
      </p>
    </Section>

    <Section>
      <Subtitle>Skills & Technologies</Subtitle>
      <SkillsGrid>
        <SkillCategory>
          <SkillTitle>
            <span role="img" aria-label="code">💻</span>
            Programming Languages
          </SkillTitle>
          <LogoGrid>
            <TechLogo>
              <LogoIcon><SiPython /></LogoIcon>
              <LogoText>Python</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><FaRust /></LogoIcon>
              <LogoText>Rust</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><FaGolang /></LogoIcon>
              <LogoText>Go</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiC /></LogoIcon>
              <LogoText>C</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiGnubash /></LogoIcon>
              <LogoText>Bash</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiJavascript /></LogoIcon>
              <LogoText>JS</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiCplusplus /></LogoIcon>
              <LogoText>C++</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><FaJava /></LogoIcon>
              <LogoText>Java</LogoText>
            </TechLogo>
          </LogoGrid>
        </SkillCategory>

        <SkillCategory>
          <SkillTitle>
            <span role="img" aria-label="data">📊</span>
            Data Science Tools
          </SkillTitle>
          <LogoGrid>
            <TechLogo>
              <LogoIcon><SiNumpy /></LogoIcon>
              <LogoText>NumPy</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiScipy /></LogoIcon>
              <LogoText>SciPy</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiPandas /></LogoIcon>
              <LogoText>Pandas</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><img src="/Matplotlib.svg" /></LogoIcon>
              <LogoText>Matplotlib</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><img src="/seaborn-1.svg" style={{width: '30px', height: '30px'}}/></LogoIcon>
              <LogoText>Seaborn</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiScikitlearn /></LogoIcon>
              <LogoText>Scikit</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiPytorch /></LogoIcon>
              <LogoText>PyTorch</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiTensorflow /></LogoIcon>
              <LogoText>TensorFlow</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiOpencv /></LogoIcon>
              <LogoText>OpenCV</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiFastapi /></LogoIcon>
              <LogoText>FastAPI</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiPydantic /></LogoIcon>
              <LogoText>Pydantic</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiStreamlit/></LogoIcon>
              <LogoText>Streamlit</LogoText>
            </TechLogo>
          </LogoGrid>
        </SkillCategory>

        <SkillCategory>
          <SkillTitle>
            <span role="img" aria-label="database">🗄️</span>
            Databases
          </SkillTitle>
          <LogoGrid>
            <TechLogo>
              <LogoIcon><SiPostgresql /></LogoIcon>
              <LogoText>PostgreSQL</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiMongodb/></LogoIcon>
              <LogoText>MongoDB</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiAmazondynamodb/></LogoIcon>
              <LogoText>DynamoDB</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiDuckdb/></LogoIcon>
              <LogoText>DuckDB</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiSqlite/></LogoIcon>
              <LogoText>SQLite</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiElasticsearch/></LogoIcon>
              <LogoText>ElasticSearch</LogoText>
            </TechLogo>
          </LogoGrid>
        </SkillCategory>

        <SkillCategory>
          <SkillTitle>
            <span role="img" aria-label="cloud">☁️</span>
            DevOps/MLOps Tools
          </SkillTitle>
          <LogoGrid>
            <TechLogo>
              <LogoIcon><FaDocker/></LogoIcon>
              <LogoText>Docker</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiKubernetes/></LogoIcon>
              <LogoText>K8s</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiGitlab/></LogoIcon>
              <LogoText>GitLab</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiJenkins/></LogoIcon>
              <LogoText>Jenkins</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiTerraform/></LogoIcon>
              <LogoText>Terraform</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiMlflow/></LogoIcon>
              <LogoText>MLFlow</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><img src="/feast.png" style={{width: '30px', height: '30px'}}/></LogoIcon>
              <LogoText>Feast</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><img src="/kubeflow.png" style={{width: '30px', height: '30px'}}/></LogoIcon>
              <LogoText>Kubeflow</LogoText>
            </TechLogo>
          </LogoGrid>
        </SkillCategory>

        <SkillCategory>
          <SkillTitle>
            <span role="img" aria-label="cloud">🌐</span>
            Cloud Platforms
          </SkillTitle>
          <LogoGrid>
            <TechLogo>
              <LogoIcon><FaAws/></LogoIcon>
              <LogoText>AWS</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiGooglecloud/></LogoIcon>
              <LogoText>GCP</LogoText>
            </TechLogo>
          </LogoGrid>
        </SkillCategory>

        <SkillCategory>
          <SkillTitle>
            <span role="img" aria-label="ai">🤖</span>
            LLM Tools
          </SkillTitle>
          <LogoGrid>
            <TechLogo>
              <LogoIcon><SiOpenai/></LogoIcon>
              <LogoText>OpenAI</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiHuggingface/></LogoIcon>
              <LogoText>HuggingFace</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><FaBookReader/></LogoIcon>
              <LogoText>Instructor</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiOllama/></LogoIcon>
              <LogoText>Ollama</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><img src="/deepeval.svg" style={{width: '30px', height: '30px'}}/></LogoIcon>
              <LogoText>Deepeval</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiGooglegemini/></LogoIcon>
              <LogoText>Gemini</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><img src="/dspy.png" style={{width: '50px', height: '30px'}}/></LogoIcon>
              <LogoText>DSPy</LogoText>
            </TechLogo>
            <TechLogo>
              <LogoIcon><SiLangchain/></LogoIcon>
              <LogoText>Langchain</LogoText>
            </TechLogo>
          </LogoGrid>
        </SkillCategory>
      </SkillsGrid>
    </Section>

    <Section>
      <Subtitle>Work Experience</Subtitle>

      <TimelineItem>
        <TimelineContent>
          <CompanyName>ACV Auctions</CompanyName>
          <div style={{ marginBottom: '1rem' }}>
            <JobTitle>Senior Engineer Machine Learning (MLOps)</JobTitle>
            <Duration>June 2025 - Present</Duration>
            <p style={{ marginTop: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
              Deploying Computer vision models for vehicle inspection and remarketing.
            </p>
          </div>
          <div style={{ borderTop: '1px solid #e9ecef', paddingTop: '1rem' }}>
            <JobTitle>Engineer III Machine Learning (MLOps)</JobTitle>
            <Duration>May 2024 - June 2025</Duration>
            <p style={{ marginTop: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
              * Built MLOps templates for cutting down the time to production for machine learning models.
              * Built Data serving platform for serving features to machine learning models during inference and training leveraged Feast as the feature store platform.
              * Organizer of the Machine learning guild for laying down the best practices for AI/ Machine Learning at ACV
              * Data Infrastructure Champion acting as local support for data infra team for Kafka related queries.
            </p>
          </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineContent>
          <CompanyName>Turboml Inc</CompanyName>
          <JobTitle>Machine Learning Engineer (MLE)</JobTitle>
          <Duration>Nov 2023 - April 2024</Duration>
          <p style={{ marginTop: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
            Refactored and optimized real-time SDK for machine learning platform. Participated in designing MLOps tools for feature drift detection and experimentation.
          </p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineContent>
          <CompanyName>Machine Learning Reply GmbH</CompanyName>
          <JobTitle>Machine Learning Engineer (MLE)</JobTitle>
          <Duration>June 2022 - July 2023</Duration>
          <p style={{ marginTop: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
            Built backend services for internal data marketplace handling request monitoring, approval workflows, and payment validation. Led MLOps community initiatives by working on POCs, and disseminating the learning across the company.
          </p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineContent>
          <CompanyName>Deepc</CompanyName>
          <div style={{ marginBottom: '1rem' }}>
            <JobTitle>Machine Learning Engineer</JobTitle>
            <Duration>Oct 2020 - Mar 2022</Duration>
            <p style={{ marginTop: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
              Developed deep learning-based image routing microservice improving valid request rates from 46% to 100%. Built benchmarking workflows for vendor algorithm assessment.
            </p>
          </div>
          <div style={{ borderTop: '1px solid #e9ecef', paddingTop: '1rem' }}>
            <JobTitle>Junior Machine Learning Engineer</JobTitle>
            <Duration>Jun 2019 - Oct 2020</Duration>
            <p style={{ marginTop: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
              Implemented unsupervised deep learning methods for anomaly detection in medical imaging. Created user-friendly benchmarking dashboard using Plotly Dash.
            </p>
          </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineContent>
          <CompanyName>The Mobility House</CompanyName>
          <JobTitle>Working Student - Data Science</JobTitle>
          <Duration>Oct 2018 - Mar 2019</Duration>
          <p style={{ marginTop: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
            Conducted data analysis and developed predictive models for energy management systems. Collaborated with engineering teams on data-driven optimization projects.
          </p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineContent>
          <CompanyName>Openmined</CompanyName>
          <div style={{ marginBottom: '1rem' }}>
            <JobTitle>Writing Team Lead</JobTitle>
            <Duration>July 2021 - Nov 2022</Duration>
            <p style={{ marginTop: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
              Led content creation and editing for privacy-enhancing technology blog. Managed team of writers and facilitated content production for responsible AI initiatives.
            </p>
          </div>
          <div style={{ borderTop: '1px solid #e9ecef', paddingTop: '1rem' }}>
            <JobTitle>Research Engineer</JobTitle>
            <Duration>April 2020 - July 2021</Duration>
            <p style={{ marginTop: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
              Researched and developed privacy-preserving machine learning techniques. Contributed to open-source projects focused on federated learning and secure computation.
            </p>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Section>

    <Section>
      <Subtitle>Education</Subtitle>
      <EducationItem>
        <JobTitle>M.Sc Computational Science and Engineering</JobTitle>
        <Company>Technical University of Munich</Company>
        <Duration>2020</Duration>
      </EducationItem>

      <EducationItem>
        <JobTitle>B.Tech in Mechanical Engineering</JobTitle>
        <Company>Amrita School of Engineering, Bengaluru campus</Company>
        <Duration>2016</Duration>
      </EducationItem>
    </Section>

    <Section>
      <Subtitle>Research Projects</Subtitle>
      <ResearchItem>
        <JobTitle>Master Thesis: Self Supervised Out of Distribution Detection for Medical Applications</JobTitle>
        <Company>Under supervision of Dr. Kim SeongTae at CAMPAR</Company>
      </ResearchItem>

      <ResearchItem>
        <JobTitle>Solving Inverse Problem in PDE using Deep Learning</JobTitle>
        <Company>Worked with Suprosanna in Image Based Biomedical Modelling Lab</Company>
      </ResearchItem>
    </Section>

    <Section>
      <Subtitle>Current Focus</Subtitle>
      <p>
        <strong>Machine Learning Operations (MLOps)</strong>, <strong>Computer Vision</strong>, <strong>Medical Imaging</strong>
      </p>
      <p>
        You can learn more about my current projects on <Link to="/projects" style={{ color: '#3498db', textDecoration: 'none' }}>here</Link>.
      </p>
    </Section>


  </AboutContainer>
);

export default About; 