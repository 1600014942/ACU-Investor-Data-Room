import { useState } from "react";

/**
 * ACUindex Investor Room - Responsive Optimized Layout
 * 
 * Section 1 (Hero): 
 *   - Header: Pure black background with logo and language toggle
 *   - Content: Cabinet background image with title, description
 * Section 2 (Cards): Black background with centered text links
 * 
 * Design principles:
 * - Consistent max-width and padding across sections
 * - Left-aligned footer matching hero content alignment
 * - Responsive typography that scales smoothly
 * - Unified spacing system
 */

export default function Home() {
  const [language, setLanguage] = useState<"en" | "zh">("en");

  const isEnglish = language === "en";

  // Unified max-width for consistent layout across sections
  const maxWidthClass = "max-w-4xl";
  const paddingClass = "px-6 md:px-8 lg:px-12";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* SECTION 1: HERO WITH CABINET BACKGROUND */}
      <section className="relative min-h-screen flex flex-col">
        {/* Header - Pure Black Background */}
        <header className="relative bg-black flex items-center justify-between pt-6 md:pt-8 lg:pt-10 pb-6 md:pb-8 lg:pb-10 px-6 md:px-8 lg:px-12 z-20 border-b border-gray-800">
          {/* Logo */}
          <div className="h-10 md:h-12 lg:h-14">
            <img
              src="/manus-storage/ACUindexLOGO_7e5d6b71.png"
              alt="ACUindex Logo"
              className="h-full object-contain"
            />
          </div>

          {/* Language Toggle */}
          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 md:px-3 py-2 text-xs md:text-sm lg:text-base font-medium transition-colors duration-200 ${
                isEnglish
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              EN
            </button>
            <div className="w-px h-5 md:h-6 bg-gray-600"></div>
            <button
              onClick={() => setLanguage("zh")}
              className={`px-2 md:px-3 py-2 text-xs md:text-sm lg:text-base font-medium transition-colors duration-200 ${
                !isEnglish
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              中文
            </button>
          </div>
        </header>

        {/* Hero Content with Cabinet Background */}
        <div
          className="relative flex-1 flex flex-col justify-center py-12 md:py-16 lg:py-24"
          style={{
            backgroundImage: "url(/manus-storage/pasted_file_nvBsIG_image_a57703fc.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Dark overlay to ensure readability */}
          <div className="absolute inset-0 bg-black/35"></div>

          {/* Content */}
          <div className={`relative z-10 ${paddingClass}`}>
            <div className={`${maxWidthClass}`}>
              {/* Main integrated title */}
              <div className="mb-8 md:mb-10 lg:mb-12">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight mb-3 md:mb-4 leading-tight">
                  {isEnglish
                    ? "Investor Data Room & Milestone Update"
                    : "投资者关系与里程碑更新"}
                </h1>
              </div>

              {/* Divider line */}
              <div className="w-full h-px bg-gray-400 mb-6 md:mb-8"></div>

              {/* Tagline */}
              <p className="text-sm md:text-base lg:text-lg text-gray-200 mb-6 md:mb-8">
                {isEnglish
                  ? "Unleash Maximum AI Productive Capacity"
                  : "释放每一滴算力的最大产能"}
              </p>

              {/* Description */}
              <p className="text-xs md:text-sm lg:text-base text-gray-300 leading-relaxed">
                {isEnglish
                  ? "ACUindex uses ACU (AI Capacity Unit) as the core metric, unifying model capabilities, token consumption, API calls, agent workflows, and enterprise task requirements into an ACU resource allocation infrastructure, helping customers achieve maximum productive capacity within the same budget."
                  : "ACUindex 以 ACU 为核心计量单位，将模型能力、Token 消耗、API 调用、Agent 工作流和企业任务需求，统一到 ACU 算力资源配置基础设施中，帮助客户在同等预算下，获得最大化有效产能。"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SIMPLIFIED CENTERED TEXT LINKS */}
      <section className="relative bg-black py-16 md:py-20 lg:py-24 flex flex-col justify-center items-center min-h-screen">
        {/* Content */}
        <div className={`relative z-10 ${maxWidthClass} ${paddingClass} w-full`}>
          {/* Link items - centered text with consistent spacing */}
          <div className="space-y-6 md:space-y-8 lg:space-y-10 mb-12 md:mb-16 lg:mb-20 text-center">
            {/* 01 Pitch Deck */}
            <a
              href="https://www.papermark.com/view/cmr0b4uf400f5l504a5d1yltw"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm md:text-base lg:text-lg text-gray-300 hover:text-white transition-colors duration-200"
            >
              <span className="text-gray-500 font-light">01</span> {isEnglish ? "Pitch Deck" : "Pitch Deck"}：{isEnglish ? "View the latest presentation" : "查看最新路演讲稿"}
            </a>

            {/* 02 Engineering Whitepaper */}
            <a
              href="https://zenodo.org/records/20628329?preview_file=AcuIndex_Whitepaper_v0.2.4.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm md:text-base lg:text-lg text-gray-300 hover:text-white transition-colors duration-200"
            >
              <span className="text-gray-500 font-light">02</span> {isEnglish ? "Engineering Whitepaper" : "工程白皮书"}：{isEnglish ? "Methodology and computational details" : "方法论和计算细节"}
            </a>

            {/* 03 Demo */}
            <a
              href="mailto:cmk23@mails.tsinghua.edu.cn,1600014942@pku.edu.cn?subject=ACUindex%20Demo%20Request"
              className="block text-sm md:text-base lg:text-lg text-gray-300 hover:text-white transition-colors duration-200"
            >
              <span className="text-gray-500 font-light">03</span> {isEnglish ? "Demo" : "Demo"}：{isEnglish ? "Request access to the latest product demo" : "申请访问最新产品演示"}
            </a>

            {/* 04 Contact */}
            <a
              href="mailto:cmk23@mails.tsinghua.edu.cn?subject=ACUindex%20Business%20Inquiry"
              className="block text-sm md:text-base lg:text-lg text-gray-300 hover:text-white transition-colors duration-200"
            >
              <span className="text-gray-500 font-light">04</span> {isEnglish ? "Contact / Schedule a Meeting" : "联系我们 / 预约会议"}：{isEnglish ? "Business cooperation" : "商务合作"}
            </a>
          </div>

          {/* Footer info - left aligned matching hero section */}
          <div className="text-xs md:text-sm text-gray-600 space-y-2 border-t border-gray-800 pt-8 md:pt-10 lg:pt-12">
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

            {/* Contact details */}
            <div className="mt-6 pt-6 border-t border-gray-800 text-xs text-gray-500 space-y-1">
              <p className="font-light">{isEnglish ? "Contact:" : "联系方式："}</p>
              <p>Email: cmk23@mails.tsinghua.edu.cn</p>
              <p>Email: 1600014942@pku.edu.cn</p>
              <p>Phone: (+86) 18801153964</p>
              <p>Phone: (+44) 07719164461</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
