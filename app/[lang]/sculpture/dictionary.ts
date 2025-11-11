import { type AvailableLocalesType } from "@/app/utils";

const dictionaries = {
  "en-US": {
    back: "Back",
    next: "Next",
    previous: "Previous",
    title1: "Beyond the horizon",
    materials1: "Kappa, paper. Welding glass 2021",
    dimentions1: "10x10x10 cm, 5 pieces",
    description1:
      "The horizon is the boundary between what is within sight and what is distant and invisible. I enclosed what is foreign in the small, intimate space of a box, offering only a fragmentary glimpse of what lies beyond the dimension of perception. The framed fragment opens a space for natural curiosity to marvel and be amazed.",
    title2: "Fugue",
    materials2: "Silicone 2023",
    dimentions2: "15x15x10 cm",
    description2:
      "A neurotic disorder known as dissociative fugue is characterized by the repression of memories related to a traumatic incident. Post-traumatic amnesia can last for several hours, days, weeks, months, or even years. The loss of memories affects the individual, changing them without their knowledge, with only those closest to them noticing the subtle transformation. In my work, I used the element of a hearth and home, a cup, and a saucer. From the original porcelain pieces, I cast their silicone versions. The tableware appears to be like any other, but only upon closer contact, when it is lifted and touched, does one notice its unnaturalness. Instead of the cold, hard porcelain, the unfamiliar softness of silicone is felt.",
    title3: "Shadows create form",
    materials3: "Instalation 2021",
    dimentions3: "",
    description3:
      "Light moves through a vacuum, interacting with objects that either absorb or reflect it. The volumes of solids limit space, preventing light from reaching certain areas and creating shadows. Wanting to reverse this process, I focused on the play of light and shadow cast upon the walls, with the spatial object serving merely as a tool in this phenomenon.",
    title4: "Man is collection of experiences",
    materials4: "White wool 2021",
    dimentions4: "150x40x4 cm",
    description4:
      "Experiences gained in youth shape a set of behaviors that form the foundation of an individual's character and behavior. Situations from the past create new ones, tightening and intertwining, producing a butterfly effect. In addition to acquired memories, events that took place before the individual's birth also influence their development. During the process of crocheting, stitches are made one after another, forming the basis for the next. The process can be manipulated in many ways. The works and creations resulting from it take on various patterns and shapes. The diversity and creativity of the crocheting process resemble the complexity of the human psyche. Each stitch represents a single event. In an attempt to externalize my collection of experiences, I crocheted a jumpsuit tailored to the shape of my body. Starting from the ends of the limbs—feet, toes, and fingers—I continued working toward the center and upwards. Different events and behaviors, originating from different places, move in one direction to become a whole. The work gradually acquires new stitches and remains in progress, just as my experiences do.",
    title5: "Social spine",
    materials5: "Ceramic, metal 2023",
    dimentions5: "60x30x30 cm",
    description5:
      "Each of the vertebrae, except for the coccyx, which serves as the foundation of the entire object, undergoes deformation, synthesis, and mutation with minimal retention of its original shape. None of the introduced changes are repeated, making the elements foreign to one another. Despite their differences, the objects collaborate to form a larger whole. They are suspended in a metal structure, a kind of cage, within the arrangement of a slightly deformed spine, together creating a unified form. This allows the system to continue existing even when it is incomplete and dysfunctional.",
    title6: "Entrophy of existence",
    materials6: "Acrilic resin, metal 2024",
    dimentions6: "150x150x230 cm",
    description6:
      "Bone has been utilized by humans in every conceivable way—physically, biologically, and also in terms of its aesthetics and symbolism, especially in art. Inspired by their peculiar anatomy, I focused on their structural aspects. The tibia and fibula function like double columns, supporting our posture, while the ribs create a skeletal vault for the lungs. Seeking to integrate the architectural function of bones with their sacred essence, I designed a space for worship and meditation. Yet remains are still remains—despite being part of order and rhythm, the memory of a life once lived introduces an element of chaos, both physical and spiritual, serving as a silent and constant reminder of entropy.",
    title7: "Swift bird",
    materials7: "Iron cast 2020",
    dimentions7: "11x12x8 cm",
    description7:
      "Work was exhibited in VI Biennial of Small Sculptural Forms 2021",
    title8: "Fetal",
    materials8: "Plaster, slime 2023",
    dimentions8: "5x5x7 cm",
    description8:
      "The beginnings of human existence in the mother's womb are associated with the fetal position. This position brings solace to emotionally sensitive individuals in later stages of life, providing them with a sense of comfort and security. I sought to illustrate the need to return to the risk-free safety of the womb using chicken eggs. The delicate eggshell serves as a protective barrier for a small, curled-up figure, additionally shielded by the egg white. When the person inside is emotionally ready, they will hatch anew, like a yellow chick.",
    title9: "Deer",
    materials9: "Ceramic 2022",
    dimentions9: "45x50x30 cm",
    description9:
      "Clay, a gift of the earth, embodies the essence of all that has grown from it and all that will inevitably return to it. Though organic form strive to transcend its boundaries, it's attempt to sever themselves from it's roots is destined to fail.",
    title10: "Deer",
    materials10: "Metal 2020",
    dimentions10: "73x60x18 cm",
    description10: "",
    title11: "Nude",
    materials11: "Clay 2022",
    dimentions11: "120x30x35 cm",
    description11: "Nude of a man in 1:3 ratio",
    title12: "Bas-relief",
    materials12: "Clay 2021",
    dimentions12: "100x160x5 cm",
    description12: "",
    title13: "Note",
    materials13: "Metal plate, copper 2023",
    dimentions13: "10x10x10 cm 3 pieces",
    description13:
      "Project implemented during inter-university exchange at the Academy of Fine Arts in Gdańsk",
    title14:
      "Realization of 1 of 14 slabs of the historic pavement of the city of Racibórz",
    materials14: "Bronze 2022",
    dimentions14: "40x60x1,5 cm",
    description14:
      "Execution of a bas-relief for the project The Iconographic Trail of the City's History in the Form of Horizontal Bronze Markers titled The First Mention of the Racibórz Brewery, 1567, which was permanently installed in the public space of the city of Racibórz. The opening of the historical walkway took place on June 29, 2022, at the Reverend Prelate Stefan Pieczka Square.",
    title15: "Aurora Borealis",
    materials15: "Aluminum 2023",
    dimentions15: "17x10x2 cm",
    description15:
      "The linearity of the cuts symbolizes the waves of solar wind emitted by the Sun, which, during their journey through space, collide with oxygen and nitrogen atoms in Earth's atmosphere. This phenomenon of energy transformation through collision results in the emission of unique lights, known as the aurora borealis.",
    title16: "Confabulation",
    materials16: "Photography, paper frame 2021",
    dimentions16: "10 pieces",
    description16:
      "Memories are an individual interpretation of events—emotions, beliefs, and relationships distort their true version. Over time, they fade, losing parts of themselves, and the mind, in its attempt to fill the resulting gaps, fabricates fragments of memory.",
    title17: "Comfort",
    materials17: "Metal 2023",
    dimentions17: "7x7x3 cm",
    description17:
      "People who make others happy at the expense of their own comfort and well-being suffer from people pleaser syndrome. A lack of assertiveness and fear of rejection stem from low self-esteem, leading them to seek external validation of their worth. A bracelet lined with spikes, which always turns its sharp side toward the wearer, symbolizes the comfort that people pleasers seek—it is meant for those around them, not for themselves.",
  },
  "pl-PL": {
    back: "Wstecz",
    next: "Następny",
    previous: "Poprzedni",
    title1: "Poza horyzontem",
    materials1: "Kappa, papier, szkiełko do spawania 2021",
    dimentions1: "10x10x10 cm, 5 obiektów",
    description1:
      "Horyzont jest granicą między tym, co znajduje się w zasięgu wzroku, a tym, co jest odległe i niewidoczne. To, co obce, zamknęłam w małej, intymnej przestrzeni pudełka, dając jedynie skrawek dostępu do tego, co znajduje się poza wymiarem percepcji. Skadrowany fragment otwiera przed naturalną ciekawością przestrzeń do zachwytu i zdumienia.",
    title2: "Fuga",
    materials2: "Silikon 2023",
    dimentions2: "15x15x10 cm",
    description2:
      "Zaburzenie nerwicowe zwane fugą dysocjacyjną, charakteryzuje się wyparciem wspomnień dotyczących traumatycznego incydentu. Amnezja potraumatyczna może obejmować okres kilku godzin, dni, tygodni, miesięcy a nawet lat. Zanik wspomnień wpływa na osobę, zmieniając ją bez jej wiedzy, tylko jej bliskie otoczenie zauważa subtelną przemianę. W pracy wykorzystałam element ogniska domowego, filiżankę i spodek. Z porcelanowych oryginałów odlałam ich silikonową wersję. Zastawa wydaje się być jak każda inna, dopiero po bliższym kontakcie, kiedy jest podniesiona oraz dotknięta zauważa się jej nienaturalność. Zamiast zimnej i twardej porcelany czuć obcy, miękki silikon.",
    title3: "Cień tworzy formę",
    materials3: "Instalacja 2021",
    dimentions3: "",
    description3:
      "Światło porusza się w próżni, stykając się z obiektami, które je absorbują lub odbijają. Bryły, dzięki swojej objętości, ograniczają przestrzeń, uniemożliwiając światłu dotarcie w niektóre miejsca i tworząc cień. Pragnąc odwrócić ten proces, skoncentrowałam się na grze światła i cienia rzucanych na ściany, a obiekt przestrzenny stał się jedynie narzędziem w tym zjawisku.",
    title4: "Człowiek jest zbiorem doświadczeń",
    materials4: "Biała włóczka 2021",
    dimentions4: "150x40x3 cm",
    description4:
      "Doświadczenia nabyte za młodu wykształcają zespół zachowań, będący podstawą dla charakteru i behawiorystyki jednostki. Sytuacje z przeszłości kreują kolejne, jeszcze bardziej się zacieśniają i splątują, wytwarzając efekt motyla. Na ich rozwój, oprócz nabytych wspomnień, mają też wpływ zdarzenia mające miejsce przed narodzinami jednostki. Podczas czynności szydełkowania tworzy się po kolei oczka, będące podstawą dla kolejnych. Czynnością można manipulować na wiele sposobów. Prace i twory będące ich wynikiem przybierają różnorodne wzory i kształty. Zróżnicowanie i kreacja procesu szydełkowania przypomina rozbieżność ludzkiej psychiki. Każde oczko jest jednym wydarzeniem. Chcąc uzewnętrznić mój zbiór doświadczeń wyszydełkowałam kombinezon na miarę mojego kształtu ciała. Zaczynając od końców kończyn, stóp, palców i dłoni, kontynuowałam pracę ku centrum i górze. Różne zdarzenia, zachowania mające swoje genezy w innych miejscach, zmierzają w jednym kierunku, aby stać się całością. Praca powoli nabywa kolejnych oczek i pozostaje w procesie - tak, jak moje doświadczenia.",
    title5: "Kręgosłup społeczny",
    materials5: "Ceramika, metal 2023",
    dimentions5: "60x30x30 cm",
    description5:
      "Każdy z kręgów, z wyjątkiem kości ogonowej będącej podstawą całego obiektu, podlega deformacji, syntezie i mutacji z minimalnym zachowaniem oryginalnego kształtu. Żadna z wprowadzonych zmian nie powtarza się, przez co elementy są sobie obce. Obiekty mimo swojej odmienności współpracują, by stworzyć większą całość. Zawieszone są w metalowej konstrukcji, swoistej klatce w układ lekko zdeformowanego kręgosłupa, tworząc razem całość. Pozwala to na dalszą egzystencję systemu nawet, gdy jest on niekompletny i dysfunkcyjny.",
    title6: "Entropia istnienia",
    materials6: "Żywica akrylowa, metal 2024",
    dimentions6: "150x150x230 cm",
    description6:
      "Kość była eksploatowana przez człowieka w każdy możliwy sposób, fizycznie, biologicznie, a także pod względem jej estetyki i symboliki zwłaszcza w sztuce. Zainspirowana ich osobliwą anatomią skupiłam się na pełniących przez nie aspektach konstrukcyjnych. Piszczel i strzałka, funkcjonujące niczym podwójne kolumny, podtrzymujące naszą postawę, natomiast żebra tworzą szkieletowe sklepienie dla płuc. Chcąc zintegrować funkcje architektoniczną kości wraz z ich sakralnym meritum, stworzyłam miejsce kultu oraz medytacji.  Szczątki jednak są szczątkami, pomimo bycia częścią ładu i rytmu wspomnienie o minionym życiu wprowadza element chaosu, fizycznego oraz duchowego, jako ciche i nieustanne przypomnienie o entropii.",
    title7: "Jerzyk",
    materials7: "Żeliwo 2020",
    dimentions7: "11x12x8 cm",
    description7:
      "Praca była wystawiana podczas VI Biennale Małej Formy Rzeźbiarskiej 2021",
    title8: "Płód",
    materials8: "Gips, slime 2023",
    dimentions8: "5x5x7 cm",
    description8:
      "Początki ludzkiego istnienia w łonie matki wiążą się z ułożeniem w pozycji embrionalnej. Ta pozycja przynosi ukojenie emocjonalnie wrażliwym osobom na późniejszych etapach życia, zapewniając im poczucie komfortu i bezpieczeństwa. Potrzebę powrotu do pozbawionego ryzyka łona matki chciałam zobrazować za pomocą kurzych jaj. Delikatna skorupka jajka chroni, niczym bariera, małą skuloną postać, dodatkowo zabezpieczoną białkiem. Gdy osoba schowana wewnątrz będzie emocjonalnie gotowa, wykluje się na nowo, niczym żółte pisklę.",
    title9: "Jeleń",
    materials9: "Ceramika 2022",
    dimentions9: "45x50x30 cm",
    description9:
      "Glina, będąca darem ziemi, łączy w sobie istotę wszystkiego, co z niej wyrosło i co nieuchronnie do niej powróci. Choć organiczna forma usiłuje przekroczyć jej granice, jej próba oderwania się od korzeni skazane są na niepowodzenie.",
    title10: "Jeleń",
    materials10: "Metal 2020",
    dimentions10: "73x60x18 cm",
    description10: "",
    title11: "Akt",
    materials11: "Glina 2022",
    dimentions11: "120x30x35 cm",
    description11: "Akt w skali 1:3",
    title12: "Płaskorzeźba",
    materials12: "Glina 2021",
    dimentions12: "100x160x5 cm",
    description12: "",
    title13: "Notatka",
    materials13: "Metalowa płytka, miedź 2023",
    dimentions13: "10x10x10 cm 3 obiekty",
    description13:
      "Projekt, realizowany podczas wymiany międzyuczelnianej na ASP w Gdańsku",
    title14: "Realizacja 1 z 14 płyt historycznego chodnika miasta Racibórz",
    materials14: "Brąz 2022",
    dimentions14: "40x60x1,5 cm",
    description14:
      "Realizacja płaskorzeźby dla projektu “Ikonograficzny szlak historii miasta w formie znaków poziomych z brązu” pt. “Pierwsza wzmianka o browarze raciborskim”, 1567 r., która została umieszona na stałe w przestrzeni publicznej miasta Racibórz. Otwarcie historycznego chodnika miało miejsce 29.06.2022 r. przy Skwerze ks. Prałata Stefana Pieczki. ",
    title15: "Zorza polarna",
    materials15: "Aluminium 2023",
    dimentions15: "17x10x2 cm",
    description15:
      "Linearność nacięć symbolizuje fale wiatru słonecznego, które są emitowane przez Słońce i w swojej podróży przez kosmos zderzają się z atomami tlenu oraz azotu w atmosferze ziemskiej. To zjawisko przekształcenia energii w wyniku kolizji prowadzi do emisji osobliwych świateł, znanych jako zorza polarna.",
    title16: "Konfabulacja",
    materials16: "Zdjęcia, papierowa ramka 2021",
    dimentions16: "10 obiektów",
    description16:
      "Wspomnienia są indywidualną interpretacją sytuacji — emocje, poglądy i relacje zniekształcają ich prawdziwą wersję. Z czasem zacierają się, tracąc część siebie, a umysł, chcąc uzupełnić powstałe luki, fabrykuje fragmenty pamięci.",
    title17: "Komfort",
    materials17: "Metal 2023",
    dimentions17: "7x7x3 cm",
    description17:
      "Osoby, które uszczęśliwiają innych kosztem własnego komfortu i dobrego samopoczucia, cierpią na syndrom people pleaser. Brak asertywności oraz obawa przed odrzuceniem są spowodowane niską samooceną, a w efekcie szukają one potwierdzenia swojej wartości na zewnątrz. Bransoletka wyściełana kolcami, która zawsze obraca się raniącą stroną ku noszącej ją osobie, symbolizuje komfort, który people pleaserzy poszukują – ma być on przeznaczony dla ich otoczenia, a nie dla nich samych.",
  },
};

export const getDictionary = (locale: string) =>
  dictionaries[locale as AvailableLocalesType];
