export interface Product {
  name: string;
  category: string;
  description: string;
  price: number;
  photos: string[],
  deliveries: Delivery[]
}

interface Delivery {
  type: string;
  price: number
}

export const products : Product[] = [
  {
    name: "Bluza adidas r. L Entrada",
    category: "Moda",
    description: "Bluza męska adidas podniesie do maksimum poziom komfortu podczas treningu lub wypoczynku w domowym zaciszu. Fason pochodzący z docenianej za sprawdzone rozwiązania kolekcji Entrada 22 zadba o nienagnany wygląd na boisku, jak i poza nim. Przyjemny w dotyku, bawełniany materiał zadba o naturalną wentylację ciała, a domieszka syntetycznych włókien zwiększy trwałość i przyczyni się do korzystniejszego ułożenia na sylwetce. Ponadto od wewnętrznej strony użyto polarowej tkaniny, która otuli ciało izolując od zimna.",
    price: 109.00,
    photos: [
      "https://www.trec.pl/media/produkt_foto/fioletowa-bluza-meska-z-kapturem-basic-hoodie-124--fioletowa-bluza-meska-z-_aX9e8n7.png",
      ""
    ],
    deliveries : [
      { type: "InPost", price: 9.99 },
      { type: "Poczta Polska", price: 14.99 },
      { type: "DPD", price: 17.99 }
    ]
  },
]