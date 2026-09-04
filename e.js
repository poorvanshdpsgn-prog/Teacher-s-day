// CUSTOMIZE THESE shared messages if you'd like to make the site more personal.
const sharedNotes = [
  'Thank you for helping us see that technology is not just about screens — it is about ideas, creativity, and courage.',
  'Thank you for being patient when the code did not work, the file disappeared, or the Wi-Fi chose chaos.',
  'Thank you for teaching us to think, not just to click.',
  'Thank you for making a classroom feel like a launchpad for our future.',
  'From every student: we appreciate the time, energy, and belief you put into us every day.'
];
let noteIndex = 0;
document.getElementById('noteButton').addEventListener('click', () => {
  const screen = document.getElementById('noteScreen');
  screen.classList.remove('active'); void screen.offsetWidth;
  screen.innerHTML = `<span>♥</span><p>“${sharedNotes[noteIndex]}”</p>`;
  screen.classList.add('active'); noteIndex = (noteIndex + 1) % sharedNotes.length;
});

const lines = [
  '<span class="prompt">student@sanctum:~$</span> run teacher_appreciation.exe',
  'Loading a year of guidance, patience, and inspiring lessons...',
  'Compiling 1,000,000 thank-yous...',
  '<span class="prompt">✓</span> Surprise ready. Happy Teacher’s Day! 💙'
];
const terminal = document.getElementById('terminalText');
const button = document.getElementById('revealButton');
let revealed = false;
function reveal() {
  document.getElementById('surprise').scrollIntoView({ behavior: 'smooth', block: 'center' });
  if (revealed) return;
  revealed = true;
  lines.forEach((line, index) => setTimeout(() => {
    const item = document.createElement('p'); item.className = 'terminal-line'; item.innerHTML = line; terminal.appendChild(item);
  }, index * 720));
  for (let i = 0; i < 38; i++) setTimeout(() => {
    const piece = document.createElement('i');
    piece.style.left = `${Math.random() * 100}%`; piece.style.background = ['#62e3ff','#ff8ab6','#9d82ff','#77f6ad'][i % 4];
    piece.style.transform = `rotate(${Math.random() * 180}deg)`; document.getElementById('confetti').appendChild(piece);
    setTimeout(() => piece.remove(), 1850);
  }, i * 28);
}
button.addEventListener('click', reveal);
