import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { GraduationCap, Paperclip, ArrowLeft } from "lucide-react";

import { LabeledToggle } from "@/components/ui/labeled-toggle"

interface ChatAreaProps {
  message: string
  setMessage: (message: string) => void
}

type Screen = 'input' | 'results' | 'loading'

export function ChatArea({ message, setMessage }: ChatAreaProps) {
  const hasContent = message.trim().length > 0
  const [translationMode, setTranslationMode] = useState<'literal' | 'natural'>('natural')
  const [speedMode, setSpeedMode] = useState<'accurate' | 'fast'>('accurate')
  const [kanaEnabled, setKanaEnabled] = useState(false)
  const [format, setFormat] = useState("format");
  const [quality, setQuality] = useState("quality");
  const [currentScreen, setCurrentScreen] = useState<Screen>('input')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const switchScreen = (newScreen: Screen) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentScreen(newScreen)
      setIsTransitioning(false)
    }, 300)
  }

  const handleSend = () => {
    if (hasContent) {
      switchScreen('loading')
      setTimeout(() => switchScreen('results'), 1500)
    }
  }

  const handleBack = () => {
    switchScreen('input')
  }

  return (
    <div className="flex-1 h-screen flex flex-col bg-white overflow-hidden">

      {/* Main Content Area with Transitions */}
      <div className="flex-1 flex items-center justify-center p-6 relative">
        <div
          className={`w-full max-w-3xl space-y-4 transition-all duration-300 ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          {/* Input Screen */}
          {currentScreen === 'input' && (
            <div className="animate-fadeIn">
              {/* Message Input Area */}
              <div className="border border-gray-300 rounded-[24px] overflow-hidden">
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="すきな言語で入力"
                  className="min-h-[240px] resize-none pr-2 text-base border-0 focus-visible:ring-0"
                  style={{
                    height: 'auto',
                    minHeight: '240px',
                    maxHeight: '600px',
                    overflowY: message.split('\n').length > 15 ? 'auto' : 'hidden'
                  }}
                  rows={Math.max(10, message.split('\n').length)}
                />

                {/* Bottom Controls Bar */}
                <div className="flex justify-between items-center px-3 py-3 border-t border-gray-300 bg-gray-50">
                  {/* Left Controls */}
                  <div className="flex gap-2 items-center">
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

                  {/* Right Send Button */}
                  <Button
                    size="icon"
                    onClick={handleSend}
                    className={`h-8 w-auto p-3 transition-colors rounded-[14px] ${
                      hasContent
                        ? "bg-black hover:bg-gray-800"
                        : "bg-gray-400"
                    } ${
                      hasContent
                        ? "text-white"
                        : "text-gray-600"
                    }`}
                  >
                    <GraduationCap className="h-4 w-4" />翻訳する
                  </Button>
                </div>
              </div>

              {/* Footer Text */}
              <div className="text-center text-xs text-gray-500 pt-2">
                AIが言語を検出し、日本語なら英語へ、それ以外なら日本語へ翻訳します。
              </div>
            </div>
          )}

          {/* Loading Screen */}
          {currentScreen === 'loading' && (
            <div className="animate-fadeIn flex flex-col items-center justify-center min-h-[400px] space-y-4">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
              <p className="text-gray-600 text-lg">翻訳中...</p>
            </div>
          )}

          {/* Results Screen */}
          {currentScreen === 'results' && (
            <div className="animate-fadeIn space-y-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="flex items-center gap-2 mb-4"
              >
                <ArrowLeft className="h-4 w-4" />
                戻る
              </Button>

              {/* Original Text */}
              <div className="border rounded-[24px] p-6 bg-gray-50">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">元のテキスト</h3>
                <p className="text-base">{message}</p>
              </div>

              {/* Translation Result */}
              <div className="border rounded-[24px] p-6 bg-blue-50">
                <h3 className="text-sm font-semibold text-blue-600 mb-2">翻訳結果</h3>
                <p className="text-base text-gray-900">
                  This is a sample translation result. (これはサンプル翻訳結果です。)
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 justify-end">
                <Button variant="outline" onClick={handleBack}>
                  新しい翻訳
                </Button>
                <Button className="bg-black hover:bg-gray-800">
                  コピー
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
