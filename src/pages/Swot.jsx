import { Card } from '../components/Card';
import { tokens } from '../tokens';
import data from '../data/amos-data.json';

const quadrants = [
  { key: 'strengths', title: 'Strengths', subtitle: '강점 (S)', icon: '💪', color: tokens.colors.success, bg: '#E8F8EF' },
  { key: 'weaknesses', title: 'Weaknesses', subtitle: '약점 (W)', icon: '⚠️', color: tokens.colors.danger, bg: '#FFEBEB' },
  { key: 'opportunities', title: 'Opportunities', subtitle: '기회 (O)', icon: '🚀', color: tokens.colors.info, bg: '#E8F1FF' },
  { key: 'threats', title: 'Threats', subtitle: '위협 (T)', icon: '⚡', color: tokens.colors.warning, bg: '#FFF6E8' },
];

export default function Swot() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.lg }}>
      <Card title="🎯 SWOT 분석" subtitle="AMOS Professional 종합 진단">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: tokens.spacing.md }}>
          {quadrants.map(q => (
            <div key={q.key} style={{
              padding: tokens.spacing.lg,
              background: q.bg,
              borderRadius: tokens.radius.lg,
              border: `1px solid ${q.color}30`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: tokens.spacing.sm, marginBottom: tokens.spacing.md }}>
                <div style={{ fontSize: 28 }}>{q.icon}</div>
                <div>
                  <div style={{ fontSize: tokens.fontSize.lg, fontWeight: tokens.fontWeight.bold, color: q.color }}>
                    {q.title}
                  </div>
                  <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textSecondary }}>
                    {q.subtitle}
                  </div>
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: tokens.spacing.sm }}>
                {data.swot[q.key].map((item, i) => (
                  <li key={i} style={{
                    padding: tokens.spacing.sm,
                    background: 'white',
                    borderRadius: tokens.radius.sm,
                    fontSize: tokens.fontSize.sm,
                    color: tokens.colors.textPrimary,
                    borderLeft: `3px solid ${q.color}`,
                  }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      <Card title="🎲 SWOT 매트릭스 활용 전략">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: tokens.spacing.md }}>
          <StrategyBlock
            title="SO (강점-기회) 전략"
            color={tokens.colors.success}
            items={[
              "1위 점유율 + K-Beauty 글로벌 → 해외 살롱 채널 적극 진출",
              "R&D 강점 + 스킨피케이션 트렌드 → 프리미엄 라인 확대",
            ]}
          />
          <StrategyBlock
            title="ST (강점-위협) 전략"
            color={tokens.colors.warning}
            items={[
              "R&D 강점 활용 → AI 진단 솔루션 자체 개발",
              "B2B 네트워크 → 살롱 디지털 도구 차별화",
            ]}
          />
          <StrategyBlock
            title="WO (약점-기회) 전략"
            color={tokens.colors.info}
            items={[
              "B2C 약점 보완 → SNS 마케팅 집중 투자",
              "글로벌 인지도 부족 → K-Beauty 확산 활용",
            ]}
          />
          <StrategyBlock
            title="WT (약점-위협) 전략"
            color={tokens.colors.danger}
            items={[
              "글로벌 경쟁 대응 → 핵심 시장 (한국) 방어 강화",
              "B2C 약점 + AI 경쟁 → 디지털 전환 가속화",
            ]}
          />
        </div>
      </Card>
    </div>
  );
}

function StrategyBlock({ title, color, items }) {
  return (
    <div style={{
      padding: tokens.spacing.md,
      background: tokens.colors.bgPage,
      borderRadius: tokens.radius.md,
      borderTop: `3px solid ${color}`,
    }}>
      <div style={{ fontWeight: tokens.fontWeight.bold, color, fontSize: tokens.fontSize.md, marginBottom: tokens.spacing.sm }}>
        {title}
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {items.map((item, i) => (
          <li key={i} style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textPrimary, paddingLeft: tokens.spacing.sm, position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color }}>·</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
