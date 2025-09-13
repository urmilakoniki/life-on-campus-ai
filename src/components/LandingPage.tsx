import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  MessageCircle, 
  Clock, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Utensils, 
  Users,
  Zap,
  Shield,
  Smartphone,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Natural Conversations",
      description: "Chat naturally like you would with a helpful student assistant. No complex commands needed."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Availability", 
      description: "Get instant answers anytime, anywhere. CampusAI never sleeps, so you always have support."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Get immediate responses to your campus queries. No waiting in long lines or phone holds."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Always Accurate",
      description: "Connected to live campus databases for real-time, accurate information you can trust."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Friendly",
      description: "Access CampusAI on any device - phone, tablet, or computer. Optimized for on-the-go use."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Multi-Service Support",
      description: "One assistant for all your needs - academics, dining, facilities, and student services."
    }
  ];

  const services = [
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Dining Services",
      items: [
        "Daily menu updates and special offers",
        "Nutritional information and allergen details", 
        "Dining hall hours and locations",
        "Meal plan balance and usage tracking"
      ]
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Library & Academic",
      items: [
        "Library hours and availability",
        "Study room booking and reservations",
        "Research assistance and resource guides",
        "Computer lab and printing services"
      ]
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Class Schedules",
      items: [
        "Personal class timetables and updates",
        "Assignment deadlines and reminders",
        "Professor contact information",
        "Classroom locations and directions"
      ]
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Campus Navigation",
      items: [
        "Interactive campus maps and directions",
        "Building locations and room numbers",
        "Parking information and availability",
        "Transportation and shuttle schedules"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-primary text-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <GraduationCap className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Campus<span className="text-campus-green-light">AI</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Your intelligent 24/7 digital campus assistant. Get instant answers about dining, 
              classes, facilities, and everything campus life has to offer.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={() => navigate("/chat")}
              className="bg-white text-campus-blue hover:bg-campus-green-light hover:text-campus-green-dark transition-smooth text-lg px-8 py-3"
            >
              Start Chatting Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-campus-blue transition-smooth text-lg px-8 py-3"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">500+</h3>
              <p className="opacity-90">Daily conversations helping students</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">&lt;2 sec</h3>
              <p className="opacity-90">Average response time</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">24/7</h3>
              <p className="opacity-90">Always available support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose CampusAI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of campus support with our intelligent assistant 
              designed specifically for student life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-smooth border-border">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Complete Campus Coverage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From academics to dining, CampusAI provides comprehensive support 
              for every aspect of your campus experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-smooth">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-campus-blue rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              How CampusAI Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Getting help is as easy as having a conversation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4">Ask Your Question</h3>
              <p className="text-muted-foreground text-lg">
                Simply type or speak your question in natural language. 
                No need to learn special commands or navigate complex menus.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4">AI Processes</h3>
              <p className="text-muted-foreground text-lg">
                CampusAI understands your request and searches through 
                live campus databases to find the most accurate, up-to-date information.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4">Get Instant Answers</h3>
              <p className="text-muted-foreground text-lg">
                Receive detailed, helpful responses with step-by-step guidance 
                and relevant links. Follow up with more questions anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Smarter Campus Life?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students already using CampusAI to navigate campus life more efficiently.
          </p>
          
          <Button 
            size="lg"
            onClick={() => navigate("/chat")}
            className="bg-white text-campus-blue hover:bg-campus-green-light hover:text-campus-green-dark transition-smooth text-xl px-10 py-4"
          >
            Start Your Conversation
            <MessageCircle className="ml-3 h-6 w-6" />
          </Button>
          
          <div className="mt-8 text-sm opacity-75">
            No registration required • Available 24/7 • Always free for students
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-foreground text-background text-center">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <GraduationCap className="h-6 w-6" />
            <span className="text-lg font-semibold">CampusAI</span>
          </div>
          <p className="text-sm opacity-75">
            Your intelligent campus companion • Making student life easier, one conversation at a time
          </p>
        </div>
      </footer>
    </div>
  );
};