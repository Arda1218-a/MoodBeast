// --- 1. SORULAR VERİTABANI (Duygu ve His Odaklı) ---
const moodQuestions = [
    {
        question: "Şu an içindeki hava durumu nasıl bir manzaraya benziyor?",
        options: [
            { text: "Pırıl pırıl, sıcak ve her şeyi yapabilecek kadar enerjik!", tags: ["enerjik", "mutlu"] },
            { text: "Tatlı bir yaz rüzgarı esiyor, hafif ve huzurluyum.", tags: ["sakin", "pozitif"] },
            { text: "Biraz bulutlu, kendi içime çekilmek ve düşünmek istiyorum.", tags: ["melankolik", "derin"] },
            { text: "Yoğun ve yorgun... Sadece zihnimi hafifletmeye ihtiyacım var.", tags: ["lofi", "huzur"] }
        ]
    },
    {
        question: "Bedenin şu an nasıl bir ritimle hareket etmek istiyor?",
        options: [
            { text: "Yerinde duramayan, ritim tutacağım bir tempo!", tags: ["yüksek-tempo", "dans"] },
            { text: "Kahvemi yudumlarken arkada yumuşakça akıp giden bir ritim.", tags: ["orta-tempo", "akustik"] },
            { text: "Gözlerimi kapatıp seslerin içinde kaybolabileceğim yavaş bir akış.", tags: ["yavaş-tempo", "ambient"] }
        ]
    },
    {
        question: "Gözlerini kapattığında bu müziğin seni nereye götürmesini istersin?",
        options: [
            { text: "Güneşli bir sahil kenarına veya keyifli bir yaz yolculuğuna.", tags: ["yaz", "yol-müziği"] },
            { text: "Gece yarısı loş ışıklı odamda kendimle baş başa kaldığım o yere.", tags: ["gece", "kişisel"] },
            { text: "Verimliliğimin zirvesinde, bir projeye odaklandığım masama.", tags: ["odak", "enstrümantal"] }
        ]
    },
    {
        question: "Bu şarkı bittiğinde sana tam olarak ne bırakmış olsun?",
        options: [
            { text: "Yüzümde nedensiz bir tebessüm ve yaşama sevinci.", tags: ["mutlu", "umutlu"] },
            { text: "Geçmişe veya güzel anılara tatlı bir özlem.", tags: ["nostaljik", "duygusal"] },
            { text: "Zihnimdeki tüm gürültünün sustuğu derin bir sakinlik.", tags: ["meditatif", "rahatlatıcı"] }
        ]
    }
];

// --- 2. UYGULAMA DURUM YÖNETİMİ (STATE MANAGEMENT) ---
let currentQuestionIndex = 0;
let userSelectedTags = [];
let currentMatchedSong = null;
let isAudioPlaying = false;

// --- 3. DOM ELEMANLARINI SEÇME ---
const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const muteBtn = document.getElementById("mute-btn");
const saveSongBtn = document.getElementById("save-song-btn");

const questionNumberText = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const progressFill = document.getElementById("progress-fill");

const songTitleText = document.getElementById("song-title");
const songArtistText = document.getElementById("song-artist");
const youtubeLinkBtn = document.getElementById("youtube-link");
const savedCountText = document.getElementById("saved-count");
const bgAudio = document.getElementById("bg-audio");

// --- 4. OLAY DİNLEYİCİLERİ (EVENT LISTENERS) ---

// Sayfa yüklendiğinde hafızadaki kayıtlı şarkı sayısını göster
document.addEventListener("DOMContentLoaded", () => {
    updateSavedCount();
});

// Testi Başlat Butonu
startBtn.addEventListener("click", () => {
    switchScreen(welcomeScreen, quizScreen);
    startBackgroundAudio();
    renderQuestion();
});

// Yeniden Başla Butonu
restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    userSelectedTags = [];
    currentMatchedSong = null;
    switchScreen(resultScreen, quizScreen);
    renderQuestion();
});

// Arka Plan Müzik Kontrolü (Mute/Unmute)
muteBtn.addEventListener("click", () => {
    if (isAudioPlaying) {
        bgAudio.pause();
        muteBtn.textContent = "🔇";
        isAudioPlaying = false;
    } else {
        bgAudio.play().catch(e => console.log("Tarayıcı ses izni engeli:", e));
        muteBtn.textContent = "🔊";
        isAudioPlaying = true;
    }
});

// Şarkıyı Profile Kaydet Butonu
saveSongBtn.addEventListener("click", () => {
    if (!currentMatchedSong) return;
    saveToLocalStorage(currentMatchedSong);
    saveSongBtn.innerHTML = "<span>Kaydedildi!</span> ✓";
    saveSongBtn.style.background = "rgba(99, 102, 241, 0.4)";
    saveSongBtn.disabled = true;
});

// --- 5. TEMEL FONKSİYONLAR VE ALGORİTMA ---

// Ekran geçişlerini yöneten yardımcı fonksiyon
function switchScreen(hideScreen, showScreen) {
    hideScreen.classList.remove("active");
    hideScreen.classList.add("hidden");

    setTimeout(() => {
        showScreen.classList.remove("hidden");
        showScreen.classList.add("active");
    }, 200);
}

