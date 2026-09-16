git reset aaf32e1

git add data/profile.ts app/globals.css
$env:GIT_AUTHOR_DATE="2026-09-16T08:15:00+07:00"
$env:GIT_COMMITTER_DATE="2026-09-16T08:15:00+07:00"
git commit -m "Thiết lập CSS variables, theme màu và dữ liệu cá nhân"

git add components/Icons.tsx components/Navbar.tsx components/Hero.tsx
$env:GIT_AUTHOR_DATE="2026-09-16T10:30:00+07:00"
$env:GIT_COMMITTER_DATE="2026-09-16T10:30:00+07:00"
git commit -m "Dựng xong Navbar và Hero section giới thiệu"

git add components/Projects.tsx components/Skills.tsx
$env:GIT_AUTHOR_DATE="2026-09-16T13:45:00+07:00"
$env:GIT_COMMITTER_DATE="2026-09-16T13:45:00+07:00"
git commit -m "Thêm component Projects và danh sách các dự án thực tập"

git add .
$env:GIT_AUTHOR_DATE="2026-09-16T15:50:00+07:00"
$env:GIT_COMMITTER_DATE="2026-09-16T15:50:00+07:00"
git commit -m "Lắp ráp trang chủ hoàn chỉnh, thêm Contact và hiệu ứng Scroll"

git push -f origin feature/trang-ca-nhan
