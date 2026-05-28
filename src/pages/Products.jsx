import { Card, Badge } from '../components/Card';
import { tokens } from '../tokens';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import data from '../data/amos-data.json';

export default function Products() {
  const pricingChart = data.products.pricing.map(p => ({
    name: p.type,
    min: p.price_min / 1000,
    max: p.price_max / 1000,
    channel: p.channel,
  }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.lg }}>
      {/* 카테고리 */}
      <Card title="🧴 제품 카테고리" subtitle="6대 핵심 카테고리">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: tokens.spacing.sm }}>
          {data.products.categories.map(cat => (
            <div key={cat.id} style={{
              padding: tokens.spacing.md,
              background: tokens.colors.bgPage,
              borderRadius: tokens.radius.md,
              textAlign: 'center',
              border: `1px solid ${tokens.colors.borderLight}`,
            }}>
              <div style={{ fontSize: 28, marginBottom: tokens.spacing.sm }}>{cat.icon}</div>
              <div style={{ fontSize: tokens.fontSize.xs, color: tokens.colors.textTertiary, marginBottom: 2 }}>
                {cat.id}
              </div>
              <div style={{ fontSize: tokens.fontSize.md, fontWeight: tokens.fontWeight.semibold, color: tokens.colors.textPrimary, marginBottom: 2 }}>
                {cat.name}
              </div>
              <div style={{ fontSize: tokens.fontSize.xs, color: tokens.colors.textSecondary }}>
                {cat.desc}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 제품 라인 */}
      <Card title="🏷️ 제품 라인업">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: tokens.spacing.md }}>
          {data.products.lines.map((line, i) => (
            <div key={line.code} style={{
              padding: tokens.spacing.md,
              background: tokens.colors.bgCard,
              border: `1px solid ${tokens.colors.border}`,
              borderRadius: tokens.radius.md,
              borderLeft: `4px solid ${tokens.colors.chart[i % tokens.colors.chart.length]}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: tokens.spacing.sm, marginBottom: tokens.spacing.sm }}>
                <div style={{
                  width: 32,
                  height: 32,
                  background: tokens.colors.chart[i % tokens.colors.chart.length],
                  color: 'white',
                  borderRadius: tokens.radius.sm,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: tokens.fontWeight.bold,
                  fontSize: tokens.fontSize.md,
                }}>
                  {line.code}
                </div>
                <div style={{ fontWeight: tokens.fontWeight.semibold, color: tokens.colors.textPrimary }}>
                  {line.name}
                </div>
              </div>
              <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textSecondary, lineHeight: 1.5 }}>
                {line.desc}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 핵심 제품 */}
      <Card title="⭐ 핵심 제품 5종" subtitle="시그니처 + 신제품">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: tokens.spacing.md }}>
          {data.products.key_products.map((p, i) => (
            <div key={i} style={{
              padding: tokens.spacing.md,
              background: tokens.colors.bgCard,
              border: `1px solid ${tokens.colors.border}`,
              borderRadius: tokens.radius.md,
              position: 'relative',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: tokens.spacing.sm }}>
                <div>
                  <div style={{ fontSize: tokens.fontSize.lg, fontWeight: tokens.fontWeight.bold, color: tokens.colors.textPrimary }}>
                    {p.name}
                  </div>
                  <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textTertiary, fontStyle: 'italic' }}>
                    {p.name_en}
                  </div>
                </div>
                <Badge color={p.tag === 'Best Seller' ? tokens.colors.warning : p.tag === 'New' ? tokens.colors.success : tokens.colors.info}>
                  {p.tag}
                </Badge>
              </div>
              <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textSecondary, lineHeight: 1.6, marginBottom: tokens.spacing.sm }}>
                {p.ingredients}
              </div>
              <div style={{
                paddingTop: tokens.spacing.sm,
                borderTop: `1px solid ${tokens.colors.borderLight}`,
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: tokens.fontSize.xs,
                color: tokens.colors.textTertiary,
              }}>
                <span>출시 <strong style={{ color: tokens.colors.textPrimary }}>{p.launch}</strong></span>
                <span>{p.category}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 가격대 */}
      <Card title="💵 채널별 가격대" subtitle="B2B (살롱) vs B2C (홈케어)">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={pricingChart} layout="vertical" margin={{ left: 100 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={tokens.colors.borderLight} />
            <XAxis type="number" stroke={tokens.colors.textTertiary} fontSize={12} unit="천원" />
            <YAxis type="category" dataKey="name" stroke={tokens.colors.textTertiary} fontSize={12} width={120} />
            <Tooltip formatter={(v) => `${v.toLocaleString()},000원`} />
            <Bar dataKey="max" fill={tokens.colors.primary} radius={[0, 8, 8, 0]}>
              {pricingChart.map((entry, index) => (
                <Cell key={index} fill={entry.channel === 'B2B' ? tokens.colors.primary : tokens.colors.info} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div style={{ display: 'flex', justifyContent: 'center', gap: tokens.spacing.lg, marginTop: tokens.spacing.sm }}>
          <LegendItem color={tokens.colors.primary} label="B2B (살롱)" />
          <LegendItem color={tokens.colors.info} label="B2C (홈케어)" />
        </div>
      </Card>
    </div>
  );
}

function LegendItem({ color, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: tokens.spacing.sm, fontSize: tokens.fontSize.sm, color: tokens.colors.textSecondary }}>
      <span style={{ width: 12, height: 12, background: color, borderRadius: 3 }} />
      {label}
    </div>
  );
}
