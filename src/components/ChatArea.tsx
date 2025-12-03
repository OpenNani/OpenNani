import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send, Paperclip } from "lucide-react"

interface ChatAreaProps {
  message: string
  setMessage: (message: string) => void
}

export function ChatArea({ message, setMessage }: ChatAreaProps) {
  const hasContent = message.trim().length > 0
  const [translationMode, setTranslationMode] = useState<'literal' | 'natural'>('natural')
  const [speedMode, setSpeedMode] = useState<'accurate' | 'fast'>('accurate')
  const [kanaEnabled, setKanaEnabled] = useState(false)

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
              className="min-h-[120px] resize-none pr-12 pb-12 text-base"
            />

            {/* Bottom Left Controls */}
            <div className="absolute bottom-3 left-3 flex gap-2 items-center">
              {/* Translation Mode Toggle */}
              <div className="flex rounded-full overflow-hidden border border-blue-500">
                <button
                  onClick={() => setTranslationMode('literal')}
                  className={`px-3 py-1 text-xs transition-colors ${
                    translationMode === 'literal'
                      ? 'bg-white text-black'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  直訳
                </button>
                <button
                  onClick={() => setTranslationMode('natural')}
                  className={`px-3 py-1 text-xs transition-colors ${
                    translationMode === 'natural'
                      ? 'bg-white text-black'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  自然
                </button>
              </div>

              {/* Speed Mode Toggle */}
              <div className="flex rounded-full overflow-hidden border border-blue-500">
                <button
                  onClick={() => setSpeedMode('accurate')}
                  className={`px-3 py-1 text-xs transition-colors ${
                    speedMode === 'accurate'
                      ? 'bg-white text-black'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  正確
                </button>
                <button
                  onClick={() => setSpeedMode('fast')}
                  className={`px-3 py-1 text-xs transition-colors ${
                    speedMode === 'fast'
                      ? 'bg-white text-black'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  高速
                </button>
              </div>

              {/* Kana Button */}
              <button
                onClick={() => setKanaEnabled(!kanaEnabled)}
                className={`px-3 py-1 text-xs rounded-full transition-colors ${
                  kanaEnabled
                    ? 'bg-white text-black border border-blue-500'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
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
