const deck1 = [
{ position: "1", front: "STAR", back: "POOL" },
{ position: "2", front: "BRIDGE", back: "ROBIN" },
{ position: "3", front: "FIRE", back: "BAND" },
{ position: "4", front: "RING", back: "DUCK" },
{ position: "5", front: "HEART", back: "HOOD" },
{ position: "6", front: "HORN", back: "CARD" },
{ position: "7", front: "SPRING", back: "COURT" },
{ position: "8", front: "TABLE", back: "TIE" },
{ position: "9", front: "WHALE", back: "DIAMOND" },
{ position: "10", front: "SEAL", back: "CROSS" },
{ position: "11", front: "MOON", back: "NET" },
{ position: "12", front: "BLOCK", back: "FRANCE" },
{ position: "13", front: "DRILL", back: "DATE" },
{ position: "14", front: "FISH", back: "COTTON" },
{ position: "15", front: "TUBE", back: "POINT" },
{ position: "16", front: "GRACE", back: "OLIVE" },
{ position: "17", front: "IRON", back: "MATCH" },
{ position: "18", front: "DOCTOR", back: "BALL" },
{ position: "19", front: "ROULETTE", back: "MERCURY" },
{ position: "20", front: "DEGREE", back: "BOW" },
{ position: "21", front: "WAKE", back: "FIGHTER" },
{ position: "22", front: "NEEDLE", back: "SHOP" },
{ position: "23", front: "TABLET", back: "SLIP" },
{ position: "24", front: "PIE", back: "KNIGHT" },
{ position: "25", front: "GREEN", back: "PASS" },
{ position: "26", front: "DRAGON", back: "STADIUM" },
{ position: "27", front: "NEW YORK", back: "FOOT" },
{ position: "28", front: "AUSTRALIA", back: "LIMOUSINE" },
{ position: "29", front: "MARCH", back: "CONTRACT" },
{ position: "30", front: "LINE", back: "PLATE" },
{ position: "31", front: "WAR", back: "MOUSE" },
{ position: "32", front: "HONEY", back: "HORSESHOE" },
{ position: "33", front: "JAM", back: "ORGAN" },
{ position: "34", front: "CHURCH", back: "KNIFE" },
{ position: "35", front: "COVER", back: "CELL" },
{ position: "36", front: "LEAD", back: "WATCH" },
{ position: "37", front: "BERMUDA", back: "ARM" },
{ position: "38", front: "CHANGE", back: "ROSE" },
{ position: "39", front: "TOKYO", back: "MODEL" },
{ position: "40", front: "EGYPT", back: "THEATER" },
{ position: "41", front: "BEAT", back: "HOLE" },
{ position: "42", front: "RAY", back: "POST" },
{ position: "43", front: "BELT", back: "LIGHT" },
{ position: "44", front: "CAP", back: "TRIANGLE" },
{ position: "45", front: "LEMON", back: "BELL" },
{ position: "46", front: "NURSE", back: "LEPRECHAUN" },
{ position: "47", front: "WIND", back: "KID" },
{ position: "48", front: "LION", back: "POLICE" },
{ position: "49", front: "LONDON", back: "ROCK" },
{ position: "50", front: "FALL", back: "SCALE" },
{ position: "51", front: "BOOT", back: "GHOST" },
{ position: "52", front: "DICE", back: "SHIP" },
{ position: "53", front: "EYE", back: "MEXICO" },
{ position: "54", front: "BORED", back: "CLOAK" },
{ position: "55", front: "SWITCH", back: "STRAW" },
{ position: "56", front: "AIR", back: "CALF" },
{ position: "57", front: "JUPITER", back: "SHARK" },
{ position: "58", front: "HAM", back: "DRAFT" },
{ position: "59", front: "BATTERY", back: "HAWK" },
{ position: "60", front: "SPINE", back: "PRESS" },
{ position: "61", front: "VET", back: "VAN" },
{ position: "62", front: "RABBIT", back: "ICE CREAM" },
{ position: "63", front: "AGENT", back: "BUCK" },
{ position: "64", front: "DROP", back: "PHEONIX" },
{ position: "65", front: "TRACK", back: "FORCE" },
{ position: "66", front: "BANK", back: "BOOM" },
{ position: "67", front: "CLIFF", back: "LAB" },
{ position: "68", front: "BOMB", back: "RULER" },
{ position: "69", front: "CASINO", back: "PILOT" },
{ position: "70", front: "SKYSCRAPER", back: "LASER" },
{ position: "71", front: "STOCK", back: "DEATH" },
{ position: "72", front: "BRUSH", back: "LOCK" },
{ position: "73", front: "GRASS", back: "SPELL" },
{ position: "74", front: "SATURN", back: "HOSPITAL" },
{ position: "75", front: "DRESS", back: "AMBULANCE" },
{ position: "76", front: "FAN", back: "WEB" },
{ position: "77", front: "DWARF", back: "PLASTIC" },
{ position: "78", front: "ALIEN", back: "KEY" },
{ position: "79", front: "WHIP", back: "OCTOPUS" },
{ position: "80", front: "ANTARCTICA", back: "THUMB" },
{ position: "81", front: "PUMPKIN", back: "TEACHER" },
{ position: "82", front: "MOSCOW", back: "PALM" },
{ position: "83", front: "TRIP", back: "CRANE" },
{ position: "84", front: "SNOWMAN", back: "HELICOPTER" },
{ position: "85", front: "FOREST", back: "BOTTLE" },
{ position: "86", front: "CAPITAL", back: "FENCE" },
{ position: "87", front: "STRIKE", back: "KANGAROO" },
{ position: "88", front: "COPPER", back: "JACK" },
{ position: "89", front: "SOUL", back: "EUROPE" },
{ position: "90", front: "CANADA", back: "SCORPION" },
{ position: "91", front: "CONCERT", back: "MUG" },
{ position: "92", front: "CHOCOLATE", back: "SUIT" },
{ position: "93", front: "JET", back: "MICROSCOPE" },
{ position: "94", front: "SHAKESPEARE", back: "ENGINE" },
{ position: "95", front: "CAR", back: "WAVE" },
{ position: "96", front: "SHADOW", back: "CENTAUR" },
{ position: "97", front: "GLOVE", back: "STREAM" },
{ position: "98", front: "LITTER", back: "HEAD" },
{ position: "99", front: "COMIC", back: "MAMMOTH" },
{ position: "100", front: "MILLIONAIRE", back: "DAY" }
].map(card => ({
...card,
deck: "Deck 1"
}));

