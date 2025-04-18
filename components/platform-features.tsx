"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, MessageSquare, ClipboardList, Shield, Wallet, BarChart } from "lucide-react"

export default function PlatformFeatures() {
  const features = [
    {
      title: "Secure Payments",
      description: "Our escrow system ensures funds are only released when the work is completed to your satisfaction.",
      icon: <CreditCard className="h-6 w-6" />,
    },
    {
      title: "Real-Time Messaging",
      description: "Communicate efficiently with integrated chat, video calling, and file sharing tools.",
      icon: <MessageSquare className="h-6 w-6" />,
    },
    {
      title: "Project Management",
      description: "Track progress with milestones, tasks, timelines, and customized project dashboards.",
      icon: <ClipboardList className="h-6 w-6" />,
    },
    {
      title: "Quality Assurance",
      description: "We vet every professional on our platform to ensure high-quality service delivery.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Flexible Payments",
      description: "Pay hourly, with a fixed price, or by milestones with multiple payment methods.",
      icon: <Wallet className="h-6 w-6" />,
    },
    {
      title: "Analytics and Reporting",
      description: "Track project performance, time spent, and ROI with detailed reports and insights.",
      icon: <BarChart className="h-6 w-6" />,
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
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Platform Features</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for successful project collaboration
            </p>
          </div>
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={item}>
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
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
