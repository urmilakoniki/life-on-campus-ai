import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSendMessage, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-background">
      <div className="flex space-x-2">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask CampusAI anything about campus life..."
          disabled={disabled}
          className="flex-1 bg-muted/50 border-border focus:border-primary focus:ring-primary/20"
        />
        <Button
          type="submit"
          disabled={!message.trim() || disabled}
          className="bg-gradient-primary hover:opacity-90 transition-smooth px-4"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};