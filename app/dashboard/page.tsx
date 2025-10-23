import MobileShell from '@/src/components/MobileShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, Euro, Calendar } from 'lucide-react';

const stats = [
  {
    label: 'Revenus',
    value: '2 456€',
    icon: Euro,
    trend: '+12.5%',
  },
  {
    label: 'Participants',
    value: '342',
    icon: Users,
    trend: '+8.2%',
  },
  {
    label: 'Événements',
    value: '12',
    icon: Calendar,
    trend: '+3',
  },
];

const recentActivity = [
  { type: 'Nouvelle inscription', event: 'Tournoi du Pakistan', time: 'Il y a 2h' },
  { type: 'Paiement reçu', event: 'Concert acoustique', time: 'Il y a 5h' },
  { type: 'Nouvel événement', event: 'Atelier de peinture', time: 'Hier' },
];

export default function DashboardPage() {
  return (
    <MobileShell>
      <div className="p-4 space-y-6 max-w-screen-sm mx-auto">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-semibold">
            EVORA
          </div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Vue d'ensemble de votre activité</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Icon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs text-success flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {stat.trend}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Activité récente</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-start justify-between gap-3 pb-4 border-b last:border-0 last:pb-0"
              >
                <div className="space-y-1">
                  <p className="text-sm font-medium">{activity.type}</p>
                  <p className="text-xs text-muted-foreground">{activity.event}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {activity.time}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </MobileShell>
  );
}
