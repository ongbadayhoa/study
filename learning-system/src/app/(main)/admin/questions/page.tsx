import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Brain, Edit, Plus, Search, Trash } from "lucide-react"

export default function QuestionsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Quản lý câu hỏi</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Thêm câu hỏi mới
        </Button>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Tìm kiếm câu hỏi..."
            className="pl-8 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <Button variant="outline">Lọc</Button>
      </div>
      
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="streak">Streak</TabsTrigger>
          <TabsTrigger value="homework">Bài tập</TabsTrigger>
          <TabsTrigger value="test">Bài thi</TabsTrigger>
          <TabsTrigger value="practice">Luyện tập</TabsTrigger>
          <TabsTrigger value="ai">Tạo bởi AI</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Danh sách câu hỏi</CardTitle>
              <CardDescription>
                Quản lý tất cả câu hỏi trong hệ thống
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "Q001",
                    question: "Nguyên tử là gì?",
                    type: "multiple-choice",
                    difficulty: "easy",
                    topic: "Cấu tạo nguyên tử",
                    category: "streak",
                    createdBy: "admin"
                  },
                  {
                    id: "Q002",
                    question: "Bảng tuần hoàn các nguyên tố hóa học được sắp xếp theo nguyên tắc nào?",
                    type: "multiple-choice",
                    difficulty: "medium",
                    topic: "Bảng tuần hoàn",
                    category: "homework",
                    createdBy: "admin"
                  },
                  {
                    id: "Q003",
                    question: "Phân tử H2O có cấu tạo như thế nào?",
                    type: "multiple-choice",
                    difficulty: "medium",
                    topic: "Liên kết hóa học",
                    category: "test",
                    createdBy: "admin"
                  },
                  {
                    id: "Q004",
                    question: "Phản ứng oxi hóa khử là gì?",
                    type: "multiple-choice",
                    difficulty: "hard",
                    topic: "Oxi hóa khử",
                    category: "practice",
                    createdBy: "ai"
                  },
                  {
                    id: "Q005",
                    question: "Axit là gì theo định nghĩa của Arrhenius?",
                    type: "multiple-choice",
                    difficulty: "medium",
                    topic: "Axit-Bazơ",
                    category: "homework",
                    createdBy: "admin"
                  },
                ].map((question, index) => (
                  <div key={index} className="flex items-center space-x-4 rounded-md border p-4">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">{question.id}</span>
                        <Badge variant={
                          question.category === "streak" 
                            ? "default" 
                            : question.category === "homework" 
                              ? "secondary" 
                              : question.category === "test"
                                ? "destructive"
                                : "outline"
                        }>
                          {question.category}
                        </Badge>
                        {question.createdBy === "ai" && (
                          <Badge variant="outline" className="bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400">
                            <Brain className="mr-1 h-3 w-3" />
                            AI
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm">{question.question}</p>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <span>Loại: {question.type}</span>
                        <span>•</span>
                        <span>Độ khó: {question.difficulty}</span>
                        <span>•</span>
                        <span>Chủ đề: {question.topic}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="text-destructive">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Hiển thị 1-5 của 100 câu hỏi
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Trước
                </Button>
                <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Sau
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="ai" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tạo câu hỏi bằng AI</CardTitle>
              <CardDescription>
                Sử dụng AI để tạo câu hỏi tự động
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md bg-secondary p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <div className="font-medium">Tạo câu hỏi bằng AI</div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Nhập chủ đề và các thông số để AI tạo câu hỏi tự động. AI sẽ tạo câu hỏi, các lựa chọn và đáp án đúng.
                </p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Chủ đề</div>
                      <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option value="">Chọn chủ đề</option>
                        <option value="atomic-structure">Cấu tạo nguyên tử</option>
                        <option value="periodic-table">Bảng tuần hoàn</option>
                        <option value="chemical-bonds">Liên kết hóa học</option>
                        <option value="chemical-reactions">Phản ứng hóa học</option>
                        <option value="acid-base">Axit-Bazơ</option>
                        <option value="redox">Oxi hóa khử</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Loại câu hỏi</div>
                      <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option value="">Chọn loại câu hỏi</option>
                        <option value="multiple-choice">Trắc nghiệm</option>
                        <option value="true-false">Đúng/Sai</option>
                        <option value="fill-in-blank">Điền khuyết</option>
                        <option value="matching">Ghép đôi</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Độ khó</div>
                      <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option value="">Chọn độ khó</option>
                        <option value="easy">Dễ</option>
                        <option value="medium">Trung bình</option>
                        <option value="hard">Khó</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Loại bài tập</div>
                      <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option value="">Chọn loại bài tập</option>
                        <option value="streak">Streak</option>
                        <option value="homework">Bài tập</option>
                        <option value="test">Bài thi</option>
                        <option value="practice">Luyện tập</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Số lượng câu hỏi</div>
                    <input
                      type="number"
                      placeholder="Nhập số lượng câu hỏi"
                      defaultValue="5"
                      min="1"
                      max="20"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Hướng dẫn bổ sung (tùy chọn)</div>
                    <textarea
                      placeholder="Nhập hướng dẫn bổ sung cho AI..."
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[100px]"
                    ></textarea>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Xem trước</Button>
              <Button>
                <Brain className="mr-2 h-4 w-4" />
                Tạo câu hỏi
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Câu hỏi được tạo bởi AI</CardTitle>
              <CardDescription>
                Danh sách câu hỏi được tạo tự động bởi AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-6 text-muted-foreground">
                Chưa có câu hỏi nào được tạo bởi AI
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="streak" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Câu hỏi Streak</CardTitle>
              <CardDescription>
                Quản lý câu hỏi cho Streak hàng ngày
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-6 text-muted-foreground">
                Danh sách câu hỏi Streak sẽ hiển thị ở đây
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="homework" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Câu hỏi Bài tập</CardTitle>
              <CardDescription>
                Quản lý câu hỏi cho Bài tập theo lộ trình
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-6 text-muted-foreground">
                Danh sách câu hỏi Bài tập sẽ hiển thị ở đây
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="test" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Câu hỏi Bài thi</CardTitle>
              <CardDescription>
                Quản lý câu hỏi cho Bài thi thử
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-6 text-muted-foreground">
                Danh sách câu hỏi Bài thi sẽ hiển thị ở đây
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="practice" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Câu hỏi Luyện tập</CardTitle>
              <CardDescription>
                Quản lý câu hỏi cho Luyện tập tự do
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-6 text-muted-foreground">
                Danh sách câu hỏi Luyện tập sẽ hiển thị ở đây
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
