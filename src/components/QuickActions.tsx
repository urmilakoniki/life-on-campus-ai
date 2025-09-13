import { Button } from "@/components/ui/button";

interface QuickActionsProps {
  onActionClick: (action: string) => void;
}

const quickActions = [
  { label: "Dining Today", action: "dining_today", icon: "🍽️" },
  { label: "Library Hours", action: "library_hours", icon: "📚" },
  { label: "Book a Room", action: "book_room", icon: "🏛️" },
  { label: "Class Schedule", action: "class_schedule", icon: "📅" },
  { label: "Campus Map", action: "campus_map", icon: "🗺️" },
  { label: "ID Card Help", action: "id_card", icon: "🎫" },
];

export const QuickActions = ({ onActionClick }: QuickActionsProps) => {
  return (
    <div className="p-4 border-t border-border bg-muted/50">
      <h3 className="text-sm font-medium text-muted-foreground mb-3">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {quickActions.map((action) => (
          <Button
            key={action.action}
            variant="outline"
            size="sm"
            onClick={() => onActionClick(action.action)}
            className="justify-start text-left h-auto py-2 px-3 hover:bg-campus-blue-light hover:border-campus-blue transition-smooth"
          >
            <span className="mr-2 text-base">{action.icon}</span>
            <span className="text-xs">{action.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};