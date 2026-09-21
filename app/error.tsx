"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-1 items-center py-24">
      <Container className="flex flex-col items-center text-center">
        <p className="font-mono text-sm tracking-widest text-accent uppercase">
          Error
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Something went wrong.
        </h1>
        <p className="mt-4 max-w-md text-muted">
          An unexpected error occurred while rendering this page.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button type="button" onClick={() => reset()}>
            Try again
          </Button>
          <Button href="/" variant="secondary">
            Back to home
          </Button>
        </div>
      </Container>
    </div>
  );
}
