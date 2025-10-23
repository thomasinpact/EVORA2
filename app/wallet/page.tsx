import MobileShell from '@/src/components/MobileShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownLeft, TrendingUp } from 'lucide-react';

const transactions = [
  {
    id: 1,
    type: 'income',
    label: 'Art Corporation',
    amount: '+480€',
    date: '02/05/2025',
    status: 'completed',
  },
  {
    id: 2,
    label: 'Ali Coporation',
    amount: '+480€',
    date: '02/05/2025',
    status: 'completed',
    type: 'income',
  },
  {
    id: 3,
    label: 'DIACT',
    amount: '+15€',
    date: '02/05/2025',
    status: 'completed',
    type: 'income',
  },
  {
    id: 4,
    label: 'Retrait Solde',
    amount: '-200€',
    date: '02/05/2025',
    status: 'completed',
    type: 'expense',
  },
];

export default function WalletPage() {
  return (
    <MobileShell>
      <div className="p-4 space-y-6 max-w-screen-sm mx-auto">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-semibold">
            EVORA
          </div>
          <h1 className="text-2xl font-bold">Porte monnaie</h1>
        </div>

        <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-90">Solde</span>
              <span className="text-xs opacity-75 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +15€
              </span>
            </div>
            <div className="text-4xl font-bold">1560€</div>
            <Button className="w-full bg-white text-primary hover:bg-white/90">
              Effectuer un retrait
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Transactions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between py-3 border-b last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'income'
                        ? 'bg-success/10 text-success'
                        : 'bg-destructive/10 text-destructive'
                    }`}
                  >
                    {transaction.type === 'income' ? (
                      <ArrowDownLeft className="w-4 h-4" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4" />
                    )}
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium">{transaction.label}</p>
                    <p className="text-xs text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`text-sm font-semibold ${
                      transaction.type === 'income' ? 'text-success' : 'text-destructive'
                    }`}
                  >
                    {transaction.amount}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="bg-muted/50 rounded-lg p-4 space-y-2">
          <h3 className="font-medium text-sm">Transfert de l'argent</h3>
          <p className="text-xs text-muted-foreground">
            Retirez vos revenus sur votre compte bancaire en quelques clics. Les transferts prennent 2-3 jours ouvrés.
          </p>
        </div>
      </div>
    </MobileShell>
  );
}
