import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Title>About Us</Title>
      <Paragraph>
        This is the About page. Here you can learn more about our company.
      </Paragraph>
    </div>
  );
};

export default About;
