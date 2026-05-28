import { tokens } from '../tokens';

const menus = [
  { id: 'overview', label: '브랜드 개요', icon: '🏢', section: 'Dashboard' },
  { id: 'financial', label: '재무 성과', icon: '💰', section: 'Dashboard' },
  { id: 'products', label: '제품 포트폴리오', icon: '🧴', section: '상품관리' },
  { id: 'marketing', label: '마케팅 & 모델', icon: '📢', section: '상품관리' },
  { id: 'consumers', label: '고객 분석', icon: '👥', section: '판매관리' },
  { id: 'market', label: '시장 & 트렌드', icon: '📈', section: '판매관리' },
  { id: 'competitors', label: '경쟁사 분석', icon: '🥊', section: '통계관리' },
  { id: 'swot', label: 'SWOT 분석', icon: '🎯', section: '통계관리' },
  { id: 'strategy', label: '전략 방향', icon: '🚀', section: '통계관리' },
  { id: 'insights', label: 'Key Insights', icon: '💡', section: '통계관리' },
];

export default function Sidebar({ active, onSelect }) {
  const groups = menus.reduce((acc, m) => {
    if (!acc[m.section]) acc[m.section] = [];
    acc[m.section].push(m);
    return acc;
  }, {});

  return (
    <aside style={{
      width: '220px',
      background: tokens.colors.bgSidebar,
      borderRight: `1px solid ${tokens.colors.border}`,
      padding: tokens.spacing.lg,
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflowY: 'auto',
      flexShrink: 0,
    }}>
      {/* 로고 */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacing.sm,
        marginBottom: tokens.spacing.xl,
        padding: `${tokens.spacing.sm} 0`,
      }}>
        <div style={{
          width: 32,
          height: 32,
          background: tokens.colors.primary,
          borderRadius: tokens.radius.md,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: tokens.fontWeight.bold,
          fontSize: tokens.fontSize.md,
        }}>A</div>
        <div>
          <div style={{ fontWeight: tokens.fontWeight.bold, fontSize: tokens.fontSize.md, color: tokens.colors.textPrimary }}>
            AMOS PRO
          </div>
          <div style={{ fontSize: tokens.fontSize.xs, color: tokens.colors.textTertiary }}>
            Factbook 2025
          </div>
        </div>
      </div>

      {/* 메뉴 그룹 */}
      {Object.entries(groups).map(([section, items]) => (
        <div key={section} style={{ marginBottom: tokens.spacing.lg }}>
          <div style={{
            fontSize: tokens.fontSize.xs,
            color: tokens.colors.textTertiary,
            fontWeight: tokens.fontWeight.semibold,
            marginBottom: tokens.spacing.sm,
            letterSpacing: '0.5px',
          }}>
            {section}
          </div>
          {items.map(m => (
            <button
              key={m.id}
              onClick={() => onSelect(m.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: tokens.spacing.sm,
                padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
                background: active === m.id ? tokens.colors.primary : 'transparent',
                color: active === m.id ? 'white' : tokens.colors.textPrimary,
                border: 'none',
                borderRadius: tokens.radius.md,
                marginBottom: '2px',
                cursor: 'pointer',
                fontSize: tokens.fontSize.md,
                fontWeight: active === m.id ? tokens.fontWeight.semibold : tokens.fontWeight.regular,
                textAlign: 'left',
                transition: 'background 0.15s',
              }}
              onMouseOver={(e) => { if (active !== m.id) e.currentTarget.style.background = tokens.colors.bgHover; }}
              onMouseOut={(e) => { if (active !== m.id) e.currentTarget.style.background = 'transparent'; }}
            >
              <span style={{ fontSize: tokens.fontSize.md }}>{m.icon}</span>
              {m.label}
            </button>
          ))}
        </div>
      ))}
    </aside>
  );
}
