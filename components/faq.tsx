"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export default function FAQ() {
  const faqs = [
    {
      question: "How does the hiring process work?",
      answer:
        "Our platform makes it easy to find and hire talent. Simply post a project with your requirements, review proposals from qualified professionals, interview your top choices, and select the best fit. You can then collaborate through our platform with secure payments and communication tools.",
    },
    {
      question: "What types of professionals can I find on your platform?",
      answer:
        "Our platform hosts a diverse range of professionals across various categories including Development & IT, Design & Creative, Sales & Marketing, Writing & Translation, Admin & Customer Support, and Finance & Accounting. Whether you need a web developer, graphic designer, content writer, or financial analyst, you'll find qualified experts here.",
    },
    {
      question: "How are payments handled?",
      answer:
        "We offer secure payment processing through our escrow system. For hourly projects, professionals log their time and you approve the hours. For fixed-price projects, you can set up milestones and release payments as each milestone is completed. This ensures you only pay for work you're satisfied with.",
    },
    {
      question: "What fees does the platform charge?",
      answer:
        "Clients pay a 5% service fee on top of the amount paid to the professional. Freelancers pay a service fee that ranges from 5-20% depending on their lifetime billings with a specific client (the fee decreases as they bill more with the same client).",
    },
    {
      question: "How do you ensure quality professionals?",
      answer:
        "We have a rigorous vetting process for all professionals on our platform. This includes skills assessments, portfolio reviews, and identity verification. Additionally, our rating and review system provides transparency about each professional's past performance.",
    },
    {
      question: "Can I hire professionals for long-term projects?",
      answer:
        "Many clients use our platform to find long-term talent. You can hire professionals on an ongoing basis, and many client-freelancer relationships on our platform last for years.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-xl text-muted-foreground">Find answers to common questions about our platform</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
