import { useState } from "react";

/**
 * ACUindex Investor Room - Two Section Layout
 * 
 * Section 1 (Hero): Cabinet background image with header and intro content
 * Section 2 (Cards): Black background with Ornn-style vertical line pattern
 */

interface LinkCard {
  titleEn: string;
  titleZh: string;
  subtitleEn: string;
  subtitleZh: string;
  href: string;
}

const linkCards: LinkCard[] = [
  {
    titleEn: "Live Demo",
    titleZh: "Live Demo",
    subtitleEn: "Request access to the latest ACUindex demo.",
    subtitleZh: "申请访问最新的 ACUindex 演示。",
    href: "#demo",
  },
  {
    titleEn: "Web BP",
    titleZh: "Web BP",
    subtitleEn: "View the latest investor presentation.",
    subtitleZh: "查看最新的投资者演讲稿。",
    href: "#bp",
  },
  {
    titleEn: "Methodology / Whitepaper",
    titleZh: "方法论 / 白皮书",
    subtitleEn: "Read the ACU methodology and protocol draft.",
    subtitleZh: "阅读 ACU 方法论和协议草案。",
    href: "#methodology",
  },
  {
    titleEn: "Contact / Schedule a Call",
    titleZh: "联系 / 预约通话",
    subtitleEn: "Contact the team or schedule a discussion.",
    subtitleZh: "联系团队或安排讨论。",
    href: "#contact",
  },
];

export default function Home() {
  const [language, setLanguage] = useState<"en" | "zh">("en");

  const isEnglish = language === "en";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* SECTION 1: HERO WITH CABINET BACKGROUND */}
      <section
        className="relative min-h-screen flex flex-col"
        style={{
          backgroundImage: "url(/manus-storage/pasted_file_nvBsIG_image_a57703fc.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay to ensure readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Header */}
        <header className="relative flex items-center justify-between pt-8 px-8 md:pt-12 md:px-12 z-10">
          {/* Logo */}
          <div className="h-12 md:h-14">
            <img
              src="/manus-storage/ACUindexLOGO_7e5d6b71.png"
              alt="ACUindex Logo"
              className="h-full object-contain"
            />
          </div>

          {/* Language Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-2 text-sm md:text-base font-medium transition-colors duration-200 ${
                isEnglish
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              EN
            </button>
            <div className="w-px h-6 bg-gray-600"></div>
            <button
              onClick={() => setLanguage("zh")}
              className={`px-3 py-2 text-sm md:text-base font-medium transition-colors duration-200 ${
                !isEnglish
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              中文
            </button>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative flex-1 flex flex-col justify-center px-8 md:px-12 py-16 md:py-24 z-10">
          <div className="max-w-3xl">
            {/* Main integrated title */}
            <div className="mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4 leading-tight">
                {isEnglish
                  ? "Investor Relationship & Milestone Update"
                  : "投资者关系与里程碑更新"}
              </h1>
            </div>

            {/* Divider line */}
            <div className="w-full h-px bg-gray-400 mb-8"></div>

            {/* Tagline */}
            <p className="text-base md:text-lg text-gray-200 mb-8">
              {isEnglish
                ? "Unleash Maximum AI Productive Capacity"
                : "释放每一滴算力的最大产能"}
            </p>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              {isEnglish
                ? "ACUindex uses ACU (AI Capacity Unit) as the core metric, unifying model capabilities, token consumption, API calls, agent workflows, and enterprise task requirements into an ACU resource allocation infrastructure, helping customers achieve maximum productive capacity within the same budget."
                : "ACUindex 以 ACU 为核心计量单位，将模型能力、Token 消耗、API 调用、Agent 工作流和企业任务需求，统一到 ACU 算力资源配置基础设施中，帮助客户在同等预算下，获得最大化有效产能。"}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: CARDS WITH ORNN-STYLE VERTICAL LINES */}
      <section className="relative bg-black py-24 px-8 md:px-12">
        {/* Ornn-style vertical lines background */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1200 800"
          >
            {/* Vertical lines pattern - Ornn style */}
            {[...Array(40)].map((_, i) => (
              <line
                key={i}
                x1={i * 30}
                y1="0"
                x2={i * 30}
                y2="800"
                stroke="#333333"
                strokeWidth="1"
                opacity={Math.random() * 0.5 + 0.3}
              />
            ))}
            {/* Additional accent lines for depth */}
            {[...Array(8)].map((_, i) => (
              <line
                key={`accent-${i}`}
                x1={i * 150}
                y1="0"
                x2={i * 150}
                y2="800"
                stroke="#444444"
                strokeWidth="2"
                opacity="0.4"
              />
            ))}
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Link cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
            {linkCards.map((card, index) => (
              <a
                key={index}
                href={card.href}
                className="group relative"
              >
                <div
                  className={`
                    p-6 md:p-8 border transition-all duration-200 ease-out
                    border-gray-700 bg-black/50 backdrop-blur-sm hover:border-white hover:bg-gray-950/80
                  `}
                >
                  <div className="text-xs md:text-sm text-gray-500 mb-3 tracking-widest">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">
                    {isEnglish ? card.titleEn : card.titleZh}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400">
                    {isEnglish ? card.subtitleEn : card.subtitleZh}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Footer info */}
          <div className="text-xs md:text-sm text-gray-600 space-y-2">
            <p>
              {isEnglish
                ? "Status: Small-scale initial demo validation completed. Large-scale and clustered testing experiments in progress."
                : "状态：小规模原初Demo验证已通过，规模化、集群化测试实验进行中"}
            </p>
            <p>
              {isEnglish
                ? "Last updated: 2026.06.30"
                : "最后更新：2026.06.30"}
            </p>
            <p className="mt-4">
              {isEnglish
                ? "Not for settlement. Internal benchmark results are for product validation only."
                : "不作为结算依据。内部基准测试结果仅用于产品验证。"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
