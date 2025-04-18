"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Code, LineChart, Paintbrush, FileText, HeadphonesIcon, Calculator } from "lucide-react"

export default function Categories() {
  const categories = [
    {
      title: "Development and IT",
      icon: <Code className="h-6 w-6" />,
      jobs: "More than 20,000 jobs posted weekly",
    },
    {
      title: "Sales and Marketing",
      icon: <LineChart className="h-6 w-6" />,
      jobs: "More than 10,000 jobs posted weekly",
    },
    {
      title: "Design and Creativity",
      icon: <Paintbrush className="h-6 w-6" />,
      jobs: "More than 15,000 jobs posted weekly",
    },
    {
      title: "Writing and Translation",
      icon: <FileText className="h-6 w-6" />,
      jobs: "More than 20,000 jobs posted weekly",
    },
    {
      title: "Administration and Customer Service",
      icon: <HeadphonesIcon className="h-6 w-6" />,
      jobs: "More than 10,000 jobs posted weekly",
    },
    {
      title: "Finance and Accounting",
      icon: <Calculator className="h-6 w-6" />,
      jobs: "More than 15,000 jobs posted weekly",
    },
  ]

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
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Professional services for your business
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">Hire the best freelancers</p>
          </div>
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {categories.map((category) => (
              <motion.div key={category.title} variants={item}>
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">{category.icon}</div>
                    <CardTitle>{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{category.jobs}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
