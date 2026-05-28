import { Card, Badge } from '../components/Card';
import { tokens } from '../tokens';
import data from '../data/amos-data.json';

export default function Strategy() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.lg }}>
      <Card title="🚀 6대 전략 방향" subtitle="AMOS Professional 향후 성장 전략">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: tokens.spacing.md }}>
          {data.strategy.map((s, i) => (
            <div key={s.id} style={{
              padding: tokens.spacing.lg,
              background: tokens.colors.bgCard,
              border: `1px solid ${tokens.colors.border}`,
              borderRadius: tokens.radius.lg,
              borderTop: `4px solid ${tokens.colors.chart[i % tokens.colors.chart.length]}`,
            }}>
              <div style={{
                display: 'inline-block',
                padding: '2px 8px',
                background: tokens.colors.chart[i % tokens.colors.chart.length] + '20',
                color: tokens.colors.chart[i % tokens.colors.chart.length],
                borderRadius: tokens.radius.sm,
                fontSize: tokens.fontSize.xs,
                fontWeight: tokens.fontWeight.bold,
                marginBottom: tokens.spacing.sm,
              }}>
                STRATEGY {s.id}
              </div>
              <div style={{ fontSize: tokens.fontSize.lg, fontWeight: tokens.fontWeight.bold, color: tokens.colors.textPrimary, marginBottom: tokens.spacing.sm }}>
                {s.title}
              </div>
              <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textSecondary, lineHeight: 1.6 }}>
                {s.description}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="📅 최근 이슈 & 타임라인" subtitle="2024-2026">
        <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.md }}>
          {data.recent_issues.map((issue, i) => {
            const colorMap = {
              HIGH: tokens.colors.danger,
              POSITIVE: tokens.colors.success,
              BRAND: tokens.colors.purple,
              OPPORTUNITY: tokens.colors.info,
            };
            const color = colorMap[issue.level] || tokens.colors.primary;
            return (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '100px 1fr auto',
                gap: tokens.spacing.md,
                alignItems: 'center',
                padding: tokens.spacing.md,
                background: tokens.colors.bgPage,
                borderRadius: tokens.radius.md,
                borderLeft: `4px solid ${color}`,
              }}>
                <div>
                  <div style={{ fontSize: tokens.fontSize.sm, fontWeight: tokens.fontWeight.bold, color: tokens.colors.textPrimary }}>
                    {issue.date}
                  </div>
                  <Badge color={color}>{issue.category}</Badge>
                </div>
                <div>
                  <div style={{ fontWeight: tokens.fontWeight.semibold, color: tokens.colors.textPrimary, marginBottom: 4 }}>
                    {issue.title}
                  </div>
                  <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textSecondary }}>
                    {issue.description}
                  </div>
                </div>
                <Badge color={color} variant="solid">{issue.level}</Badge>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
