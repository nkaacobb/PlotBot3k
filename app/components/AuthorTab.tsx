"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Slider } from "@/components/ui/slider"
import { Upload, Wand2 } from "lucide-react"
import { theme } from "@/styles/theme-utils"

type Subsection = "profile" | "style"

export default function AuthorTab() {
  const [activeSubsection, setActiveSubsection] = useState<Subsection>("profile")
  const [authorProfile, setAuthorProfile] = useState({
    name: "",
    penName: "",
    preferredGenres: "",
    bio: "",
  })
  const [writingStyle, setWritingStyle] = useState({
    sample: "",
    tone: 50,
    complexity: 50,
  })

  return (
    <Card className={`w-full max-w-4xl mx-auto ${theme.cardBg} rounded-3xl shadow-lg`}>
      <CardHeader className={`${theme.primary} rounded-t-3xl`}>
        <CardTitle className="text-2xl font-bold text-white">Author</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex gap-6">
          <div className="w-1/4">
            <div className="space-y-2">
              <Button
                variant={activeSubsection === "profile" ? "secondary" : "ghost"}
                className={`w-full justify-start rounded-xl ${activeSubsection === "profile" ? theme.secondary : ""}`}
                onClick={() => setActiveSubsection("profile")}
              >
                Author Profile
              </Button>
              <Button
                variant={activeSubsection === "style" ? "secondary" : "ghost"}
                className={`w-full justify-start rounded-xl ${activeSubsection === "style" ? theme.secondary : ""}`}
                onClick={() => setActiveSubsection("style")}
              >
                Writing Style
              </Button>
            </div>
          </div>
          <div className="w-3/4">
            {activeSubsection === "profile" ? (
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="penName">Pen Name</Label>
                  <Input id="penName" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredGenres">Preferred Genres</Label>
                  <Input id="preferredGenres" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Author Bio</Label>
                  <Textarea id="bio" className="h-32 rounded-xl" />
                </div>
                <Button className={`w-full ${theme.button} rounded-xl`}>Save Profile</Button>
              </form>
            ) : (
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="sample">Writing Sample</Label>
                  <Textarea id="sample" className="h-32 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="upload">Upload Writing Sample</Label>
                  <Input id="upload" type="file" className="rounded-xl" />
                </div>
                <div className="space-y-4">
                  <Label>Tone Preference</Label>
                  <Slider defaultValue={[50]} max={100} step={1} className="rounded-xl" />
                </div>
                <div className="space-y-4">
                  <Label>Complexity Preference</Label>
                  <Slider defaultValue={[50]} max={100} step={1} className="rounded-xl" />
                </div>
                <div className="flex gap-4">
                  <Button className={`flex-1 ${theme.button} rounded-xl`}>
                    <Wand2 className="mr-2 h-4 w-4" /> Analyze Style
                  </Button>
                  <Button className={`flex-1 ${theme.button} rounded-xl`}>
                    <Wand2 className="mr-2 h-4 w-4" /> Test Generation
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

