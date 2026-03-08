import { useState } from "react";
import Archer from "./assets/images/Archer.png";
import ArcherQueen from "./assets/images/ArcherQueen.png";
import MightyMiner from "./assets/images/MightyMiner.png";
import BattleHealer from "./assets/images/BattleHealer.png";
import MagicArcher from "./assets/images/MagicArcher.png";
import DarkPrince from "./assets/images/DarkPrince.png";
import GoldenKnight from "./assets/images/GoldenKnight.png";
import Knight from "./assets/images/Knight.png";
import Lumberjack from "./assets/images/Lumberjack.png";
import MegaKnight from "./assets/images/MegaKnight.png";
import Prince from "./assets/images/Prince.png";
import Valkyrine from "./assets/images/Valkyrine.png";
import Princess from "./assets/images/Princess.png";
import Firecracker from "./assets/images/Firecracker.png";

let data = [
  { name: "Archer", url: Archer, id: "1", clicked: false },
  { name: "Archer Queen", url: ArcherQueen, id: "2", clicked: false },
  { name: "Mighty Miner", url: MightyMiner, id: "3", clicked: false },
  { name: "Battle Healer", url: BattleHealer, id: "4", clicked: false },
  { name: "Magic Archer", url: MagicArcher, id: "5", clicked: false },
  { name: "Dark Prince", url: DarkPrince, id: "6", clicked: false },
  { name: "Golden Knight", url: GoldenKnight, id: "7", clicked: false },
  { name: "Knight", url: Knight, id: "8", clicked: false },
  { name: "Lumberjack", url: Lumberjack, id: "9", clicked: false },
  { name: "Mega Knight", url: MegaKnight, id: "10", clicked: false },
  { name: "Prince", url: Prince, id: "11", clicked: false },
  { name: "Valkyrine", url: Valkyrine, id: "12", clicked: false },
  { name: "Princess", url: Princess, id: "13", clicked: false },
  { name: "Firecracker", url: Firecracker, id: "14", clicked: false },
];

export default function App() {
  const [cards, setCards] = useState(data);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function shuffle(array) {
    let i = array.length,
      j,
      temp;
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
    return array;
  }

  function handleClick(id) {
    let pick = cards.find((card) => card.id == id);
    console.log(pick.clicked);
    console.log(pick.name);
    if (!pick.clicked) {
      setScore(score + 1);
      if (score + 1 > bestScore) {
        setBestScore(score + 1);
      }
      setCards(
        shuffle(
          cards.map((card) =>
            card.id === id ? { ...card, clicked: true } : { ...card },
          ),
        ),
      );
    } else {
      setCards(shuffle(cards.map((card) => ({ ...card, clicked: false }))));
      setScore(0);
    }
    console.log(pick);
    console.log(cards);
  }

  return (
    <>
      <header>
        <div>
          <h1>Clash Royale's Memory Game</h1>
          <p id="tagLine">
            Get points clicking on a card but don't click on any more than once
          </p>
        </div>
        <div>
          <p>Score: {score}</p>
          <p id="bestScore">Best score: {bestScore}</p>
        </div>
      </header>
      <main className="">
        {cards.map((card) => (
          <Card
            name={card.name}
            url={card.url}
            key={card.id}
            onClick={handleClick}
            id={card.id}
          />
        ))}
      </main>
    </>
  );
}

function Card({ name, url, onClick, id }) {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={url} className=""></img>
      <p className="cardName">{name}</p>
    </div>
  );
}
