import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Server, Database, Box, Globe } from "lucide-react"

const products = [
  {
    icon: <Server className="h-10 w-10 text-primary" />,
    name: "Compute Engine",
    description: "Scalable virtual machines to run any workload, from small applications to large-scale enterprise services."
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    name: "Object Storage",
    description: "Secure, durable, and highly available object storage for your photos, videos, and unstructured data."
  },
  {
    icon: <Box className="h-10 w-10 text-primary" />,
    name: "Managed Kubernetes",
    description: "Deploy, manage, and scale containerized applications using our fully managed Kubernetes service."
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    name: "Global CDN",
    description: "Accelerate your content delivery worldwide with our low-latency, high-performance content delivery network."
  }
]

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Our Core Products</h2>
          <p className="text-lg text-foreground/70 mb-12">
            A comprehensive suite of cloud services designed for performance, security, and scalability.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.name} className="flex flex-col items-center text-center p-8 bg-card border-2 border-transparent hover:border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">
                {product.icon}
              </div>
              <CardTitle className="text-xl font-headline mb-2">{product.name}</CardTitle>
              <CardDescription className="text-base text-foreground/70 flex-1">
                {product.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
