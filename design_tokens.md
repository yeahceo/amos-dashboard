# Dashboard Design System Tokens
> 기준 레퍼런스: Smart Store 스타일 Light Dashboard
> 버전: 2.0 | 2026-05 (다크 테마 → 라이트 테마로 전면 교체)

---

## 1. Color

### Primary (회사별 교체 포인트)
| Token | HEX | 용도 |
|---|---|---|
| `--color-primary` | `#05C46B` | CTA 버튼, 활성 네비, 강조 숫자 |
| `--color-primary-dark` | `#00A958` | 호버, 포커스 |
| `--color-primary-soft` | `#E6F9F1` | 배지 배경, 강조 영역 |
| `--color-primary-line` | `rgba(5,196,107,0.2)` | 테두리 강조 |

### Semantic
| Token | HEX | 용도 |
|---|---|---|
| `--color-blue` | `#5470FF` | 차트 2번색, 보조 데이터 |
| `--color-blue-soft` | `#EEF0FF` | 배지 배경 |
| `--color-purple` | `#9B59F5` | 차트 3번색 |
| `--color-purple-soft` | `#F0EBFF` | 배지 배경 |
| `--color-amber` | `#F59E0B` | 차트 4번색, 경고 |
| `--color-amber-soft` | `#FEF3C7` | 배지 배경 |
| `--color-red` | `#EF4444` | 위험, 감소 |
| `--color-red-soft` | `#FEE2E2` | 배지 배경 |

### Neutral
| Token | HEX | 용도 |
|---|---|---|
| `--bg` | `#F2F4F7` | 페이지 배경 |
| `--surface` | `#FFFFFF` | 카드, 모달 |
| `--surface-2` | `#F9FAFB` | 중첩 카드 내부 |
| `--border` | `#E4E7EF` | 구분선, 카드 테두리 |

### Text
| Token | HEX | 용도 |
|---|---|---|
| `--text-primary` | `#1A2035` | 제목, 본문 |
| `--text-secondary` | `#4B5668` | 설명, 부제목 |
| `--text-muted` | `#8D96A8` | 레이블, 보조 |
| `--text-faint` | `#BCC3CE` | 비활성, placeholder |

---

## 2. Typography

| Token | Value | 용도 |
|---|---|---|
| `--font` | `"Pretendard", "Noto Sans KR", "Segoe UI", sans-serif` | 전체 |
| xs | `11px` | 캡션, 배지 |
| sm | `12px` | 보조 레이블 |
| base | `13px` | 본문 |
| md | `14px` | UI 레이블 |
| lg | `16px` | 서브 타이틀 |
| xl | `20px` | 카드 타이틀 |
| 2xl | `28px` | KPI |
| 3xl | `38px` | Hero 숫자 |
| bold | `700` | 타이틀 |
| black | `800` | KPI, 핵심 숫자 |

---

## 3. Spacing (4px grid)

`4 / 8 / 12 / 16 / 20 / 24 / 32px`

---

## 4. Border Radius

| Token | Value | 용도 |
|---|---|---|
| `--radius-sm` | `6px` | 배지, 인풋 |
| `--radius` | `8px` | 기본 카드 |
| `--radius-lg` | `12px` | 큰 카드 |
| `--radius-xl` | `16px` | 모달 |
| `--radius-full` | `9999px` | 버튼, 태그 |

---

## 5. Shadow

| Token | Value | 용도 |
|---|---|---|
| `--shadow` | `0 2px 8px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)` | 기본 카드 |
| `--shadow-md` | `0 4px 16px rgba(0,0,0,0.08)` | 호버 카드 |
| `--shadow-lg` | `0 8px 32px rgba(0,0,0,0.12)` | 다이얼로그 |

---

## 6. Chart Palette (Chart.js)

| 순번 | HEX | 용도 |
|---|---|---|
| 1 | `#05C46B` | Primary 데이터 |
| 2 | `#5470FF` | Secondary |
| 3 | `#9B59F5` | 3rd |
| 4 | `#F59E0B` | 4th |
| 5 | `#EF4444` | 위험 |
| neutral | `#E4E7EF` | 기타 |

Chart.js 전역: `color: #8D96A8`, `borderColor: #E4E7EF`

---

## 7. Component Patterns

**KPI Card:** surface + shadow + 상단 3px 컬러 바 (순서별 primary→blue→purple→amber)  
**Chart Card:** height 300px, position relative, maintainAspectRatio false  
**Badge:** `4px 10px`, radius-full, 11px bold, soft-bg + base-text  
**Table row hover:** `--color-primary-soft` 배경  
**Sidebar active:** `--color-primary` 배경 + white text

---

## 8. 새 회사 분석 시 교체 포인트

1. `--color-primary` / `--color-primary-dark` → 회사 브랜드 컬러
2. `--color-primary-soft` → 브랜드 컬러 ~10% 투명도
3. `.brand-mark` 이니셜
4. HTML 콘텐츠 (회사명, KPI, 차트 데이터, 분석 내용)

> neutral / shadow / radius / typography는 중립이므로 재사용.
