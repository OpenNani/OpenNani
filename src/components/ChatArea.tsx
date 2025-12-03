import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

interface ChatAreaProps {
  message: string
  setMessage: (message: string) => void
}

export function ChatArea({ message, setMessage }: ChatAreaProps) {
  const hasContent = message.trim().length > 0

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
              className={`absolute bottom-3 right-3 h-8 w-8 transition-colors ${
                hasContent
                  ? "bg-black hover:bg-gray-800"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>

          {/* Send Button */}
          <div className="flex justify-end">
            <Button
              className={`text-white px-6 transition-colors ${
                hasContent
                  ? "bg-black hover:bg-gray-800"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            >
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
