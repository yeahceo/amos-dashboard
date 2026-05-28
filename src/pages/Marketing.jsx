import { Card, Badge } from '../components/Card';
import { tokens } from '../tokens';
import data from '../data/amos-data.json';

export default function Marketing() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.lg }}>
      {/* 모델 히스토리 */}
      <Card title="🎭 브랜드 모델 히스토리" subtitle="2010-2023">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: tokens.spacing.sm }}>
          {data.marketing.models_history.map(m => (
            <div key={m.year} style={{
              padding: tokens.spacing.md,
              background: tokens.colors.bgPage,
              borderRadius: tokens.radius.md,
              textAlign: 'center',
              borderTop: `3px solid ${tokens.colors.primary}`,
            }}>
              <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textTertiary, marginBottom: 4 }}>
                {m.year}
              </div>
              <div style={{ fontSize: tokens.fontSize.lg, fontWeight: tokens.fontWeight.bold, color: tokens.colors.textPrimary, marginBottom: 4 }}>
                {m.model}
              </div>
              <Badge color={tokens.colors.info}>{m.type}</Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* 캠페인 */}
      <Card title="📢 주요 캠페인">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: tokens.spacing.md }}>
          {data.marketing.campaigns.map((c, i) => (
            <div key={i} style={{
              padding: tokens.spacing.md,
              background: tokens.colors.bgCard,
              border: `1px solid ${tokens.colors.border}`,
              borderRadius: tokens.radius.md,
              borderLeft: `4px solid ${tokens.colors.chart[i % tokens.colors.chart.length]}`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: tokens.spacing.sm }}>
                <div style={{ fontWeight: tokens.fontWeight.bold, color: tokens.colors.textPrimary, fontSize: tokens.fontSize.lg }}>
                  {c.name}
                </div>
                <Badge color={tokens.colors.chart[i % tokens.colors.chart.length]}>{c.type}</Badge>
              </div>
              <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textTertiary, marginBottom: tokens.spacing.sm }}>
                📅 {c.period}
              </div>
              <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textSecondary, lineHeight: 1.6 }}>
                {c.description}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 디지털 채널 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: tokens.spacing.md }}>
        <Card title="📱 디지털 채널 (B2C)" style={{ background: `linear-gradient(135deg, ${tokens.colors.primaryLight}, white)` }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.md }}>
            <div>
              <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textTertiary }}>인스타그램</div>
              <div style={{ fontSize: tokens.fontSize.xl, fontWeight: tokens.fontWeight.bold, color: tokens.colors.primary }}>
                {data.marketing.digital.instagram}
              </div>
              <div style={{ fontSize: tokens.fontSize.huge, fontWeight: tokens.fontWeight.bold, color: tokens.colors.textPrimary }}>
                {data.marketing.digital.followers.toLocaleString()}
                <span style={{ fontSize: tokens.fontSize.md, color: tokens.colors.textSecondary, marginLeft: 4 }}>팔로워</span>
              </div>
            </div>
            <div style={{ padding: tokens.spacing.md, background: 'white', borderRadius: tokens.radius.md }}>
              <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textTertiary, marginBottom: 4 }}>
                주요 콘텐츠
              </div>
              <div style={{ fontSize: tokens.fontSize.md, color: tokens.colors.textPrimary }}>
                {data.marketing.digital.content}
              </div>
            </div>
          </div>
        </Card>

        <Card title="📰 B2B 매거진">
          <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.md }}>
            <div>
              <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textTertiary }}>매거진명</div>
              <div style={{ fontSize: tokens.fontSize.xl, fontWeight: tokens.fontWeight.bold, color: tokens.colors.textPrimary }}>
                {data.marketing.digital.magazine_b2b}
              </div>
            </div>
            <div style={{ padding: tokens.spacing.md, background: tokens.colors.bgPage, borderRadius: tokens.radius.md, fontSize: tokens.fontSize.sm, color: tokens.colors.textSecondary, lineHeight: 1.6 }}>
              {data.marketing.digital.magazine_desc}. 살롱 디자이너 대상 정기 발간.
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
