"use client";

import Script from "next/script";

/**
 * Go High Level chat widget loader.
 * Set the NEXT_PUBLIC_GHL_CHAT_ID env var with your real widget ID from GHL.
 */
export function ChatWidget() {
  const chatId = process.env.NEXT_PUBLIC_GHL_CHAT_ID;

  if (!chatId) {
    if (process.env.NODE_ENV === "development") {
      console.warn("Missing NEXT_PUBLIC_GHL_CHAT_ID for Go High Level chat widget.");
    }
    return null;
  }

  const resourcesUrl = `https://widgets.leadconnectorhq.com/chat-widget/${chatId}`; // Paste your GHL chat ID above.

  return (
    <>
      <Script
        id="ghl-chat-widget-loader"
        src="https://widgets.leadconnectorhq.com/loader.js"
        strategy="lazyOnload"
        data-resources-url={resourcesUrl}
      />
      <style jsx global>{`
        /* Keep the chat bubble above page content. */
        iframe[src*="leadconnectorhq.com"],
        #GHL-Widget,
        #GHL-Bubble {
          z-index: 60 !important;
        }
      `}</style>
    </>
  );
}
