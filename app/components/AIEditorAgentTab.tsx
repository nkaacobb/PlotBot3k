"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Wand2 } from "lucide-react"
import { theme } from "@/styles/theme-utils"

interface AIFeedback {
  score: number
  suggestions: string[]
  critique: string
}

export default function AIEditorAgentTab() {
  const [analysisType, setAnalysisType] = useState<"chapter" | "book">("chapter")
  const [selectedChapter, setSelectedChapter] = useState("")
  const [analysisProgress, setAnalysisProgress] = useState(0)
  const [aiFeedback, setAIFeedback] = useState<AIFeedback | null>(null)

  const startAnalysis = () => {
    // Simulate analysis progress
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setAnalysisProgress(progress)
      if (progress >= 100) {
        clearInterval(interval)
        setAIFeedback({
          score: 85,
          suggestions: [
            "Consider developing the protagonist's backstory further in chapter 3.",
            "The pacing in the middle section could be tightened.",
            "There's an opportunity to enhance the world-building details.",
          ],
          critique:
            "The manuscript shows strong character development and an intriguing plot. The dialogue is particularly engaging, though some plot threads could be more tightly woven throughout the narrative.",
        })
      }
    }, 500)
  }

  return (
    <Card className={`w-full max-w-4xl mx-auto ${theme.cardBg} rounded-3xl shadow-lg`}>
      <CardHeader className={`${theme.primary} rounded-t-3xl`}>
        <CardTitle className="text-2xl font-bold text-white">AI Editor Agent</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button
                variant={analysisType === "chapter" ? "secondary" : "ghost"}
                className={`flex-1 rounded-xl ${analysisType === "chapter" ? theme.secondary : ""}`}
                onClick={() => setAnalysisType("chapter")}
              >
                Chapter Analysis
              </Button>
              <Button
                variant={analysisType === "book" ? "secondary" : "ghost"}
                className={`flex-1 rounded-xl ${analysisType === "book" ? theme.secondary : ""}`}
                onClick={() => setAnalysisType("book")}
              >
                Book Analysis
              </Button>
            </div>

            {analysisType === "chapter" ? (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="chapter-select">Select Chapter</Label>
                  <Select onValueChange={setSelectedChapter}>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Choose a chapter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chapter1">Chapter 1</SelectItem>
                      <SelectItem value="chapter2">Chapter 2</SelectItem>
                      <SelectItem value="chapter3">Chapter 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ) : (
              <div>
                <Label htmlFor="book-upload">Upload Full Manuscript</Label>
                <Input id="book-upload" type="file" className="rounded-xl" />
              </div>
            )}

            <Button onClick={startAnalysis} className={`w-full ${theme.button} rounded-xl`}>
              <Wand2 className="mr-2 h-4 w-4" /> Start Analysis
            </Button>
          </div>

          {analysisProgress > 0 && (
            <div className="space-y-2">
              <Label>Analysis Progress</Label>
              <Progress value={analysisProgress} className="w-full rounded-xl" />
            </div>
          )}

          {aiFeedback && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Overall Score</Label>
                <Progress value={aiFeedback.score} className="w-full rounded-xl" />
                <p className="text-right">{aiFeedback.score}/100</p>
              </div>

              <div className="space-y-2">
                <Label>Suggestions for Improvement</Label>
                <ScrollArea className="h-[200px] w-full rounded-xl border p-4">
                  <ul className="list-disc pl-4 space-y-2">
                    {aiFeedback.suggestions.map((suggestion, index) => (
                      <li key={index}>{suggestion}</li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>

              <div className="space-y-2">
                <Label>Detailed Critique</Label>
                <ScrollArea className="h-[200px] w-full rounded-xl border p-4">
                  <p>{aiFeedback.critique}</p>
                </ScrollArea>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

