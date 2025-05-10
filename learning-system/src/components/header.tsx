"use client"

import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Badge } from "@/components/ui/badge"

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-bold">Hệ Thống Học Tập</h2>
          <Badge variant="outline" className="ml-2">Beta</Badge>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <MainNav />
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 rounded-md bg-secondary p-2 text-secondary-foreground">
              <div className="text-xs font-medium">ChemPoint:</div>
              <div className="text-xs font-bold">1,250</div>
            </div>
            <div className="flex items-center space-x-1 rounded-md bg-secondary p-2 text-secondary-foreground">
              <div className="text-xs font-medium">Streak:</div>
              <div className="text-xs font-bold">7 ngày</div>
            </div>
            <ModeToggle />
            <UserNav />
          </div>
        </div>
      </div>
    </div>
  )
}
