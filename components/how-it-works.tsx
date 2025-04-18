"use client"

import { motion } from "framer-motion"
import { FileText, Users, CheckCircle } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Post Your Project",
      description:
        "Describe your project needs, required skills, and set your budget. Our intelligent matching system will find the ideal talent.",
      icon: <FileText className="h-8 w-8" />,
    },
    {
      number: 2,
      title: "Connect with Experts",
      description:
        "Review profiles, portfolios, and ratings. Compare proposals and choose the freelancer that best suits your needs.",
      icon: <Users className="h-8 w-8" />,
    },
    {
      number: 3,
      title: "Complete Your Project",
      description:
        "Collaborate through our secure platform with messaging, file sharing, and milestone payments. Release funds only when you're satisfied.",
      icon: <CheckCircle className="h-8 w-8" />,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How it Works</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform makes it easy to connect with top talent and efficiently manage projects from start to
              finish.
            </p>
          </div>
          <motion.div
            className="grid gap-8 md:grid-cols-3 mt-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {steps.map((step) => (
              <motion.div key={step.number} className="flex flex-col items-center text-center" variants={item}>
                <div className="relative mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute top-0 right-0 -mr-3 -mt-3 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
