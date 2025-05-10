export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center p-4">
        {children}
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Hệ Thống Học Tập. Bản quyền thuộc về Hệ Thống Học Tập.
      </footer>
    </div>
  )
}
