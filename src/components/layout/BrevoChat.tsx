import Script from "next/script";

const BREVO_CONVERSATIONS_ID = "6aa91240e32c610fca085ce1";
const BREVO_CONVERSATIONS_SCRIPT_ID = "brevo-conversations-js";

/** Loads the Brevo Conversations live-chat widget once, globally. */
export function BrevoChat() {
  return (
    <Script id="brevo-conversations-init" strategy="lazyOnload">
      {`
(function(d, w, c) {
  if (w.__replaBrevoChatLoaded) return;
  w.__replaBrevoChatLoaded = true;
  w.BrevoConversationsID = '${BREVO_CONVERSATIONS_ID}';
  w[c] = w[c] || function() {
    (w[c].q = w[c].q || []).push(arguments);
  };
  if (d.getElementById('${BREVO_CONVERSATIONS_SCRIPT_ID}')) return;
  var s = d.createElement('script');
  s.async = true;
  s.id = '${BREVO_CONVERSATIONS_SCRIPT_ID}';
  s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
  if (d.head) d.head.appendChild(s);
})(document, window, 'BrevoConversations');
      `.trim()}
    </Script>
  );
}
