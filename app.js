const searchInput = document.querySelector("#dashboardSearch");
const sections = [...document.querySelectorAll(".dashboard-section")];
const navLinks = [...document.querySelectorAll(".sidebar nav a")];

const chartData = {
  revenue: {
    title: "매출 성장 궤적",
    desc: "2013년 490억원에서 2024년 792억원으로 약 61.6% 성장했습니다.",
    badge: "억원",
    items: [
      ["2013", "490", 62],
      ["2019", "600", 76],
      ["2022", "665", 84],
      ["2023", "720", 91],
      ["2024", "792", 100],
    ],
  },
  market: {
    title: "전문 헤어 시장 점유 구조",
    desc: "아모스는 약 52%로 국내 전문 헤어 시장 1위이며, 밀본과 로레알 프로페셔널이 뒤따릅니다.",
    badge: "점유율",
    items: [
      ["AMOS", "52%", 100],
      ["Milbon", "10-15%", 29],
      ["L'Oreal", "~10%", 19],
    ],
  },
  global: {
    title: "K-헤어케어 글로벌 기회",
    desc: "PDF에 제시된 성장률 지표를 기준으로 K-헤어케어의 글로벌 기회를 비교합니다.",
    badge: "성장률",
    items: [
      ["K-수출", "+39.2%", 46],
      ["글로벌 CAGR", "6.9%", 8],
      ["홍콩 성장", "+85.9%", 100],
    ],
  },
};

const products = {
  green: {
    category: "Scalp Care",
    name: "녹차실감",
    description:
      "2007년 출시된 아모스프로페셔널의 스테디셀러 No.1 라인입니다. 극차광 녹차와 카페인을 중심으로 두피 타입별 기능성 케어를 제안합니다.",
    image: "./assets/page_17.png",
    facts: [
      ["출시", "2007년, 2019년 업그레이드"],
      ["성분", "극차광 녹차, 카페인"],
      ["구성", "샴푸, 세럼, 컨디셔너"],
      ["인증", "탈모증상완화 기능성"],
    ],
  },
  camellia: {
    category: "Premium Care",
    name: "리뉴 카멜리아",
    description:
      "2024년 출시된 프리미엄 케어 라인입니다. 동백오일 특허추출물과 레티놀, 콜라겐, 비타민C를 적용해 스키니피케이션 흐름에 대응합니다.",
    image: "./assets/page_17.png",
    facts: [
      ["출시", "2024년"],
      ["성분", "동백오일, 레티놀, 콜라겐, 비타민C"],
      ["구성", "듀얼케어팩, 인퓨전오일"],
      ["가격대", "약 3-4만원대"],
    ],
  },
  able: {
    category: "Color / Perm",
    name: "잇츠에이블",
    description:
      "2023년 론칭한 패션 염모제 라인입니다. 트렌디한 컬러 표현과 글로벌 화보, 디자이너 창작 콘텐츠에 적합한 신성장 라인입니다.",
    image: "./assets/page_18.png",
    facts: [
      ["출시", "2023년"],
      ["카테고리", "패션 염모제"],
      ["타겟", "트렌드를 원하는 헤어 디자이너"],
      ["콘텐츠", "영국 세븐시스터즈 글로벌 화보"],
    ],
  },
  style: {
    category: "Style Expression",
    name: "헤어핏 컬업젤리",
    description:
      "2025년 신제품으로, 젤리 타입의 가볍고 촉촉한 텍스처를 통해 컬 모양 고정과 촉촉한 마무리를 제안합니다.",
    image: "./assets/page_18.png",
    facts: [
      ["출시", "2025년"],
      ["제형", "젤리 타입"],
      ["기능", "컬 모양 고정, 촉촉한 마무리"],
      ["타겟", "컬 스타일링 소비자"],
    ],
  },
};

function normalize(value) {
  return value.trim().toLowerCase();
}

function renderChart(type) {
  const data = chartData[type];
  const chart = document.querySelector("#mainChart");
  document.querySelector("#chartTitle").textContent = data.title;
  document.querySelector("#chartDesc").textContent = data.desc;
  document.querySelector("#chartBadge").textContent = data.badge;
  chart.style.setProperty("--count", data.items.length);
  chart.innerHTML = data.items
    .map(
      ([label, value, height]) => `
        <div class="chart-item" style="--h:${height}%">
          <b>${value}</b>
          <span>${label}</span>
        </div>
      `
    )
    .join("");
}

function renderProduct(type) {
  const product = products[type];
  document.querySelector("#productCategory").textContent = product.category;
  document.querySelector("#productName").textContent = product.name;
  document.querySelector("#productDescription").textContent = product.description;
  document.querySelector("#productImage").src = product.image;
  document.querySelector("#productFacts").innerHTML = product.facts
    .map(([label, value]) => `<dt>${label}</dt><dd>${value}</dd>`)
    .join("");
}

searchInput.addEventListener("input", (event) => {
  const query = normalize(event.target.value);
  sections.forEach((section) => {
    const isMatch = !query || normalize(section.textContent).includes(query);
    section.classList.toggle("is-dimmed", !isMatch);
  });
});

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-view]").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderChart(button.dataset.view);
  });
});

document.querySelectorAll("[data-product]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-product]").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderProduct(button.dataset.product);
  });
});

document.querySelectorAll(".accordion").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("is-open");
    button.nextElementSibling.classList.toggle("is-open");
  });
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    document.querySelectorAll(".issue-card").forEach((card) => {
      card.classList.toggle("is-hidden", filter !== "all" && card.dataset.type !== filter);
    });
  });
});

const dialog = document.querySelector("#imageDialog");
const dialogImage = dialog.querySelector("img");
const dialogCaption = dialog.querySelector("p");

document.querySelectorAll("[data-image]").forEach((button) => {
  button.addEventListener("click", () => {
    dialogImage.src = button.dataset.image;
    dialogImage.alt = button.dataset.caption;
    dialogCaption.textContent = button.dataset.caption;
    dialog.showModal();
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.25, 0.5] }
);

sections.forEach((section) => observer.observe(section));
renderChart("revenue");
renderProduct("green");
