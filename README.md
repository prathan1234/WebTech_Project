# What's new!
- ลิ้งค์ยูทูปสอนทำเว็บ MEAN Stack -> https://www.youtube.com/playlist?list=PL3vQyqzqjZ637sWpKvniMCxdqZhnMJC1d
- การใช้ Bootstrap ใน Angular -> https://medium.com/codingthesmartway-com-blog/using-bootstrap-with-angular-c83c3cee3f4a
- Bootstrap theme: Lux -> https://bootswatch.com/lux/
- วิธีการ deploy โปรเจค Angular ลง Github page -> https://alligator.io/angular/deploying-angular-app-github-pages/
- วิธการ deploy โปรเจค Node.js ลง Heroku(Web hosting) -> https://docs.google.com/document/d/1HWismdR8bhdcFDmy4sGaEAHul3zjVHrMgqOqgyt1sBA/edit

# How to start
- git clone https://github.com/prathan1234/WebTech_Project.git

//ตอนรัน ให้เปิด terminal แยกออกมา 3 อัน แบ่งเป็น Node, Mongo, Angular

- Run Server (Node.js)
    -> cd backend
    -> npm install (ทำครั้งแรกครั้งเดียวพอ)
    -> npm start

- Run MongoDB (ต้องติดตั้ง MongoDB ก่อน)
    -> mongod --auth
    -> mongo "eventbook" -u "admin" -p "password" หรือใช้ Robo 3T (แนะนำ เพราะมันง่าย เซ็ต username = admin, password = password)

- Run Angular
    -> cd frontend
    -> npm install (ทำครั้งแรกครั้งเดียวพอ)
    -> npm install -g @angular/cli (ทำครั้งแรกครั้งเดียวพอ)
    -> ng serve

ตอนนี้สร้าง branch ไว้สำหรับแต่ละคนแล้ว ตอนทำงานอยากให้ทำงานที่ branch ของตัวเอง
โดยที่ branch หลักจะเป็น master

# วิธีย้ายไป branch ตัวเอง
ของหวาน -> git checkout project/Wann
ของหลิน -> git checkout project/Lynn
ของภูริน -> git checkout project/Purin

# วิธี push งานไปที่ branch ตัวเอง
- git add .
- git commit -m "message"
- git push origin ชื่อ branch ตัวเอง เช่น git push origin project/Wann

# วิธี update ไฟล์จาก branch master
- git pull origin master
