import { useState } from "react";

/**
 * ACUindex Investor Room
 * 
 * Design Philosophy:
 * - Pure black background with white text
 * - Logo in top-left corner
 * - Language toggle (EN/CN) in top-right corner
 * - Unified "Investor Relationship & Milestone Update" as core concept
 * - Not positioned as a fundraising page, but as a product/milestone tracking platform
 * - Four link cards with subtle borders
 * - Minimalist, institutional aesthetic
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
      {/* Header with logo and language toggle */}
      <header className="flex items-center justify-between pt-8 px-8 md:pt-12 md:px-12">
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
                : "text-gray-500 hover:text-gray-300"
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
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            中文
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col justify-center px-8 md:px-12 py-16 md:py-24">
        {/* Title section - unified concept */}
        <div className="max-w-3xl mb-20 md:mb-32">
          {/* Main title with integrated subtitle */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3">
              {isEnglish ? "ACUindex" : "ACUindex"}
            </h1>
            <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 gap-2">
              <p className="text-2xl md:text-3xl font-light text-gray-300">
                {isEnglish
                  ? "Investor Relationship"
                  : "投资者关系"}
              </p>
              <div className="hidden md:block w-px h-8 bg-gray-600"></div>
              <p className="text-2xl md:text-3xl font-light text-gray-300">
                {isEnglish
                  ? "Milestone Update"
                  : "与里程碑更新"}
              </p>
            </div>
          </div>

          {/* Divider line */}
          <div className="w-full h-px bg-gray-700 mb-8"></div>

          {/* Tagline */}
          <p className="text-base md:text-lg text-gray-300 mb-8">
            {isEnglish
              ? "Unleash Maximum AI Productive Capacity"
              : "释放每一滴算力的最大产能"}
          </p>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            {isEnglish
              ? "ACUindex uses ACU (AI Capacity Unit) as the core metric, unifying model capabilities, token consumption, API calls, agent workflows, and enterprise task requirements into an ACU resource allocation infrastructure, helping customers achieve maximum productive capacity within the same budget."
              : "ACUindex 以 ACU 为核心计量单位，将模型能力、Token 消耗、API 调用、Agent 工作流和企业任务需求，统一到 ACU 算力资源配置基础设施中，帮助客户在同等预算下，获得最大化有效产能。"}
          </p>
        </div>

        {/* Link cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mb-16">
          {linkCards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              className="group relative"
            >
              <div
                className={`
                  p-6 md:p-8 border transition-all duration-200 ease-out
                  border-gray-700 bg-black hover:border-white hover:bg-gray-950
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
              ? "Status: Demo validation stage"
              : "状态：演示验证阶段"}
          </p>
          <p>
            {isEnglish
              ? "Last updated: 2026.06"
              : "最后更新：2026.06"}
          </p>
          <p className="mt-4">
            {isEnglish
              ? "Not for settlement. Internal benchmark results are for product validation only."
              : "不作为结算依据。内部基准测试结果仅用于产品验证。"}
          </p>
        </div>
      </main>
    </div>
  );
}
