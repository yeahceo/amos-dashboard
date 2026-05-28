import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import Financial from './pages/Financial';
import Products from './pages/Products';
import Marketing from './pages/Marketing';
import Consumers from './pages/Consumers';
import Market from './pages/Market';
import Competitors from './pages/Competitors';
import Swot from './pages/Swot';
import Strategy from './pages/Strategy';
import Insights from './pages/Insights';
import { tokens } from './tokens';
import './App.css';

const pages = {
  overview: { component: Overview, title: '브랜드 개요', subtitle: 'AMOS Professional 종합 정보' },
  financial: { component: Financial, title: '재무 성과', subtitle: '매출 추이 및 재무 지표' },
  products: { component: Products, title: '제품 포트폴리오', subtitle: '카테고리, 라인업, 핵심 제품' },
  marketing: { component: Marketing, title: '마케팅 & 모델', subtitle: '브랜드 모델, 캠페인, 디지털 채널' },
  consumers: { component: Consumers, title: '고객 분석', subtitle: 'B2B / B2C 세그먼트 및 트렌드' },
  market: { component: Market, title: '시장 & 트렌드', subtitle: '국내외 시장 규모 및 트렌드' },
  competitors: { component: Competitors, title: '경쟁사 분석', subtitle: '4-Way 포지셔닝 비교' },
  swot: { component: Swot, title: 'SWOT 분석', subtitle: '강점·약점·기회·위협 진단' },
  strategy: { component: Strategy, title: '전략 방향', subtitle: '6대 전략 및 최근 이슈' },
  insights: { component: Insights, title: 'Key Insights', subtitle: '핵심 결론 및 시사점' },
};

export default function App() {
  const [active, setActive] = useState('overview');
  const Page = pages[active].component;

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      background: tokens.colors.bgPage,
      fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: tokens.colors.textPrimary,
    }}>
      <Sidebar active={active} onSelect={setActive} />

      <main style={{ flex: 1, overflow: 'auto' }}>
        {/* Top Header */}
        <header style={{
          background: 'white',
          padding: `${tokens.spacing.lg} ${tokens.spacing.xl}`,
          borderBottom: `1px solid ${tokens.colors.border}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div>
            <h1 style={{
              margin: 0,
              fontSize: tokens.fontSize.xxl,
              fontWeight: tokens.fontWeight.bold,
              color: tokens.colors.textPrimary,
            }}>
              {pages[active].title}
            </h1>
            <div style={{
              fontSize: tokens.fontSize.sm,
              color: tokens.colors.textTertiary,
              marginTop: 4,
            }}>
              {pages[active].subtitle}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: tokens.spacing.md }}>
            <div style={{
              padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
              background: tokens.colors.primaryLight,
              color: tokens.colors.primary,
              borderRadius: tokens.radius.pill,
              fontSize: tokens.fontSize.sm,
              fontWeight: tokens.fontWeight.semibold,
            }}>
              📊 Brand Factbook 2025
            </div>
            <div style={{
              width: 36,
              height: 36,
              background: tokens.colors.primary,
              color: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: tokens.fontWeight.bold,
              fontSize: tokens.fontSize.md,
            }}>
              YJ
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div style={{ padding: tokens.spacing.xl }}>
          <Page />
        </div>

        {/* Footer */}
        <footer style={{
          padding: tokens.spacing.lg,
          textAlign: 'center',
          fontSize: tokens.fontSize.xs,
          color: tokens.colors.textTertiary,
          borderTop: `1px solid ${tokens.colors.border}`,
        }}>
          AMOS Professional Brand Analysis Dashboard · Data based on Brand Factbook 2025
        </footer>
      </main>
    </div>
  );
}