// Soruyu ve seçenekleri ekrana basan fonksiyon
function renderQuestion() {
    const currentQ = moodQuestions[currentQuestionIndex];

    // İlerleme çubuğunu güncelle
    const progressPercentage = ((currentQuestionIndex + 1) / moodQuestions.length) * 100;
    progressFill.style.width = `${progressPercentage}%`;

    // Soru metinlerini güncelle
    questionNumberText.textContent = `Soru ${currentQuestionIndex + 1} / ${moodQuestions.length}`;
    questionText.textContent = currentQ.question;

    // Eski seçenekleri temizle
    optionsContainer.innerHTML = "";

    // Yeni seçenek butonlarını oluştur
    currentQ.options.forEach(option => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = option.text;

        btn.addEventListener("click", () => handleOptionSelect(option.tags));
        optionsContainer.appendChild(btn);
    });
}

// Seçenek tıklandığında çalışan fonksiyon
function handleOptionSelect(selectedTags) {
    // Seçilen etiketleri ana havuzumuza ekliyoruz
    userSelectedTags.push(...selectedTags);

    currentQuestionIndex++;

    if (currentQuestionIndex < moodQuestions.length) {
        renderQuestion();
    } else {
        // Tüm sorular bitti, algoritmik eşleştirmeyi çalıştır!
        calculateAndShowResult();
    }
}

// *** PROJENİN BEYNİ: Geliştirilmiş Eşleştirme Algoritması ***
function calculateAndShowResult() {
    let maxScore = -1;
    let topScoringSongs = []; // Aynı yüksek puanı alan şarkıları burada toplayacağız

    // Veritabanındaki her şarkıyı tek tek inceliyoruz
    songDatabase.forEach(song => {
        let currentScore = 0;

        song.tags.forEach(songTag => {
            if (userSelectedTags.includes(songTag)) {
                currentScore++;
            }
        });

        // Eğer bu şarkı şu ana kadarki en yüksek puandan DAHA FAZLA aldıysa:
        if (currentScore > maxScore) {
            maxScore = currentScore;
            topScoringSongs = [song]; // Listeyi sıfırla ve yeni şampiyonu ekle
        }
        // Eğer mevcut en yüksek puanla EŞİT puan aldıysa:
        else if (currentScore === maxScore) {
            topScoringSongs.push(song); // Şampiyonların yanına ekle
        }
    });

    // Eşitlik durumunda (topScoringSongs içinde 1'den fazla şarkı varsa) rastgele birini seç:
    const randomIndex = Math.floor(Math.random() * topScoringSongs.length);
    const bestMatch = topScoringSongs[randomIndex] || songDatabase[0];

    currentMatchedSong = bestMatch;

    // Sonuçları ekrana bas
    songTitleText.textContent = bestMatch.title;
    songArtistText.textContent = `${bestMatch.artist} • [${bestMatch.language}]`;
    youtubeLinkBtn.href = bestMatch.youtubeUrl;

    // --- AKILLI BUTON KONTROLÜ ---
    // Bu şarkı daha önce profil hafızasına kaydedilmiş mi kontrol et:
    const savedSongs = JSON.parse(localStorage.getItem("moodBeats_saved")) || [];
    const isAlreadySaved = savedSongs.some(item => item.id === bestMatch.id);

    if (isAlreadySaved) {
        saveSongBtn.innerHTML = "<span>Kaydedildi!</span> ✓";
        saveSongBtn.style.background = "rgba(99, 102, 241, 0.4)";
        saveSongBtn.disabled = true;
    } else {
        saveSongBtn.innerHTML = "<span>Profili Kaydet</span> 📌";
        saveSongBtn.style.background = "";
        saveSongBtn.disabled = false;
    }

    switchScreen(quizScreen, resultScreen);
}

// Tarayıcı kısıtlamalarını aşarak sesi başlatan fonksiyon
function startBackgroundAudio() {
    if (!isAudioPlaying && bgAudio) {
        bgAudio.volume = 0.15; // Sesi %15 seviyesinde tut (rahatsız etmesin)
        bgAudio.play().then(() => {
            isAudioPlaying = true;
            if (muteBtn) muteBtn.textContent = "🔊";
        }).catch(() => {
            console.log("Ses otomatik başlatılamadı.");
        });
    }
}

// --- 6. LOCALSTORAGE (YEREL HAFIZA) YÖNETİMİ ---

function saveToLocalStorage(song) {
    let savedSongs = JSON.parse(localStorage.getItem("moodBeats_saved")) || [];
    const exists = savedSongs.some(item => item.id === song.id);

    if (!exists) {
        savedSongs.push(song);
        localStorage.setItem("moodBeats_saved", JSON.stringify(savedSongs));
        updateSavedCount();
    }
}

function updateSavedCount() {
    let savedSongs = JSON.parse(localStorage.getItem("moodBeats_saved")) || [];
    if (savedCountText) {
        savedCountText.textContent = savedSongs.length;
    }
}
