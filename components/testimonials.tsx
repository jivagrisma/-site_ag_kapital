"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"
import { useState, useCallback } from "react"
import { useInView } from "react-intersection-observer"

// Importar solo los testimonios necesarios
import { clientTestimonials, freelancerTestimonials } from "@/lib/testimonials"

export default function Testimonials() {
  // Estado para rastrear errores de carga de imágenes
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})
  const [activeTab, setActiveTab] = useState("client")

  // Usar IntersectionObserver para cargar datos cuando el componente sea visible
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleImageError = useCallback((id: number, isClient: boolean) => {
    setImageErrors((prev) => ({
      ...prev,
      [`${isClient ? "client" : "freelancer"}-${id}`]: true,
    }))
  }, [])

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

  // Componente optimizado para renderizar testimonios
  const TestimonialCard = useCallback(
    ({
      testimonial,
      isClient,
    }: {
      testimonial: (typeof clientTestimonials)[0]
      isClient: boolean
    }) => {
      const errorKey = `${isClient ? "client" : "freelancer"}-${testimonial.id}`
      const hasError = imageErrors[errorKey]

      return (
        <Card className="h-full">
          <CardContent className="p-6">
            <Quote className="h-8 w-8 text-primary/40 mb-4" aria-hidden="true" />
            <p className="mb-6 text-muted-foreground">{testimonial.quote}</p>
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border border-muted relative">
                {hasError ? (
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                ) : (
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                      onError={() => handleImageError(testimonial.id, isClient)}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2UyZThmMCIvPjwvc3ZnPg=="
                    />
                  </div>
                )}
              </Avatar>
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )
    },
    [imageErrors, handleImageError],
  )

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Testimonials</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              See what our clients and freelancers have to say about their experience with our platform.
            </p>
          </div>

          {inView ? (
            <Tabs defaultValue="client" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="client">Client Reviews</TabsTrigger>
                <TabsTrigger value="freelancer">Freelance Success</TabsTrigger>
              </TabsList>

              <TabsContent value="client" className="mt-8">
                <motion.div
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {clientTestimonials.map((testimonial) => (
                    <motion.div key={testimonial.id} variants={item}>
                      <TestimonialCard testimonial={testimonial} isClient={true} />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="freelancer" className="mt-8">
                <motion.div
                  className="grid gap-6 md:grid-cols-3"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {freelancerTestimonials.map((testimonial) => (
                    <motion.div key={testimonial.id} variants={item}>
                      <TestimonialCard testimonial={testimonial} isClient={false} />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          ) : (
            <div className="py-20 flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
