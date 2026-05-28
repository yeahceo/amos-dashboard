import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';
import data from './data/amos-data.json';
import './App.css';

// 디자인 토큰
const TOKENS = {
  colors: {
    primary: '#1a6b4a',
    secondary: '#2ecc71',
    accent: '#f39c12',
    danger: '#e74c3c',
    info: '#3498db',
    light: '#f8f9fa',
    dark: '#2c3e50'
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem'
  }
};

function KPICard({ label, value, unit, icon, trend, trendValue }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: TOKENS.spacing.lg,
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      borderLeft: `4px solid ${TOKENS.colors.primary}`,
      flex: 1
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
        <div>
          <p style={{ color: '#666', fontSize: '14px', margin: '0 0 8px' }}>{label}</p>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: TOKENS.colors.dark, margin: '0' }}>
            {value}<span style={{ fontSize: '18px', color: '#999' }}>{unit}</span>
          </p>
          {trend && (
            <p style={{
              color: trend === 'up' ? TOKENS.colors.secondary : TOKENS.colors.danger,
              fontSize: '12px',
              margin: '8px 0 0',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              {trend === 'up' ? '📈' : '📉'} {trendValue}
            </p>
          )}
        </div>
        <div style={{ fontSize: '28px' }}>{icon}</div>
      </div>
    </div>
  );
}

function SectionCard({ title, children, image }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: TOKENS.spacing.lg,
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      gridColumn: 'span 1'
    }}>
      <h3 style={{ margin: `0 0 ${TOKENS.spacing.md} 0`, color: TOKENS.colors.dark, fontSize: '18px', fontWeight: '600' }}>
        {title}
      </h3>
      {image && <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px', marginBottom: TOKENS.spacing.md }} />}
      {children}
    </div>
  );
}

