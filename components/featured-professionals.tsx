"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

export default function FeaturedProfessionals() {
  const [professionals] = useState([
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "Full Stack Developer",
      rating: 4.9,
      reviews: 127,
      hourlyRate: "$85",
      skills: ["React", "Node.js", "TypeScript"],
    },
    {
      id: 2,
      name: "Sarah Williams",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "UI/UX Designer",
      rating: 4.8,
      reviews: 93,
      hourlyRate: "$75",
      skills: ["Figma", "Adobe XD", "User Research"],
    },
    {
      id: 3,
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "DevOps Engineer",
      rating: 4.7,
      reviews: 84,
      hourlyRate: "$90",
      skills: ["AWS", "Docker", "Kubernetes"],
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "Digital Marketing Specialist",
      rating: 4.9,
      reviews: 112,
      hourlyRate: "$65",
      skills: ["SEO", "Content Strategy", "Analytics"],
    },
  ])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Discover a universe of freelance professionals
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">Ready to collaborate with you</p>
          </div>
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {professionals.map((professional) => (
              <motion.div key={professional.id} variants={item}>
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader className="flex flex-col items-center text-center">
                    <Avatar className="h-20 w-20 mb-4">
                      <AvatarImage src={professional.avatar} alt={professional.name} />
                      <AvatarFallback>{professional.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{professional.name}</h3>
                      <p className="text-sm text-muted-foreground">{professional.title}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{professional.rating}</span>
                      <span className="text-muted-foreground text-sm">({professional.reviews} reviews)</span>
                    </div>
                    <p className="text-center font-semibold">{professional.hourlyRate}/hr</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {professional.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2 justify-center">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                    <Button size="sm">Hire</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex justify-center mt-8">
            <Button size="lg">View All Professionals</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
