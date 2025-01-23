"use client"

import { theme } from "@/styles/theme-utils"

interface TabNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const tabs = [
    { value: "book-properties", label: "Book Properties" },
    { value: "story-summary", label: "Story Summary" },
    { value: "world-building", label: "World Building" },
    { value: "main-characters", label: "Main Characters" },
    { value: "side-characters", label: "Side Characters" },
    { value: "chapters-overview", label: "Chapters Overview" },
    { value: "individual-chapters", label: "Individual Chapters" },
    { value: "author", label: "Author" },
    { value: "series-continuity", label: "Series Continuity" },
    { value: "ai-editor-agent", label: "AI Editor Agent" },
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeTab === tab.value ? `${theme.primary} text-white` : `${theme.secondary} ${theme.hover}`
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

