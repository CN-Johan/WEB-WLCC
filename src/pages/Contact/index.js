import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  padding-top: 48px;
`;

const ContactSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 64px 24px;
  }
`;

const ContactInfo = styled.div``;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Input = styled.input`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
  }
`;

const TextArea = styled.textarea`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
  }
`;

const SubmitButton = styled.button`
  padding: 16px 32px;
  background: ${props => props.theme.colors.accent};
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const InfoItem = styled.div`
  margin-bottom: 32px;
`;

const InfoTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 16px;
`;

const InfoText = styled.p`
  color: #666;
  line-height: 1.6;
`;

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 处理表单提交
  };

  return (
    <ContactContainer>
      <ContactSection>
        <ContactInfo>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: '48px', marginBottom: '48px' }}
          >
            联系我们
          </motion.h1>

          <InfoItem>
            <InfoTitle>公司地址</InfoTitle>
            <InfoText>深圳市XXXXXX</InfoText>
          </InfoItem>

          <InfoItem>
            <InfoTitle>联系电话</InfoTitle>
            <InfoText>+86 XXX XXXX XXXX</InfoText>
          </InfoItem>

          <InfoItem>
            <InfoTitle>电子邮箱</InfoTitle>
            <InfoText>contact@wlcc.asia</InfoText>
          </InfoItem>
        </ContactInfo>

        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Input type="text" placeholder="您的姓名" required />
          <Input type="email" placeholder="电子邮箱" required />
          <Input type="tel" placeholder="联系电话" />
          <TextArea placeholder="请输入您的留言" required />
          <SubmitButton type="submit">发送消息</SubmitButton>
        </ContactForm>
      </ContactSection>
    </ContactContainer>
  );
}

export default Contact; 