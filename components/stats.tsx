"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Stats() {
  const stats = [
    { value: "96%", label: "Customer Satisfaction Rate" },
    { value: "85%", label: "Loyalty Rate" },
    { value: "4.8/5", label: "Average rating across all projects" },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why do our users love us?</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</span>
                <span className="text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-6">Ready to experience it for yourself?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied clients and freelancers on our platform today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Hire Talent</Button>
              <Button size="lg" variant="outline">
                Offer your services
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">Photos by Boxed Water Is Better</p>
          </div>
        </div>
      </div>
    </section>
  )
}
