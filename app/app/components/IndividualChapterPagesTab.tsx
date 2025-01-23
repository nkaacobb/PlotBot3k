"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Wand2, Save, Edit, RefreshCw } from "lucide-react"
import { theme } from "@/styles/theme-utils"

interface Chapter {
  id: string
  title: string
  summary: string
  content: string
}

export default function IndividualChapterPagesTab() {
  const [chapters] = useState<Chapter[]>([
    { id: "1", title: "Chapter 1", summary: "Introduction", content: "" },
    { id: "2", title: "Chapter 2", summary: "Rising Action", content: "" },
  ])
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null)
  const [isEditing, setIsEditing] = useState(false)

  const generateChapterContent = () => {
    console.log("Generating content...")
    // Here you would typically call an AI service
  }

  return (
    <Card className={`w-full max-w-4xl mx-auto ${theme.cardBg} rounded-3xl shadow-lg`}>
      <CardHeader className={`${theme.primary} rounded-t-3xl`}>
        <CardTitle className="text-2xl font-bold text-white">Individual Chapter Pages</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex gap-6">
          <div className="w-1/4">
            <ScrollArea className="h-[600px]">
              {chapters.map((chapter) => (
                <Button
                  key={chapter.id}
                  variant={activeChapter?.id === chapter.id ? "secondary" : "ghost"}
                  className={`w-full justify-start mb-2 rounded-xl ${
                    activeChapter?.id === chapter.id ? theme.secondary : ""
                  }`}
                  onClick={() => setActiveChapter(chapter)}
                >
                  {chapter.title}
                </Button>
              ))}
            </ScrollArea>
          </div>
          <div className="w-3/4">
            {activeChapter && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Chapter Title</Label>
                  <Input id="title" value={activeChapter.title} disabled={!isEditing} className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="summary">Chapter Summary</Label>
                  <Textarea
                    id="summary"
                    value={activeChapter.summary}
                    disabled={!isEditing}
                    className="h-32 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Chapter Content</Label>
                  <Textarea
                    id="content"
                    value={activeChapter.content}
                    disabled={!isEditing}
                    className="h-64 rounded-xl"
                  />
                </div>
                <div className="flex gap-4">
                  <Button
                    onClick={generateChapterContent}
                    className={`flex-1 ${theme.button} rounded-xl`}
                    disabled={isEditing}
                  >
                    <Wand2 className="mr-2 h-4 w-4" /> Generate
                  </Button>
                  <Button onClick={() => setIsEditing(!isEditing)} className={`flex-1 ${theme.button} rounded-xl`}>
                    <Edit className="mr-2 h-4 w-4" /> {isEditing ? "Finish Editing" : "Edit"}
                  </Button>
                  <Button className={`flex-1 ${theme.button} rounded-xl`} disabled={!isEditing}>
                    <Save className="mr-2 h-4 w-4" /> Save
                  </Button>
                  <Button
                    onClick={generateChapterContent}
                    className={`flex-1 ${theme.button} rounded-xl`}
                    disabled={isEditing}
                  >
                    <RefreshCw className="mr-2 h-4 w-4" /> Regenerate
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

