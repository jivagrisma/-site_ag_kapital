"use client"
import { useState, useEffect, useCallback, useMemo } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

type Professional = {
  id: number
  name: string
  avatar: string
  title: string
  description: string
  rating: number
  reviews: number
  skills: string[]
  hourlyRate: string
  availability: "Available now" | "Limited Availability"
  category: string
}

export default function FeaturedProfessionalsFiltered() {
  const categories = [
    "All categories",
    "Development and IT",
    "Sales and marketing",
    "Design and creativity",
    "Writing and translation",
    "Administration and customer service",
    "Finance and accounting",
  ]

  const professionals: Professional[] = [
    // Development and IT
    {
      id: 1,
      name: "Alex Morgan",
      avatar: "/images/alex-morgan.jpg",
      title: "Professional software developer in office uniform",
      description: "Full-stack developer with over 8 years of experience in React, Node.js, and AWS.",
      rating: 4.9,
      reviews: 127,
      skills: ["React", "Node.js", "AWS", "TypeScript"],
      hourlyRate: "$85",
      availability: "Available now",
      category: "Development and IT",
    },
    {
      id: 2,
      name: "Talí Hazar",
      avatar: "/images/tali-hazar.jpg",
      title: "Professional in a business suit, loosening his tie",
      description: "DevOps and Cloud Infrastructure Specialist with experience in AWS, Azure, and GCP.",
      rating: 4.8,
      reviews: 156,
      skills: ["DevOps", "AWS", "Kubernetes", "CI/CD"],
      hourlyRate: "$95",
      availability: "Available now",
      category: "Development and IT",
    },
    {
      id: 3,
      name: "Vicky Ferrari",
      avatar: "/images/vicky-ferrari.jpg",
      title: "Backend developer with glasses",
      description: "Backend specialist with expertise in microservices, databases, and API development.",
      rating: 4.7,
      reviews: 89,
      skills: ["Java", "Spring Boot", "MongoDB", "Microservices"],
      hourlyRate: "$90",
      availability: "Limited Availability",
      category: "Development and IT",
    },
    {
      id: 4,
      name: "Marcus Johnson",
      avatar: "/images/marcus-johnson.jpg",
      title: "Mobile developer with headphones",
      description: "Mobile app developer specializing in cross-platform solutions and native development.",
      rating: 4.9,
      reviews: 112,
      skills: ["React Native", "Flutter", "iOS", "Android"],
      hourlyRate: "$88",
      availability: "Available now",
      category: "Development and IT",
    },

    // Design and creativity
    {
      id: 5,
      name: "Sarah Chen",
      avatar: "/images/sarah-chen.jpg",
      title: "Professional designer",
      description: "UI/UX Designer and Frontend Developer specializing in responsive and accessible web applications.",
      rating: 5.0,
      reviews: 93,
      skills: ["UI/UX", "React", "Figma", "WCAG"],
      hourlyRate: "$90",
      availability: "Limited Availability",
      category: "Design and creativity",
    },
    {
      id: 6,
      name: "Miguel Rodriguez",
      avatar: "/images/miguel-rodriguez.jpg",
      title: "Graphic designer with colorful background",
      description: "Brand identity specialist with a focus on creating memorable visual experiences.",
      rating: 4.9,
      reviews: 78,
      skills: ["Branding", "Illustration", "Adobe CC", "Typography"],
      hourlyRate: "$75",
      availability: "Available now",
      category: "Design and creativity",
    },
    {
      id: 7,
      name: "Emma Thompson",
      avatar: "/images/emma-thompson.jpg",
      title: "Motion designer with tablet",
      description: "Motion graphics and animation expert creating engaging visual storytelling.",
      rating: 4.8,
      reviews: 64,
      skills: ["After Effects", "3D Animation", "Video Editing", "Storyboarding"],
      hourlyRate: "$85",
      availability: "Available now",
      category: "Design and creativity",
    },
    {
      id: 8,
      name: "Alvaro Diez",
      avatar: "/images/alvaro-diez.jpg",
      title: "Product designer with prototype",
      description: "Product designer with background in industrial design and digital interfaces.",
      rating: 4.7,
      reviews: 52,
      skills: ["Product Design", "Prototyping", "User Research", "Sketch"],
      hourlyRate: "$95",
      availability: "Limited Availability",
      category: "Design and creativity",
    },

    // Sales and marketing
    {
      id: 9,
      name: "Jessica Williams",
      avatar: "/images/jessica-williams.webp",
      title: "Digital marketing specialist with analytics dashboard",
      description: "Growth marketing expert specializing in conversion optimization and customer acquisition.",
      rating: 4.9,
      reviews: 87,
      skills: ["SEO", "PPC", "Analytics", "Growth Strategy"],
      hourlyRate: "$80",
      availability: "Available now",
      category: "Sales and marketing",
    },
    {
      id: 10,
      name: "Robert Chen",
      avatar: "/images/robert-chen.jpg",
      title: "Sales consultant in business attire",
      description: "B2B sales specialist with experience in SaaS and enterprise solution selling.",
      rating: 4.7,
      reviews: 63,
      skills: ["B2B Sales", "CRM", "Lead Generation", "Negotiation"],
      hourlyRate: "$85",
      availability: "Available now",
      category: "Sales and marketing",
    },
    {
      id: 11,
      name: "Sophia Martinez",
      avatar: "/images/sofia-martinez-new.webp",
      title: "Social media manager with phone",
      description: "Social media strategist helping brands build meaningful online communities.",
      rating: 4.8,
      reviews: 91,
      skills: ["Social Media", "Content Strategy", "Community Management", "Paid Social"],
      hourlyRate: "$70",
      availability: "Limited Availability",
      category: "Sales and marketing",
    },
    {
      id: 12,
      name: "Daniel Kim",
      avatar: "/images/daniel-kim.jpg",
      title: "Marketing analyst with charts",
      description: "Data-driven marketing analyst specializing in campaign optimization and ROI tracking.",
      rating: 4.6,
      reviews: 48,
      skills: ["Marketing Analytics", "A/B Testing", "Attribution Modeling", "Data Visualization"],
      hourlyRate: "$75",
      availability: "Available now",
      category: "Sales and marketing",
    },

    // Writing and translation
    {
      id: 13,
      name: "Olivia Johnson",
      avatar: "/images/olivia-johnson.webp",
      title: "Content writer with laptop",
      description: "Versatile content writer specializing in technology, SaaS, and B2B content marketing.",
      rating: 4.9,
      reviews: 104,
      skills: ["Blog Writing", "Whitepapers", "SEO Content", "Technical Writing"],
      hourlyRate: "$65",
      availability: "Available now",
      category: "Writing and translation",
    },
    {
      id: 14,
      name: "Carlos Mendez",
      avatar: "/images/carlos-mendez.webp",
      title: "Translator with books",
      description: "Professional translator with expertise in technical and legal document translation.",
      rating: 4.8,
      reviews: 76,
      skills: ["Spanish", "English", "Legal Translation", "Technical Translation"],
      hourlyRate: "$60",
      availability: "Available now",
      category: "Writing and translation",
    },
    {
      id: 15,
      name: "Aisha Patel",
      avatar: "/images/aisha-patel.jpg",
      title: "Copywriter with marketing materials",
      description: "Conversion-focused copywriter helping brands craft compelling messages that sell.",
      rating: 5.0,
      reviews: 82,
      skills: ["Copywriting", "Email Campaigns", "Landing Pages", "Brand Voice"],
      hourlyRate: "$75",
      availability: "Limited Availability",
      category: "Writing and translation",
    },
    {
      id: 16,
      name: "Thomas Schmidt",
      avatar: "/images/thomas-schmidt.jpg",
      title: "Technical writer with documentation",
      description: "Technical writer specializing in software documentation, user guides, and API references.",
      rating: 4.7,
      reviews: 59,
      skills: ["Technical Documentation", "API Docs", "User Guides", "Knowledge Bases"],
      hourlyRate: "$70",
      availability: "Available now",
      category: "Writing and translation",
    },

    // Finance and accounting
    {
      id: 17,
      name: "Andrew Wilson",
      avatar: "/images/andrew-wilson.webp",
      title: "Financial analyst with spreadsheets",
      description: "Experienced financial analyst specializing in financial modeling and investment analysis.",
      rating: 4.9,
      reviews: 68,
      skills: ["Financial Modeling", "Valuation", "Excel", "Investment Analysis"],
      hourlyRate: "$95",
      availability: "Available now",
      category: "Finance and accounting",
    },
    {
      id: 18,
      name: "Lisa Chang",
      avatar: "/images/lisa-chang.jpg",
      title: "Accountant with calculator",
      description: "Certified accountant with expertise in tax planning and financial reporting.",
      rating: 4.8,
      reviews: 73,
      skills: ["Tax Planning", "Financial Reporting", "Bookkeeping", "Compliance"],
      hourlyRate: "$85",
      availability: "Limited Availability",
      category: "Finance and accounting",
    },
    {
      id: 19,
      name: "Michael Brown",
      avatar: "/images/michael-brown.jpg",
      title: "Financial consultant reviewing documents",
      description: "Strategic financial consultant helping startups and SMBs optimize financial operations.",
      rating: 4.7,
      reviews: 51,
      skills: ["Financial Strategy", "Cash Flow Management", "Fundraising", "Business Planning"],
      hourlyRate: "$100",
      availability: "Available now",
      category: "Finance and accounting",
    },
    {
      id: 20,
      name: "Natalie Garcia",
      avatar: "/images/natalie-garcia.jpg",
      title: "Bookkeeper with financial software",
      description: "Detail-oriented bookkeeper specializing in small business accounting and financial organization.",
      rating: 4.9,
      reviews: 94,
      skills: ["Bookkeeping", "QuickBooks", "Xero", "Financial Statements"],
      hourlyRate: "$60",
      availability: "Available now",
      category: "Finance and accounting",
    },
  ]

  // Para el carrusel en "All categories" tab
  const [currentPage, setCurrentPage] = useState(0)
  const [featuredProfessionals, setFeaturedProfessionals] = useState<Professional[]>([])
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})
  const cardsPerPage = 3

  // Seleccionar profesionales destacados de diferentes categorías
  useEffect(() => {
    // Función para seleccionar profesionales destacados
    const selectFeaturedProfessionals = () => {
      try {
        // Obtener un profesional de cada categoría principal para diversidad
        const categoryMap = new Map<string, Professional>()
        const uniqueCategories = [...new Set(professionals.map((p) => p.category))]

        // Seleccionar el mejor profesional de cada categoría
        uniqueCategories.forEach((category) => {
          const profsInCategory = professionals.filter((p) => p.category === category)
          const bestProf = profsInCategory.reduce(
            (best, current) => (current.rating > best.rating ? current : best),
            profsInCategory[0],
          )
          categoryMap.set(category, bestProf)
        })

        // Convertir el mapa a array
        const featured = Array.from(categoryMap.values())

        // Mezclar el array para aleatorizar el orden (con una semilla fija para evitar cambios en cada renderizado)
        const shuffled = [...featured].sort(() => 0.5 - Math.random())

        return shuffled
      } catch (error) {
        console.error("Error al seleccionar profesionales destacados:", error)
        // Fallback: usar los primeros profesionales
        return professionals.slice(0, 5)
      }
    }

    // Solo actualizar si featuredProfessionals está vacío
    if (featuredProfessionals.length === 0) {
      setFeaturedProfessionals(selectFeaturedProfessionals())
    }
  }, [professionals, featuredProfessionals.length]) // Añadido professionals como dependencia

  const totalPages = Math.ceil(featuredProfessionals.length / cardsPerPage)

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }, [totalPages])

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }, [totalPages])

  // Memoizar los profesionales actuales para evitar recálculos innecesarios
  const currentPageItems = useMemo(() => {
    if (featuredProfessionals.length === 0) {
      return professionals.slice(0, cardsPerPage)
    }
    const startIndex = currentPage * cardsPerPage
    const endIndex = Math.min(startIndex + cardsPerPage, featuredProfessionals.length)
    return featuredProfessionals.slice(startIndex, endIndex)
  }, [currentPage, featuredProfessionals, professionals, cardsPerPage])

  // Esta función ahora simplemente devuelve el valor memoizado
  const getCurrentPageItems = useCallback(() => {
    return currentPageItems
  }, [currentPageItems])

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({
      ...prev,
      [id]: true,
    }))
  }

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

  const ProfessionalCard = ({ professional }: { professional: Professional }) => (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="relative pb-0">
        <div className="absolute top-4 right-4 z-10">
          <Badge variant={professional.availability === "Available now" ? "default" : "secondary"}>
            {professional.availability}
          </Badge>
        </div>
        <div className="aspect-video w-full overflow-hidden rounded-t-lg relative">
          {imageErrors[professional.id] ? (
            <div className="h-full w-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
              <span className="text-lg font-medium text-slate-500 dark:text-slate-400">
                {professional.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          ) : (
            <Image
              src={professional.avatar || "/placeholder.svg"}
              alt={professional.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              onError={() => handleImageError(professional.id)}
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-xl">{professional.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" aria-hidden="true" />
            <span className="font-medium">{professional.rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-1">({professional.reviews} reviews)</p>
        <p className="mb-4">{professional.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {professional.skills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
        <p className="font-semibold">Starting at {professional.hourlyRate}/hour</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View profile
        </Button>
      </CardFooter>
    </Card>
  )

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured professionals</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with our top-notch professionals who consistently deliver exceptional results for their clients.
            </p>
          </div>

          <Tabs defaultValue="All categories" className="w-full">
            <TabsList className="flex flex-wrap h-auto justify-center mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="m-1">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* All categories tab with carousel */}
            <TabsContent value="All categories">
              <div className="relative">
                <div className="overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPage}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className="grid gap-6 md:grid-cols-3"
                    >
                      {getCurrentPageItems().map((professional) => (
                        <motion.div key={professional.id} variants={item}>
                          <ProfessionalCard professional={professional} />
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Carousel controls */}
                <div className="flex justify-between items-center mt-8">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={prevPage}
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </Button>

                  <div className="flex gap-2 justify-center">
                    <Button variant="outline" className="w-full">
                      View All Professionals
                    </Button>
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={nextPage}
                    aria-label="Next page"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Category-specific tabs with grid layout */}
            {categories.slice(1).map((category) => (
              <TabsContent key={category} value={category}>
                <motion.div
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {professionals
                    .filter((pro) => pro.category === category)
                    .map((professional) => (
                      <motion.div key={professional.id} variants={item}>
                        <ProfessionalCard professional={professional} />
                      </motion.div>
                    ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
