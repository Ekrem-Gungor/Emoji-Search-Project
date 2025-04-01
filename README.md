# Emoji Rehberi 🔍

Bu proje, kullanıcıların emoji arayarak ilgili sonuçları bulmasını sağlayan basit ve şık bir React uygulamasıdır. Tailwind CSS kullanılarak modern bir tasarım sağlanmıştır ve API istekleri için `api-ninjas` servisi kullanılmaktadır.

## ✨ Özellikler

- 🔍 **Canlı Arama:** Kullanıcı en az 4 karakter girdiğinde otomatik olarak API'ye istek gönderilir.
- 🔒 **Emoji Kopyalama:** Listeden herhangi bir emojiye tıklayarak panoya kopyalayabilirsiniz.
- 🛠️ **Hata Yönetimi:** API erişim hataları veya sonuç bulunamadığında kullanıcıya bilgilendirme yapılır.
- 🎨 **Responsive Tasarım:** Mobil ve masaüstü cihazlarla uyumludur.

---

## 📚 Kurulum

Projeyi çalıştırmak için aşağıdaki adımları izleyin:

### 1. Depoyu Klonlayın

```sh
git clone https://github.com/Ekrem-Gungor/Emoji-Search-Project.git
cd emoji-rehberi
```

### 2. Bağımlılıkları Yükleyin

```sh
npm install
```

### 3. Ortam Değişkenlerini Ayarlayın

API anahtarınızı `.env` dosyasına ekleyin:

```sh
VITE_API_KEY=your_api_key_here
```

### 4. Uygulamayı Çalıştırın

```sh
npm run dev
```

---

## 🗒️ Proje Yapısı

```
Emoji-Project/
│── src/
│   ├── components/
│   │   ├── EmojiList.jsx
│   │   ├── SearchBar.jsx
│   ├── hooks/
│   │   ├── useEmojiSearch.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│── .env
│── package.json
│── vite.config.js
│── tailwind.config.js
│── README.md
```

---

## 📊 Kullanılan Teknolojiler

- **React.js** (Vite ile oluşturuldu)
- **Tailwind CSS** (Modern Stil Desteği)
- **API-Ninjas Emoji API** (Emoji verileri için)
- **Lodash Debounce** (API isteklerini optimize etmek için)

---

## 🎉 Katkıda Bulunma

Herhangi bir geliştirme öneriniz varsa, lütfen bir **pull request** veya **issue** açabilirsiniz!

---

**Hazırlayan:** Ekrem Güngör

👤 [GitHub Profilim](https://github.com/Ekrem-Gungor)
