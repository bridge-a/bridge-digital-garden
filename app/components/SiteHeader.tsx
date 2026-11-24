
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white px-6">
      <div className="mx-auto flex min-h-16 max-w-5xl flex-col items-center justify-between gap-3 py-3 sm:flex-row">

        {/* 左侧品牌标识 */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-slate-900"
        >
          Bridge<span className="text-blue-600">.</span>
        </Link>

        {/* 右侧导航区域 */}
        <nav className="flex flex-wrap items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="text-blue-600"
            aria-current="page"
          >
            首页
          </Link>

          <span className="text-slate-500">项目</span>
          <span className="text-slate-500">文章</span>
          <span className="text-slate-500">关于</span>
        </nav>

      </div>
    </header>
  );
}
