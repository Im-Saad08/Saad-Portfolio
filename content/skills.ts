import type { SkillItem } from "@/types";

export const skills: Record<string, SkillItem[]> = {
  programming: [
    { name: "Python", icon: "code", link: "https://www.python.org" },
    { name: "C++", icon: "code", link: "https://isocpp.org" },
    { name: "C", icon: "code", link: "https://en.cppreference.com/w/c" },
    { name: "MATLAB", icon: "cpu", link: "https://www.mathworks.com/products/matlab.html" },
    { name: "Verilog", icon: "cpu", link: "https://www.chipverify.com/verilog/verilog-tutorial" },
  ],
  aiComputerVision: [
    { name: "YOLOv8n / YOLO", icon: "eye", link: "https://docs.ultralytics.com" },
    { name: "PaddleOCR (PP-OCRv6)", icon: "scan-text", link: "https://github.com/PaddlePaddle/PaddleOCR" },
    { name: "ByteTrack", icon: "layers", link: "https://github.com/ifzhang/ByteTrack" },
    { name: "OpenCV", icon: "eye", link: "https://opencv.org" },
    { name: "Computer Vision", icon: "eye", link: "https://paperswithcode.com/area/computer-vision" },
    { name: "MediaPipe", icon: "hand", link: "https://developers.google.com/mediapipe" },
    { name: "Image Processing", icon: "image", link: "https://scikit-image.org" },
  ],
  dataScientific: [
    { name: "PostgreSQL", icon: "database", link: "https://www.postgresql.org" },
    { name: "Neon Cloud DB", icon: "database", link: "https://neon.tech" },
    { name: "MySQL / Workbench", icon: "database", link: "https://www.mysql.com/products/workbench/" },
    { name: "SQLite", icon: "database", link: "https://www.sqlite.org" },
    { name: "NumPy", icon: "database", link: "https://numpy.org" },
    { name: "SciPy", icon: "database", link: "https://scipy.org" },
    { name: "Matplotlib", icon: "bar-chart", link: "https://matplotlib.org" },
    { name: "Power BI", icon: "pie-chart", link: "https://www.microsoft.com/power-platform/products/power-bi" },
    { name: "Data Analysis", icon: "bar-chart", link: "https://pandas.pydata.org" },
  ],
  devTools: [
    { name: "FastAPI", icon: "terminal", link: "https://fastapi.tiangolo.com" },
    { name: "Git", icon: "git-branch", link: "https://git-scm.com" },
    { name: "GitHub", icon: "github", link: "https://github.com" },
    { name: "VS Code", icon: "code", link: "https://code.visualstudio.com" },
    { name: "Linux / Ubuntu", icon: "terminal", link: "https://www.kernel.org" },
    { name: "GCC / Dev-C++", icon: "code", link: "https://gcc.gnu.org" },
    { name: "Native venv", icon: "box", link: "https://docs.python.org/3/library/venv.html" },
  ],
  embeddedSystems: [
    { name: "PIC16F877A", icon: "cpu", link: "https://www.microchip.com/en-us/product/PIC16F877A" },
    { name: "Intel 8051", icon: "cpu", link: "https://www.keil.com/pack/doc/c51/index.html" },
    { name: "UART", icon: "cable", link: "https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter" },
    { name: "Raspberry Pi", icon: "cpu", link: "https://www.raspberrypi.com" },
    { name: "Arduino", icon: "cpu", link: "https://www.arduino.cc" },
    { name: "MPLAB X IDE", icon: "wrench", link: "https://www.microchip.com/en-us/tools-resources/develop/mplab-x-ide" },
    { name: "Proteus", icon: "wrench", link: "https://www.labcenter.com" },
    { name: "Keil µVision", icon: "wrench", link: "https://www.keil.com" },
  ],
};

export const skillCategoryLabels: Record<string, string> = {
  programming: "Programming & Hardware Description",
  aiComputerVision: "AI & Computer Vision",
  dataScientific: "Data & Relational Databases",
  devTools: "Development & Frameworks",
  embeddedSystems: "Embedded & Hardware Interfaces",
};

export const skillCategoryDescriptions: Record<string, string> = {
  programming: "Core programming languages and hardware description",
  aiComputerVision: "Edge computer vision, deep learning detection, and text recognition",
  dataScientific: "Relational schema design, database normalization, and analytics",
  devTools: "API development, version control, and development environments",
  embeddedSystems: "Microcontrollers, serial protocols, simulation, and embedded Linux",
};
