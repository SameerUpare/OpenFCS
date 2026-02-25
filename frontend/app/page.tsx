import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const kpis = [
    { title: "Total Alerts", value: "12,450" },
    { title: "False Positive Rate", value: "82%" },
    { title: "Active Cases", value: "312" },
    { title: "SLA Breaches", value: "9" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900 mb-6">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi) => (
          <Card key={kpi.title}>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-slate-600">
                {kpi.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-slate-900">
                {kpi.value}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
