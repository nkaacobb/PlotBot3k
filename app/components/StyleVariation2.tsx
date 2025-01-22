"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { themes } from "@/styles/theme-utils"

export default function StyleVariation2() {
  const theme = themes.blue

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto p-4">
        <div className="flex gap-6">
          <aside className={`w-64 ${theme.cardBg} rounded-2xl shadow-lg p-6`}>
            <div className="space-y-4">
              <div className={`${theme.primary} rounded-xl p-4 text-white`}>
                <h1 className="text-xl font-bold">PlotBot3k</h1>
              </div>
              {["Dashboard", "Chapters", "Characters", "Settings"].map((item) => (
                <Button key={item} variant="ghost" className={`w-full justify-start rounded-xl ${theme.hover}`}>
                  {item}
                </Button>
              ))}
            </div>
          </aside>

          <main className="flex-1">
            <Card className="rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Writing Progress</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`${theme.secondary} rounded-xl p-6`}>
                  <h3 className="text-lg font-semibold mb-2">Today's Goal</h3>
                  <p className="text-3xl font-bold">2,000 words</p>
                </div>
                <div className={`${theme.accent} rounded-xl p-6`}>
                  <h3 className="text-lg font-semibold mb-2">Written Today</h3>
                  <p className="text-3xl font-bold">1,543 words</p>
                </div>
              </div>
            </Card>
          </main>
        </div>
      </div>
    </div>
  )
}

