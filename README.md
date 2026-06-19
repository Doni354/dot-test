# E-DISPEN API - DOT Indonesia Backend TypeScript Challenge

RESTful API untuk sistem manajemen dispensasi kedisiplinan sekolah (E-DISPEN). Proyek ini dibangun untuk memenuhi _challenge_ seleksi Backend Engineer Intern (TypeScript) di DOT Indonesia.

## 🛠️ Tech Stack

- **Framework:** NestJS (TypeScript)
- **Database:** MySQL
- **ORM:** TypeORM
- **Authentication:** JWT (JSON Web Token) & bcrypt
- **Testing:** Jest & Supertest (E2E)

## 🏗️ Alur Pengerjaan (Workflow)

Dalam membangun API ini, saya menggunakan pendekatan _Database-First_ dikombinasikan dengan _Code-First_:

1. **ERD & Database Setup:** Membuat desain ERD dan tabel terlebih dahulu menggunakan Navicat, kemudian di-sinkronisasikan (sync) ke MySQL lokal.
2. **Project Initialization:** Inisialisasi _project_ NestJS.
3. **Model/Entity:** Melakukan _mapping_ tabel dari _database_ ke dalam bentuk Entity (TypeORM) agar struktur data sesuai.
4. **Controller:** Membuat rute API (Endpoints) untuk mengatur alur _request_ dan _response_.
5. **Service:** Menuliskan _business logic_, termasuk operasi CRUD ke _database_ melalui Repository.

## 📐 Design Pattern (Kriteria E & F)

**Pattern yang digunakan:** Modular / Controller-Service-Repository Pattern (Dependency Injection).

**Alasan menggunakan pattern ini:**
Sesuai dengan _best practice_ dari NestJS, _pattern_ ini memisahkan tanggung jawab kode (_Separation of Concerns_).

- **Controller** hanya bertugas menerima _request_ HTTP dan mengembalikan _response_.
- **Service** murni berisi logika bisnis.
- **Repository** khusus untuk interaksi ke database.
  Hal ini membuat kode lebih terstruktur, sangat mudah untuk diuji (_testable_), dan gampang dikelola (_maintainable_) jika aplikasi nantinya di-_scale-up_ atau dikerjakan dalam tim.

## 🚀 Cara Menjalankan Project

1. Clone repositori ini.
2. Jalankan `npm install`.
3. Pastikan MySQL berjalan dan buat database bernama `dottest`. _Import_ dotTestModel.sql.
4. Sesuaikan kredensial database di `app.module.ts`.
5. Jalankan aplikasi: `npm run start:dev` (Berjalan di port 3000).

## 🧪 E2E Testing Token API

Untuk menjalankan E2E test pada endpoint Authentication (Login):

```bash
npm run test:e2e
```
