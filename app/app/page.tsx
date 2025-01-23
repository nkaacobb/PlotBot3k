"use client"

import { useState } from "react"
import { TabNavigation } from "./components/TabNavigation"
import BookPropertiesTab from "./components/BookPropertiesTab"
import StorySummaryTab from "./components/StorySummaryTab"
import WorldBuildingTab from "./components/WorldBuildingTab"
import MainCharactersTab from "./components/MainCharactersTab"
import SideCharactersTab from "./components/SideCharactersTab"
import ChaptersOverviewTab from "./components/ChaptersOverviewTab"
import IndividualChapterPagesTab from "./components/IndividualChapterPagesTab"
import AuthorTab from "./components/AuthorTab"
import SeriesContinuityTab from "./components/SeriesContinuityTab"
import AIEditorAgentTab from "./components/AIEditorAgentTab"
import { theme } from "@/styles/theme-utils"

export default function Home() {
  const [activeTab, setActiveTab] = useState("book-properties")

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto p-4">
        <header className={`${theme.primary} rounded-3xl p-8 mb-6 text-white text-center`}>
          <h1 className="text-4xl font-bold mb-2">PlotBot3k</h1>
          <p className="text-xl opacity-90">Your AI-Powered Writing Assistant</p>
        </header>

        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="mt-6">
          {activeTab === "book-properties" && <BookPropertiesTab />}
          {activeTab === "story-summary" && <StorySummaryTab />}
          {activeTab === "world-building" && <WorldBuildingTab />}
          {activeTab === "main-characters" && <MainCharactersTab />}
          {activeTab === "side-characters" && <SideCharactersTab />}
          {activeTab === "chapters-overview" && <ChaptersOverviewTab />}
          {activeTab === "individual-chapters" && <IndividualChapterPagesTab />}
          {activeTab === "author" && <AuthorTab />}
          {activeTab === "series-continuity" && <SeriesContinuityTab />}
          {activeTab === "ai-editor-agent" && <AIEditorAgentTab />}
        </div>
      </div>
    </div>
  )
}

