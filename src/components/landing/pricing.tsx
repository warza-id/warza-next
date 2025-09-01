import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check } from "lucide-react"
import Link from "next/link"

const pricingData = {
  apps: [
    {
      name: "Free",
      price: "Rp0,-",
      period: "/ Selamanya",
      features: [
        "All Fitur Basic", 
        "All App Ekosistem",
        "Untuk UMKM yang memulai usaha"],
      cta: "Tanya",
    },
    {
      name: "Pro",
      price: "50rb",
      period: "/ Bulan",
      features: [
        "All Fitur Free", 
        "Unlimited User", 
        "Untuk Usaha yang memiliki karyawan"],
      cta: "Tanya",
      popular: true,
    },
    {
      name: "Corp",
      price: "100rb",
      period: "/ Bulan",
      features: [
        "All Fitur Pro", 
        "Unlimited Branch", 
        "Untuk Usaha yang memiliki cabang"],
      cta: "Tanya",
    },
  ],
  compute: [
    {
      name: "Flash",
      price: "5Jt",
      period: "/ One Time Payment",
      features: [
        "Web Company Profile", 
        "Handover Server", 
        "Handover Code", 
        "Live before 7 day", 
        "Down Payment 10%"],
      cta: "Tanya",
    },
    {
      name: "Mitra",
      price: "500rb",
      period: "/ month",
      features: [
        "All Web Category", 
        "Full Maintenance", 
        "Content Management", 
        "Digital Marketing", 
        "Like own IT Employee"],
      cta: "Tanya",
      popular: true,
    },
    {
      name: "Custom",
      price: "Nego",
      period: "",
      features: [
        "Negotiate Pricing", 
        "Custom Application", 
        "Web Application", 
        "Mobile Application", 
        "All Services"],
      cta: "Tanya",
    },
  ],
  storage: [
    {
      name: "Software Quality Assurance",
      price: "100rb",
      period: "/ 120 Min",
      features: [
        "Manual Testing Practice", 
        "Automation Testing Practice", 
        "Create Document Testing", 
        "How to SQA Profesional"],
      cta: "Consult",
    },
    {
      name: "Programmer",
      price: "150rb",
      period: "/ 120 Min",
      features: [
        "Tech Platform : Web, Mobile, DB", 
        "Tech Stack : Php, NextJs, React Native", 
        "Deployment Practice", 
        "How to Programmer Profesional"],
      cta: "Consult",
      popular: true,
    },
    {
      name: "Scrum Master",
      price: "180rb",
      period: "/ 120 Min",
      features: [
        "Agile Practice", 
        "Waterfall Practice", 
        "Scrum", 
        "How Scrum Master"],
      cta: "Consult",
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
        
        <Tabs defaultValue="apps" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-10 max-w-md mx-auto">
            <TabsTrigger value="apps">Sorware as a Service</TabsTrigger>
            <TabsTrigger value="compute">Web Development</TabsTrigger>
            <TabsTrigger value="storage">IT Course</TabsTrigger>
          </TabsList>
          
          <TabsContent value="apps">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingData.apps.map((plan) => (
                <PricingCard key={plan.name} {...plan} />
              ))}
            </div>
          </TabsContent>

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
