import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full mb-4 animate-in slide-in-from-bottom-2 duration-200",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div className="flex items-start space-x-2 max-w-[80%]">
        {!isUser && (
          <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm font-semibold flex-shrink-0 mt-1">
            AI
          </div>
        )}
        <div
          className={cn(
            "rounded-2xl px-4 py-3 shadow-chat-bubble transition-chat",
            isUser
              ? "bg-chat-user-bg text-chat-user-text rounded-br-md"
              : "bg-chat-ai-bg text-chat-ai-text border border-border rounded-bl-md"
          )}
        >
          <p className="text-sm leading-relaxed">{message}</p>
          <span className="text-xs opacity-70 mt-1 block">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        {isUser && (
          <div className="w-8 h-8 rounded-full bg-gradient-secondary flex items-center justify-center text-white text-sm font-semibold flex-shrink-0 mt-1">
            You
          </div>
        )}
      </div>
    </div>
  );
};