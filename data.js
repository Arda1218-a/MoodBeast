// --- MOODBEATS SONIC DATABASE: VAKKO EDITION (35 PARÇA) ---
const songDatabase = [
    // --- 1. ÇEKİRDEK VE TÜRKÇE LİSTE ---
    {
        id: 1,
        title: "Uzunlar (Acoustic)",
        artist: "Evdeki Saat",
        language: "Türkçe / Alternatif",
        youtubeUrl: "https://www.youtube.com/watch?v=R9K1u9nB9z8",
        tags: ["sakin", "pozitif", "orta-tempo", "akustik", "yaz", "yol-müziği", "nostaljik", "duygusal"]
    },
    {
        id: 2,
        title: "Sunday Best",
        artist: "Surfaces",
        language: "İngilizce / Indie Pop",
        youtubeUrl: "https://www.youtube.com/watch?v=52nfjRzIaj8",
        tags: ["enerjik", "mutlu", "yüksek-tempo", "dans", "yaz", "yol-müziği", "mutlu", "umutlu"]
    },
    {
        id: 3,
        title: "Stolen Dance",
        artist: "Milky Chance",
        language: "Almanca / Avrupa Indie",
        youtubeUrl: "https://www.youtube.com/watch?v=iX-QaNzd-0Y",
        tags: ["sakin", "pozitif", "orta-tempo", "akustik", "yaz", "kişisel", "mutlu", "nostaljik"]
    },
    {
        id: 4,
        title: "Aruarian Dance",
        artist: "Nujabes",
        language: "Enstrümantal / Chillhop",
        youtubeUrl: "https://www.youtube.com/watch?v=g9hwjQBQFIo",
        tags: ["lofi", "huzur", "yavaş-tempo", "ambient", "odak", "enstrümantal", "meditatif", "rahatlatıcı"]
    },
    {
        id: 5,
        title: "Ne Farkeder",
        artist: "Yüzyüzeyken Konuşuruz",
        language: "Türkçe / Rock",
        youtubeUrl: "https://www.youtube.com/watch?v=3nEEaO7BbfE",
        tags: ["melankolik", "derin", "orta-tempo", "gece", "kişisel", "duygusal", "nostaljik"]
    },
    {
        id: 6,
        title: "Sunflower",
        artist: "Rex Orange County",
        language: "İngilizce / Bedroom Pop",
        youtubeUrl: "https://www.youtube.com/watch?v=TEB56thVhbm",
        tags: ["enerjik", "mutlu", "orta-tempo", "akustik", "yaz", "yol-müziği", "mutlu", "umutlu"]
    },
    {
        id: 7,
        title: "Shadows",
        artist: "Roosevelt",
        language: "Alman / Synth-Pop",
        youtubeUrl: "https://www.youtube.com/watch?v=i0bM-Yx_gR0",
        tags: ["enerjik", "mutlu", "yüksek-tempo", "dans", "gece", "yol-müziği", "mutlu"]
    },
    {
        id: 8,
        title: "Monday Loop",
        artist: "Tomppabeats",
        language: "Lo-Fi / Enstrümantal",
        youtubeUrl: "https://www.youtube.com/watch?v=z7qZ1z2w3-8",
        tags: ["lofi", "huzur", "yavaş-tempo", "ambient", "odak", "gece", "meditatif", "rahatlatıcı"]
    },
    {
        id: 9,
        title: "I'll Never Love Again",
        artist: "Lady Gaga & Bradley Cooper",
        language: "İngilizce / Film Müziği",
        youtubeUrl: "https://www.youtube.com/watch?v=52nfjRzIaj8",
        tags: ["melankolik", "derin", "yavaş-tempo", "akustik", "gece", "kişisel", "duygusal", "nostaljik"]
    },

    // --- 2. AVRUPA & LATİN ESİNTİLERİ ---
    {
        id: 10,
        title: "Tourner Dans Le Vide",
        artist: "Indila",
        language: "Fransızca / Pop",
        youtubeUrl: "https://www.youtube.com/watch?v=vtNJMAyeP0s",
        tags: ["melankolik", "derin", "orta-tempo", "gece", "kişisel", "duygusal", "nostaljik"]
    },
    {
        id: 11,
        title: "Tuyo (Narcos Theme)",
        artist: "Rodrigo Amarante",
        language: "İspanyolca / Akustik",
        youtubeUrl: "https://www.youtube.com/watch?v=J8n0N_8O6jY",
        tags: ["sakin", "pozitif", "yavaş-tempo", "akustik", "yaz", "gece", "nostaljik", "duygusal"]
    },

    // --- 3. KLASİK MÜZİK & DERİN ODAK (BEETHOVEN, MOZART, SATIE) ---
    {
        id: 12,
        title: "Gnossienne No. 1",
        artist: "Erik Satie",
        language: "Klasik / Enstrümantal",
        youtubeUrl: "https://www.youtube.com/watch?v=PLFVGwGQcB0",
        tags: ["lofi", "huzur", "yavaş-tempo", "ambient", "gece", "odak", "enstrümantal", "meditatif", "rahatlatıcı"]
    },
    {
        id: 13,
        title: "Moonlight Sonata (1st Movement)",
        artist: "Ludwig van Beethoven",
        language: "Klasik / Enstrümantal",
        youtubeUrl: "https://www.youtube.com/watch?v=4Tr0otuiQuU",
        tags: ["melankolik", "derin", "yavaş-tempo", "ambient", "gece", "odak", "enstrümantal", "meditatif", "duygusal"]
    },
    {
        id: 14,
        title: "Symphony No. 40 in G Minor",
        artist: "Wolfgang Amadeus Mozart",
        language: "Klasik / Enstrümantal",
        youtubeUrl: "https://www.youtube.com/watch?v=sPlhKP0nZII",
        tags: ["enerjik", "derin", "yüksek-tempo", "odak", "enstrümantal", "nostaljik", "umutlu"]
    },

    // --- 4. GLOBAL POP & YAZ ENERJİSİ (SABRINA, AVA MAX, TAYLOR SWIFT) ---
    {
        id: 15,
        title: "Espresso",
        artist: "Sabrina Carpenter",
        language: "İngilizce / Pop",
        youtubeUrl: "https://www.youtube.com/watch?v=eVli-tstM5E",
        tags: ["enerjik", "mutlu", "yüksek-tempo", "dans", "yaz", "yol-müziği", "mutlu", "umutlu"]
    },
    {
        id: 16,
        title: "Kings & Queens",
        artist: "Ava Max",
        language: "İngilizce / Dance-Pop",
        youtubeUrl: "https://www.youtube.com/watch?v=jH1wENFa2Om",
        tags: ["enerjik", "mutlu", "yüksek-tempo", "dans", "gece", "yol-müziği", "mutlu", "umutlu"]
    },
    {
        id: 17,
        title: "Cruel Summer",
        artist: "Taylor Swift",
        language: "İngilizce / Pop",
        youtubeUrl: "https://www.youtube.com/watch?v=ic8j13piAhQ",
        tags: ["enerjik", "mutlu", "yüksek-tempo", "dans", "yaz", "yol-müziği", "mutlu", "duygusal"]
    },

    // --- 5. DUA LIPA ÖZEL SERİSİ (CANLI & STUDIO) ---
    {
        id: 18,
        title: "Training Season (Live at BRITs 2024)",
        artist: "Dua Lipa",
        language: "İngilizce / Live Pop",
        youtubeUrl: "https://www.youtube.com/watch?v=l_X_P8r7J30",
        tags: ["enerjik", "mutlu", "yüksek-tempo", "dans", "gece", "yol-müziği", "mutlu", "umutlu"]
    },
    {
        id: 19,
        title: "Levitating",
        artist: "Dua Lipa",
        language: "İngilizce / Disco-Pop",
        youtubeUrl: "https://www.youtube.com/watch?v=TUVcZfQe-Kw",
        tags: ["enerjik", "mutlu", "yüksek-tempo", "dans", "yaz", "gece", "yol-müziği", "mutlu"]
    },
    {
        id: 20,
        title: "Houdini",
        artist: "Dua Lipa",
        language: "İngilizce / Synth-Pop",
        youtubeUrl: "https://www.youtube.com/watch?v=suAR1PYFNYA",
        tags: ["enerjik", "derin", "yüksek-tempo", "dans", "gece", "yol-müziği", "mutlu"]
    },
    {
        id: 21,
        title: "Dance The Night (Barbie Soundtrack)",
        artist: "Dua Lipa",
        language: "İngilizce / Disco",
        youtubeUrl: "https://www.youtube.com/watch?v=OiC1rgCPmUQ",
        tags: ["enerjik", "mutlu", "yüksek-tempo", "dans", "yaz", "yol-müziği", "mutlu", "umutlu"]
    },
    {
        id: 22,
        title: "Don't Start Now",
        artist: "Dua Lipa",
        language: "İngilizce / Pop",
        youtubeUrl: "https://www.youtube.com/watch?v=oygrmJFKYZY",
        tags: ["enerjik", "mutlu", "yüksek-tempo", "dans", "gece", "yol-müziği", "mutlu"]
    },

    // --- 6. GECE VE DERİN MELANKOLİ (ARCTIC MONKEYS, ADELE, THE WEEKND) ---
    {
        id: 23,
        title: "505",
        artist: "Arctic Monkeys",
        language: "İngilizce / Indie Rock",
        youtubeUrl: "https://www.youtube.com/watch?v=qU9mHegkTc4",
        tags: ["melankolik", "derin", "orta-tempo", "akustik", "gece", "kişisel", "duygusal", "nostaljik"]
    },
    {
        id: 24,
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        language: "İngilizce / Alternatif",
        youtubeUrl: "https://www.youtube.com/watch?v=nyuo9-OjNNg",
        tags: ["melankolik", "derin", "yavaş-tempo", "ambient", "gece", "kişisel", "duygusal", "nostaljik"]
    },
    {
        id: 25,
        title: "Someone Like You",
        artist: "Adele",
        language: "İngilizce / Soul-Pop",
        youtubeUrl: "https://www.youtube.com/watch?v=hLQl3WQQoQ0",
        tags: ["melankolik", "derin", "yavaş-tempo", "akustik", "gece", "kişisel", "duygusal", "nostaljik"]
    },
    {
        id: 26,
        title: "Blinding Lights",
        artist: "The Weeknd",
        language: "İngilizce / Synthwave",
        youtubeUrl: "https://www.youtube.com/watch?v=4NRXx6U8ABQ",
        tags: ["enerjik", "derin", "yüksek-tempo", "dans", "gece", "yol-müziği", "nostaljik", "mutlu"]
    },
    {
        id: 27,
        title: "Save Your Tears",
        artist: "The Weeknd",
        language: "İngilizce / Pop",
        youtubeUrl: "https://www.youtube.com/watch?v=XXYlFuWEuKI",
        tags: ["sakin", "melankolik", "orta-tempo", "dans", "gece", "yol-müziği", "nostaljik", "duygusal"]
    },

    // --- 7. AMERİKAN RAGE & HIP-HOP (DRAKE, PLAYBOI CARTI, ALAN WALKER) ---
    {
        id: 28,
        title: "Passionfruit",
        artist: "Drake",
        language: "Amerikan / R&B - Hip-Hop",
        youtubeUrl: "https://www.youtube.com/watch?v=7hZ8fC3M9mI",
        tags: ["sakin", "pozitif", "orta-tempo", "yaz", "gece", "yol-müziği", "rahatlatıcı"]
    },
    {
        id: 29,
        title: "Sky",
        artist: "Playboi Carti",
        language: "Amerikan / Rage - Trap",
        youtubeUrl: "https://www.youtube.com/watch?v=cM5-0l2eIkw",
        tags: ["enerjik", "derin", "yüksek-tempo", "dans", "gece", "yol-müziği", "mutlu"]
    },
    {
        id: 30,
        title: "On My Way",
        artist: "Alan Walker, Sabrina Carpenter & Farruko",
        language: "Global / EDM",
        youtubeUrl: "https://www.youtube.com/watch?v=dhYOPzcsbGM",
        tags: ["enerjik", "mutlu", "yüksek-tempo", "dans", "yaz", "yol-müziği", "umutlu"]
    },
    {
        id: 31,
        title: "I Ain't Worried (Top Gun: Maverick)",
        artist: "OneRepublic",
        language: "İngilizce / Pop-Rock",
        youtubeUrl: "https://www.youtube.com/watch?v=mNEUkkoUoIA",
        tags: ["sakin", "pozitif", "orta-tempo", "yaz", "yol-müziği", "mutlu", "umutlu", "rahatlatıcı"]
    },

    // --- 8. BENİM ÖZEL SEÇİMLERİM (GEMINI'S VAKKO CURATION) ---
    {
        id: 32,
        title: "Instant Crush",
        artist: "Daft Punk ft. Julian Casablancas",
        language: "Fransız - Amerikan / Electronic Rock",
        youtubeUrl: "https://www.youtube.com/watch?v=a5uQMwRMHcs",
        tags: ["sakin", "melankolik", "orta-tempo", "akustik", "gece", "yol-müziği", "nostaljik", "duygusal"]
    },
    {
        id: 33,
        title: "The Less I Know The Better",
        artist: "Tame Impala",
        language: "Avustralya / Psychedelic Indie",
        youtubeUrl: "https://www.youtube.com/watch?v=sBzrzS1Ag_g",
        tags: ["enerjik", "pozitif", "orta-tempo", "dans", "gece", "yol-müziği", "nostaljik", "mutlu"]
    },
    {
        id: 34,
        title: "Goca Dünya",
        artist: "Altın Gün",
        language: "Türkçe / Anadolu Psych-Rock",
        youtubeUrl: "https://www.youtube.com/watch?v=LqUo3-jYt20",
        tags: ["enerjik", "derin", "yüksek-tempo", "dans", "yaz", "yol-müziği", "nostaljik"]
    },
    {
        id: 35,
        title: "Everything I Wanted",
        artist: "Billie Eilish",
        language: "Amerikan / Dark Pop",
        youtubeUrl: "https://www.youtube.com/watch?v=EgBJmlPo8Xw",
        tags: ["melankolik", "lofi", "yavaş-tempo", "ambient", "gece", "kişisel", "odak", "duygusal", "rahatlatıcı"]
    }
];
