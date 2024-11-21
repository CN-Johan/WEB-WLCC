import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesContainer = styled.div`
  padding-top: 48px;
`;

const HeroSection = styled.section`
  padding: 120px 48px;
  background: #000;
  color: white;
  text-align: center;
`;

const ServicesGrid = styled.div`
  max-width: 1200px;
  margin: 64px auto;
  padding: 0 48px;
`;

const ServiceCard = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-bottom: 100px;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    margin-bottom: 64px;
  }

  &:nth-child(even) {
    direction: rtl;
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      direction: ltr;
    }
  }
`;

const ServiceContent = styled.div`
  direction: ltr;
`;

const ServiceImage = styled.div`
  height: 400px;
  background: ${props => props.bg || '#f5f5f7'};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
`;

const ServiceTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 24px;
  color: ${props => props.theme.colors.primary};
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.8;
  margin-bottom: 24px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  
  &:before {
    content: "•";
    color: ${props => props.theme.colors.accent};
    font-size: 24px;
    margin-right: 12px;
  }
`;

const services = [
  {
    title: "IT系统规划与实施",
    description: "为企业提供全面的IT系统规划和实施服务，帮助企业建立现代化的IT基础设施。",
    features: [
      "IT架构规划与设计",
      "系统集成与部署",
      "性能优化与调优",
      "安全策略制定"
    ],
    bgColor: "#0071e3"
  },
  {
    title: "云服务解决方案",
    description: "提供灵活、可扩展的云计算服务，助力企业实现数字化转型。",
    features: [
      "公有云/私有云部署",
      "混合云解决方案",
      "云安全服务",
      "容灾备份服务"
    ],
    bgColor: "#5e5ce6"
  },
  {
    title: "数据中心服务",
    description: "专业的数据中心运维和管理服务，确保企业数据的安全性和可用性。",
    features: [
      "数据中心规划",
      "设备采购与部署",
      "7*24运维服务",
      "性能监控与优化"
    ],
    bgColor: "#2d2d2d"
  }
];

function Services() {
  return (
    <ServicesContainer>
      <HeroSection>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: '48px', marginBottom: '24px' }}
        >
          IT服务解决方案
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto' }}
        >
          为企业提供全方位的IT服务支持，助力企业数字化转型
        </motion.p>
      </HeroSection>

      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ServiceImage bg={service.bgColor}>
              Service Image {index + 1}
            </ServiceImage>
            <ServiceContent>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <FeatureList>
                {service.features.map((feature, idx) => (
                  <FeatureItem key={idx}>{feature}</FeatureItem>
                ))}
              </FeatureList>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
}

export default Services; 