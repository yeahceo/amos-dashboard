Chart.defaults.color = '#a7b0be';
Chart.defaults.borderColor = '#293241';
Chart.defaults.font.family = "'Segoe UI', 'Noto Sans KR', Arial, sans-serif";
Chart.defaults.font.size = 12;

// ── chart factories ───────────────────────────────────────────────────────
function makeRevenueConfig() {
  return {
    type: 'line',
    data: {
      labels: ['2013', '2019', '2022', '2023', '2024'],
      datasets: [{
        label: '매출 (억원)',
        data: [490, 600, 665, 720, 792],
        borderColor: '#32d583',
        backgroundColor(ctx) {
          const g = ctx.chart.ctx.createLinearGradient(0, 0, 0, 280);
          g.addColorStop(0, 'rgba(50,213,131,0.28)');
          g.addColorStop(1, 'rgba(50,213,131,0.01)');
          return g;
        },
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#32d583',
        pointBorderColor: '#070a0f',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 9,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 900, easing: 'easeOutQuart' },
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (ctx) => ` ${ctx.parsed.y}억원` } },
      },
      scales: {
        y: {
          min: 400,
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { callback: (v) => `${v}억` },
        },
        x: { grid: { display: false } },
      },
    },
  };
}

function makeMarketConfig() {
  return {
    type: 'doughnut',
    data: {
      labels: ['AMOS', 'Milbon', "L'Oreal Pro", '기타'],
      datasets: [{
        data: [52, 12, 10, 26],
        backgroundColor: ['#32d583', '#72a1ff', '#b89cff', '#1f2937'],
        borderColor: '#0d1118',
        borderWidth: 2,
        hoverOffset: 10,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 900, easing: 'easeOutQuart' },
      plugins: {
        legend: {
          position: 'right',
          labels: { padding: 18, usePointStyle: true, pointStyleWidth: 10 },
        },
        tooltip: { callbacks: { label: (ctx) => ` ${ctx.label}: ${ctx.parsed}%` } },
      },
      cutout: '66%',
    },
  };
}

function makeGlobalConfig() {
  return {
    type: 'bar',
    data: {
      labels: ['K-헤어 수출 YoY', '홍콩 시장 성장', '글로벌 CAGR'],
      datasets: [{
        label: '성장률 (%)',
        data: [39.2, 85.9, 6.9],
        backgroundColor: ['#32d583', '#72a1ff', '#f7c76b'],
        borderRadius: 6,
        borderSkipped: false,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 900, easing: 'easeOutQuart' },
      indexAxis: 'y',
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (ctx) => ` ${ctx.parsed.x}%` } },
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { callback: (v) => `${v}%` },
        },
        y: { grid: { display: false } },
      },
    },
  };
}

const chartFactories = { revenue: makeRevenueConfig, market: makeMarketConfig, global: makeGlobalConfig };
const chartMeta = {
  revenue: { title: '매출 성장 궤적', desc: '2013년 490억원에서 2024년 792억원으로 약 61.6% 성장했습니다.', badge: '억원' },
  market:  { title: '전문 헤어 시장 점유 구조', desc: '아모스는 약 52%로 국내 전문 헤어 시장 1위이며, 밀본과 로레알 프로페셔널이 뒤따릅니다.', badge: '점유율' },
  global:  { title: 'K-헤어케어 글로벌 기회', desc: 'K-헤어케어 수출 +39.2% 흐름을 활용한 글로벌 확장 기회를 비교합니다.', badge: '성장률' },
};

let mainChartInstance = null;

function renderChart(type) {
  const meta = chartMeta[type];
  document.querySelector('#chartTitle').textContent = meta.title;
  document.querySelector('#chartDesc').textContent = meta.desc;
  document.querySelector('#chartBadge').textContent = meta.badge;
  if (mainChartInstance) { mainChartInstance.destroy(); mainChartInstance = null; }
  mainChartInstance = new Chart(document.querySelector('#mainChart'), chartFactories[type]());
}

