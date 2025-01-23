"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PlusCircle, Trash2 } from "lucide-react"
import { theme } from "@/styles/theme-utils"

interface SideCharacter {
  id: string
  name: string
  role: string
  description: string
  connections: string
}

export default function SideCharactersTab() {
  const [characters, setCharacters] = useState<SideCharacter[]>([])
  const [activeCharacter, setActiveCharacter] = useState<SideCharacter | null>(null)

  const addCharacter = () => {
    const newCharacter: SideCharacter = {
      id: Date.now().toString(),
      name: "",
      role: "",
      description: "",
      connections: "",
    }
    setCharacters([...characters, newCharacter])
    setActiveCharacter(newCharacter)
  }

  const updateCharacter = (field: keyof SideCharacter, value: string) => {
    if (!activeCharacter) return
    const updatedCharacter = { ...activeCharacter, [field]: value }
    setActiveCharacter(updatedCharacter)
    setCharacters(characters.map((c) => (c.id === updatedCharacter.id ? updatedCharacter : c)))
  }

  return (
    <Card className={`w-full max-w-4xl mx-auto ${theme.cardBg} rounded-3xl shadow-lg`}>
      <CardHeader className={`${theme.primary} rounded-t-3xl`}>
        <CardTitle className="text-2xl font-bold text-white">Side Characters</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex gap-6">
          <div className="w-1/4">
            <ScrollArea className="h-[600px]">
              {characters.map((character) => (
                <div key={character.id} className="flex items-center mb-2">
                  <Button
                    variant={activeCharacter?.id === character.id ? "secondary" : "ghost"}
                    className={`w-full justify-start rounded-xl ${
                      activeCharacter?.id === character.id ? theme.secondary : ""
                    }`}
                    onClick={() => setActiveCharacter(character)}
                  >
                    {character.name || "Unnamed Character"}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-xl"
                    onClick={() => {
                      setCharacters(characters.filter((c) => c.id !== character.id))
                      if (activeCharacter?.id === character.id) {
                        setActiveCharacter(null)
                      }
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button onClick={addCharacter} className={`w-full mt-2 ${theme.button} rounded-xl`}>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Side Character
              </Button>
            </ScrollArea>
          </div>
          <div className="w-3/4">
            {activeCharacter ? (
              <form className="space-y-4">
                {[
                  { field: "name", label: "Name" },
                  { field: "role", label: "Role in the Story" },
                  { field: "description", label: "Brief Description" },
                  { field: "connections", label: "Connections (optional)" },
                ].map(({ field, label }) => (
                  <div key={field} className="space-y-2">
                    <Label htmlFor={field}>{label}</Label>
                    {field === "name" || field === "role" ? (
                      <Input
                        id={field}
                        value={activeCharacter[field as keyof SideCharacter]}
                        onChange={(e) => updateCharacter(field as keyof SideCharacter, e.target.value)}
                        className="rounded-xl"
                      />
                    ) : (
                      <Textarea
                        id={field}
                        value={activeCharacter[field as keyof SideCharacter]}
                        onChange={(e) => updateCharacter(field as keyof SideCharacter, e.target.value)}
                        className="h-32 rounded-xl"
                      />
                    )}
                  </div>
                ))}
                <Button className={`w-full ${theme.button} rounded-xl`}>Save Character</Button>
              </form>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Select a character or add a new one to start editing</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

