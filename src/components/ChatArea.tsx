import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send, Paperclip } from "lucide-react";

import { LabeledToggle } from "@/components/ui/labeled-toggle"

interface ChatAreaProps {
  message: string
  setMessage: (message: string) => void
}

export function ChatArea({ message, setMessage }: ChatAreaProps) {
  const hasContent = message.trim().length > 0
  const [translationMode, setTranslationMode] = useState<'literal' | 'natural'>('natural')
  const [speedMode, setSpeedMode] = useState<'accurate' | 'fast'>('accurate')
  const [kanaEnabled, setKanaEnabled] = useState(false)
  const [format, setFormat] = useState("format");
  const [quality, setQuality] = useState("quality");
  return (
    <div className="flex-1 h-screen flex flex-col bg-white">

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-3xl space-y-4">
          {/* Message Input Area */}
          <div className="relative">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="すきな言語で入力"
              className="min-h-[240px] resize-none pr-2 pb-12 text-base"
            />

            {/* Bottom Left Controls */}
            <div className="absolute bottom-3 left-3 flex gap-2 items-center">
              <LabeledToggle
                options={[
                  { value: "direct", label: "直訳" },
                  { value: "natural", label: "自然" }
                ]}
                value={format}
                onValueChange={setFormat}
              />
              <LabeledToggle
                options={[
                  { value: "fast", label: "高速" },
                  { value: "accurate", label: "正確" }
                ]}
                value={quality}
                onValueChange={setQuality}
              />
              {/* Kana Button */}
              <button
                onClick={() => setKanaEnabled(!kanaEnabled)}
                className={`px-4 py-1 text-sm font-medium rounded-full transition-all ${
                  kanaEnabled
                    ? 'bg-white text-black shadow-sm'
                    : 'bg-blue-500 text-white'
                }`}
              >
                かな
              </button>
            </div>

            {/* Bottom Right Send Button */}
            <Button
              size="icon"
              className={`absolute bottom-3 right-3 h-8 w-8 transition-colors ${
                hasContent
                  ? "bg-black hover:bg-gray-800"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>

          {/* Footer Text */}
          <div className="text-center text-xs text-gray-500 pt-2">
            AIが言語を検出し、日本語なら英語へ、それ以外なら日本語へ翻訳します。
          </div>
        </div>
      </div>
    </div>
  )
}
