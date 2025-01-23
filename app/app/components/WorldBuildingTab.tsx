"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { theme } from "@/styles/theme-utils"

const subsections = [
  { id: "geography", title: "Geography & Locations" },
  { id: "culture", title: "Culture & Society" },
  { id: "technology", title: "Technology or Magic Systems" },
  { id: "history", title: "History & Timeline" },
]

export default function WorldBuildingTab() {
  const [activeSubsection, setActiveSubsection] = useState(subsections[0].id)
  const [worldData, setWorldData] = useState({
    geography: "",
    culture: "",
    technology: "",
    history: "",
  })

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWorldData((prev) => ({ ...prev, [activeSubsection]: e.target.value }))
  }

  return (
    <Card className={`w-full max-w-4xl mx-auto ${theme.cardBg} rounded-3xl shadow-lg`}>
      <CardHeader className={`${theme.primary} rounded-t-3xl`}>
        <CardTitle className="text-2xl font-bold text-white">World Building</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex gap-6">
          <div className="w-1/4">
            <ScrollArea className="h-[600px]">
              {subsections.map((subsection) => (
                <Button
                  key={subsection.id}
                  variant={activeSubsection === subsection.id ? "secondary" : "ghost"}
                  className={`w-full justify-start mb-2 rounded-xl ${
                    activeSubsection === subsection.id ? theme.secondary : ""
                  }`}
                  onClick={() => setActiveSubsection(subsection.id)}
                >
                  {subsection.title}
                </Button>
              ))}
            </ScrollArea>
          </div>
          <div className="w-3/4">
            <Textarea
              placeholder={`Describe your world's ${activeSubsection}...`}
              className="h-[500px] mb-4 rounded-xl"
              value={worldData[activeSubsection as keyof typeof worldData]}
              onChange={handleContentChange}
            />
            <Button className={`w-full ${theme.button} rounded-xl`}>
              Save {subsections.find((s) => s.id === activeSubsection)?.title}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

