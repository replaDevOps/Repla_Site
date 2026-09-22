"use client";

import { Button, ButtonLink } from "@/components/ui/Button";

export function NotFoundActions({ backLabel, homeLabel }: { backLabel: string; homeLabel: string }) {
  return (
    <div className="relative mt-8 flex flex-wrap justify-center gap-3">
      <ButtonLink href="/">{homeLabel}</ButtonLink>
      <Button type="button" variant="secondary" onClick={() => window.history.back()}>
        {backLabel}
      </Button>
    </div>
  );
}
