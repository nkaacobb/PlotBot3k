"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { theme } from "@/styles/theme-utils"
import { Wand2 } from "lucide-react"

export default function StorySummaryTab() {
  const [synopsis, setSynopsis] = useState("")
  const [plotPoints, setPlotPoints] = useState("")

  const handleGenerateSummary = () => {
    // Here you would typically call an AI service to generate the summary
    console.log("Generating summary...")
  }

  const handleSave = () => {
    console.log("Saving story summary:", { synopsis, plotPoints })
    // Here you would typically send this data to your backend
  }

  return (
    <Card className={`w-full max-w-4xl mx-auto ${theme.cardBg} rounded-3xl shadow-lg`}>
      <CardHeader className={`${theme.primary} rounded-t-3xl`}>
        <CardTitle className="text-2xl font-bold text-white">Story Summary</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="synopsis">Brief Synopsis</Label>
            <Textarea
              id="synopsis"
              placeholder="Write a few paragraphs summarizing your book's plot"
              className="h-40 rounded-xl"
              value={synopsis}
              onChange={(e) => setSynopsis(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="plotPoints">Key Plot Points (optional)</Label>
            <Textarea
              id="plotPoints"
              placeholder="List major events or twists"
              className="h-40 rounded-xl"
              value={plotPoints}
              onChange={(e) => setPlotPoints(e.target.value)}
            />
          </div>
          <div className="flex justify-between gap-4">
            <Button onClick={handleGenerateSummary} className={`${theme.button} rounded-xl flex-1`}>
              <Wand2 className="mr-2 h-4 w-4" /> Generate Summary
            </Button>
            <Button onClick={handleSave} className={`${theme.button} rounded-xl flex-1`}>
              Save Summary
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

