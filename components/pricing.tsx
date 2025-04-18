"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

export default function Pricing() {
  const clientPlans = [
    {
      name: "Beginner",
      description: "Perfect for small businesses and startups.",
      price: "$99",
      period: "month",
      features: [
        "Up to 5 active projects",
        "Basic freelancer hiring",
        "Secure payment processing",
        "Hosting service",
        "Priority support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with ongoing needs.",
      price: "$249",
      period: "month",
      features: [
        "Up to 15 active projects",
        "Advanced talent search",
        "Secure payment processing",
        "Hosting service",
        "Priority support",
        "Team collaboration tools",
      ],
      cta: "Get started",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For organizations with large development needs.",
      price: "$599",
      period: "month",
      features: [
        "Hosting service",
        "Elite talent search",
        "Dedicated account manager",
        "Custom legal agreements",
        "24/7 premium support",
        "Advanced analytics and reporting",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  const freelancerPlans = [
    {
      name: "Basic",
      description: "Perfect for freelancers just starting out.",
      price: "Free",
      period: "",
      features: [
        "Up to 10 proposals per month",
        "Basic profile customization",
        "Standard visibility in search results",
        "Access to entry-level projects",
        "Standard payment processing (5% fee)",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Plus",
      description: "For established freelancers looking to grow.",
      price: "$39",
      period: "month",
      features: [
        "Up to 50 proposals per month",
        "Enhanced profile customization",
        "Boosted visibility in search results",
        "Access to all project tiers",
        "Reduced payment processing (3% fee)",
        "Skills certification",
      ],
      cta: "Get started",
      popular: true,
    },
    {
      name: "Premium",
      description: "For top-tier professionals with proven track records.",
      price: "$79",
      period: "month",
      features: [
        "Unlimited proposals",
        "Premium profile customization",
        "Top visibility in search results",
        "Featured in talent spotlights",
        "Lowest payment processing (2% fee)",
        "Skills certification",
        "Dedicated success manager",
      ],
      cta: "Get Started",
      popular: false,
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
        <div className="flex flex-col gap-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible plans designed to fit your business needs and budget.
          </p>

          <Tabs defaultValue="clients" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="clients">For Clients</TabsTrigger>
              <TabsTrigger value="freelancers">For Freelancers</TabsTrigger>
            </TabsList>

            <TabsContent value="clients" className="mt-8">
              <motion.div
                className="grid gap-6 md:grid-cols-3"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
              >
                {clientPlans.map((plan, index) => (
                  <motion.div key={index} variants={item}>
                    <Card className={`h-full flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                      {plan.popular && (
                        <div className="bg-primary text-primary-foreground text-sm font-medium py-1 px-4 rounded-t-lg w-full text-center">
                          Most Popular
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>{plan.name}</CardTitle>
                        <CardDescription>{plan.description}</CardDescription>
                        <div className="mt-4 flex items-baseline">
                          <span className="text-3xl font-bold">{plan.price}</span>
                          {plan.period && <span className="ml-1 text-muted-foreground">/{plan.period}</span>}
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="space-y-3">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                          {plan.cta}
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="freelancers" className="mt-8">
              <motion.div
                className="grid gap-6 md:grid-cols-3"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
              >
                {freelancerPlans.map((plan, index) => (
                  <motion.div key={index} variants={item}>
                    <Card className={`h-full flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                      {plan.popular && (
                        <div className="bg-primary text-primary-foreground text-sm font-medium py-1 px-4 rounded-t-lg w-full text-center">
                          Most Popular
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>{plan.name}</CardTitle>
                        <CardDescription>{plan.description}</CardDescription>
                        <div className="mt-4 flex items-baseline">
                          <span className="text-3xl font-bold">{plan.price}</span>
                          {plan.period && <span className="ml-1 text-muted-foreground">/{plan.period}</span>}
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="space-y-3">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                          {plan.cta}
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
