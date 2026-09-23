import type { BrevoChatColors } from "@/lib/brevo-chat-theme";

type BrevoConversationsCommand =
  | ["setColors", BrevoChatColors]
  | [string, ...unknown[]];

type BrevoConversationsFn = {
  (...args: BrevoConversationsCommand): void;
  q?: BrevoConversationsCommand[];
};

declare global {
  interface Window {
    __replaBrevoChatLoaded?: boolean;
    BrevoConversationsID?: string;
    BrevoConversations?: BrevoConversationsFn;
    BrevoConversationsSetup?: {
      colors?: BrevoChatColors;
      chatHeight?: number;
      startHidden?: boolean;
    };
  }
}

export {};
