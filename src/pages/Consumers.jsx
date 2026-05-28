import { Card, KPICard } from '../components/Card';
import { tokens } from '../tokens';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import data from '../data/amos-data.json';

export default function Consumers() {
  const segmentData = [
    { name: 'B2B (살롱 전문가)', value: data.consumers.b2b.share, color: tokens.colors.primary },
    { name: 'B2C (직접 소비자)', value: data.consumers.b2c.share, color: tokens.colors.info },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.lg }}>
      {/* KPI */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: tokens.spacing.md }}>
        <KPICard label="B2B 비중" value="70" unit="%" icon="✂️" accent={tokens.colors.primary} />
        <KPICard label="B2C 비중" value="30" unit="%" icon="🛍️" accent={tokens.colors.info} />
        <KPICard label="타겟 살롱" value="5,500" unit="개" icon="🏪" accent={tokens.colors.purple} />
      </div>

      {/* 세그먼트 차트 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: tokens.spacing.md }}>
        <Card title="📊 매출 구성">
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={segmentData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                label={({ value }) => `${value}%`}
              >
                {segmentData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', justifyContent: 'center', gap: tokens.spacing.md, marginTop: tokens.spacing.sm }}>
            {segmentData.map(s => (
              <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: tokens.fontSize.sm }}>
                <span style={{ width: 10, height: 10, background: s.color, borderRadius: 3 }} />
                {s.name}
              </div>
            ))}
          </div>
        </Card>

        <Card title="👥 고객 세그먼트 분석">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: tokens.spacing.md }}>
            <SegmentBlock
              title="B2B 살롱 전문가"
              subtitle="70% / 헤어 디자이너 (30~50대)"
              characteristics={data.consumers.b2b.characteristics}
              color={tokens.colors.primary}
            />
            <SegmentBlock
              title="B2C 일반 소비자"
              subtitle="30% / 20~40대 여성"
              characteristics={data.consumers.b2c.characteristics}
              color={tokens.colors.info}
            />
          </div>
        </Card>
      </div>

      {/* 소비 트렌드 */}
      <Card title="🔥 핵심 소비 트렌드">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: tokens.spacing.md }}>
          {data.consumers.trends.map((t, i) => (
            <div key={i} style={{
              padding: tokens.spacing.md,
              background: `linear-gradient(135deg, ${tokens.colors.chart[i % tokens.colors.chart.length]}15, white)`,
              borderRadius: tokens.radius.md,
              border: `1px solid ${tokens.colors.chart[i % tokens.colors.chart.length]}30`,
            }}>
              <div style={{ fontSize: 24, marginBottom: tokens.spacing.sm }}>💎</div>
              <div style={{ fontSize: tokens.fontSize.md, fontWeight: tokens.fontWeight.semibold, color: tokens.colors.textPrimary }}>
                {t}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function SegmentBlock({ title, subtitle, characteristics, color }) {
  return (
    <div style={{
      padding: tokens.spacing.md,
      background: color + '10',
      borderRadius: tokens.radius.md,
      borderLeft: `4px solid ${color}`,
    }}>
      <div style={{ fontWeight: tokens.fontWeight.bold, color, fontSize: tokens.fontSize.md, marginBottom: 2 }}>
        {title}
      </div>
      <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textTertiary, marginBottom: tokens.spacing.md }}>
        {subtitle}
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {characteristics.map((c, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: tokens.spacing.sm, fontSize: tokens.fontSize.sm, color: tokens.colors.textPrimary }}>
            <span style={{ color }}>▸</span>
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}
