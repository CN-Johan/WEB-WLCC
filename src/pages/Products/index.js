import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProductsContainer = styled.div`
  padding-top: 48px;
`;

const HeroSection = styled.section`
  padding: 120px 48px;
  background: linear-gradient(135deg, #000 0%, #333 100%);
  color: white;
  text-align: center;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 64px auto;
  padding: 0 48px;
`;

const ProductCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.div`
  height: 200px;
  background: ${props => props.bg || '#f5f5f7'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductContent = styled.div`
  padding: 24px;
`;

const ProductTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
`;

const ProductDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
`;

const Button = styled.button`
  padding: 12px 24px;
  background: ${props => props.theme.colors.accent};
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const products = [
  {
    title: "企业SaaS平台",
    description: "一站式企业管理解决方案，包含CRM、ERP、HR等核心模块",
    image: "#0071e3"
  },
  {
    title: "数据分析平台",
    description: "强大的数据分析工具，支持实时数据处理和可视化展示",
    image: "#5e5ce6"
  },
  {
    title: "云基础设施",
    description: "安全可靠的云服务，支持弹性扩展和高可用性",
    image: "#2d2d2d"
  },
  {
    title: "硬件设备",
    description: "企业级硬件设备销售与维护服务",
    image: "#1d1d1f"
  }
];

function Products() {
  return (
    <ProductsContainer>
      <HeroSection>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: '48px', marginBottom: '24px' }}
        >
          产品与服务
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto' }}
        >
          为企业提供全方位的数字化解决方案，助力企业实现数字化转型
        </motion.p>
      </HeroSection>

      <ProductsGrid>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProductImage bg={product.image} />
            <ProductContent>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <Button>了解更多</Button>
            </ProductContent>
          </ProductCard>
        ))}
      </ProductsGrid>
    </ProductsContainer>
  );
}

export default Products; 