"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PlusCircle, Trash2, Wand2 } from "lucide-react"
import { theme } from "@/styles/theme-utils"

interface Chapter {
  id: string
  title: string
  summary: string
  wordCountGoal: string
}

export default function ChaptersOverviewTab() {
  const [chapters, setChapters] = useState<Chapter[]>([])
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null)

  const addChapter = () => {
    const newChapter: Chapter = {
      id: Date.now().toString(),
      title: `Chapter ${chapters.length + 1}`,
      summary: "",
      wordCountGoal: "",
    }
    setChapters([...chapters, newChapter])
    setActiveChapter(newChapter)
  }

  const updateChapter = (field: keyof Chapter, value: string) => {
    if (!activeChapter) return
    const updatedChapter = { ...activeChapter, [field]: value }
    setActiveChapter(updatedChapter)
    setChapters(chapters.map((c) => (c.id === updatedChapter.id ? updatedChapter : c)))
  }

  const generateTitlesAndSummaries = () => {
    console.log("Generating titles and summaries...")
    // Here you would typically call an AI service
  }

  return (
    <Card className={`w-full max-w-4xl mx-auto ${theme.cardBg} rounded-3xl shadow-lg`}>
      <CardHeader className={`${theme.primary} rounded-t-3xl`}>
        <CardTitle className="text-2xl font-bold text-white">Chapters Overview</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex gap-6">
          <div className="w-1/4">
            <ScrollArea className="h-[600px]">
              {chapters.map((chapter) => (
                <div key={chapter.id} className="flex items-center mb-2">
                  <Button
                    variant={activeChapter?.id === chapter.id ? "secondary" : "ghost"}
                    className={`w-full justify-start rounded-xl ${
                      activeChapter?.id === chapter.id ? theme.secondary : ""
                    }`}
                    onClick={() => setActiveChapter(chapter)}
                  >
                    {chapter.title}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-xl"
                    onClick={() => {
                      setChapters(chapters.filter((c) => c.id !== chapter.id))
                      if (activeChapter?.id === chapter.id) {
                        setActiveChapter(null)
                      }
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button onClick={addChapter} className={`w-full mt-2 ${theme.button} rounded-xl`}>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Chapter
              </Button>
            </ScrollArea>
          </div>
          <div className="w-3/4">
            {activeChapter ? (
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Chapter Title</Label>
                  <Input
                    id="title"
                    value={activeChapter.title}
                    onChange={(e) => updateChapter("title", e.target.value)}
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="summary">Chapter Summary</Label>
                  <Textarea
                    id="summary"
                    value={activeChapter.summary}
                    onChange={(e) => updateChapter("summary", e.target.value)}
                    className="h-32 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="wordCountGoal">Word Count Goal</Label>
                  <Input
                    id="wordCountGoal"
                    type="number"
                    value={activeChapter.wordCountGoal}
                    onChange={(e) => updateChapter("wordCountGoal", e.target.value)}
                    className="rounded-xl"
                  />
                </div>
                <Button className={`w-full ${theme.button} rounded-xl`}>Save Chapter</Button>
              </form>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Select a chapter or add a new one to start editing</p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-6">
          <Button onClick={generateTitlesAndSummaries} className={`w-full ${theme.button} rounded-xl`}>
            <Wand2 className="mr-2 h-4 w-4" /> Generate Titles and Summaries
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

