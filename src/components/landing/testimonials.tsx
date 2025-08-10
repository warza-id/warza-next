import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote: "ApexCloud's infrastructure has been a game-changer for our scalability. We've seen a 300% increase in performance since migrating.",
    name: "Jane Doe",
    title: "CTO, Innovate Inc.",
    avatar: "JD",
    logoUrl: "https://placehold.co/120x40.png",
    logoHint: "logo technology"
  },
  {
    quote: "The reliability and security are top-notch. We trust ApexCloud with our most critical data, and they've never let us down.",
    name: "John Smith",
    title: "CEO, SecureNow",
    avatar: "JS",
    logoUrl: "https://placehold.co/120x40.png",
    logoHint: "logo security"
  },
  {
    quote: "Their developer tools and managed services save us hundreds of hours a month, allowing our team to focus on innovation.",
    name: "Emily White",
    title: "Head of Engineering, DevTools Co.",
    avatar: "EW",
    logoUrl: "https://placehold.co/120x40.png",
    logoHint: "logo developer"
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-foreground/70 mb-12">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col justify-between p-6 bg-card">
              <CardContent className="p-0 flex-1 mb-6">
                <p className="text-lg italic text-foreground/90">"{testimonial.quote}"</p>
              </CardContent>
              <div className="mt-auto">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={`https://placehold.co/40x40.png`} alt={testimonial.name} data-ai-hint="person face" />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-foreground/70">{testimonial.title}</p>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <Image src={testimonial.logoUrl} alt={`${testimonial.name}'s company logo`} width={120} height={40} className="opacity-60" data-ai-hint={testimonial.logoHint} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
