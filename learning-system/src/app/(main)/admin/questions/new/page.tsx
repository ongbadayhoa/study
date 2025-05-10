import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Brain, Plus, Save, X } from "lucide-react"

export default function NewQuestionPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Thêm câu hỏi mới</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <X className="mr-2 h-4 w-4" />
            Hủy
          </Button>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Lưu câu hỏi
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="basic" className="space-y-4">
        <TabsList>
          <TabsTrigger value="basic">Thông tin cơ bản</TabsTrigger>
          <TabsTrigger value="options">Lựa chọn</TabsTrigger>
          <TabsTrigger value="explanation">Giải thích</TabsTrigger>
          <TabsTrigger value="preview">Xem trước</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Thông tin cơ bản</CardTitle>
              <CardDescription>
                Nhập thông tin cơ bản của câu hỏi
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-medium">Câu hỏi</div>
                <textarea
                  placeholder="Nhập nội dung câu hỏi..."
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[100px]"
                ></textarea>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
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
                <div className="text-sm font-medium">Tags</div>
                <input
                  type="text"
                  placeholder="Nhập tags (phân cách bằng dấu phẩy)..."
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    Hóa học
                    <button className="text-muted-foreground hover:text-foreground">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    Nguyên tử
                    <button className="text-muted-foreground hover:text-foreground">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium">Hình ảnh (tùy chọn)</div>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-md border-border cursor-pointer bg-background hover:bg-secondary/50">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                      </svg>
                      <p className="mb-2 text-sm text-muted-foreground">
                        <span className="font-medium">Nhấp để tải lên</span> hoặc kéo thả
                      </p>
                      <p className="text-xs text-muted-foreground">PNG, JPG hoặc GIF (tối đa 2MB)</p>
                    </div>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Hủy</Button>
              <Button>Tiếp theo</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="options" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Lựa chọn</CardTitle>
              <CardDescription>
                Thêm các lựa chọn cho câu hỏi
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground">
                      {String.fromCharCode(64 + index)}
                    </div>
                    <input
                      type="text"
                      placeholder={`Lựa chọn ${index}...`}
                      className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                    <div className="flex items-center space-x-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="correct-answer"
                          className="h-4 w-4 rounded-full border-primary text-primary"
                        />
                        <span className="text-sm">Đúng</span>
                      </label>
                      <Button variant="ghost" size="icon" className="text-destructive">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Thêm lựa chọn
              </Button>
              
              <div className="rounded-md bg-secondary p-4 mt-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <div className="font-medium">Gợi ý từ AI</div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Sử dụng AI để tạo các lựa chọn tự động cho câu hỏi của bạn.
                </p>
                <Button className="w-full">
                  <Brain className="mr-2 h-4 w-4" />
                  Tạo lựa chọn bằng AI
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Quay lại</Button>
              <Button>Tiếp theo</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="explanation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Giải thích</CardTitle>
              <CardDescription>
                Thêm giải thích cho câu hỏi
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-medium">Giải thích</div>
                <textarea
                  placeholder="Nhập giải thích chi tiết cho câu hỏi..."
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[200px]"
                ></textarea>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium">Video liên quan (tùy chọn)</div>
                <input
                  type="text"
                  placeholder="Nhập URL video liên quan..."
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              
              <div className="rounded-md bg-secondary p-4 mt-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <div className="font-medium">Gợi ý từ AI</div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Sử dụng AI để tạo giải thích chi tiết cho câu hỏi của bạn.
                </p>
                <Button className="w-full">
                  <Brain className="mr-2 h-4 w-4" />
                  Tạo giải thích bằng AI
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Quay lại</Button>
              <Button>Tiếp theo</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="preview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Xem trước</CardTitle>
              <CardDescription>
                Xem trước câu hỏi trước khi lưu
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border p-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">Trắc nghiệm</Badge>
                      <Badge variant="outline">Trung bình</Badge>
                      <Badge variant="outline">Cấu tạo nguyên tử</Badge>
                    </div>
                    <Badge>Streak</Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="font-medium">Nguyên tử là gì?</div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs">
                          A
                        </div>
                        <span className="text-sm">Phần tử nhỏ nhất của vật chất</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-secondary text-secondary-foreground text-xs">
                          B
                        </div>
                        <span className="text-sm">Đơn vị cấu tạo nên phân tử</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-secondary text-secondary-foreground text-xs">
                          C
                        </div>
                        <span className="text-sm">Hạt mang điện tích dương</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-secondary text-secondary-foreground text-xs">
                          D
                        </div>
                        <span className="text-sm">Hạt mang điện tích âm</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 border-t pt-4">
                    <div className="font-medium">Giải thích</div>
                    <p className="text-sm text-muted-foreground">
                      Nguyên tử là phần tử nhỏ nhất của một nguyên tố hóa học còn giữ được tính chất hóa học của nguyên tố đó. Nguyên tử gồm có hạt nhân (chứa proton và neutron) và electron chuyển động xung quanh hạt nhân.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Quay lại</Button>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Lưu câu hỏi
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
