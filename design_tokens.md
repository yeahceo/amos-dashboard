# AMOS Professional Strategy Dashboard Design Tokens

## 1. Design Direction

AMOS Professional 전략 분석 대시보드는 PDF Factbook의 1-42쪽 정보만 사용한다. 면접 전략, 원본 슬라이드 갤러리, PDF에 없는 달력형 데이터는 제외한다. 디자인은 검정 배경에 민트 그린 포인트를 얹은 다크 데이터 대시보드로 구성한다.

핵심 방향:

- 검정 배경 위에 어두운 카드와 얇은 라인으로 정보 밀도를 만든다.
- 민트 그린은 핵심 수치, 활성 상태, 성장 기회, 클릭 가능한 상태에만 사용한다.
- PDF 이미지는 마지막 첨부 섹션이 아니라 각 분석 섹션 안의 근거 이미지로 사용한다.
- 인터랙션은 PDF 데이터의 비교, 전환, 확대, 필터링을 돕는 데만 사용한다.

## 2. Color Tokens

| Token | Value | Usage |
| --- | --- | --- |
| `--bg` | `#070a0f` | 전체 배경 |
| `--bg-2` | `#0d1118` | 보조 배경 |
| `--surface` | `#121821` | 기본 카드 |
| `--surface-2` | `#171f2b` | 카드 그라데이션 상단 |
| `--surface-3` | `#1f2937` | 강조 카드 |
| `--line` | `#293241` | 카드, 표, 입력창 경계 |
| `--line-soft` | `rgba(255,255,255,0.08)` | 희미한 분리선 |
| `--ink` | `#f4f7fb` | 주요 텍스트 |
| `--muted` | `#a7b0be` | 보조 텍스트 |
| `--faint` | `#738093` | 캡션, 라벨 |
| `--primary` | `#32d583` | 핵심 수치, 활성 버튼, 성장 |
| `--primary-2` | `#14b86a` | 민트 그라데이션 보조 |
| `--primary-soft` | `rgba(50,213,131,0.14)` | 활성 배지, 카드 배경 |
| `--blue` | `#72a1ff` | 시장/경쟁 차트 보조색 |
| `--blue-soft` | `rgba(114,161,255,0.16)` | B2C, 보조 배지 |
| `--violet` | `#b89cff` | 글로벌/콘텐츠 보조색 |
| `--amber` | `#f7c76b` | 주의, 비용, 관찰 |
| `--red` | `#ff6b7a` | 리스크, 위협 |
| `--red-soft` | `rgba(255,107,122,0.16)` | 리스크 배지 배경 |

## 3. Typography Tokens

| Token | Value | Usage |
| --- | --- | --- |
| `--font` | `"Segoe UI", "Noto Sans KR", Arial, sans-serif` | 기본 UI 폰트 |
| Hero Title | `clamp(32px, 4vw, 54px)` | 첫 화면 메시지 |
| Page Title | `26px / 1.2` | 상단 제목 |
| Card Title | `18-20px` | 카드 제목 |
| Body | `15px / 1.5` | 본문 |
| Caption | `12-13px` | 표, 라벨, 차트 축 |
| Weight Bold | `800-900` | KPI, 활성 메뉴, 배지 |

## 4. Layout Tokens

| Token | Value | Usage |
| --- | --- | --- |
| Shell Width | `min(1480px, calc(100% - 28px))` | 전체 앱 폭 |
| Sidebar | `240px` | 좌측 고정 메뉴 |
| Topbar | `78px min-height` | 검색 포함 상단 바 |
| Main Padding | `26px` | 콘텐츠 내부 여백 |
| Card Radius | `10px` | 기본 카드 |
| Large Radius | `16px` | 전체 셸, 모달 |
| Section Gap | `58px` | 섹션 간격 |

## 5. Component Tokens

| Component | Rule |
| --- | --- |
| Sidebar | 활성 메뉴는 민트 배경, 검정 텍스트. hover 시 우측으로 3px 이동한다. |
| Search | 둥근 pill 형태, 어두운 카드 배경, 보조 라벨 `검색` 포함. |
| KPI Card | 큰 수치, 짧은 맥락, hover 시 위로 4px 이동한다. |
| Interactive Chart | 버튼으로 매출 성장, 시장 구도, 글로벌 기회를 전환한다. |
| Product Tabs | 대표 제품 탭 클릭 시 제품명, 설명, 주요 사실, 근거 이미지가 바뀐다. |
| Accordion | Key Insights는 클릭 시 상세 설명이 열리고 닫힌다. |
| Issue Filter | 전체, 리스크, 성장, 브랜드 기준으로 PDF 이슈 카드를 필터링한다. |
| Image Modal | 섹션 안 PDF 이미지를 클릭하면 확대 모달로 확인한다. |
| Table | 경쟁사 비교는 PDF 수치와 텍스트만 사용한다. |

## 6. Data Visualization Rules

| View | Data Source | Visualization |
| --- | --- | --- |
| 매출 성장 | 2013 490억, 2019 600억, 2022 665억, 2023 720억, 2024 792억 | 세로 막대 |
| 시장 구도 | 아모스 52%, 밀본 10-15%, 로레알 약 10% | 세로 막대 |
| 글로벌 기회 | K-헤어케어 수출 +39.2%, 글로벌 CAGR 6.9%, 홍콩 +85.9% | 성장률 세로 막대 |
| 제품 분석 | 녹차실감, 리뉴 카멜리아, 잇츠에이블, 헤어핏 컬업젤리 | 탭 전환 |
| 소비자 구조 | B2B 70%, B2C 30% 추정 | 페르소나 카드 |
| 최근 이슈 | 웰라 재진입, 매출 최고, 살롱커넥션, K-헤어케어 수출, 리뉴 카멜리아 | 필터 카드 |
| 캠페인 포트폴리오 | 살롱커넥션, 컬러스테이지, 시즌 룩북, 글로벌 헤어쇼 | 연도/역할 리스트 |

## 7. Removed Elements

- PDF에 없는 캘린더형 시각화 제거
- 마지막 원본 슬라이드 이미지 갤러리 제거
- 대시보드 상단 Design Tokens 버튼 제거
- 면접 전략 및 예상질문 제거
