import { Card, KPICard, Badge } from '../components/Card';
import { tokens } from '../tokens';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, AreaChart, Area } from 'recharts';
import data from '../data/amos-data.json';

export default function Overview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.lg }}>
      {/* KPI Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: tokens.spacing.md }}>
        <KPICard label="2024 매출" value="792" unit="억원" change="10%" icon="💰" accent={tokens.colors.primary} />
        <KPICard label="시장점유율" value="52" unit="%" change="1위 유지" icon="📊" accent={tokens.colors.info} />
        <KPICard label="임직원 수" value="94" unit="명" icon="👥" accent={tokens.colors.purple} />
        <KPICard label="브랜드 연차" value="49" unit="년" icon="🏢" accent={tokens.colors.warning} />
      </div>

      {/* Company Info & History */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: tokens.spacing.md }}>
        <Card title="🏢 회사 개요" subtitle="AMOS Professional Co., Ltd.">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: tokens.spacing.md, fontSize: tokens.fontSize.md }}>
            <InfoRow label="회사명" value={data.company.name_kr} />
            <InfoRow label="설립일" value={data.company.founded} />
            <InfoRow label="모회사" value={data.company.parent} />
            <InfoRow label="사업장" value={data.company.address} />
            <InfoRow label="사업 형태" value={data.company.business_type} />
            <InfoRow label="임직원" value={`${data.company.employees}명 (${data.company.employees_year}년)`} />
          </div>
          <div style={{
            marginTop: tokens.spacing.lg,
            padding: tokens.spacing.md,
            background: tokens.colors.primaryLight,
            borderRadius: tokens.radius.md,
            borderLeft: `3px solid ${tokens.colors.primary}`,
          }}>
            <div style={{ fontWeight: tokens.fontWeight.semibold, color: tokens.colors.primary, marginBottom: 4 }}>
              "{data.company.slogan}"
            </div>
            <div style={{ display: 'flex', gap: tokens.spacing.sm, flexWrap: 'wrap', marginTop: tokens.spacing.sm }}>
              {data.company.values.map(v => (
                <Badge key={v}>{v}</Badge>
              ))}
            </div>
          </div>
        </Card>

        <Card title="🎯 브랜드 정체성">
          <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.md }}>
            <ValueBlock label="MISSION" value={data.brand_identity.mission} color={tokens.colors.primary} />
            <ValueBlock label="VISION" value={data.brand_identity.vision} color={tokens.colors.info} />
            <ValueBlock label="CORE VALUE" value={data.brand_identity.core_value} color={tokens.colors.purple} />
          </div>
          <div style={{ marginTop: tokens.spacing.md, padding: tokens.spacing.md, background: tokens.colors.bgPage, borderRadius: tokens.radius.md }}>
            <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textTertiary, marginBottom: tokens.spacing.sm }}>
              브랜드명 의미
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: tokens.spacing.sm, textAlign: 'center' }}>
              {Object.entries(data.brand_identity.name_meaning).map(([letter, meaning]) => (
                <div key={letter}>
                  <div style={{ fontSize: tokens.fontSize.xxl, fontWeight: tokens.fontWeight.bold, color: tokens.colors.primary }}>
                    {letter}
                  </div>
                  <div style={{ fontSize: tokens.fontSize.xs, color: tokens.colors.textSecondary }}>
                    {meaning}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* History Timeline */}
      <Card title="📅 브랜드 히스토리" subtitle="1976년부터 현재까지">
        <div style={{ overflowX: 'auto' }}>
          <div style={{ display: 'flex', gap: tokens.spacing.md, paddingBottom: tokens.spacing.sm, minWidth: 'max-content' }}>
            {data.history.map((h, i) => (
              <div key={i} style={{
                minWidth: 180,
                padding: tokens.spacing.md,
                background: i === data.history.length - 1 ? tokens.colors.primaryLight : tokens.colors.bgPage,
                borderRadius: tokens.radius.md,
                borderTop: `3px solid ${i === data.history.length - 1 ? tokens.colors.primary : tokens.colors.border}`,
              }}>
                <div style={{
                  fontSize: tokens.fontSize.lg,
                  fontWeight: tokens.fontWeight.bold,
                  color: i === data.history.length - 1 ? tokens.colors.primary : tokens.colors.textPrimary,
                  marginBottom: 4,
                }}>
                  {h.year}
                </div>
                <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textSecondary, lineHeight: 1.5 }}>
                  {h.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div>
      <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textTertiary, marginBottom: 2 }}>
        {label}
      </div>
      <div style={{ fontSize: tokens.fontSize.md, color: tokens.colors.textPrimary, fontWeight: tokens.fontWeight.medium }}>
        {value}
      </div>
    </div>
  );
}

function ValueBlock({ label, value, color }) {
  return (
    <div>
      <div style={{
        fontSize: tokens.fontSize.xs,
        fontWeight: tokens.fontWeight.bold,
        color,
        letterSpacing: '0.5px',
        marginBottom: 4,
      }}>
        {label}
      </div>
      <div style={{ fontSize: tokens.fontSize.md, color: tokens.colors.textPrimary, lineHeight: 1.5 }}>
        {value}
      </div>
    </div>
  );
}