// ── products ──────────────────────────────────────────────────────────────
const products = {
  green: {
    category: 'Scalp Care', name: '녹차실감',
    description: '2007년 출시된 아모스프로페셔널의 스테디셀러 No.1 라인입니다. 극차광 녹차와 카페인을 중심으로 두피 타입별 기능성 케어를 제안합니다.',
    image: './assets/page_17.png',
    facts: [['출시','2007년, 2019년 업그레이드'],['성분','극차광 녹차, 카페인'],['구성','샴푸, 세럼, 컨디셔너'],['인증','탈모증상완화 기능성']],
  },
  camellia: {
    category: 'Premium Care', name: '리뉴 카멜리아',
    description: '2024년 출시된 프리미엄 케어 라인입니다. 동백오일 특허추출물과 레티놀, 콜라겐, 비타민C를 적용해 스키니피케이션 흐름에 대응합니다.',
    image: './assets/page_17.png',
    facts: [['출시','2024년'],['성분','동백오일, 레티놀, 콜라겐, 비타민C'],['구성','듀얼케어팩, 인퓨전오일'],['가격대','약 3-4만원대']],
  },
  able: {
    category: 'Color / Perm', name: '잇츠에이블',
    description: '2023년 론칭한 패션 염모제 라인입니다. 트렌디한 컬러 표현과 글로벌 화보, 디자이너 창작 콘텐츠에 적합한 신성장 라인입니다.',
    image: './assets/page_18.png',
    facts: [['출시','2023년'],['카테고리','패션 염모제'],['타겟','트렌드를 원하는 헤어 디자이너'],['콘텐츠','영국 세븐시스터즈 글로벌 화보']],
  },
  style: {
    category: 'Style Expression', name: '헤어핏 컬업젤리',
    description: '2025년 신제품으로, 젤리 타입의 가볍고 촉촉한 텍스처를 통해 컬 모양 고정과 촉촉한 마무리를 제안합니다.',
    image: './assets/page_18.png',
    facts: [['출시','2025년'],['제형','젤리 타입'],['기능','컬 모양 고정, 촉촉한 마무리'],['타겟','컬 스타일링 소비자']],
  },
};

function renderProduct(type) {
  const p = products[type];
  document.querySelector('#productCategory').textContent = p.category;
  document.querySelector('#productName').textContent = p.name;
  document.querySelector('#productDescription').textContent = p.description;
  document.querySelector('#productImage').src = p.image;
  document.querySelector('#productFacts').innerHTML = p.facts.map(([l, v]) => `<dt>${l}</dt><dd>${v}</dd>`).join('');
}

// ── consumer donut ────────────────────────────────────────────────────────
function initConsumerChart() {
  const canvas = document.querySelector('#consumerChart');
  if (!canvas) return;
  new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: ['B2B 살롱 디자이너', 'B2C 홈케어 소비자'],
      datasets: [{
        data: [70, 30],
        backgroundColor: ['#32d583', '#72a1ff'],
        borderColor: '#0d1118',
        borderWidth: 2,
        hoverOffset: 8,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1000, easing: 'easeOutQuart' },
      plugins: {
        legend: {
          position: 'bottom',
          labels: { padding: 16, usePointStyle: true, color: '#a7b0be', font: { size: 13 } },
        },
        tooltip: { callbacks: { label: (ctx) => ` ${ctx.label}: ${ctx.parsed}%` } },
      },
      cutout: '62%',
    },
  });
}

// ── KPI counter animation ─────────────────────────────────────────────────
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const useComma = el.dataset.comma !== undefined;
  const duration = 1400;
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);
    el.textContent = useComma ? current.toLocaleString('ko-KR') + suffix : current + suffix;
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = useComma ? target.toLocaleString('ko-KR') + suffix : target + suffix;
  }
  requestAnimationFrame(update);
}

function initCounters() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { animateCounter(entry.target); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-target]').forEach((el) => obs.observe(el));
}

// ── search ────────────────────────────────────────────────────────────────
const searchInput = document.querySelector('#dashboardSearch');
const sections = [...document.querySelectorAll('.dashboard-section')];
const navLinks = [...document.querySelectorAll('.sidebar nav a')];

searchInput.addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();
  sections.forEach((s) => s.classList.toggle('is-dimmed', !!q && !s.textContent.toLowerCase().includes(q)));
});

document.querySelectorAll('[data-view]').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-view]').forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    renderChart(btn.dataset.view);
  });
});

document.querySelectorAll('[data-product]').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-product]').forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    renderProduct(btn.dataset.product);
  });
});

document.querySelectorAll('.accordion').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('is-open');
    btn.nextElementSibling.classList.toggle('is-open');
  });
});

document.querySelectorAll('[data-filter]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    document.querySelectorAll('.issue-card').forEach((card) => {
      card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.type !== filter);
    });
  });
});

const dialog = document.querySelector('#imageDialog');
const dialogImg = dialog.querySelector('img');
const dialogCaption = dialog.querySelector('p');

document.querySelectorAll('[data-image]').forEach((btn) => {
  btn.addEventListener('click', () => {
    dialogImg.src = btn.dataset.image;
    dialogImg.alt = btn.dataset.caption;
    dialogCaption.textContent = btn.dataset.caption;
    dialog.showModal();
  });
});

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`);
    });
  },
  { rootMargin: '-20% 0px -60% 0px', threshold: [0.1, 0.25, 0.5] }
);
sections.forEach((s) => sectionObserver.observe(s));

renderChart('revenue');
renderProduct('green');
initConsumerChart();
initCounters();
