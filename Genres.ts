import RomanceImg from "~/assets/genre_icons/romance.svg"
import FantasyImg from "~/assets/genre_icons/fantasy.svg"
import UniverseImg from "~/assets/genre_icons/universe.svg"
import InsightImg from "~/assets/genre_icons/insight.svg"
import HistoryImg from "~/assets/genre_icons/history.svg"
import KoreanImg from "~/assets/genre_icons/korean.svg"
import NobelPrizeImg from "~/assets/genre_icons/nobelprize.svg"
import OriginImg from "~/assets/genre_icons/origin.svg"
// import BestsellerImg from "~/assets/genre_icons/bestseller.svg"

export const genres = [
  { img: RomanceImg, genre: "romance", label: "로맨스" },
  { img: FantasyImg, genre: "fantasy", label: "판타지" },
  { img: UniverseImg, genre: "universe", label: "인간과 우주" },
  { img: InsightImg, genre: "insight", label: "내면 성장과 자아탐색" },
  { img: HistoryImg, genre: "history", label: "역사와 사회비판" },
  { img: KoreanImg, genre: "korean", label: "한국 문학" },
  { img: NobelPrizeImg, genre: "nobelprize", label: "노벨 문학상 수상 작가" },
  { img: OriginImg, genre: "origin", label: "영화 드라마 원작" },
] as const
