import { useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { QuickActions } from "@/components/QuickActions";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GraduationCap } from "lucide-react";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const getCampusAIResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes("dining") || lowerMessage.includes("food") || lowerMessage.includes("cafeteria")) {
    return "🍽️ Today's dining options:\n\n**Main Cafeteria** (7 AM - 9 PM)\n- Pizza & pasta station\n- Grill with burgers & sandwiches\n- Fresh salad bar\n- Vegetarian & vegan options\n\n**Coffee Corner** (6 AM - 10 PM)\n- Specialty coffees & teas\n- Pastries & light snacks\n\n**Food Trucks** (11 AM - 3 PM)\n- Taco Tuesday truck\n- Asian fusion cart\n\nNeed specific dietary info or allergen details? Just ask!";
  }
  
  if (lowerMessage.includes("library") || lowerMessage.includes("study")) {
    return "📚 Library Information:\n\n**Main Library Hours**\n- Monday-Thursday: 7 AM - 12 AM\n- Friday: 7 AM - 10 PM\n- Saturday: 9 AM - 8 PM\n- Sunday: 11 AM - 12 AM\n\n**Services Available:**\n- Study rooms (bookable online)\n- Computer lab & printing\n- Research assistance\n- Group study areas\n- Silent study zones\n\nWant to book a study room or need help with research resources?";
  }
  
  if (lowerMessage.includes("book") || lowerMessage.includes("room") || lowerMessage.includes("reservation")) {
    return "🏛️ Room Booking Services:\n\n**Available Rooms:**\n- Study rooms (2-8 people)\n- Conference rooms (10-20 people)\n- Classroom spaces (presentations)\n- Computer labs\n\n**How to Book:**\n1. Log in to Campus Portal\n2. Go to 'Facilities' > 'Room Booking'\n3. Select date, time & room type\n4. Confirm your reservation\n\n**Booking Rules:**\n- Max 3 hours per session\n- Cancel 2 hours before if plans change\n- Student ID required for access\n\nNeed help with the booking process?";
  }
  
  if (lowerMessage.includes("schedule") || lowerMessage.includes("class") || lowerMessage.includes("timetable")) {
    return "📅 Class Schedule Help:\n\n**Access Your Schedule:**\n- Student Portal > 'Academics' > 'My Schedule'\n- CampusAI Mobile App > 'Classes'\n- Print from any campus kiosk\n\n**Today's Common Classes:**\n- Morning sessions: 8 AM - 12 PM\n- Afternoon sessions: 1 PM - 5 PM\n- Evening sessions: 6 PM - 9 PM\n\n**Need Help With:**\n- Adding/dropping classes\n- Finding classroom locations\n- Professor contact info\n- Assignment deadlines\n\nWhat specific schedule info do you need?";
  }
  
  if (lowerMessage.includes("id") || lowerMessage.includes("card") || lowerMessage.includes("student id")) {
    return "🎫 Student ID Card Services:\n\n**New ID Card:**\n1. Visit Student Services (Building A, Room 102)\n2. Bring photo ID & enrollment verification\n3. Pay $15 fee (cash or card)\n4. Photo taken on-site\n5. Card ready in 10 minutes\n\n**Lost/Replacement Card:**\n- Report lost card immediately online\n- Replacement fee: $25\n- Temporary access available same day\n\n**ID Card Uses:**\n- Building & dorm access\n- Dining plan & campus purchases\n- Library services\n- Gym & recreation facilities\n\n**Hours:** Mon-Fri 8 AM - 6 PM\n\nNeed directions to Student Services?";
  }
  
  if (lowerMessage.includes("map") || lowerMessage.includes("direction") || lowerMessage.includes("location")) {
    return "🗺️ Campus Navigation:\n\n**Interactive Campus Map:** Available on CampusAI mobile app\n\n**Key Locations:**\n- **Building A:** Student Services, Registrar\n- **Building B:** Main Library, Computer Labs\n- **Building C:** Dining Hall, Bookstore\n- **Building D:** Dormitories, Recreation Center\n- **Building E:** Academic Departments\n\n**Transportation:**\n- Campus shuttle runs every 15 minutes\n- Bike rental stations at each building\n- Visitor parking in Lot C\n\n**Emergency:** Blue light phones throughout campus\n\nLooking for a specific building or department?";
  }
  
  // Default response for other queries
  return "Hello! I'm CampusAI, your 24/7 digital campus assistant! 🎓\n\nI can help you with:\n- 🍽️ Dining menus & hours\n- 📚 Library services & study spaces\n- 🏛️ Room bookings & facilities\n- 📅 Class schedules & academics\n- 🗺️ Campus maps & directions\n- 🎫 ID cards & student services\n- 🏠 Dorm info & campus life\n\nTry asking something like \"What's for lunch today?\" or \"How do I book a study room?\" \n\nWhat can I help you find today?";
};

export const CampusAI = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: getCampusAIResponse(""),
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getCampusAIResponse(content),
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickAction = (action: string) => {
    const actionMessages: Record<string, string> = {
      dining_today: "What's available for dining today?",
      library_hours: "What are the library hours?",
      book_room: "How do I book a study room?",
      class_schedule: "Show me today's class schedule",
      campus_map: "I need directions around campus",
      id_card: "I need help with my student ID card"
    };

    const message = actionMessages[action] || action;
    handleSendMessage(message);
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-4 shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold">CampusAI</h1>
            <p className="text-sm opacity-90">Your smart campus assistant</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <Card className="flex-1 flex flex-col border-0 rounded-none">
        <ScrollArea className="flex-1 p-4 bg-gradient-bg">
          <div className="space-y-4">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message.content}
                isUser={message.isUser}
                timestamp={message.timestamp}
              />
            ))}
            {isTyping && (
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                  AI
                </div>
                <div className="bg-chat-ai-bg border border-border rounded-2xl rounded-bl-md px-4 py-3 shadow-chat-bubble">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Quick Actions */}
        <QuickActions onActionClick={handleQuickAction} />

        {/* Chat Input */}
        <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
      </Card>
    </div>
  );
};