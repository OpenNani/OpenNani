import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  onSettingsClick: () => void
  onChatClick: () => void
}

export function Sidebar({ onSettingsClick, onChatClick }: SidebarProps) {
  return (
    <div className="w-64 h-screen bg-gray-50 border-r border-gray-200 flex flex-col">
      {/* Header with Avatar and Title */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 rounded-lg">
            <AvatarFallback className="bg-blue-500 text-white rounded-lg">
              AI
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-sm font-semibold text-gray-900">OpenNani</h2>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 p-3 overflow-y-auto">
        <div className="space-y-1">
          <Button
            variant="ghost"
            className="w-full justify-start text-sm text-gray-700 hover:bg-gray-100"
            onClick={onChatClick}
          >
            <span className="truncate">AI ほんやく</span>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-sm text-gray-700 hover:bg-gray-100"
          >
            <span className="truncate">文章作成</span>
          </Button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-200">
        <Button
          variant="default"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          onClick={onSettingsClick}
        >
          APIキーを追加
        </Button>
      </div>
    </div>
  )
}
