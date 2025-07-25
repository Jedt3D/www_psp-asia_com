# Read me

โปรเจคสำหรับ www.psp-asia.com เว็บหลัก

- sinatra 4.1
- ruby 3.1.6
- tailwind css 4.1
- postgresql 16

# Change log

- 2025-07-11
  - นำ html static มาเริ่มต้นใหม่ใน repo นี้ ทดสอบรัน local web server ผ่านแล้ว
  - migrate ไปยัง sinatra 4.1 แล้ว
  - tailwindcss, twlayout plguin ทำงานได้ build/watch ได้
  - review image, css, js แล้วผ่าน
  - route หลักของ sinatra สร้างแล้ว


# PSPA Website - Rebased Workfiles

This branch contains the latest workfiles content migrated from the Tailwind CSS development environment. 

## Structure

- **HTML Pages:**
  - `main-page.html` - Main landing page
  - `news-main.html` - News listing page
  - `news-details.html` - News article details page
  - `product_main.html` - Products overview page

- **Components:**
  - `components/navbar.html` - Responsive navigation bar component
  - `components/footer.html` - Site footer component
  - `components/contact-section.html` - Contact form section component

- **Assets:**
  - `img/` - All images and SVG icons
  - `styles/main.css` - Custom CSS styles (includes Tailwind utilities)
  - `highlight-animation.js` - JavaScript for text highlighting animations

## Notes

- All HTML files use Tailwind CSS for styling
- Components are designed to be reused across multiple pages
- All paths are relative to the root directory
