import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, GraduationCap, Timer } from "lucide-react"

export default function TestPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Bài thi thử</h2>
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-5 w-5 text-purple-500" />
          <span className="font-bold">3/5 bài thi đã hoàn thành</span>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Đề thi thử số 1",
            description: "60 câu hỏi trắc nghiệm, 90 phút",
            status: "completed",
            score: "85/100",
            date: "15/11/2023",
            badge: "Dễ"
          },
          {
            title: "Đề thi thử số 2",
            description: "60 câu hỏi trắc nghiệm, 90 phút",
            status: "completed",
            score: "78/100",
            date: "22/11/2023",
            badge: "Trung bình"
          },
          {
            title: "Đề thi thử số 3",
            description: "60 câu hỏi trắc nghiệm, 90 phút",
            status: "completed",
            score: "92/100",
            date: "29/11/2023",
            badge: "Khó"
          },
          {
            title: "Đề thi thử số 4",
            description: "60 câu hỏi trắc nghiệm, 90 phút",
            status: "not-started",
            score: "-",
            date: "-",
            badge: "Trung bình"
          },
          {
            title: "Đề thi thử số 5",
            description: "60 câu hỏi trắc nghiệm, 90 phút",
            status: "not-started",
            score: "-",
            date: "-",
            badge: "Khó"
          },
        ].map((test, index) => (
          <Card key={index} className={test.status === "completed" ? "border-green-200" : ""}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>{test.title}</CardTitle>
                <Badge variant={
                  test.badge === "Dễ" 
                    ? "default" 
                    : test.badge === "Trung bình" 
                      ? "secondary" 
                      : "outline"
                }>
                  {test.badge}
                </Badge>
              </div>
              <CardDescription>{test.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Trạng thái:</span>
                  <div className="flex items-center">
                    {test.status === "completed" ? (
                      <>
                        <CheckCircle className="mr-1 h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">Đã hoàn thành</span>
                      </>
                    ) : (
                      <>
                        <Clock className="mr-1 h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium">Chưa làm</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Điểm số:</span>
                  <span className="text-sm font-medium">{test.score}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Ngày làm:</span>
                  <span className="text-sm font-medium">{test.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Thời gian:</span>
                  <div className="flex items-center">
                    <Timer className="mr-1 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">90 phút</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              {test.status === "completed" ? (
                <>
                  <Button variant="outline">Xem kết quả</Button>
                  <Button>Làm lại</Button>
                </>
              ) : (
                <Button className="w-full">Bắt đầu thi</Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Phân tích kết quả thi</CardTitle>
          <CardDescription>
            Phân tích chi tiết kết quả các bài thi thử
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-md border p-4">
              <h3 className="text-lg font-medium mb-2">Điểm trung bình theo phần</h3>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-sm font-medium">Cấu tạo nguyên tử</div>
                    <div className="text-sm font-medium">90%</div>
                  </div>
                  <div className="rounded-full bg-secondary h-2">
                    <div className="bg-green-500 h-2 w-[90%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-sm font-medium">Bảng tuần hoàn</div>
                    <div className="text-sm font-medium">85%</div>
                  </div>
                  <div className="rounded-full bg-secondary h-2">
                    <div className="bg-green-500 h-2 w-[85%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-sm font-medium">Liên kết hóa học</div>
                    <div className="text-sm font-medium">75%</div>
                  </div>
                  <div className="rounded-full bg-secondary h-2">
                    <div className="bg-yellow-500 h-2 w-[75%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-sm font-medium">Phản ứng hóa học</div>
                    <div className="text-sm font-medium">65%</div>
                  </div>
                  <div className="rounded-full bg-secondary h-2">
                    <div className="bg-orange-500 h-2 w-[65%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-md border p-4">
                <h3 className="text-lg font-medium mb-2">Tiến bộ qua các lần thi</h3>
                <div className="h-[200px] flex items-center justify-center">
                  <p className="text-muted-foreground">Biểu đồ tiến bộ sẽ hiển thị ở đây</p>
                </div>
              </div>
              <div className="rounded-md border p-4">
                <h3 className="text-lg font-medium mb-2">Phân tích thời gian làm bài</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Thời gian trung bình mỗi câu:</span>
                    <span className="font-medium">1 phút 20 giây</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Thời gian hoàn thành nhanh nhất:</span>
                    <span className="font-medium">75 phút</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Thời gian hoàn thành chậm nhất:</span>
                    <span className="font-medium">88 phút</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Tỷ lệ câu hỏi đúng:</span>
                    <span className="font-medium">85%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">Xem phân tích chi tiết</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
