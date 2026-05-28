import { Card, KPICard, Badge } from '../components/Card';
import { tokens } from '../tokens';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import data from '../data/amos-data.json';

export default function Market() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.lg }}>
      {/* 시장 규모 KPI */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: tokens.spacing.md }}>
        <KPICard label="전체 살롱" value="5,500" unit="개" icon="🏪" />
        <KPICard label="AMOS 점유율" value="52" unit="%" change="1위" icon="🥇" accent={tokens.colors.warning} />
        <KPICard label="CAGR (2025-2030)" value="6.9" unit="%" icon="📈" accent={tokens.colors.info} />
        <KPICard label="K-Beauty 수출 성장" value="39.2" unit="%" change="2025 3Q" icon="🌏" accent={tokens.colors.purple} />
      </div>

      {/* 시장 규모 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: tokens.spacing.md }}>
        <Card title="📊 국내 살롱 시장 (2024)">
          <div style={{ padding: tokens.spacing.md, background: tokens.colors.primaryLight, borderRadius: tokens.radius.md, marginBottom: tokens.spacing.md }}>
            <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textSecondary }}>2024 살롱 시장 규모</div>
            <div style={{ fontSize: tokens.fontSize.giant, fontWeight: tokens.fontWeight.bold, color: tokens.colors.primary }}>
              {data.market.salon_market_2024.toLocaleString()}<span style={{ fontSize: tokens.fontSize.lg }}>억원</span>
            </div>
            <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textSecondary, marginTop: 4 }}>
              AMOS 매출 792억 / 시장점유율 ~52%
            </div>
          </div>
          <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textSecondary, lineHeight: 1.6 }}>
            전국 약 5,500개 살롱 중 AMOS 제품 사용 비율 52%. B2B 살롱 전용 헤어 케어 시장 1위.
          </div>
        </Card>

        <Card title="🌏 K-Beauty 글로벌 (2024-2025)">
          <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.md }}>
            <StatRow label="K-Beauty 수출 (2025 3Q)" value={`${data.market.kbeauty_export_2025q3.toLocaleString()}억원`} growth="+39.2%" />
            <StatRow label="KOTRA 수출 (2024)" value={`${data.market.kotra_export_2024.toLocaleString()}억원`} />
            <StatRow label="글로벌 헤어케어 시장 (2032 전망)" value={`${data.market.global_haircare_2032.toLocaleString()}억$`} highlight />
          </div>
        </Card>
      </div>

      {/* 시장 순위 */}
      <Card title="🏆 국내 살롱 시장 점유율 순위">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data.market.competition_rank} layout="vertical" margin={{ left: 100 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={tokens.colors.borderLight} />
            <XAxis type="number" unit="%" stroke={tokens.colors.textTertiary} fontSize={12} />
            <YAxis type="category" dataKey="brand" stroke={tokens.colors.textTertiary} fontSize={12} width={120} />
            <Tooltip formatter={(v) => `${v}%`} />
            <Bar dataKey="share" radius={[0, 8, 8, 0]}>
              {data.market.competition_rank.map((entry, i) => (
                <Cell key={i} fill={i === 0 ? tokens.colors.primary : tokens.colors.chart[i + 1]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* 스킨피케이션 트렌드 */}
      <Card title="✨ Skinification 트렌드" subtitle="헤어케어를 스킨케어처럼">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: tokens.spacing.md }}>
          <div style={{ padding: tokens.spacing.md, background: tokens.colors.bgPage, borderRadius: tokens.radius.md }}>
            <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textTertiary, marginBottom: tokens.spacing.sm }}>
              📈 시장 성장
            </div>
            <div style={{ fontSize: tokens.fontSize.huge, fontWeight: tokens.fontWeight.bold, color: tokens.colors.primary }}>
              +22.5%
            </div>
            <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textSecondary, marginTop: 4 }}>
              2017~2022 누적 (K-SCAN 추산)
            </div>
          </div>
          <div style={{ padding: tokens.spacing.md, background: tokens.colors.primaryLight, borderRadius: tokens.radius.md }}>
            <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textTertiary, marginBottom: tokens.spacing.sm }}>
              💡 핵심 키워드
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              <Badge>글래스 헤어</Badge>
              <Badge>리퀴드 헤어</Badge>
              <Badge>두피 케어</Badge>
              <Badge>안티 에이징</Badge>
              <Badge>R&D 강화</Badge>
            </div>
          </div>
        </div>
        <div style={{ marginTop: tokens.spacing.md, padding: tokens.spacing.md, background: 'white', border: `1px solid ${tokens.colors.borderLight}`, borderRadius: tokens.radius.md, fontSize: tokens.fontSize.sm, color: tokens.colors.textSecondary, lineHeight: 1.6 }}>
          <strong style={{ color: tokens.colors.textPrimary }}>핵심:</strong> AMOS는 스킨피케이션 트렌드를 선도하며 두피케어 + 트리트먼트 통합 솔루션 제공. K-SCAN 활용 진단 서비스 도입 검토 중.
        </div>
      </Card>
    </div>
  );
}

function StatRow({ label, value, growth, highlight }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: tokens.spacing.md,
      background: highlight ? tokens.colors.primaryLight : tokens.colors.bgPage,
      borderRadius: tokens.radius.md,
    }}>
      <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textSecondary }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: tokens.spacing.sm }}>
        <span style={{ fontSize: tokens.fontSize.lg, fontWeight: tokens.fontWeight.bold, color: highlight ? tokens.colors.primary : tokens.colors.textPrimary }}>
          {value}
        </span>
        {growth && <Badge color={tokens.colors.success}>{growth}</Badge>}
      </div>
    </div>
  );
}
