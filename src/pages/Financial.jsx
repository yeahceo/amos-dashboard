import { Card, KPICard, Badge } from '../components/Card';
import { tokens } from '../tokens';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, AreaChart, Area, BarChart, Bar } from 'recharts';
import data from '../data/amos-data.json';

export default function Financial() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.lg }}>
      {/* KPI Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: tokens.spacing.md }}>
        <KPICard label="2024 매출" value="792" unit="억원" change={`+${data.financial.growth_10y}% (10년)`} icon="💰" />
        <KPICard label="시장점유율" value="52" unit="%" change="1위 유지" icon="🥇" accent={tokens.colors.warning} />
        <KPICard label="업계 성장률" value="1.6" unit="%" icon="📈" accent={tokens.colors.info} />
        <KPICard label="전체 살롱" value="5,500" unit="개" icon="🏪" accent={tokens.colors.purple} />
      </div>

      {/* Revenue Trend */}
      <Card title="📈 매출 추이 (2013-2024)" subtitle="단위: 억원">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data.financial.revenue_trend}>
            <defs>
              <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={tokens.colors.primary} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={tokens.colors.primary} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={tokens.colors.borderLight} />
            <XAxis dataKey="year" stroke={tokens.colors.textTertiary} fontSize={12} />
            <YAxis stroke={tokens.colors.textTertiary} fontSize={12} />
            <Tooltip contentStyle={{ borderRadius: 8, border: `1px solid ${tokens.colors.border}` }} formatter={(v) => `${v}억원`} />
            <Area type="monotone" dataKey="revenue" stroke={tokens.colors.primary} fillOpacity={1} fill="url(#colorRev)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: tokens.spacing.md, paddingTop: tokens.spacing.md, borderTop: `1px solid ${tokens.colors.borderLight}` }}>
          <Stat label="2013 매출" value="490억" />
          <Stat label="2024 매출" value="792억" highlight />
          <Stat label="10년 성장" value="+61.6%" highlight />
          <Stat label="연평균 성장" value="+5.6%" />
        </div>
      </Card>

      {/* Detailed Financials */}
      <Card title="💼 상세 재무 지표 (2024 → 2025)">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: `2px solid ${tokens.colors.border}` }}>
              <th style={cellStyle('left', true)}>지표</th>
              <th style={cellStyle('right', true)}>2024년</th>
              <th style={cellStyle('right', true)}>2025년</th>
              <th style={cellStyle('right', true)}>증감</th>
            </tr>
          </thead>
          <tbody>
            {data.financial.details_2024_2025.map((row, i) => (
              <tr key={i} style={{ borderBottom: `1px solid ${tokens.colors.borderLight}` }}>
                <td style={cellStyle('left')}>{row.metric}</td>
                <td style={cellStyle('right')}>{row.y2024.toLocaleString()}</td>
                <td style={cellStyle('right')}>{row.y2025.toLocaleString()}</td>
                <td style={{ ...cellStyle('right'), color: tokens.colors.success, fontWeight: tokens.fontWeight.semibold }}>
                  {row.change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Debt Ratio */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: tokens.spacing.md }}>
        <Card title="💪 재무 건전성">
          <div style={{ display: 'flex', justifyContent: 'space-around', padding: `${tokens.spacing.md} 0` }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textTertiary }}>2024년 부채비율</div>
              <div style={{ fontSize: tokens.fontSize.huge, fontWeight: tokens.fontWeight.bold, color: tokens.colors.textPrimary }}>
                {data.financial.debt_ratio_2024}%
              </div>
            </div>
            <div style={{ fontSize: tokens.fontSize.xxl, color: tokens.colors.textTertiary, alignSelf: 'center' }}>→</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textTertiary }}>2025년 부채비율</div>
              <div style={{ fontSize: tokens.fontSize.huge, fontWeight: tokens.fontWeight.bold, color: tokens.colors.success }}>
                {data.financial.debt_ratio_2025}%
              </div>
            </div>
          </div>
          <div style={{ padding: tokens.spacing.md, background: tokens.colors.primaryLight, borderRadius: tokens.radius.md, fontSize: tokens.fontSize.sm, color: tokens.colors.textPrimary }}>
            ✅ 부채비율 개선 (-57%p), 재무 안정성 강화
          </div>
        </Card>

        <Card title="🎯 핵심 성과 요약">
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: tokens.spacing.sm }}>
            <Bullet>2024 매출 792억 - <strong>역대 최고</strong></Bullet>
            <Bullet>10년간 매출 <strong>+61.6% 성장</strong></Bullet>
            <Bullet>시장점유율 <strong>52% (1위 유지)</strong></Bullet>
            <Bullet>업계 평균 대비 <strong>3배 빠른 성장</strong></Bullet>
            <Bullet>당기순이익 <strong>+137억 증가</strong></Bullet>
          </ul>
        </Card>
      </div>
    </div>
  );
}

function Stat({ label, value, highlight }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textTertiary, marginBottom: 4 }}>
        {label}
      </div>
      <div style={{
        fontSize: tokens.fontSize.xl,
        fontWeight: tokens.fontWeight.bold,
        color: highlight ? tokens.colors.primary : tokens.colors.textPrimary,
      }}>
        {value}
      </div>
    </div>
  );
}

function Bullet({ children }) {
  return (
    <li style={{
      display: 'flex',
      alignItems: 'center',
      gap: tokens.spacing.sm,
      padding: tokens.spacing.sm,
      background: tokens.colors.bgPage,
      borderRadius: tokens.radius.sm,
      fontSize: tokens.fontSize.md,
      color: tokens.colors.textPrimary,
    }}>
      <span style={{ color: tokens.colors.primary }}>●</span>
      {children}
    </li>
  );
}

function cellStyle(align = 'left', header = false) {
  return {
    padding: `${tokens.spacing.md} ${tokens.spacing.sm}`,
    textAlign: align,
    fontSize: tokens.fontSize.md,
    color: header ? tokens.colors.textSecondary : tokens.colors.textPrimary,
    fontWeight: header ? tokens.fontWeight.semibold : tokens.fontWeight.regular,
  };
}
