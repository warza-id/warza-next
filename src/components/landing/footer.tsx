import { Cloud, Github, Twitter, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: <Github className="h-5 w-5" />, href: "#" },
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/warza.indonesia/" },
  ]
  
  const footerLinks = [
    { title: "Products", links: [
      { name: "Beekasir", href: "#products" }, 
      { name: "Compro", href: "#products" }, 
      { name: "Bazet", href: "#products" }] },
    { title: "Services", links: [
      { name: "Web Development", href: "#pricing" }, 
      { name: "IT Course", href: "#pricing" }] },
    { title: "Resources", links: [
      { name: "Account Deletion", href: "/account-deletion" }, 
      { name: "Privacy Policy", href: "/privacy-policy" }, 
      { name: "Contact", href: "#contact" }] }
  ]

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/img/warza-teknologi.png" width={100} height={50} alt="Logo Warza" />
            </Link>
            <p className="text-sm text-foreground/70 max-w-xs">Alamat : Perumahan Panorama Asri,<br/>Jl. Sumbawa no 27, Sukahaji, Majalengka, Jawa Barat, Indonesia 45471</p>
          </div>
          
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-foreground/70 hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">&copy; {new Date().getFullYear()} Warza. All rights reserved.</p>
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <Link href={link.href} aria-label={link.name} target="blank">
                  {link.icon}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
