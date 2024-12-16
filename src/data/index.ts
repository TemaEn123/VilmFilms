import { IDataForFiltersItem } from "../interfaces";

export const categories: string[] = [
  "СЕРИАЛЫ",
  "АНИМЕ",
  "МУЛЬТФИЛЬМ",
  "ВЕСТЕРН",
  "БИОГРАФИЯ",
  "БОЕВИК",
  "ВОЕННЫЙ",
  "ДЕТЕКТИВ",
  "ДРАМА",
  "ДОКУМЕНТАЛЬНЫЙ",
  "ИСТОРИЯ",
  "КОМЕДИЯ",
  "КРИМИНАЛ",
  "МЕЛОДРАМА",
  "МУЗЫКА",
  "ПРИКЛЮЧЕНИЯ",
  "СПОРТ",
  "ТРИЛЛЕР",
  "УЖАСЫ",
  "ФЭНТЕЗИ",
  "ФАНТАСТИКА",
];

export const dataForFilters: IDataForFiltersItem[] = [
  {
    name: "Сортировка",
    slugName: "sortField",
    data: [
      { slug: "", name: "Сортировка" },
      { slug: "name", name: "По названию" },
      { slug: "rating.kp", name: "По рейтингу" },
      { slug: "year", name: "По году" },
      { slug: "votes.kp", name: "По просмотрам" },
    ],
  },
  {
    name: "Год",
    slugName: "year",
    data: [
      { name: "Год", slug: "" },
      {
        name: "1895",
        slug: "1895",
      },
      {
        name: "1896",
        slug: "1896",
      },
      {
        name: "1902",
        slug: "1902",
      },
      {
        name: "1903",
        slug: "1903",
      },
      {
        name: "1915",
        slug: "1915",
      },
      {
        name: "1916",
        slug: "1916",
      },
      {
        name: "1917",
        slug: "1917",
      },
      {
        name: "1918",
        slug: "1918",
      },
      { name: "1920", slug: "1920" },
      { name: "1921", slug: "1921" },
      { name: "1922", slug: "1922" },
      { name: "1923", slug: "1923" },
      { name: "1924", slug: "1924" },
      { name: "1925", slug: "1925" },
      { name: "1926", slug: "1926" },
      { name: "1927", slug: "1927" },
      { name: "1928", slug: "1928" },
      { name: "1929", slug: "1929" },
      { name: "1930", slug: "1930" },
      { name: "1931", slug: "1931" },
      { name: "1932", slug: "1932" },
      { name: "1933", slug: "1933" },
      { name: "1934", slug: "1934" },
      { name: "1935", slug: "1935" },
      { name: "1936", slug: "1936" },
      { name: "1937", slug: "1937" },
      { name: "1938", slug: "1938" },
      { name: "1939", slug: "1939" },
      { name: "1940", slug: "1940" },
      { name: "1941", slug: "1941" },
      { name: "1942", slug: "1942" },
      { name: "1943", slug: "1943" },
      { name: "1944", slug: "1944" },
      { name: "1945", slug: "1945" },
      { name: "1946", slug: "1946" },
      { name: "1947", slug: "1947" },
      { name: "1948", slug: "1948" },
      { name: "1949", slug: "1949" },
      { name: "1950", slug: "1950" },
      { name: "1951", slug: "1951" },
      { name: "1952", slug: "1952" },
      { name: "1953", slug: "1953" },
      { name: "1954", slug: "1954" },
      { name: "1955", slug: "1955" },
      { name: "1956", slug: "1956" },
      { name: "1957", slug: "1957" },
      { name: "1958", slug: "1958" },
      { name: "1959", slug: "1959" },
      { name: "1960", slug: "1960" },
      { name: "1961", slug: "1961" },
      { name: "1962", slug: "1962" },
      { name: "1963", slug: "1963" },
      { name: "1964", slug: "1964" },
      { name: "1965", slug: "1965" },
      { name: "1966", slug: "1966" },
      { name: "1967", slug: "1967" },
      { name: "1968", slug: "1968" },
      { name: "1969", slug: "1969" },
      { name: "1970", slug: "1970" },
      { name: "1971", slug: "1971" },
      { name: "1972", slug: "1972" },
      { name: "1973", slug: "1973" },
      { name: "1974", slug: "1974" },
      { name: "1975", slug: "1975" },
      { name: "1976", slug: "1976" },
      { name: "1977", slug: "1977" },
      { name: "1978", slug: "1978" },
      { name: "1979", slug: "1979" },
      { name: "1980", slug: "1980" },
      { name: "1981", slug: "1981" },
      { name: "1982", slug: "1982" },
      { name: "1983", slug: "1983" },
      { name: "1984", slug: "1984" },
      { name: "1985", slug: "1985" },
      { name: "1986", slug: "1986" },
      { name: "1987", slug: "1987" },
      { name: "1988", slug: "1988" },
      { name: "1989", slug: "1989" },
      { name: "1990", slug: "1990" },
      { name: "1991", slug: "1991" },
      { name: "1992", slug: "1992" },
      { name: "1993", slug: "1993" },
      { name: "1994", slug: "1994" },
      { name: "1995", slug: "1995" },
      { name: "1996", slug: "1996" },
      { name: "1997", slug: "1997" },
      { name: "1998", slug: "1998" },
      { name: "1999", slug: "1999" },
      { name: "2000", slug: "2000" },
      { name: "2001", slug: "2001" },
      { name: "2002", slug: "2002" },
      { name: "2003", slug: "2003" },
      { name: "2004", slug: "2004" },
      { name: "2005", slug: "2005" },
      { name: "2006", slug: "2006" },
      { name: "2007", slug: "2007" },
      { name: "2008", slug: "2008" },
      { name: "2009", slug: "2009" },
      { name: "2010", slug: "2010" },
      { name: "2011", slug: "2011" },
      { name: "2012", slug: "2012" },
      { name: "2013", slug: "2013" },
      { name: "2014", slug: "2014" },
      { name: "2015", slug: "2015" },
      { name: "2016", slug: "2016" },
      { name: "2017", slug: "2017" },
      { name: "2018", slug: "2018" },
      { name: "2019", slug: "2019" },
      { name: "2020", slug: "2020" },
      { name: "2021", slug: "2021" },
      { name: "2022", slug: "2022" },
      { name: "2023", slug: "2023" },
      { name: "2024", slug: "2024" },
    ],
  },
  {
    name: "Страна",
    slugName: "countries.name",
    data: [
      { name: "Страна", slug: "" },
      {
        name: "Австралия",
        slug: "Австралия",
      },
      {
        name: "Австрия",
        slug: "Австрия",
      },
      {
        name: "Азербайджан",
        slug: "Азербайджан",
      },
      {
        name: "Аргентина",
        slug: "Аргентина",
      },
      {
        name: "Армения",
        slug: "Армения",
      },
      {
        name: "Афганистан",
        slug: "Афганистан",
      },
      {
        name: "Беларусь",
        slug: "Беларусь",
      },
      {
        name: "Бельгия",
        slug: "Бельгия",
      },
      {
        name: "Болгария",
        slug: "Болгария",
      },
      {
        name: "Бразилия",
        slug: "Бразилия",
      },
      {
        name: "Великобритания",
        slug: "Великобритания",
      },
      {
        name: "Венгрия",
        slug: "Венгрия",
      },
      {
        name: "Вьетнам",
        slug: "Вьетнам",
      },
      {
        name: "Германия",
        slug: "Германия",
      },
      {
        name: "Греция",
        slug: "Греция",
      },
      {
        name: "Грузия",
        slug: "Грузия",
      },
      {
        name: "Дания",
        slug: "Дания",
      },
      {
        name: "Египет",
        slug: "Египет",
      },
      {
        name: "Израиль",
        slug: "Израиль",
      },
      {
        name: "Индия",
        slug: "Индия",
      },
      {
        name: "Индонезия",
        slug: "Индонезия",
      },
      {
        name: "Ирак",
        slug: "Ирак",
      },
      {
        name: "Иран",
        slug: "Иран",
      },
      {
        name: "Ирландия",
        slug: "Ирландия",
      },
      {
        name: "Исландия",
        slug: "Исландия",
      },
      {
        name: "Испания",
        slug: "Испания",
      },
      {
        name: "Италия",
        slug: "Италия",
      },
      {
        name: "Казахстан",
        slug: "Казахстан",
      },
      {
        name: "Канада",
        slug: "Канада",
      },
      {
        name: "Китай",
        slug: "Китай",
      },
      {
        name: "Колумбия",
        slug: "Колумбия",
      },
      {
        name: "Корея Южная",
        slug: "Корея Южная",
      },
      {
        name: "Мексика",
        slug: "Мексика",
      },
      {
        name: "Нидерланды",
        slug: "Нидерланды",
      },
      {
        name: "Норвегия",
        slug: "Норвегия",
      },
      {
        name: "Польша",
        slug: "Польша",
      },
      {
        name: "Португалия",
        slug: "Португалия",
      },
      {
        name: "Россия",
        slug: "Россия",
      },
      {
        name: "СССР",
        slug: "СССР",
      },
      {
        name: "США",
        slug: "США",
      },
      {
        name: "Сербия",
        slug: "Сербия",
      },
      {
        name: "Турция",
        slug: "Турция",
      },
      {
        name: "Украина",
        slug: "Украина",
      },
      {
        name: "Уругвай",
        slug: "Уругвай",
      },
      {
        name: "Франция",
        slug: "Франция",
      },
      {
        name: "Хорватия",
        slug: "Хорватия",
      },
      {
        name: "Черногория",
        slug: "Черногория",
      },
      {
        name: "Чехия",
        slug: "Чехия",
      },
      {
        name: "Чили",
        slug: "Чили",
      },
      {
        name: "Швейцария",
        slug: "Швейцария",
      },
      {
        name: "Швеция",
        slug: "Швеция",
      },
      {
        name: "Эстония",
        slug: "Эстония",
      },
      {
        name: "ЮАР",
        slug: "ЮАР",
      },
      {
        name: "Япония",
        slug: "Япония",
      },
    ],
  },
];

export const queryBySearchAndClick = [
  "title",
  "year",
  "countries.name",
  "genres.name",
  "persons.id",
];
