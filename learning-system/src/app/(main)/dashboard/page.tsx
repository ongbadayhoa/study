import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, GraduationCap, Trophy } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Trang chủ</h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Tổng quan</TabsTrigger>
          <TabsTrigger value="analytics">Phân tích</TabsTrigger>
          <TabsTrigger value="reports">Báo cáo</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Streak hiện tại
                </CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7 ngày</div>
                <p className="text-xs text-muted-foreground">
                  Streak dài nhất: 14 ngày
                </p>
                <Button asChild className="mt-4 w-full">
                  <Link href="/streak">Làm Streak hôm nay</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Bài tập đã hoàn thành
                </CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24/36</div>
                <p className="text-xs text-muted-foreground">
                  Hoàn thành 67% bài tập
                </p>
                <Button asChild className="mt-4 w-full">
                  <Link href="/homework">Làm bài tập</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Bài thi đã làm
                </CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3/5</div>
                <p className="text-xs text-muted-foreground">
                  Điểm trung bình: 8.5/10
                </p>
                <Button asChild className="mt-4 w-full">
                  <Link href="/test">Làm bài thi</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  ChemPoint
                </CardTitle>
                <Trophy className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,250</div>
                <p className="text-xs text-muted-foreground">
                  Xếp hạng: 12/156
                </p>
                <Button asChild className="mt-4 w-full">
                  <Link href="/practice">Luyện tập</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Bài tập gần đây</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="space-y-2">
                  {[
                    { name: "Cấu tạo nguyên tử", score: "9/10", date: "Hôm nay" },
                    { name: "Bảng tuần hoàn", score: "8/10", date: "Hôm qua" },
                    { name: "Liên kết hóa học", score: "7/10", date: "3 ngày trước" },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Điểm: {item.score} • {item.date}
                        </p>
                      </div>
                      <div className="ml-auto font-medium">
                        <Button variant="ghost" size="sm">Xem lại</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Gợi ý luyện tập</CardTitle>
                <CardDescription>
                  Dựa trên kết quả gần đây của bạn
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Cần cải thiện</div>
                    <div className="rounded-md bg-secondary p-2">
                      <div className="font-medium">Liên kết hóa học</div>
                      <div className="text-xs text-muted-foreground">
                        Bạn đạt 70% trong bài tập gần đây
                      </div>
                      <Button variant="outline" size="sm" className="mt-2 w-full">
                        Luyện tập ngay
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Bài tập tiếp theo</div>
                    <div className="rounded-md bg-secondary p-2">
                      <div className="font-medium">Phản ứng oxi hóa khử</div>
                      <div className="text-xs text-muted-foreground">
                        Theo lộ trình học tập của bạn
                      </div>
                      <Button variant="outline" size="sm" className="mt-2 w-full">
                        Bắt đầu học
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Phân tích kết quả học tập</CardTitle>
                <CardDescription>
                  Biểu đồ tiến độ và điểm số theo thời gian
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center border rounded-md">
                  <p className="text-muted-foreground">Biểu đồ phân tích sẽ hiển thị ở đây</p>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Điểm mạnh và điểm yếu</CardTitle>
                <CardDescription>
                  Phân tích theo chủ đề và dạng bài
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <div className="text-sm font-medium">Cấu tạo nguyên tử</div>
                      <div className="text-sm font-medium">90%</div>
                    </div>
                    <div className="rounded-full bg-secondary h-2">
                      <div className="bg-primary h-2 w-[90%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <div className="text-sm font-medium">Bảng tuần hoàn</div>
                      <div className="text-sm font-medium">80%</div>
                    </div>
                    <div className="rounded-full bg-secondary h-2">
                      <div className="bg-primary h-2 w-[80%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <div className="text-sm font-medium">Liên kết hóa học</div>
                      <div className="text-sm font-medium">70%</div>
                    </div>
                    <div className="rounded-full bg-secondary h-2">
                      <div className="bg-primary h-2 w-[70%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <div className="text-sm font-medium">Phản ứng hóa học</div>
                      <div className="text-sm font-medium">60%</div>
                    </div>
                    <div className="rounded-full bg-secondary h-2">
                      <div className="bg-primary h-2 w-[60%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Báo cáo học tập</CardTitle>
              <CardDescription>
                Tổng hợp kết quả học tập của bạn
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2 border rounded-md p-4">
                    <div className="text-sm font-medium">Tổng thời gian học</div>
                    <div className="text-2xl font-bold">24 giờ</div>
                    <div className="text-xs text-muted-foreground">Trong 30 ngày qua</div>
                  </div>
                  <div className="space-y-2 border rounded-md p-4">
                    <div className="text-sm font-medium">Số bài đã hoàn thành</div>
                    <div className="text-2xl font-bold">42 bài</div>
                    <div className="text-xs text-muted-foreground">Trong 30 ngày qua</div>
                  </div>
                  <div className="space-y-2 border rounded-md p-4">
                    <div className="text-sm font-medium">Điểm trung bình</div>
                    <div className="text-2xl font-bold">8.2/10</div>
                    <div className="text-xs text-muted-foreground">Trong 30 ngày qua</div>
                  </div>
                </div>
                <Button>Tải báo cáo chi tiết</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
