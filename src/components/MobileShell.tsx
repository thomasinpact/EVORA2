'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LayoutDashboard, Calendar, Wallet, User } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  {
    href: '/discover',
    label: 'Découvrir',
    icon: Home,
  },
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    href: '/events',
    label: 'Événements',
    icon: Calendar,
  },
  {
    href: '/wallet',
    label: 'Portefeuille',
    icon: Wallet,
  },
  {
    href: '/account',
    label: 'Compte',
    icon: User,
  },
];

export default function MobileShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-screen bg-background">
      <main className="flex-1 overflow-auto pb-24">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-border/50 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <div className="flex justify-around items-center h-[70px] max-w-screen-sm mx-auto px-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center flex-1 gap-1.5 relative py-2 px-2"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/10 rounded-xl mx-1"
                    transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
                  />
                )}
                <Icon
                  className={`w-[22px] h-[22px] relative z-10 transition-colors stroke-[1.5] ${
                    isActive ? 'text-primary' : 'text-muted-foreground/60'
                  }`}
                />
                <span
                  className={`text-[11px] font-medium relative z-10 transition-colors leading-none ${
                    isActive ? 'text-primary' : 'text-muted-foreground/70'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
