import { ReactNode, Suspense } from "react";
import { mainStyle } from "./page.css";
import TreasurePageSkeleton from "@/components/page/treasure/treasure-page.skeleton";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className={mainStyle}>
      <Suspense fallback={<TreasurePageSkeleton />}>{children}</Suspense>
    </main>
  );
}
