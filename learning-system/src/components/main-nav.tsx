"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { 
  BookOpen, 
  Calendar, 
  GraduationCap, 
  Home, 
  Settings, 
  Trophy 
} from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/dashboard",
      label: "Trang chủ",
      icon: <Home className="h-5 w-5 mr-2" />,
      active: pathname === "/dashboard",
    },
    {
      href: "/streak",
      label: "Streak",
      icon: <Calendar className="h-5 w-5 mr-2" />,
      active: pathname === "/streak",
    },
    {
      href: "/homework",
      label: "Bài tập",
      icon: <BookOpen className="h-5 w-5 mr-2" />,
      active: pathname === "/homework",
    },
    {
      href: "/test",
      label: "Bài thi",
      icon: <GraduationCap className="h-5 w-5 mr-2" />,
      active: pathname === "/test",
    },
    {
      href: "/practice",
      label: "Luyện tập",
      icon: <Trophy className="h-5 w-5 mr-2" />,
      active: pathname === "/practice",
    },
    {
      href: "/settings",
      label: "Cài đặt",
      icon: <Settings className="h-5 w-5 mr-2" />,
      active: pathname === "/settings",
    },
  ]

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Button
          key={route.href}
          variant={route.active ? "default" : "ghost"}
          asChild
        >
          <Link
            href={route.href}
            className={cn(
              "flex items-center text-sm font-medium transition-colors",
              route.active
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-primary"
            )}
          >
            {route.icon}
            {route.label}
          </Link>
        </Button>
      ))}
    </nav>
  )
}
