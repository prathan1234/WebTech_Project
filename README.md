﻿# How to start
- git clone https://github.com/prathan1234/WebTech_Project.git

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
