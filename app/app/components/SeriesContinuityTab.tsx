"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, AlertTriangle } from "lucide-react"
import { theme } from "@/styles/theme-utils"

interface ContinuityCheck {
  type: "character" | "timeline" | "lore"
  description: string
}

export default function SeriesContinuityTab() {
  const [continuityChecks, setContinuityChecks] = useState<ContinuityCheck[]>([])

  const performContinuityCheck = () => {
    // Here you would typically call an AI service
    setContinuityChecks([
      { type: "character", description: "Character age inconsistency detected." },
      { type: "timeline", description: "Possible timeline conflict in chapter 3." },
      { type: "lore", description: "Inconsistency in magical system rules." },
    ])
  }

  return (
    <Card className={`w-full max-w-4xl mx-auto ${theme.cardBg} rounded-3xl shadow-lg`}>
      <CardHeader className={`${theme.primary} rounded-t-3xl`}>
        <CardTitle className="text-2xl font-bold text-white">Series Continuity</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div>
            <Label htmlFor="import-book">Import Previous Book</Label>
            <Input id="import-book" type="file" className="rounded-xl" />
          </div>

          <Tabs defaultValue="characters" className="space-y-4">
            <TabsList className="w-full rounded-xl">
              <TabsTrigger value="characters" className="flex-1">
                Characters
              </TabsTrigger>
              <TabsTrigger value="events" className="flex-1">
                Events
              </TabsTrigger>
              <TabsTrigger value="subplots" className="flex-1">
                Unresolved Subplots
              </TabsTrigger>
            </TabsList>
            <TabsContent value="characters">
              <ScrollArea className="h-[300px] w-full rounded-xl border p-4">
                <p>Character summaries generated from previous book...</p>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="events">
              <ScrollArea className="h-[300px] w-full rounded-xl border p-4">
                <p>Key events from previous book...</p>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="subplots">
              <ScrollArea className="h-[300px] w-full rounded-xl border p-4">
                <p>Unresolved subplots from previous book...</p>
              </ScrollArea>
            </TabsContent>
          </Tabs>

          <div>
            <Button onClick={performContinuityCheck} className={`w-full ${theme.button} rounded-xl`}>
              <AlertTriangle className="mr-2 h-4 w-4" /> Perform Continuity Check
            </Button>
          </div>

          {continuityChecks.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Continuity Issues</h3>
              <ScrollArea className="h-[200px] w-full rounded-xl border p-4">
                {continuityChecks.map((check, index) => (
                  <div key={index} className="mb-2">
                    <span className="font-semibold">{check.type.charAt(0).toUpperCase() + check.type.slice(1)}:</span>{" "}
                    {check.description}
                  </div>
                ))}
              </ScrollArea>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