function App() {
  const businessData = [
    { name: 'B2B\n살롱', value: 70, fill: TOKENS.colors.primary },
    { name: 'B2C\n소비자', value: 30, fill: TOKENS.colors.secondary }
  ];

  const trendData = [
    { name: 'Skinification', impact: 85 },
    { name: 'K-Beauty\nGlobal', impact: 80 },
    { name: 'Professional\nMarket', impact: 90 }
  ];

  const productData = data.products.map((p, i) => ({
    name: p.name.split('(')[0].trim(),
    sales: 100 - i * 15,
    color: [TOKENS.colors.primary, TOKENS.colors.secondary, TOKENS.colors.info][i]
  }));

  return (
    <div style={{ background: TOKENS.colors.light, minHeight: '100vh', paddingTop: TOKENS.spacing.xl }}>
      {/* 헤더 */}
      <div style={{
        background: 'white',
        borderBottom: `3px solid ${TOKENS.colors.primary}`,
        paddingBottom: TOKENS.spacing.lg,
        marginBottom: TOKENS.spacing.xl,
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: `0 ${TOKENS.spacing.lg}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ color: TOKENS.colors.primary, margin: '0', fontSize: '32px', fontWeight: '700' }}>
                🧴 AMOS Professional
              </h1>
              <p style={{ color: '#666', margin: TOKENS.spacing.sm + ' 0 0', fontSize: '14px' }}>
                한국 헤어 전문 브랜드 | 시장점유율 #1 | 살롱 전문가의 선택
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ color: TOKENS.colors.accent, fontWeight: 'bold', margin: '0', fontSize: '18px' }}>2024-2025</p>
              <p style={{ color: '#999', margin: '4px 0 0', fontSize: '12px' }}>Brand Analysis Dashboard</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: `0 ${TOKENS.spacing.lg} ${TOKENS.spacing.xl}` }}>
        {/* KPI 섹션 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: TOKENS.spacing.md, marginBottom: TOKENS.spacing.xl }}>
          <KPICard label="2024 매출 (억원)" value="792" unit="" icon="💰" trend="up" trendValue="역대 최고" />
          <KPICard label="시장점유율" value="52" unit="%" icon="📊" trend="up" trendValue="1위 유지" />
          <KPICard label="임직원 수" value="94" unit="명" icon="👥" />
          <KPICard label="설립 연도" value="2007" unit="" icon="🏢" />
        </div>

        {/* 메인 섹션 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: TOKENS.spacing.lg, marginBottom: TOKENS.spacing.xl }}>
          {/* 비즈니스 모델 */}
          <SectionCard title="💼 비즈니스 모델">
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={businessData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}\n${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {businessData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: TOKENS.spacing.md, marginTop: TOKENS.spacing.md }}>
              <div style={{ background: TOKENS.colors.light, padding: TOKENS.spacing.md, borderRadius: '8px', borderLeft: `3px solid ${TOKENS.colors.primary}` }}>
                <p style={{ color: '#666', fontSize: '12px', margin: '0' }}>B2B (살롱)</p>
                <p style={{ color: TOKENS.colors.primary, fontSize: '24px', fontWeight: 'bold', margin: '4px 0 0' }}>70%</p>
              </div>
              <div style={{ background: TOKENS.colors.light, padding: TOKENS.spacing.md, borderRadius: '8px', borderLeft: `3px solid ${TOKENS.colors.secondary}` }}>
                <p style={{ color: '#666', fontSize: '12px', margin: '0' }}>B2C (소비자)</p>
                <p style={{ color: TOKENS.colors.secondary, fontSize: '24px', fontWeight: 'bold', margin: '4px 0 0' }}>30%</p>
              </div>
            </div>
          </SectionCard>

          {/* 시장 트렌드 */}
          <SectionCard title="📈 시장 트렌드 영향도">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="impact" fill={TOKENS.colors.primary} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </SectionCard>
        </div>

        {/* 제품 포트폴리오 */}
        <SectionCard title="🧴 핵심 제품 포트폴리오">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: TOKENS.spacing.md }}>
            {data.products.map((product, i) => (
              <div key={product.id} style={{
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                padding: TOKENS.spacing.md,
                borderRadius: '10px',
                borderTop: `4px solid ${[TOKENS.colors.primary, TOKENS.colors.secondary, TOKENS.colors.info][i]}`,
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '60px', opacity: '0.1' }}>🧴</div>
                <h4 style={{ color: TOKENS.colors.dark, margin: '0 0 8px', fontSize: '16px', fontWeight: '600' }}>
                  {product.name}
                </h4>
                <p style={{ color: '#666', fontSize: '12px', margin: '0 0 8px', lineHeight: '1.5' }}>
                  {product.features}
                </p>
                <div style={{ display: 'flex', gap: TOKENS.spacing.xs, flexWrap: 'wrap' }}>
                  <span style={{
                    display: 'inline-block',
                    background: TOKENS.colors.primary,
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: '500'
                  }}>
                    {product.target}
                  </span>
                  <span style={{
                    display: 'inline-block',
                    background: TOKENS.colors.light,
                    color: TOKENS.colors.dark,
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '11px'
                  }}>
                    {product.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* 마케팅 & 경쟁사 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: TOKENS.spacing.lg, marginTop: TOKENS.spacing.xl }}>
          <SectionCard title="📢 마케팅 채널">
            <div style={{ display: 'flex', flexDirection: 'column', gap: TOKENS.spacing.md }}>
              {data.marketing_channels.map((channel, i) => (
                <div key={i} style={{
                  padding: TOKENS.spacing.md,
                  background: TOKENS.colors.light,
                  borderLeft: `3px solid ${TOKENS.colors.secondary}`,
                  borderRadius: '6px'
                }}>
                  <p style={{ color: TOKENS.colors.dark, fontWeight: '600', margin: '0 0 4px', fontSize: '14px' }}>
                    {channel.channel}
                  </p>
                  <p style={{ color: '#666', fontSize: '12px', margin: '0' }}>
                    {channel.description}
                  </p>
                  <span style={{
                    display: 'inline-block',
                    marginTop: '8px',
                    padding: '3px 8px',
                    background: channel.impact === 'High' ? TOKENS.colors.secondary : TOKENS.colors.info,
                    color: 'white',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: '500'
                  }}>
                    {channel.impact}
                  </span>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="🏢 경쟁사 분석">
            <div style={{ display: 'flex', flexDirection: 'column', gap: TOKENS.spacing.md }}>
              {data.competitors.map((competitor, i) => (
                <div key={i} style={{
                  padding: TOKENS.spacing.md,
                  background: TOKENS.colors.light,
                  borderRadius: '6px',
                  borderLeft: `3px solid ${TOKENS.colors.accent}`
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <div>
                      <p style={{ color: TOKENS.colors.dark, fontWeight: '600', margin: '0', fontSize: '14px' }}>
                        {competitor.name}
                      </p>
                      <p style={{ color: '#666', fontSize: '12px', margin: '4px 0 0' }}>
                        {competitor.category}
                      </p>
                    </div>
                    <span style={{
                      padding: '3px 8px',
                      background: TOKENS.colors.accent,
                      color: 'white',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: '500'
                    }}>
                      경쟁사
                    </span>
                  </div>
                  <p style={{ color: '#999', fontSize: '11px', margin: '6px 0 0', fontStyle: 'italic' }}>
                    {competitor.market_position}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

        {/* 전략적 방향 */}
        <div style={{ marginTop: TOKENS.spacing.xl }}>
          <SectionCard title="🎯 전략적 시장 기회">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: TOKENS.spacing.md }}>
              {data.market_trends.map((trend, i) => (
                <div key={i} style={{
                  background: `linear-gradient(135deg, ${TOKENS.colors.primary}20, ${TOKENS.colors.secondary}20)`,
                  padding: TOKENS.spacing.md,
                  borderRadius: '10px',
                  borderLeft: `4px solid ${TOKENS.colors.primary}`
                }}>
                  <h4 style={{ color: TOKENS.colors.primary, margin: '0 0 8px', fontSize: '16px', fontWeight: '600' }}>
                    {trend.trend}
                  </h4>
                  <p style={{ color: '#666', fontSize: '13px', margin: '0 0 12px', lineHeight: '1.5' }}>
                    {trend.description}
                  </p>
                  <span style={{
                    display: 'inline-block',
                    background: TOKENS.colors.primary,
                    color: 'white',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    {trend.relevance}
                  </span>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

        {/* 푸터 */}
        <div style={{
          textAlign: 'center',
          marginTop: TOKENS.spacing.xl,
          paddingTop: TOKENS.spacing.lg,
          borderTop: '1px solid #ddd',
          color: '#999',
          fontSize: '12px'
        }}>
          <p style={{ margin: '0' }}>
            AMOS Professional Brand Analysis Dashboard | 2024-2025
          </p>
          <p style={{ margin: '4px 0 0' }}>
            💚 데이터 기반 회사 분석 | 한국 프로페셔널 헤어케어 리더
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
