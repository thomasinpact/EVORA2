import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, Code } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            EVORA
          </div>

          <h1 className="text-4xl font-bold tracking-tight">
            Créez et gérez vos événements
          </h1>

          <p className="text-lg text-muted-foreground">
            La plateforme mobile-first pour organiser, promouvoir et monétiser vos événements en toute simplicité
          </p>
        </div>

        <div className="space-y-3 pt-4">
          <Link href="/discover">
            <Button size="lg" className="w-full">
              Découvrir les événements
            </Button>
          </Link>

          <Link href="/sign-in">
            <Button size="lg" variant="outline" className="w-full">
              Se connecter
            </Button>
          </Link>

          <div className="pt-4 border-t">
            <Link href="/dashboard">
              <Button size="sm" variant="secondary" className="w-full gap-2">
                <Code className="w-4 h-4" />
                Mode développement
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
