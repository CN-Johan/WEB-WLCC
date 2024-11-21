import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #f5f5f7;
  color: #1d1d1f;
  padding: 64px 48px 32px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FooterTitle = styled.h3`
  font-size: 14px;
  margin-bottom: 16px;
  color: #1d1d1f;
  font-weight: 600;
`;

const FooterLink = styled(Link)`
  color: #515154;
  text-decoration: none;
  font-size: 14px;
  position: relative;
  display: inline-block;
  max-width: 10ch;
  min-width: 3ch;
  width: fit-content;
  text-align: left;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 1px;
    background: #1d1d1f;
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: center;
  }
  
  &:hover {
    color: #1d1d1f;
    
    &:after {
      transform: scaleX(1);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid #d2d2d7;
  color: #86868b;
  font-size: 12px;
`;

const ContactInfo = styled.div`
  color: #515154;
  font-size: 14px;
  line-height: 1.8;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>关于我们</FooterTitle>
          <FooterLink to="/about">公司简介</FooterLink>
          <FooterLink to="/team">团队介绍</FooterLink>
          <FooterLink to="/contact">联系我们</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>解决方案</FooterTitle>
          <FooterLink to="/solutions/digital">数字化转型</FooterLink>
          <FooterLink to="/solutions/saas">SaaS服务</FooterLink>
          <FooterLink to="/solutions/data">数据分析</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>产品服务</FooterTitle>
          <FooterLink to="/products/software">软件产品</FooterLink>
          <FooterLink to="/products/hardware">硬件产品</FooterLink>
          <FooterLink to="/products/cloud">云托管</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>联系方式</FooterTitle>
          <ContactInfo>
            <p>电话：+86 151 8981 0068</p>
            <p>邮箱：info@wlcc.asia</p>
            <p>地址：江苏省南京市</p>
          </ContactInfo>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        © {new Date().getFullYear()} 南京市溧水区万联文化传播工作室. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer; 