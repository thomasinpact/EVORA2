import MobileShell from '@/src/components/MobileShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Calendar, MapPin, Users } from 'lucide-react';

const myEvents = [
  {
    id: 1,
    title: 'Tournoi du Pakistan',
    date: '5 Juin 2025',
    location: 'Paris',
    participants: '42/50',
    revenue: '840€',
    status: 'active',
  },
  {
    id: 2,
    title: 'Séminaire d\'entreprise',
    date: '8 Juin 2025',
    location: 'Strasbourg',
    participants: '75/80',
    revenue: '2 250€',
    status: 'active',
  },
  {
    id: 3,
    title: 'Concert acoustique',
    date: '18 Avril 2025',
    location: 'Marseille',
    participants: '156/200',
    revenue: '5 460€',
    status: 'active',
  },
];

export default function EventsPage() {
  return (
    <MobileShell>
      <div className="p-4 space-y-6 max-w-screen-sm mx-auto">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-semibold">
              EVORA
            </div>
            <h1 className="text-2xl font-bold">Mes événements</h1>
          </div>
          <Button size="icon" className="rounded-full h-12 w-12">
            <Plus className="w-5 h-5" />
          </Button>
        </div>

        <div className="space-y-3">
          {myEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-base leading-tight">
                        {event.title}
                      </h3>
                    </div>
                    <Badge className="bg-success text-success-foreground">
                      Actif
                    </Badge>
                  </div>

                  <div className="space-y-1.5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{event.participants} participants</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <span className="text-sm font-semibold text-primary">
                      {event.revenue}
                    </span>
                    <Button variant="outline" size="sm">
                      Voir les stats
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-dashed">
          <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Plus className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="font-medium">Créer un nouvel événement</p>
              <p className="text-sm text-muted-foreground">
                Commencez à organiser votre prochain événement
              </p>
            </div>
            <Button className="w-full">
              Créer un événement
            </Button>
          </CardContent>
        </Card>
      </div>
    </MobileShell>
  );
}