const deck2 = [
{ position: "1", front: "PITCH", back: "KING" },
{ position: "2", front: "BOND", back: "PAN" },
{ position: "3", front: "APPLE", back: "POLE" },
{ position: "4", front: "OIL", back: "SUPERHERO" },
{ position: "5", front: "COOK", back: "REVOLUTION" },
{ position: "6", front: "FLY", back: "PIT" },
{ position: "7", front: "CAST", back: "GAS" },
{ position: "8", front: "BEAR", back: "GLASS" },
{ position: "9", front: "PIN", back: "WASHINGTON" },
{ position: "10", front: "MINE", back: "TURKEY" },
{ position: "11", front: "CHECK", back: "QUEEN" },
{ position: "12", front: "BAR", back: "FILE" },
{ position: "13", front: "COLD", back: "CRICKET" },
{ position: "14", front: "HOLLYWOOD", back: "WELL" },
{ position: "15", front: "SCREEN", back: "FAIR" },
{ position: "16", front: "PLAY", back: "TOOTH" },
{ position: "17", front: "MARBLE", back: "STAFF" },
{ position: "18", front: "DINOSAUR", back: "BILL" },
{ position: "19", front: "CAT", back: "SHOT" },
{ position: "20", front: "GAME", back: "WASHER" },
{ position: "21", front: "LIFE", back: "LAP" },
{ position: "22", front: "LUCK", back: "AMAZON" },
{ position: "23", front: "HOOK", back: "SPACE" },
{ position: "24", front: "PARK", back: "FIGURE" },
{ position: "25", front: "BAT", back: "MASS" },
{ position: "26", front: "BOLT", back: "CHINA" },
{ position: "27", front: "GREECE", back: "SQUARE" },
{ position: "28", front: "DECK", back: "BUFFALO" },
{ position: "29", front: "YARD", back: "CHEST" },
{ position: "30", front: "CONDUCTOR", back: "DOG" },
{ position: "31", front: "GIANT", back: "NAIL" },
{ position: "32", front: "FACE", back: "BERLIN" },
{ position: "33", front: "PIRATE", back: "HORSE" },
{ position: "34", front: "BEACH", back: "CHARGE" },
{ position: "35", front: "POUND", back: "SUB" },
{ position: "36", front: "ROUND", back: "INDIA" },
{ position: "37", front: "FIELD", back: "TRAIN" },
{ position: "38", front: "CYCLE", back: "TELESCOPE" },
{ position: "39", front: "ROME", back: "PLANE" },
{ position: "40", front: "HOTEL", back: "PARACHUTE" },
{ position: "41", front: "SPOT", back: "PIANO" },
{ position: "42", front: "MOUNT", back: "BOX" },
{ position: "43", front: "STICK", back: "PLATYPUS" },
{ position: "44", front: "SINK", back: "CLUB" },
{ position: "45", front: "MOLE", back: "SHOE" },
{ position: "46", front: "SCHOOL", back: "SERVER" },
{ position: "47", front: "CHICK", back: "CENTER" },
{ position: "48", front: "WATER", back: "CHAIR" },
{ position: "49", front: "PAPER", back: "SOUND" },
{ position: "50", front: "SLUG", back: "COMPOUND" },
{ position: "51", front: "BUTTON", back: "FILM" },
{ position: "52", front: "HIMALAYAS", back: "CROWN" },
{ position: "53", front: "NINJA", back: "OLYMPUS" },
{ position: "54", front: "CZECH", back: "BACK" },
{ position: "55", front: "GROUND", back: "NOTE" },
{ position: "56", front: "BUGLE", back: "PART" },
{ position: "57", front: "MOUTH", back: "TAP" },
{ position: "58", front: "TAG", back: "ICE" },
{ position: "59", front: "BUT", back: "SOCK" },
{ position: "60", front: "WORM", back: "ALPS" },
{ position: "61", front: "PENGUIN", back: "ROOT" },
{ position: "62", front: "LAWYER", back: "SATELLITE" },
{ position: "63", front: "SPIDER", back: "ANGEL" },
{ position: "64", front: "TAIL", back: "CRASH" },
{ position: "65", front: "TICK", back: "GOLD" },
{ position: "66", front: "MINT", back: "BUG" },
{ position: "67", front: "MISSILE", back: "PASTE" },
{ position: "68", front: "EMBASSY", back: "ROBOT" },
{ position: "69", front: "PISTOL", back: "ROW" },
{ position: "70", front: "SCIENTIST", back: "SPIKE" },
{ position: "71", front: "KIWI", back: "CODE" },
{ position: "72", front: "LOG", back: "LOCH NESS" },
{ position: "73", front: "GERMANY", back: "FORK" },
{ position: "74", front: "HAND", back: "SWING" },
{ position: "75", front: "DISEASE", back: "PORT" },
{ position: "76", front: "BED", back: "CIRCLE" },
{ position: "77", front: "SPY", back: "UNICORN" },
{ position: "78", front: "PRINCESS", back: "TIME" },
{ position: "79", front: "DANCE", back: "LINK" },
{ position: "80", front: "CARROT", back: "FLUTE" },
{ position: "81", front: "STATE", back: "TORCH" },
{ position: "82", front: "RACKET", back: "BEIJING" },
{ position: "83", front: "GENIUS", back: "EAGLE" },
{ position: "84", front: "THIEF", back: "BARK" },
{ position: "85", front: "TRUNK", back: "SNOW" },
{ position: "86", front: "AMERICA", back: "IVORY" },
{ position: "87", front: "NOVEL", back: "PIPE" },
{ position: "88", front: "WALL", back: "PANTS" },
{ position: "89", front: "BERRY", back: "SOLDIER" },
{ position: "90", front: "ATLANTIS", back: "VACUUM" },
{ position: "91", front: "KETCHUP", back: "WITCH" },
{ position: "92", front: "PLOT", back: "PUPIL" },
{ position: "93", front: "ENGLAND", back: "SMUGGLER" },
{ position: "94", front: "TEMPLE", back: "ORANGE" },
{ position: "95", front: "MAPLE", back: "AZTEC" },
{ position: "96", front: "MAIL", back: "UNDERTAKER" },
{ position: "97", front: "AFRICA", back: "SCUBA DIVER" },
{ position: "98", front: "OPERA", back: "PYRAMID" },
{ position: "99", front: "TOWER", back: "POISON" },
{ position: "100", front: "NIGHT", back: "STRING" }
].map(card => ({
...card,
deck: "Deck 2"
}));

