import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check } from "lucide-react"
import Link from "next/link"

const pricingData = {
  compute: [
    {
      name: "Starter",
      price: "$49",
      period: "/ month",
      features: ["2 vCPUs", "4 GB RAM", "80 GB SSD", "1 TB Transfer", "Basic Support"],
      cta: "Get Started",
    },
    {
      name: "Business",
      price: "$199",
      period: "/ month",
      features: ["8 vCPUs", "16 GB RAM", "320 GB SSD", "5 TB Transfer", "Business Support"],
      cta: "Choose Plan",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Dedicated vCPUs", "High-Memory Instances", "10+ TB Transfer", "Premium Support", "SLA Guarantee"],
      cta: "Contact Sales",
    },
  ],
  storage: [
    {
      name: "Basic",
      price: "$5",
      period: "/ month",
      features: ["100 GB Storage", "1M Write Operations", "10M Read Operations", "Standard Durability"],
      cta: "Get Started",
    },
    {
      name: "Pro",
      price: "$25",
      period: "/ month",
      features: ["1 TB Storage", "5M Write Operations", "50M Read Operations", "High Durability"],
      cta: "Choose Plan",
      popular: true,
    },
    {
      name: "Archive",
      price: "$0.002",
      period: "/ GB / month",
      features: ["Unlimited Storage", "Low-cost per GB", "Optimized for long-term", "99.999% Durability"],
      cta: "Contact Sales",
    },
  ]
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Pricing List</h2>
          <p className="text-lg text-foreground/70 mb-12">
            Harga transparan bisa dinegosiasikan sesuai kebutuhan.
          </p>
        </div>
        
        <Tabs defaultValue="compute" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-10 max-w-md mx-auto">
            <TabsTrigger value="compute">Web Development</TabsTrigger>
            <TabsTrigger value="storage">IT Course</TabsTrigger>
          </TabsList>
          
          <TabsContent value="compute">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingData.compute.map((plan) => (
                <PricingCard key={plan.name} {...plan} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="storage">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingData.storage.map((plan) => (
                <PricingCard key={plan.name} {...plan} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function PricingCard({ name, price, period, features, cta, popular = false }: {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  popular?: boolean;
}) {
  return (
    <Card className={`flex flex-col relative overflow-hidden ${popular ? 'border-2 border-primary shadow-lg' : 'border'}`}>
      {popular && <div className="bg-primary text-primary-foreground text-sm font-bold text-center py-1">Most Popular</div>}
      <CardHeader className="text-center pt-8">
        <CardTitle className="text-2xl font-headline">{name}</CardTitle>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold tracking-tight">{price}</span>
          <span className="text-sm text-foreground/70">{period}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <Check className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant={popular ? 'default' : 'outline'}>
          <Link href="#contact">{cta}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
