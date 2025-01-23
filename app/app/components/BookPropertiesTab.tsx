"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { theme } from "@/styles/theme-utils"

export default function BookPropertiesTab() {
  const [bookProperties, setBookProperties] = useState({
    title: "",
    genre: "",
    length: "",
    narrativeStyle: "",
    tone: "",
    targetAudience: "",
    themes: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setBookProperties((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setBookProperties((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    console.log("Saving book properties:", bookProperties)
    // Here you would typically send this data to your backend
  }

  return (
    <Card className={`w-full max-w-4xl mx-auto ${theme.cardBg} rounded-3xl shadow-lg`}>
      <CardHeader className={`${theme.primary} rounded-t-3xl`}>
        <CardTitle className="text-2xl font-bold text-white">Book Properties</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter your working or final title"
                value={bookProperties.title}
                onChange={handleInputChange}
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="genre">Genre</Label>
              <Select onValueChange={handleSelectChange("genre")} value={bookProperties.genre}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Select a genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fantasy">Fantasy</SelectItem>
                  <SelectItem value="sci-fi">Sci-Fi</SelectItem>
                  <SelectItem value="mystery">Mystery</SelectItem>
                  <SelectItem value="romance">Romance</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="length">Length</Label>
              <Input
                id="length"
                name="length"
                placeholder="Approximate word or page count"
                value={bookProperties.length}
                onChange={handleInputChange}
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="narrativeStyle">Narrative Style</Label>
              <Select onValueChange={handleSelectChange("narrativeStyle")} value={bookProperties.narrativeStyle}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Choose narrative style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="first-person">First Person</SelectItem>
                  <SelectItem value="third-person">Third Person</SelectItem>
                  <SelectItem value="second-person">Second Person</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="tone">Tone</Label>
              <Input
                id="tone"
                name="tone"
                placeholder="e.g., comedic, dark, romantic"
                value={bookProperties.tone}
                onChange={handleInputChange}
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="targetAudience">Target Audience</Label>
              <Select onValueChange={handleSelectChange("targetAudience")} value={bookProperties.targetAudience}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Specify your readers" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ya">Young Adult</SelectItem>
                  <SelectItem value="adult">Adult</SelectItem>
                  <SelectItem value="middle-grade">Middle Grade</SelectItem>
                  <SelectItem value="children">Children</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="themes">Themes / Keywords</Label>
            <Textarea
              id="themes"
              name="themes"
              placeholder="Add prompts like 'Revenge,' 'Time Travel,' or 'Found Family'"
              className="h-24 rounded-xl"
              value={bookProperties.themes}
              onChange={handleInputChange}
            />
          </div>
          <Button onClick={handleSave} className={`w-full ${theme.button} rounded-xl`}>
            Save Book Properties
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

