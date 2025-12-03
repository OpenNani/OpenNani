import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Settings() {
  const [endpoint, setEndpoint] = useState("")
  const [apiToken, setApiToken] = useState("")

  return (
    <div className="flex-1 h-screen flex flex-col bg-white">
      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-6">
          {/* Title */}
          <h1 className="text-2xl font-medium text-gray-900 mb-8">設定</h1>

          {/* OpenAI Endpoint Field */}
          <div className="space-y-2">
            <label className="text-sm text-gray-700">
              OpenAI 互換エンドポイント
            </label>
            <Input
              type="text"
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
              placeholder="https://..."
              className="w-full"
            />
          </div>

          {/* API Token Field */}
          <div className="space-y-2">
            <label className="text-sm text-gray-700">
              API トークン
            </label>
            <Input
              type="password"
              value={apiToken}
              onChange={(e) => setApiToken(e.target.value)}
              placeholder="sk-..."
              className="w-full"
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-4">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6">
              保存
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
