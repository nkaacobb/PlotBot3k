"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { themes } from "@/styles/theme-utils"

export default function StyleVariation1() {
  const theme = themes.purple

  return (
    <div className="min-h-screen bg-purple-50">
      <div className="container mx-auto p-4">
        <header className={`${theme.primary} rounded-2xl p-6 mb-6 text-white`}>
          <h1 className="text-3xl font-bold">PlotBot3k</h1>
          <p className="opacity-90">Your AI-Powered Writing Assistant</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
            <div className="space-y-4">
              <div className={`${theme.secondary} rounded-xl p-4`}>
                <p className="text-sm text-purple-600">Total Words</p>
                <p className="text-2xl font-bold">24,567</p>
              </div>
              <div className={`${theme.accent} rounded-xl p-4`}>
                <p className="text-sm text-purple-600">Chapters</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 rounded-2xl shadow-lg col-span-2">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`${theme.hover} rounded-xl p-4 transition-colors`}>
                  <p className="text-sm text-purple-600">Chapter {i} Updated</p>
                  <p className="text-gray-600">2 hours ago</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-6 flex gap-4">
          <Button className={`${theme.button} rounded-xl px-6 py-3`}>New Chapter</Button>
          <Button variant="outline" className={`${theme.buttonOutline} rounded-xl px-6 py-3`}>
            View All
          </Button>
        </div>
      </div>
    </div>
  )
}

