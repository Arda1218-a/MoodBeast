// --- DOM ELEMANLARINI SEÇME ---
const savedSongsContainer = document.getElementById("saved-songs-container");
const emptyState = document.getElementById("empty-state");

// Sayfa yüklendiğinde hafızadaki şarkıları getir
document.addEventListener("DOMContentLoaded", () => {
    loadSavedSongs();
});

// --- HAFIZADAN ŞARKILARI ÇEKME VE EKRANA BASMA ---
function loadSavedSongs() {
    // Tarayıcı hafızasından kaydı çek, yoksa boş dizi ata
    const savedSongs = JSON.parse(localStorage.getItem("moodBeats_saved")) || [];

    // Eğer liste boşsa boş uyarı ekranını göster
    if (savedSongs.length === 0) {
        emptyState.classList.remove("hidden");
        savedSongsContainer.innerHTML = "";
        return;
    }

    // Liste boş değilse uyarı gizlenir
    emptyState.classList.add("hidden");
    savedSongsContainer.innerHTML = "";

    // Her şarkı için dinamik bir HTML kartı oluştur
    savedSongs.forEach(song => {
        const songCard = document.createElement("div");
        songCard.className = "saved-song-item";

        songCard.innerHTML = `
            <div class="song-info">
                <h3>${song.title}</h3>
                <p>${song.artist} • <span style="color: var(--accent-color);">${song.language}</span></p>
            </div>
            <div class="song-actions">
                <a href="${song.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="btn-youtube" style="padding: 0.6rem 1rem; font-size: 0.85rem;">
                    Dinle 🎵
                </a>
                <button class="btn-delete" onclick="removeSong(${song.id})" title="Listeden Kaldır">
                    ✕
                </button>
            </div>
        `;

        savedSongsContainer.appendChild(songCard);
    });
}

// --- ŞARKIYI HAFIZADAN SİLME FONKSİYONU ---
function removeSong(songId) {
    let savedSongs = JSON.parse(localStorage.getItem("moodBeats_saved")) || [];

    // Silinmek istenen ID dışındaki şarkıları filtrele ve yeni liste yap
    savedSongs = savedSongs.filter(song => song.id !== songId);

    // Yeni listeyi tekrar hafızaya kaydet
    localStorage.setItem("moodBeats_saved", JSON.stringify(savedSongs));

    // Arayüzü anında güncelle
    loadSavedSongs();
}
