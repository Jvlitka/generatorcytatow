const cytaty = [
    "Życie to jak jazda na rowerze. Aby utrzymać równowagę, musisz się poruszać. Albert Einstein",
    "Życie to nie tylko istnienie, to sztuka bycia. Pierwsza część to istnienie, a druga to żyć. Juliusz Słowacki",
    "Czas jest ograniczony, więc nie marnuj go, żyjąc cudzym życiem. Steve Jobs",
    "Kto zna wartość rzeczy, nie dąży do tego, co nieważne. Leonardo da Vinci",
    "Tyle wiemy o sobie, ile nas sprawdzono. Wisława Szymborska",
    "Z miłością jest jak z masłem. Od czasu do czasu trochę chłodu utrzymuje je w świeżości. Marcel Achard",
    "Dla całego świata możesz być nikim, dla kogoś możesz być całym światem. Antoine de Saint-Exupéry",
    "Nie mierz szczęścia ilością posiadanych rzeczy, lecz chwilami, które zapierają dech. Paulo Coelho",
    "Sztuka życia to cieszyć się małym szczęściem. Phil Bosmans",
    "Miej odwagę żyć. Umrzeć potrafi każdy. Robert Cody",
    "Tylko w ciemności możesz zobaczyć gwiazdy. Martin Luter King",
    "Jeśli idziesz przez piekło, nie zatrzymuj się. Winston Churchill",
    "Rób to co uważasz w swoim sercu za właściwe. I tak będziesz krytykowany. Eleanor Roosevelt",
    "Różnica pomiędzy niemożliwym a możliwym leży w determinacji człowieka. Tommy Lasorda",
    "Zwycięzcy nigdy się nie poddają. Ci, którzy się poddają, nigdy nie zwyciężają. Vince Lombardi",
    "Lepiej jest być nienawidzonym za to, kim jesteś, niż być kochanym za to, kim nie jesteś.  Andre Gide",
    "Kłamstwo jest najprostszą formą samoobrony. Susan Sontag",
    "Zaczynamy żyć, kiedy przestajemy się bać życia. Dorothy Thompson",
];


function generujcytat () {
    const randomIndex = Math.floor(Math.random() * cytaty.length);
    document.getElementById("tekst").innerText = cytaty[randomIndex];
}