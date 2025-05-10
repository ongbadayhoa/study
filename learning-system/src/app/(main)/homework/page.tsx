import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, CheckCircle, Clock, PlayCircle, Star } from "lucide-react"

export default function HomeworkPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Bài tập</h2>
        <div className="flex items-center space-x-2">
          <BookOpen className="h-5 w-5 text-blue-500" />
          <span className="font-bold">24/36 bài đã hoàn thành</span>
        </div>
      </div>
      
      <Tabs defaultValue="chapter1" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="chapter1">Chương 1</TabsTrigger>
          <TabsTrigger value="chapter2">Chương 2</TabsTrigger>
          <TabsTrigger value="chapter3">Chương 3</TabsTrigger>
          <TabsTrigger value="chapter4">Chương 4</TabsTrigger>
        </TabsList>
        
        <TabsContent value="chapter1" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Chương 1: Cấu tạo nguyên tử</CardTitle>
              <CardDescription>
                Hoàn thành 8/10 bài tập
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { 
                    title: "Bài 1: Cấu tạo nguyên tử", 
                    status: "completed", 
                    score: "9/10", 
                    difficulty: "easy",
                    video: "Cấu tạo nguyên tử cơ bản"
                  },
                  { 
                    title: "Bài 2: Bảng tuần hoàn", 
                    status: "completed", 
                    score: "8/10", 
                    difficulty: "medium",
                    video: "Bảng tuần hoàn các nguyên tố hóa học"
                  },
                  { 
                    title: "Bài 3: Liên kết hóa học", 
                    status: "completed", 
                    score: "7/10", 
                    difficulty: "hard",
                    video: "Liên kết hóa học và cấu trúc phân tử"
                  },
                  { 
                    title: "Bài 4: Phản ứng hóa học", 
                    status: "not-started", 
                    score: "-", 
                    difficulty: "medium",
                    video: "Phản ứng hóa học cơ bản"
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 rounded-md border p-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {item.status === "completed" ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <Clock className="h-5 w-5 text-yellow-500" />
                          )}
                          <p className="font-medium">{item.title}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {Array.from({ length: item.difficulty === "easy" ? 1 : item.difficulty === "medium" ? 2 : 3 }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                            ))}
                            {Array.from({ length: 3 - (item.difficulty === "easy" ? 1 : item.difficulty === "medium" ? 2 : 3) }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-muted-foreground" />
                            ))}
                          </div>
                          <span className="text-sm font-medium">{item.score}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <PlayCircle className="h-4 w-4" />
                        <span>Video: {item.video}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <PlayCircle className="mr-2 h-4 w-4" />
                        Xem video
                      </Button>
                      <Button size="sm">
                        {item.status === "completed" ? "Làm lại" : "Làm bài"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="chapter2" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Chương 2: Phản ứng hóa học</CardTitle>
              <CardDescription>
                Hoàn thành 6/8 bài tập
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-6 text-muted-foreground">
                Danh sách bài tập Chương 2 sẽ hiển thị ở đây
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="chapter3" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Chương 3: Hóa học vô cơ</CardTitle>
              <CardDescription>
                Hoàn thành 5/8 bài tập
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-6 text-muted-foreground">
                Danh sách bài tập Chương 3 sẽ hiển thị ở đây
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="chapter4" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Chương 4: Hóa học hữu cơ</CardTitle>
              <CardDescription>
                Hoàn thành 5/10 bài tập
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-6 text-muted-foreground">
                Danh sách bài tập Chương 4 sẽ hiển thị ở đây
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Card>
        <CardHeader>
          <CardTitle>Tiến độ hoàn thành</CardTitle>
          <CardDescription>
            Theo dõi tiến độ hoàn thành bài tập của bạn
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <div className="text-sm font-medium">Tổng tiến độ</div>
                <div className="text-sm font-medium">67%</div>
              </div>
              <div className="rounded-full bg-secondary h-2">
                <div className="bg-primary h-2 w-[67%] rounded-full"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-sm font-medium">Chương 1</div>
                  <div className="text-sm font-medium">80%</div>
                </div>
                <div className="rounded-full bg-secondary h-2">
                  <div className="bg-blue-500 h-2 w-[80%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-sm font-medium">Chương 2</div>
                  <div className="text-sm font-medium">75%</div>
                </div>
                <div className="rounded-full bg-secondary h-2">
                  <div className="bg-green-500 h-2 w-[75%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-sm font-medium">Chương 3</div>
                  <div className="text-sm font-medium">63%</div>
                </div>
                <div className="rounded-full bg-secondary h-2">
                  <div className="bg-yellow-500 h-2 w-[63%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-sm font-medium">Chương 4</div>
                  <div className="text-sm font-medium">50%</div>
                </div>
                <div className="rounded-full bg-secondary h-2">
                  <div className="bg-orange-500 h-2 w-[50%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">Xem báo cáo chi tiết</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
