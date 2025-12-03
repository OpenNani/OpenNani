import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ChatArea() {
  const [message, setMessage] = useState("")

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
              className="min-h-[120px] resize-none pr-12 text-base"
            />
            <Button
              size="icon"
              className="absolute bottom-3 right-3 h-8 w-8 bg-gray-400 hover:bg-gray-500"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>

          {/* Send Button */}
          <div className="flex justify-end">
            <Button className="bg-gray-400 hover:bg-gray-500 text-white px-6">
              翻訳する
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
