import styled from 'styled-components';
import { motion } from 'framer-motion';

const SolutionsContainer = styled.div`
  padding-top: 48px;
`;

const HeroSection = styled.section`
  padding: 120px 48px;
  background: #f5f5f7;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 24px;
  color: ${props => props.theme.colors.primary};
`;

const Description = styled.p`
  font-size: 20px;
  max-width: 800px;
  margin: 0 auto;
  color: #666;
  line-height: 1.6;
`;

function Solutions() {
  return (
    <SolutionsContainer>
      <HeroSection>
        <Title>解决方案</Title>
        <Description>
          我们提供全方位的企业数字化转型解决方案，
          帮助企业提升效率、降低成本、实现创新
        </Description>
      </HeroSection>
      {/* 这里可以添加更多解决方案相关的内容 */}
    </SolutionsContainer>
  );
}

export default Solutions; 