import { Card } from '../components/Card';
import { tokens } from '../tokens';
import data from '../data/amos-data.json';

export default function Insights() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.lg }}>
      <Card title="💡 Key Insights" subtitle="브랜드 분석 핵심 결론">
        <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.md }}>
          {data.key_insights.map((insight, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: tokens.spacing.md,
              padding: tokens.spacing.lg,
              background: `linear-gradient(135deg, ${tokens.colors.chart[i % tokens.colors.chart.length]}15, white)`,
              borderRadius: tokens.radius.lg,
              border: `1px solid ${tokens.colors.chart[i % tokens.colors.chart.length]}30`,
            }}>
              <div style={{
                minWidth: 48,
                height: 48,
                background: tokens.colors.chart[i % tokens.colors.chart.length],
                color: 'white',
                borderRadius: tokens.radius.md,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: tokens.fontSize.xl,
                fontWeight: tokens.fontWeight.bold,
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: tokens.fontSize.md, color: tokens.colors.textPrimary, lineHeight: 1.6, fontWeight: tokens.fontWeight.medium }}>
                  {insight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="🎯 결론 & 시사점">
        <div style={{
          padding: tokens.spacing.lg,
          background: `linear-gradient(135deg, ${tokens.colors.primary}, ${tokens.colors.primaryDark})`,
          borderRadius: tokens.radius.lg,
          color: 'white',
        }}>
          <div style={{ fontSize: tokens.fontSize.lg, fontWeight: tokens.fontWeight.bold, marginBottom: tokens.spacing.md }}>
            "Born to be Professional - 다음 50년을 준비하는 K-Hair 글로벌 리더"
          </div>
          <div style={{ fontSize: tokens.fontSize.md, lineHeight: 1.8, opacity: 0.95 }}>
            AMOS Professional은 국내 살롱 시장 점유율 52%로 1위를 굳건히 지키며,
            2024년 매출 792억 달성으로 역대 최고 실적을 기록했습니다.
            <br /><br />
            K-Beauty 글로벌 트렌드 (+39.2%)와 스킨피케이션 흐름을 활용한 글로벌 진출,
            B2C 디지털 채널 강화, AI 기반 살롱 솔루션 등이 다음 도약의 핵심 과제입니다.
          </div>
        </div>
      </Card>
    </div>
  );
}
