// pages/_app.tsx
import 'antd/dist/reset.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout, Menu } from 'antd';
import Link from 'next/link';

const { Header, Content, Footer } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link href="/events">Events</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link href="/team">Team</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link href="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Component {...pageProps} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        My Next.js App ©2024 Created with Ant Design
      </Footer>
    </Layout>
  );
}

export default MyApp;
