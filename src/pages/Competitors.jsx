import { Card, Badge } from '../components/Card';
import { tokens } from '../tokens';
import data from '../data/amos-data.json';

export default function Competitors() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.lg }}>
      <Card title="🥊 경쟁사 상세 비교" subtitle="국내외 주요 헤어 전문 브랜드">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: tokens.spacing.md }}>
          {/* AMOS - 자사 */}
          <CompetitorCard
            company={{
              name: 'AMOS Professional',
              name_en: '(자사)',
              country: '한국',
              founded: 1976,
              share: '52%',
              strengths: ['시장 1위', 'B2B 살롱 강세', 'R&D 능력', '아모레퍼시픽 자회사'],
              weaknesses: ['B2C 약점', '글로벌 인지도 부족'],
            }}
            isOwn
          />
          {data.competitors.map((c, i) => (
            <CompetitorCard key={i} company={c} />
          ))}
        </div>
      </Card>

      <Card title="📊 4-Way 포지셔닝 비교">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: `2px solid ${tokens.colors.border}` }}>
              <th style={cellHead}>비교 항목</th>
              <th style={{ ...cellHead, background: tokens.colors.primaryLight }}>AMOS</th>
              <th style={cellHead}>밀본 (일본)</th>
              <th style={cellHead}>케라스타제 (프랑스)</th>
              <th style={cellHead}>로레알 (프랑스)</th>
            </tr>
          </thead>
          <tbody>
            <CompareRow label="설립" values={['1976', '1960', '1880', '1909']} />
            <CompareRow label="국내 점유율" values={['~52%', '10~15%', '~10%', '~']} highlight={0} />
            <CompareRow label="주력 채널" values={['B2B + B2C', 'B2B 강세', 'B2C 강세', 'B2B + 교육']} />
            <CompareRow label="글로벌" values={['확장 중', '120+ 국가', '글로벌', '글로벌 1위']} />
            <CompareRow label="제품 수" values={['100+', '600+', '300+', '대형 라인업']} />
            <CompareRow label="혁신 포인트" values={['RIA + K-Hair', 'B2B 교육', 'AI 진단', '교육 시스템']} />
          </tbody>
        </table>
      </Card>
    </div>
  );
}

function CompetitorCard({ company, isOwn }) {
  return (
    <div style={{
      padding: tokens.spacing.md,
      background: isOwn ? tokens.colors.primaryLight : tokens.colors.bgCard,
      border: `1px solid ${isOwn ? tokens.colors.primary : tokens.colors.border}`,
      borderRadius: tokens.radius.md,
      borderLeft: `4px solid ${isOwn ? tokens.colors.primary : tokens.colors.info}`,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: tokens.spacing.sm }}>
        <div>
          <div style={{ fontWeight: tokens.fontWeight.bold, fontSize: tokens.fontSize.lg, color: tokens.colors.textPrimary }}>
            {company.name}
          </div>
          <div style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textTertiary }}>
            {company.name_en} · {company.country} · {company.founded}
          </div>
        </div>
        <Badge color={isOwn ? tokens.colors.primary : tokens.colors.info}>
          {company.share}
        </Badge>
      </div>
      <div style={{ marginTop: tokens.spacing.sm }}>
        <div style={{ fontSize: tokens.fontSize.xs, color: tokens.colors.success, fontWeight: tokens.fontWeight.semibold, marginBottom: 4 }}>
          ✓ STRENGTHS
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {company.strengths.map((s, i) => (
            <li key={i} style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textSecondary, marginBottom: 2 }}>
              · {s}
            </li>
          ))}
        </ul>
      </div>
      {company.weaknesses && (
        <div style={{ marginTop: tokens.spacing.sm }}>
          <div style={{ fontSize: tokens.fontSize.xs, color: tokens.colors.danger, fontWeight: tokens.fontWeight.semibold, marginBottom: 4 }}>
            ✗ WEAKNESSES
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {company.weaknesses.map((w, i) => (
              <li key={i} style={{ fontSize: tokens.fontSize.sm, color: tokens.colors.textSecondary, marginBottom: 2 }}>
                · {w}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function CompareRow({ label, values, highlight }) {
  return (
    <tr style={{ borderBottom: `1px solid ${tokens.colors.borderLight}` }}>
      <td style={{ ...cellBody, fontWeight: tokens.fontWeight.semibold, color: tokens.colors.textSecondary }}>
        {label}
      </td>
      {values.map((v, i) => (
        <td key={i} style={{
          ...cellBody,
          background: i === highlight ? tokens.colors.primaryLight : 'transparent',
          fontWeight: i === highlight ? tokens.fontWeight.bold : tokens.fontWeight.regular,
          color: i === highlight ? tokens.colors.primary : tokens.colors.textPrimary,
        }}>
          {v}
        </td>
      ))}
    </tr>
  );
}

const cellHead = {
  padding: `${tokens.spacing.md} ${tokens.spacing.sm}`,
  textAlign: 'left',
  fontSize: tokens.fontSize.sm,
  color: tokens.colors.textSecondary,
  fontWeight: tokens.fontWeight.semibold,
};

const cellBody = {
  padding: `${tokens.spacing.md} ${tokens.spacing.sm}`,
  fontSize: tokens.fontSize.md,
  color: tokens.colors.textPrimary,
};
