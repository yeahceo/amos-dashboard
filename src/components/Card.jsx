import { tokens } from '../tokens';

export function Card({ title, subtitle, action, children, padding = tokens.spacing.lg, style = {} }) {
  return (
    <div style={{
      background: tokens.colors.bgCard,
      borderRadius: tokens.radius.lg,
      border: `1px solid ${tokens.colors.borderLight}`,
      boxShadow: tokens.shadow.sm,
      padding,
      ...style,
    }}>
      {(title || action) && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: tokens.spacing.md,
        }}>
          <div>
            {title && (
              <div style={{
                fontSize: tokens.fontSize.lg,
                fontWeight: tokens.fontWeight.semibold,
                color: tokens.colors.textPrimary,
              }}>
                {title}
              </div>
            )}
            {subtitle && (
              <div style={{
                fontSize: tokens.fontSize.sm,
                color: tokens.colors.textTertiary,
                marginTop: 2,
              }}>
                {subtitle}
              </div>
            )}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </div>
  );
}

export function KPICard({ label, value, unit, change, changeType = 'up', icon, accent = tokens.colors.primary }) {
  return (
    <Card padding={tokens.spacing.lg} style={{ minHeight: 100 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <div style={{
            fontSize: tokens.fontSize.sm,
            color: tokens.colors.textSecondary,
            marginBottom: tokens.spacing.sm,
          }}>
            {label}
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
            <span style={{
              fontSize: tokens.fontSize.huge,
              fontWeight: tokens.fontWeight.bold,
              color: tokens.colors.textPrimary,
              lineHeight: 1,
            }}>
              {value}
            </span>
            {unit && (
              <span style={{
                fontSize: tokens.fontSize.md,
                color: tokens.colors.textSecondary,
              }}>
                {unit}
              </span>
            )}
          </div>
          {change && (
            <div style={{
              marginTop: tokens.spacing.sm,
              fontSize: tokens.fontSize.sm,
              color: changeType === 'up' ? tokens.colors.success : tokens.colors.danger,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}>
              <span>{changeType === 'up' ? '▲' : '▼'}</span>
              {change}
              <span style={{ color: tokens.colors.textTertiary, marginLeft: 2 }}>지난해 대비</span>
            </div>
          )}
        </div>
        {icon && (
          <div style={{
            width: 40,
            height: 40,
            borderRadius: tokens.radius.md,
            background: accent + '20',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 20,
          }}>
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}

export function Badge({ children, color = tokens.colors.primary, variant = 'soft' }) {
  const styles = variant === 'soft' ? {
    background: color + '20',
    color: color,
  } : {
    background: color,
    color: 'white',
  };

  return (
    <span style={{
      display: 'inline-block',
      padding: '3px 8px',
      borderRadius: tokens.radius.sm,
      fontSize: tokens.fontSize.xs,
      fontWeight: tokens.fontWeight.semibold,
      ...styles,
    }}>
      {children}
    </span>
  );
}
