'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 max-w-screen-sm mx-auto">
      <div className="py-4">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-semibold">
            EVORA
          </div>
          <h1 className="text-3xl font-bold">Créer un événement</h1>
          <p className="text-muted-foreground">Connectez-vous pour continuer</p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="votre@email.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-muted-foreground">Se souvenir de moi</span>
            </label>
            <Link href="#" className="text-primary hover:underline">
              Mot de passe oublié ?
            </Link>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Se connecter
          </Button>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          Pas encore de compte ?{' '}
          <Link href="#" className="text-primary hover:underline font-medium">
            S'inscrire
          </Link>
        </div>
      </div>
    </div>
  );
}
