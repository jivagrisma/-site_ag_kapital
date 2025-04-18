// Simulación de datos para profesionales
// En un entorno real, esto sería una llamada a una API o base de datos

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

// Datos de profesionales (mismos que en el componente original)
const allProfessionals: Professional[] = [
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
  // ... resto de profesionales
]

// Función para obtener profesionales por categoría
export async function getProfessionalsByCategory(category: string): Promise<Professional[]> {
  // Simular tiempo de carga
  await new Promise((resolve) => setTimeout(resolve, 300))

  if (category === "All categories") {
    return allProfessionals
  }

  return allProfessionals.filter((pro) => pro.category === category)
}

// Función para obtener profesionales destacados
export async function getFeaturedProfessionals(): Promise<Professional[]> {
  // Simular tiempo de carga
  await new Promise((resolve) => setTimeout(resolve, 300))

  // Lógica para seleccionar profesionales destacados
  const categoryMap = new Map<string, Professional>()
  const uniqueCategories = [...new Set(allProfessionals.map((p) => p.category))]

  uniqueCategories.forEach((category) => {
    const profsInCategory = allProfessionals.filter((p) => p.category === category)
    const bestProf = profsInCategory.reduce(
      (best, current) => (current.rating > best.rating ? current : best),
      profsInCategory[0],
    )
    categoryMap.set(category, bestProf)
  })

  return Array.from(categoryMap.values())
}