const cards = [...deck1, ...deck2];

/* SEARCH */
const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("results");
const resultCount = document.getElementById("resultCount");


function searchCards() {
  const query = searchInput.value.trim().toLowerCase();
  if (query === "") {

  resultsContainer.innerHTML = `
          <div class="no-results">
            Start typing to search the cards.
          </div>
        `;
  resultCount.textContent = "";

  return;
}


/*
 * Search:
 *
 * - Front of Card
 * - Back of Card
 * - Deck
 * - Position
 */

const matches = cards.filter(card => {

return (
  card.front.toLowerCase().includes(query) ||
  card.back.toLowerCase().includes(query) ||
  card.deck.toLowerCase().includes(query) ||
  card.position.toLowerCase().includes(query)
  );
});

resultCount.textContent =
`${matches.length} ${matches.length === 1 ? "result" : "results"}`;

/* No matches. */
if (matches.length === 0) {

resultsContainer.innerHTML = `
        <div class="no-results">
          No cards found.
        </div>
      `;

return;
}


/*
 * Display each match as:
 *
 * FRONT OF CARD | BACK OF CARD
 * ----------------------------
 * DECK          | POSITION
 */

resultsContainer.innerHTML = matches.map(card => `
  <div class="result-card">

    <div class="card-cell front">
      <span class="label">Front of Card</span>
      <span class="value">
        ${escapeHtml(card.front)}
      </span>
    </div>

    <div class="card-cell back">
      <span class="label">Back of Card</span>
      <span class="value">
        ${escapeHtml(card.back)}
      </span>
    </div>

    <div class="card-cell deck">
      <span class="label">Deck</span>
      <span class="value ${card.deck === "Deck 1" ? "deck-1" : "deck-2"}">
        ${escapeHtml(card.deck)}
      </span>
    </div>

    <div class="card-cell position">
      <span class="label">Position</span>
      <span class="value">
        ${escapeHtml(card.position)}
      </span>
    </div>

  </div>

`).join("");
}


/* HTML ESCAPING */
function escapeHtml(value) {
  return value
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#039;");
}

searchInput.addEventListener("input", searchCards);

searchCards();
