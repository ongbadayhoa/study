import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, CheckCircle, Clock, Flame } from "lucide-react"

export default function StreakPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Streak</h2>
        <div className="flex items-center space-x-2">
          <Flame className="h-5 w-5 text-orange-500" />
          <span className="font-bold">7 ngày liên tiếp</span>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Chuỗi Streak của bạn</CardTitle>
            <CardDescription>
              Làm 3 câu mỗi ngày để duy trì chuỗi Streak
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center justify-center rounded-md p-2 min-w-[60px] ${
                    i < 7
                      ? "bg-orange-100 dark:bg-orange-900/20 border-orange-500 border"
                      : "bg-muted border border-dashed"
                  }`}
                >
                  <div className="text-xs text-muted-foreground">
                    {i === 0 ? "Hôm nay" : i === 1 ? "Hôm qua" : `${i} ngày trước`}
                  </div>
                  {i < 7 ? (
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-1" />
                  ) : (
                    <div className="h-6 w-6 rounded-full border border-dashed flex items-center justify-center mt-1">
                      <span className="text-xs text-muted-foreground">?</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between rounded-md border p-4">
              <div className="space-y-1">
                <div className="text-sm font-medium">Streak hôm nay</div>
                <div className="text-sm text-muted-foreground">
                  Hoàn thành 3 câu hỏi để duy trì chuỗi Streak
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Còn 14 giờ</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Làm Streak hôm nay</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Thống kê Streak</CardTitle>
            <CardDescription>
              Theo dõi tiến độ Streak của bạn
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium">Streak hiện tại</div>
              <div className="flex items-center space-x-2">
                <Flame className="h-5 w-5 text-orange-500" />
                <span className="text-2xl font-bold">7 ngày</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">Streak dài nhất</div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <span className="text-2xl font-bold">14 ngày</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">Tổng số ngày hoàn thành</div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-muted-foreground" />
                <span className="text-2xl font-bold">32 ngày</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">ChemPoint từ Streak</div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold">320</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Lịch sử Streak</CardTitle>
          <CardDescription>
            Xem lại các câu hỏi Streak bạn đã làm
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { date: "Hôm nay", score: "3/3", topics: ["Cấu tạo nguyên tử", "Bảng tuần hoàn", "Liên kết hóa học"] },
              { date: "Hôm qua", score: "3/3", topics: ["Phản ứng hóa học", "Axit-Bazơ", "Muối"] },
              { date: "2 ngày trước", score: "3/3", topics: ["Oxi hóa khử", "Điện hóa", "Kim loại"] },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4 rounded-md border p-4">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{item.date}</p>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">{item.score}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.topics.map((topic, i) => (
                      <span key={i} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Xem lại
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
