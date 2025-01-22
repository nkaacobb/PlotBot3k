"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { themes } from "@/styles/theme-utils"

export default function StyleVariation3() {
  const theme = themes.rainbow

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto p-4">
        <header className={`${theme.primary} rounded-3xl p-8 mb-6 text-white text-center`}>
          <h1 className="text-4xl font-bold mb-2">PlotBot3k</h1>
          <p className="text-xl opacity-90">Unleash Your Creativity</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {["Story", "Characters", "World", "Chapters"].map((item, index) => (
            <Card
              key={item}
              className={`
                rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow
                ${index === 0 ? "bg-gradient-to-br from-pink-500 to-rose-500" : ""}
                ${index === 1 ? "bg-gradient-to-br from-purple-500 to-violet-500" : ""}
                ${index === 2 ? "bg-gradient-to-br from-blue-500 to-cyan-500" : ""}
                ${index === 3 ? "bg-gradient-to-br from-cyan-500 to-teal-500" : ""}
              `}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{item}</h2>
              <p className="text-white/90">Manage your {item.toLowerCase()} with AI-powered assistance</p>
              <Button variant="secondary" className="mt-4 bg-white/20 text-white hover:bg-white/30 rounded-xl">
                Open {item}
              </Button>
            </Card>
          ))}
        </div>

        <Card className="mt-6 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">Recent Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`${theme.secondary} rounded-2xl p-6`}>
                <h3 className="font-semibold mb-2">Update {i}</h3>
                <p className="text-gray-600">Latest changes and progress</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

