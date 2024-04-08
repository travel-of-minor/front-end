"use client";
import { ReactNode, useEffect, useState } from "react";

interface PropType {
  children: ReactNode;
}

async function importMSW() {
  if (typeof window === "undefined") {
    const server = await import("./server").then((res) => res.default);
    server.listen();
  } else {
    const worker = await import("./browser").then((res) => res.default);
    await worker.start();
  }
}

export default function IntegrateMSW({ children }: PropType) {
  const [MSWReady, setMSWReady] = useState(false);
  useEffect(() => {
    async function init() {
      await importMSW();
      setMSWReady(true);
    }
    if (!MSWReady) {
      init();
    }
  }, [MSWReady]);

  return <>{children}</>;
}
