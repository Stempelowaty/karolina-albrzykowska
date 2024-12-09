import { type AvailableLocalesType } from "@/app/utils";

const dictionaries = {
  "en-US": {
    text1:"About me",
    text2:"My artistic work focuses on exploring the complexity of the human mind, immersing the viewer in a space of emotions, states, and experiences connected to individual psychology. Through sculpture, I aim to create a bridge between the visible and the deeply hidden – the subtle, often invisible aspects of inner life. Each of my pieces is an intimate narrative of struggle, sensitivity, and hope. By utilizing diverse materials, I strive to convey both the fragility and the strength of the human psyche. My goal is to allow the viewer to momentarily 'step into the shoes' of those grappling with various mental states.",
    text3:"Education",
    text4:"Antoni Kenar State High School of Fine Arts",
    text5:"Zakopane, 2013–2019",
    text6:"Eugeniusz Geppert Academy of Fine Arts",
    text7:"Wrocław, 2019–2024",
    text8:"Exhibitions",
    text9:"Student Biennial of Small Sculptural Forms, 6th Edition, Poznań 2021",
    text10:"Intermedia Art Stage, Underwater Wrocław: 'Dialogue... with what happens' 15th Edition, Wrocław 2022",
    text11:"'Vibrations and Metaphors' at the Center for Contemporary Art, Kraków 2022",
    text12:"'Materia Prima' at the 'Na Piasku' Library, Wrocław 2022",
    text13:"'Document' at WL4 Mleczny Piotr, Gdańsk 2022",
    text14:"'Childhood' at the House of Literature, Łódź 2022",
    text15:"'Słowoprzestrzeń' at the Academy of Fine Arts (ASP), Wrocław 2023",
    text16:"'The Weight of Skin' at the Browar Mieszczański, Wrocław 2024",
    text17:"'Corpus Humanum III' at the Medical University, Wrocław 2024",
    text18:"Artistic Competition for the Landscape Day Poster, 2024",
    text19:"Others",
    text20:"Rector's Scholarship Academy of Fine Arts in Wrocław, 2022",
    text21:"Participation in the project 'Iconographic Trail of the City's History in the Form of Horizontal Bronze Signs', Racibórz 2022",
  },
  "pl-PL": {
    
    text1:"O mnie",
    text2:"Moja twórczość koncentruje się na eksploracji złożoności ludzkiego umysłu, zanurzając widza w przestrzeni emocji, stanów i doświadczeń związanych z psychologią jednostki. Poprzez rzeźbę dążę do stworzenia pomostu między tym, co widzialne, a tym, co głęboko ukryte – subtelnymi, często niewidzialnymi aspektami życia wewnętrznego. Każda moja praca to intymna opowieść o walce, wrażliwości i nadziei. Wykorzystując różnorodne materiały, staram się oddać zarówno kruchość, jak i siłę ludzkiej psychiki. Moim celem jest sprawienie, by odbiorca choć na chwilę „wszedł w skórę” osób zmagających się z różnymi stanami psychicznymi.",
    text3:"Edukacja",
    text4:"Państwowe Liceum Sztuk Plastycznych im. Antoniego Kenara ",
    text5:"Zakopane 2013-2019",
    text6:"Akademia Sztuk Pięknych im. Eugeniusza Gepperta",
    text7:"Wrocław 2019-2024",
    text8:"Wystawy",
    text9:"Studenckie Biennale Małej Formy Rzeźbiarskiej edycja VI, Poznań 2021",
    text10:"Scena Sztuki Intermedialnej Podwodny Wrocław 'Dialog... z tym co się wydarza' edycja XV, Wrocław 2022",
    text11:"'Wibracje i metafory' w Centrum Sztuki Współczesnej, Kraków 2022",
    text12:"'Materia Prima' w Bibliotece 'Na Piasku', Wrocław 2022",
    text13:"'Dokument' w WL4 Mleczny Piotr, Gdańsk 2022",
    text14:"'Dzieciństwo' w Domu Literatury, Łódź 2022",
    text15:"'Słowoprzestrzeń' na ASP, Wrocław 2023",
    text16:"'Ciężar Skóry' w Browarze Mieszczańskim, Wrocław 2024",
    text17:"'Corpus Humanum III' Uniwersytet Medyczny, Wrocław 2024",
    text18:"Konkurs artystyczny na plakat Dzień Krajobrazu, 2024",
    text19:"Inne",
    text20:"Stypendium rektora ASP Wrocław 2022 ",
    text21:"Udział w realizacji projektu 'Ikonograficzny szlak historii miasta w formie znaków poziomych z brązu' w Raciborzu 2022",
  },
};

export const getDictionary = (locale: string) =>
  dictionaries[locale as AvailableLocalesType];
