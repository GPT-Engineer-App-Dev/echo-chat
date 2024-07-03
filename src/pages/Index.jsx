import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Search, Send } from "lucide-react";

const Index = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");

  const chats = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Hey, how are you?",
      timestamp: "10:30 AM",
      avatar: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Jane Smith",
      lastMessage: "Let's catch up later.",
      timestamp: "9:15 AM",
      avatar: "/placeholder.svg",
    },
  ];

  const messages = [
    {
      id: 1,
      content: "Hello!",
      timestamp: "10:00 AM",
      avatar: "/placeholder.svg",
    },
    {
      id: 2,
      content: "Hi, how are you?",
      timestamp: "10:05 AM",
      avatar: "/placeholder.svg",
    },
  ];

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-1/3 border-r">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="App Logo" />
                <AvatarFallback>TC</AvatarFallback>
              </Avatar>
              <span className="font-semibold text-lg">TeleClone</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="p-4">
            <div className="relative">
              <Input placeholder="Search..." className="pl-10" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>

          {/* Chat List */}
          <ScrollArea className="flex-1 p-4">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className={cn(
                  "flex items-center gap-2 p-2 rounded-lg cursor-pointer",
                  selectedChat === chat.id && "bg-muted"
                )}
                onClick={() => setSelectedChat(chat.id)}
              >
                <Avatar>
                  <AvatarImage src={chat.avatar} alt={chat.name} />
                  <AvatarFallback>{chat.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-semibold">{chat.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {chat.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {chat.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </ScrollArea>

          {/* Footer */}
          <div className="flex items-center gap-2 p-4 border-t">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="User Avatar" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <span className="font-semibold">User Name</span>
              <p className="text-sm text-muted-foreground">Online</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Window */}
      <div className="w-2/3 flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-2 p-4 border-b">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="Chat User Avatar" />
            <AvatarFallback>CU</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <span className="font-semibold">Chat User</span>
            <p className="text-sm text-muted-foreground">Online</p>
          </div>
        </div>

        {/* Message Area */}
        <ScrollArea className="flex-1 p-4">
          {messages.map((msg) => (
            <div key={msg.id} className="flex items-start gap-2 mb-4">
              <Avatar>
                <AvatarImage src={msg.avatar} alt="Message User Avatar" />
                <AvatarFallback>MU</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm">{msg.content}</p>
                <span className="text-xs text-muted-foreground">
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}
        </ScrollArea>

        {/* Message Input */}
        <div className="flex items-center gap-2 p-4 border-t">
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1"
          />
          <Button
            variant="primary"
            disabled={!message}
            onClick={() => setMessage("")}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
