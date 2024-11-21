import { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #fff;
  color: #1d1d1f;
  padding: 0 20px;
`;

const Title = styled(motion.h1)`
  font-size: 56px;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin-bottom: 24px;
  color: #1d1d1f;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 36px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 28px;
  max-width: 600px;
  margin-bottom: 32px;
  color: #86868b;
  font-weight: 400;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 20px;
  }
`;

const Button = styled(motion.button)`
  padding: 18px 36px;
  font-size: 18px;
  background: #2997ff;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 400;
  
  &:hover {
    background: #0077ed;
    transform: scale(1.02);
  }
`;

const Section = styled.section`
  padding: 100px 48px;
  background: white;
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 48px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: #f5f5f7;
  padding: 32px;
  border-radius: 20px;
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
`;

const CardText = styled.p`
  color: #666;
  line-height: 1.6;
`;

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomeContainer>
      <HeroSection>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          数字化转型的引领者
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          为企业提供全方位的SaaS服务解决方案，助力企业实现数字化转型
        </Subtitle>
        <Button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          了解更多 {'>'}
        </Button>
      </HeroSection>

      <Section>
        <SectionContent>
          <Title as="h2" style={{ color: 'black', fontSize: '42px', textAlign: 'center' }}>
            我们的核心服务
          </Title>
          <Grid>
            {[
              {
                title: '企业级SaaS服务',
                description: '提供完整的企业管理软件解决方案，包括CRM、ERP、HR等系统'
              },
              {
                title: '数据分析与可视化',
                description: '强大的数据分析工具，帮助企业洞察业务趋势，做出明智决策'
              },
              {
                title: 'IT基础设施服务',
                description: '为企业提供稳定、安全、高效的IT基础设施解决方案'
              }
            ].map((service, index) => (
              <Card
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CardTitle>{service.title}</CardTitle>
                <CardText>{service.description}</CardText>
              </Card>
            ))}
          </Grid>
        </SectionContent>
      </Section>
    </HomeContainer>
  );
}

export default Home; 