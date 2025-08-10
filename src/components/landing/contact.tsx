"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useTransition } from "react"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must not exceed 500 characters." }),
})

async function submitConsultationRequest(data: z.infer<typeof formSchema>) {
  console.log("New consultation request:", data);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  // In a real app, you would handle the submission here, e.g., send an email or save to a database.
  return { success: true, message: "Thank you! Your request has been sent." };
}

export default function Contact() {
  const { toast } = useToast()
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const result = await submitConsultationRequest(values);
      if (result.success) {
        toast({
          title: "Request Sent!",
          description: result.message,
        })
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: result.message || "Please try again.",
        })
      }
    });
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Anda memiliki pertanyaan ?</h2>
            <p className="text-lg text-foreground/70 mb-6">
              Hubungi kami kapanpun melalui semua kontak yang ada disini: Whatsapp, Telphone, Email, Instagram, dan Form Kontak Kami.
            </p>
            <p className="text-foreground/70">
              Konsultasi gratis, dan akan terhubung langsung dengan kami tanpa melalui bot.
            </p>
          </div>
          <div className="max-w-lg mx-auto w-full bg-card p-8 rounded-lg shadow-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Innovate Inc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Work Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@company.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How can we help?</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your project or requirements..." {...field} rows={4}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Request Consultation'
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
