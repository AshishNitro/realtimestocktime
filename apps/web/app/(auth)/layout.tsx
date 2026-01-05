import Link from "next/link";
import Image from "next/image";
import TradingViewWidget from "@/components/TradingViewWidget";
import { MARKET_OVERVIEW_WIDGET_CONFIG } from "@/lib/Nav_constant";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth-layout">
      <section className="auth-left-section scrollbar-hide-default">
        <Link href="/" className="auth-logo">
          <Image
            src="/icons/logo.svg"
            alt="app logo"
            width={140}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
        <div className="pb-6 lg:pb-8">{children}</div>
      </section>
      <section className="auth-right-section">
        <div className="z-10 relative lg:mt-4 lg:mb-16">
          <blockquote className="auth-quote">
            The Nextjs app, which displays the current stock market prices in
            real-time, is built using Next.js for the frontend framework,
            Tailwind CSS for styling, and integrates with a stock market API to
            fetch and display live data.
          </blockquote>
          <div className="flex items-center justify-between">
            <cite>Ashish Sharma-</cite>
          </div>
        </div>
        <div className="flex-1 realtive ">
          <div>
            <TradingViewWidget
              title="Market Overview "
              scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
              config={MARKET_OVERVIEW_WIDGET_CONFIG}
              className="custom-chart"
              height={600}
            />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Layout;
