import MobileShell from '@/src/components/MobileShell';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

const mockEvents = [
  {
    id: 1,
    title: 'Tournoi du Pakistan',
    date: '5 Juin 2025',
    location: 'Paris',
    participants: '42 participants',
    price: 'Gratuit',
    status: 'soon',
  },
  {
    id: 2,
    title: 'Atelier de peinture',
    date: '12 Mars 2025',
    location: 'Lyon',
    participants: '15 places',
    price: '25€',
    status: 'soon',
  },
  {
    id: 3,
    title: 'Séminaire d\'entreprise',
    date: '8 Juin 2025',
    location: 'Strasbourg',
    participants: '75 participants',
    price: 'Sur invitation',
    status: 'closed',
  },
  {
    id: 4,
    title: 'Concert acoustique',
    date: '18 Avril 2025',
    location: 'Marseille',
    participants: '200 places',
    price: '35€',
    status: 'open',
  },
];

export default function DiscoverPage() {
  return (
    <MobileShell>
      <div className="p-4 space-y-6 max-w-screen-sm mx-auto">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-semibold">
              EVORA
            </div>
          </div>

          <h1 className="text-2xl font-bold">Mes événements</h1>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher un événement..."
              className="pl-9"
            />
          </div>
        </div>

        <div className="space-y-3">
          {mockEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-base leading-tight">
                        {event.title}
                      </h3>
                    </div>
                    <Badge
                      variant={event.status === 'open' ? 'default' : 'secondary'}
                      className={event.status === 'open' ? 'bg-success text-success-foreground' : ''}
                    >
                      {event.status === 'open' ? 'Ouvert' : event.status === 'soon' ? 'Bientôt' : 'Fermé'}
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
                      <span>{event.participants}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t">
                    <span className="text-sm font-semibold text-primary">
                      {event.price}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MobileShell>
  );
}
