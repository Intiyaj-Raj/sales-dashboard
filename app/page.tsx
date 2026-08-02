import Link from 'next/link';
import { BarChart3, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="mx-auto max-w-md space-y-8 text-center">
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <BarChart3 className="h-8 w-8" />
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight">Sales Dashboard</h1>
          <p className="text-muted-foreground">
            Visualize annual sales performance across 2022, 2023, and 2024 with
            interactive charts and custom filters.
          </p>
        </div>
        <Button asChild size="lg" className="w-full">
          <Link href="/dashboard">
            View Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </main>
  );
}
