import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Brain, Search, Tag, Trophy } from "lucide-react"

export default function PracticePage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Luyện tập</h2>
        <div className="flex items-center space-x-2">
          <Trophy className="h-5 w-5 text-amber-500" />
          <span className="font-bold">Luyện tập tự do theo chủ đề</span>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Tìm kiếm bài luyện tập</CardTitle>
            <CardDescription>
              Tìm kiếm bài luyện tập theo chủ đề hoặc dạng bài
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex w-full max-w-sm items-center space-x-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Tìm kiếm chủ đề hoặc dạng bài..."
                  className="pl-8 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <Button>Tìm kiếm</Button>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="text-sm font-medium">Chủ đề phổ biến</div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Cấu tạo nguyên tử",
                  "Bảng tuần hoàn",
                  "Liên kết hóa học",
                  "Phản ứng hóa học",
                  "Axit-Bazơ",
                  "Oxi hóa khử",
                  "Điện hóa",
                  "Kim loại",
                  "Phi kim",
                  "Hóa hữu cơ"
                ].map((topic, index) => (
                  <Badge key={index} variant="outline" className="cursor-pointer hover:bg-secondary">
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-sm font-medium">Dạng bài phổ biến</div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Trắc nghiệm",
                  "Đúng/Sai",
                  "Điền khuyết",
                  "Ghép đôi",
                  "Sắp xếp",
                  "Giải bài tập",
                  "Phân tích đồ thị",
                  "Viết phương trình"
                ].map((type, index) => (
                  <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                    {type}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Gợi ý luyện tập</CardTitle>
            <CardDescription>
              Dựa trên kết quả gần đây của bạn
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-md bg-secondary p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <div className="font-medium">Cần cải thiện</div>
                </div>
                <div className="text-sm mb-2">Liên kết hóa học (70%)</div>
                <Button size="sm" className="w-full">Luyện tập ngay</Button>
              </div>
              
              <div className="rounded-md bg-secondary p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Tag className="h-5 w-5 text-primary" />
                  <div className="font-medium">Dạng bài mới</div>
                </div>
                <div className="text-sm mb-2">Bài tập về điện hóa</div>
                <Button size="sm" className="w-full">Khám phá</Button>
              </div>
              
              <div className="rounded-md bg-secondary p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div className="font-medium">Ôn tập</div>
                </div>
                <div className="text-sm mb-2">Cấu tạo nguyên tử</div>
                <Button size="sm" className="w-full">Ôn tập</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="topics" className="space-y-4">
        <TabsList>
          <TabsTrigger value="topics">Theo chủ đề</TabsTrigger>
          <TabsTrigger value="types">Theo dạng bài</TabsTrigger>
          <TabsTrigger value="ai">Gợi ý AI</TabsTrigger>
        </TabsList>
        
        <TabsContent value="topics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Cấu tạo nguyên tử",
                description: "Luyện tập về cấu trúc nguyên tử, electron, proton, neutron",
                count: 25,
                icon: <div className="rounded-full bg-blue-100 dark:bg-blue-900/20 p-2">
                  <div className="font-bold text-blue-600 dark:text-blue-400">H</div>
                </div>
              },
              {
                title: "Bảng tuần hoàn",
                description: "Luyện tập về bảng tuần hoàn các nguyên tố hóa học",
                count: 30,
                icon: <div className="rounded-full bg-green-100 dark:bg-green-900/20 p-2">
                  <div className="font-bold text-green-600 dark:text-green-400">PT</div>
                </div>
              },
              {
                title: "Liên kết hóa học",
                description: "Luyện tập về các loại liên kết hóa học và cấu trúc phân tử",
                count: 20,
                icon: <div className="rounded-full bg-purple-100 dark:bg-purple-900/20 p-2">
                  <div className="font-bold text-purple-600 dark:text-purple-400">LK</div>
                </div>
              },
              {
                title: "Phản ứng hóa học",
                description: "Luyện tập về các loại phản ứng hóa học",
                count: 35,
                icon: <div className="rounded-full bg-red-100 dark:bg-red-900/20 p-2">
                  <div className="font-bold text-red-600 dark:text-red-400">PƯ</div>
                </div>
              },
              {
                title: "Axit-Bazơ",
                description: "Luyện tập về axit, bazơ, pH và phản ứng trung hòa",
                count: 28,
                icon: <div className="rounded-full bg-yellow-100 dark:bg-yellow-900/20 p-2">
                  <div className="font-bold text-yellow-600 dark:text-yellow-400">AB</div>
                </div>
              },
              {
                title: "Oxi hóa khử",
                description: "Luyện tập về phản ứng oxi hóa khử và cân bằng phương trình",
                count: 32,
                icon: <div className="rounded-full bg-orange-100 dark:bg-orange-900/20 p-2">
                  <div className="font-bold text-orange-600 dark:text-orange-400">OX</div>
                </div>
              },
            ].map((topic, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-2">
                    {topic.icon}
                    <CardTitle>{topic.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="min-h-[40px]">{topic.description}</CardDescription>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {topic.count} bài luyện tập
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Bắt đầu luyện tập</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="types" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Trắc nghiệm",
                description: "Luyện tập với câu hỏi trắc nghiệm 4 lựa chọn",
                count: 100,
              },
              {
                title: "Đúng/Sai",
                description: "Luyện tập xác định mệnh đề đúng hay sai",
                count: 80,
              },
              {
                title: "Điền khuyết",
                description: "Luyện tập điền từ thích hợp vào chỗ trống",
                count: 60,
              },
              {
                title: "Ghép đôi",
                description: "Luyện tập ghép các cặp thông tin liên quan",
                count: 40,
              },
              {
                title: "Sắp xếp",
                description: "Luyện tập sắp xếp các bước theo thứ tự đúng",
                count: 30,
              },
              {
                title: "Giải bài tập",
                description: "Luyện tập giải các bài tập tính toán",
                count: 50,
              },
            ].map((type, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    {type.count} bài luyện tập
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Bắt đầu luyện tập</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="ai" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gợi ý luyện tập từ AI</CardTitle>
              <CardDescription>
                Nhận gợi ý luyện tập cá nhân hóa dựa trên kết quả học tập của bạn
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Brain className="h-5 w-5 text-purple-500" />
                    <div className="font-medium">Phân tích kết quả học tập</div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Dựa trên kết quả học tập gần đây, AI gợi ý bạn nên tập trung vào các chủ đề sau:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm">1. Liên kết hóa học</div>
                      <Badge variant="outline">Ưu tiên cao</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">2. Phản ứng oxi hóa khử</div>
                      <Badge variant="outline">Ưu tiên trung bình</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">3. Cân bằng phương trình hóa học</div>
                      <Badge variant="outline">Ưu tiên thấp</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-md border p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Trophy className="h-5 w-5 text-amber-500" />
                    <div className="font-medium">Lộ trình luyện tập đề xuất</div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Tuần này</div>
                      <div className="rounded-md bg-secondary p-3">
                        <div className="font-medium mb-1">Liên kết hóa học</div>
                        <div className="text-sm text-muted-foreground mb-2">
                          10 bài tập trắc nghiệm + 5 bài tập điền khuyết
                        </div>
                        <Button size="sm">Bắt đầu ngay</Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Tuần sau</div>
                      <div className="rounded-md bg-secondary p-3">
                        <div className="font-medium mb-1">Phản ứng oxi hóa khử</div>
                        <div className="text-sm text-muted-foreground mb-2">
                          8 bài tập trắc nghiệm + 7 bài tập giải
                        </div>
                        <Button size="sm" variant="outline">Xem trước</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Tạo lộ trình luyện tập mới</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
