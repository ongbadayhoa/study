import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Brain, Key, Lock, Settings, User } from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Cài đặt</h2>
      </div>
      
      <Tabs defaultValue="account" className="space-y-4">
        <TabsList>
          <TabsTrigger value="account">Tài khoản</TabsTrigger>
          <TabsTrigger value="appearance">Giao diện</TabsTrigger>
          <TabsTrigger value="notifications">Thông báo</TabsTrigger>
          <TabsTrigger value="ai">AI API Key</TabsTrigger>
          <TabsTrigger value="admin">Quản trị</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Thông tin tài khoản</CardTitle>
              <CardDescription>
                Quản lý thông tin tài khoản của bạn
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-medium">Họ và tên</div>
                <input
                  type="text"
                  placeholder="Họ và tên"
                  defaultValue="Học Sinh"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium">Email</div>
                <input
                  type="email"
                  placeholder="Email"
                  defaultValue="hocsinh@example.com"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium">Số điện thoại</div>
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Lưu thay đổi</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Bảo mật</CardTitle>
              <CardDescription>
                Quản lý mật khẩu và bảo mật tài khoản
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-medium">Mật khẩu hiện tại</div>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Mật khẩu hiện tại"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                  <Lock className="absolute right-3 top-2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium">Mật khẩu mới</div>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Mật khẩu mới"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                  <Lock className="absolute right-3 top-2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium">Xác nhận mật khẩu mới</div>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Xác nhận mật khẩu mới"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                  <Lock className="absolute right-3 top-2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Đổi mật khẩu</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Giao diện</CardTitle>
              <CardDescription>
                Tùy chỉnh giao diện người dùng
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-medium">Chế độ</div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="rounded-md border-2 border-primary p-2 cursor-pointer">
                      <div className="h-20 w-full rounded-md bg-white"></div>
                    </div>
                    <span className="text-sm">Sáng</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="rounded-md border-2 border-muted p-2 cursor-pointer">
                      <div className="h-20 w-full rounded-md bg-slate-950"></div>
                    </div>
                    <span className="text-sm">Tối</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="rounded-md border-2 border-muted p-2 cursor-pointer">
                      <div className="h-20 w-full rounded-md bg-gradient-to-b from-white to-slate-950"></div>
                    </div>
                    <span className="text-sm">Hệ thống</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium">Màu chủ đạo</div>
                <div className="flex flex-wrap gap-2">
                  {["blue", "green", "red", "purple", "orange", "yellow"].map((color) => (
                    <div
                      key={color}
                      className={`h-8 w-8 rounded-full cursor-pointer ${
                        color === "blue" ? "ring-2 ring-primary ring-offset-2" : ""
                      }`}
                      style={{
                        backgroundColor:
                          color === "blue"
                            ? "rgb(59, 130, 246)"
                            : color === "green"
                            ? "rgb(34, 197, 94)"
                            : color === "red"
                            ? "rgb(239, 68, 68)"
                            : color === "purple"
                            ? "rgb(168, 85, 247)"
                            : color === "orange"
                            ? "rgb(249, 115, 22)"
                            : "rgb(234, 179, 8)",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Lưu thay đổi</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Thông báo</CardTitle>
              <CardDescription>
                Quản lý cài đặt thông báo
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Nhắc nhở Streak hàng ngày</div>
                  <div className="text-xs text-muted-foreground">
                    Nhận thông báo nhắc nhở làm Streak hàng ngày
                  </div>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="peer sr-only"
                  />
                  <div className="peer h-5 w-9 rounded-full bg-muted after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-focus:outline-none"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Thông báo bài tập mới</div>
                  <div className="text-xs text-muted-foreground">
                    Nhận thông báo khi có bài tập mới
                  </div>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="peer sr-only"
                  />
                  <div className="peer h-5 w-9 rounded-full bg-muted after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-focus:outline-none"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Thông báo bài thi mới</div>
                  <div className="text-xs text-muted-foreground">
                    Nhận thông báo khi có bài thi mới
                  </div>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="peer sr-only"
                  />
                  <div className="peer h-5 w-9 rounded-full bg-muted after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-focus:outline-none"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Email thông báo</div>
                  <div className="text-xs text-muted-foreground">
                    Nhận email thông báo về tiến độ học tập
                  </div>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                  />
                  <div className="peer h-5 w-9 rounded-full bg-muted after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-focus:outline-none"></div>
                </label>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Lưu thay đổi</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="ai" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI API Key</CardTitle>
              <CardDescription>
                Quản lý API Key cho tính năng AI
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md bg-secondary p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <div className="font-medium">Tính năng AI</div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Tích hợp API Key của bạn để sử dụng các tính năng AI nâng cao như tạo câu hỏi tự động, gợi ý luyện tập cá nhân hóa, và phân tích kết quả học tập.
                </p>
                <div className="space-y-2">
                  <div className="text-sm font-medium">API Key</div>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Nhập API Key của bạn"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                    <Key className="absolute right-3 top-2 h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    API Key của bạn được mã hóa và lưu trữ an toàn.
                  </p>
                </div>
              </div>
              
              <div className="rounded-md border p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Settings className="h-5 w-5 text-muted-foreground" />
                  <div className="font-medium">Cài đặt AI</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">Tạo câu hỏi tự động</div>
                      <div className="text-xs text-muted-foreground">
                        Cho phép AI tạo câu hỏi tự động dựa trên chủ đề
                      </div>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="peer sr-only"
                      />
                      <div className="peer h-5 w-9 rounded-full bg-muted after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-focus:outline-none"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">Gợi ý luyện tập</div>
                      <div className="text-xs text-muted-foreground">
                        Cho phép AI gợi ý bài luyện tập phù hợp
                      </div>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="peer sr-only"
                      />
                      <div className="peer h-5 w-9 rounded-full bg-muted after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-focus:outline-none"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">Phân tích kết quả</div>
                      <div className="text-xs text-muted-foreground">
                        Cho phép AI phân tích kết quả học tập của bạn
                      </div>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="peer sr-only"
                      />
                      <div className="peer h-5 w-9 rounded-full bg-muted after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-focus:outline-none"></div>
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Lưu API Key</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="admin" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Quản trị</CardTitle>
                  <CardDescription>
                    Quản lý câu hỏi và nội dung học tập
                  </CardDescription>
                </div>
                <Badge>Admin</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Button asChild className="h-24 flex flex-col items-center justify-center space-y-2">
                  <Link href="/admin/questions">
                    <div className="flex flex-col items-center space-y-2">
                      <User className="h-6 w-6" />
                      <div>Quản lý câu hỏi</div>
                    </div>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
                  <Link href="/admin/topics">
                    <div className="flex flex-col items-center space-y-2">
                      <Settings className="h-6 w-6" />
                      <div>Quản lý chủ đề</div>
                    </div>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
                  <Link href="/admin/users">
                    <div className="flex flex-col items-center space-y-2">
                      <User className="h-6 w-6" />
                      <div>Quản lý người dùng</div>
                    </div>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
                  <Link href="/admin/reports">
                    <div className="flex flex-col items-center space-y-2">
                      <Settings className="h-6 w-6" />
                      <div>Báo cáo</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
