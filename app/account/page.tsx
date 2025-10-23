import MobileShell from '@/src/components/MobileShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  ChevronRight,
  User,
  Bell,
  CreditCard,
  Settings,
  LogOut
} from 'lucide-react';

const menuItems = [
  {
    icon: User,
    label: 'Modifier mes informations',
    href: '#',
  },
  {
    icon: Bell,
    label: 'Notifications',
    href: '#',
  },
  {
    icon: CreditCard,
    label: 'Moyens de paiement',
    href: '#',
  },
  {
    icon: Settings,
    label: 'Préférences',
    href: '#',
  },
];

export default function AccountPage() {
  return (
    <MobileShell>
      <div className="p-4 space-y-6 max-w-screen-sm mx-auto">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-semibold">
            EVORA
          </div>
          <h1 className="text-2xl font-bold">Mon compte</h1>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                  JM
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-xl font-bold">Jean-Edouard Martin</h2>
                <p className="text-sm text-muted-foreground">jean.martin@example.com</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <Icon className="w-5 h-5 text-foreground" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Button variant="destructive" className="w-full" size="lg">
          <LogOut className="w-4 h-4 mr-2" />
          Déconnexion
        </Button>

        <div className="text-center text-xs text-muted-foreground pt-4">
          Version 1.0.0
        </div>
      </div>
    </MobileShell>
  );
}
