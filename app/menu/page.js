import MenuSection from "../Menu"

const menuData = {
  appetizers: [
    {
      name: "Greek Salad",
      price: "$12.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      
    },
    {
      name: "Bruschetta",
      price: "$7.99", 
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      
    },
    {
      name: "Lemon Desert",
      price: "$8.50",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    
    }
  ],
  mains: [
    {
      name: "Grilled Fish",
      price: "$22.99",
      description: "Our signature grilled fish served with seasonal vegetables and our special lemon herb sauce.",
      
    },
    {
      name: "Pasta Primavera",
      price: "$18.99",
      description: "Fresh pasta tossed with seasonal vegetables, olive oil, garlic, and herbs. A vegetarian delight.",
    
    },
    {
      name: "Mediterranean Bowl",
      price: "$16.99",
      description: "A healthy bowl with quinoa, roasted vegetables, chickpeas, and our signature tahini dressing.",
     
    }
  ],
  desserts: [
    {
      name: "Baklava",
      price: "$6.99",
      description: "Traditional Greek pastry with layers of phyllo, nuts, and honey syrup.",
     
    },
    {
      name: "Tiramisu",
      price: "$7.99",
      description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream.",
    
    }
  ]
}

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#495E57] mb-4">Our Menu</h1>
        </div>

        <MenuSection title="Appetizers" items={menuData.appetizers} />
        <MenuSection title="Main Courses" items={menuData.mains} />
        <MenuSection title="Desserts" items={menuData.desserts} />
      </div>
    </div>
  )
}
