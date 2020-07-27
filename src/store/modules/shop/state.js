export default () => ({
  items: [
    {
      id: '001',
      username:'agenman',

      img: require('@/assets/img/home/rubas-1.jpg'),
      name: "Balta su dirzeliu,puosni suknele",
      categories: ['female', 'dress'],
      state: "Nauja",
      description: "Suknele tinkama bet kokiai progai,lengva,plona medziaga,nepersisviecia,nes yra pamusalas,uztrauktukas sone,su dirzeliu.",
      inStock: 3,
      price: 22.00,
      vat: 21.00,
      size: 'xl',
      height: 22,
      width: 20,
    },
    {
      id: '002',
            username:'missprincess',

      img: require('@/assets/img/home/rubas-2.jpg'),
      name: "Fainos klumpytės",
      categories: ['female', 'shoes'],
      state: "Nauja",
      description: "Geros būklės, labai patogios basutės-klumpės. Padas 27cm. Kulnas 7cm. Siuntimas nemokamas.",
      inStock: 0,
      price: 24.00,
      vat: 21.00,
      size: 'sm',
      height: 22,
      width: 40,
      brand: 'Gucci'
    },
    {
      id: '003',
      username:'baiba',

      img: require('@/assets/img/home/rubas-3.jpg'),
      name: "Žalia tamprios medžiagos suknelė",
      categories: ['female', 'dress'],
      state: "Kelis kart naudota",
      description: "Žalia, viskozinio trikotažo su elastanu,susegama kniedemis-sagutemis,rankovės 3/4.",
      inStock: 1,
      price: 15.00,
      vat: 21.00,
      size: 'sm',
      height: 22,
      width: 40,
    },
    {
      id: '004',
      username:'jauna15',

      img: require('@/assets/img/home/rubas-4.jpg'),
      name: "Maudymosis kostiumėlis",
      categories: ['female', 'bikini'],
      state: "Nauja",
      description: "Komplektas į pajūrį suderinau pati šį komplektą, spalvos beveik identiškos, nenešiojau visai suknytė.",
      inStock: 4,
      price: 29.00,
      vat: 21.00,
      size: 'md',
      height: 22,
      width: 40,
      brand: 'Pull & Bear'
    },
    {
      id: '005',
            username:'kikil',

      img: require('@/assets/img/home/rubas-5.jpg'),
      inStock: 5,
      name: "balti marskineliai",
      categories: ['female', 'shirt'],
      state: "Nauji",
      description: "labai grazus balti marskineliai nauji",
      price: 14.00,
      vat: 21.00,
      size: 'md',
      height: 22,
      width: 40,
      brand: 'H&M'
    },
    {
      id: '006',
            username:'Tony',

      img: require('@/assets/img/home/vyriskas-1.jpg'),
      inStock: 5,
      name: "Metallica džemperis",
      categories: ['male', 'hoodie'],
      state: "Kaip naujas",
      description: "Visiems Metallica fanams MUST HAVE prekė",
      price: 14.60,
      vat: 21.00,
      size: 'xxl',
      height: 74,
      width: 40,
      brand: 'Special Edition'
    },
    {
      id: '007',
            username:'masterDisaster',

      img: require('@/assets/img/home/vyriskas-2.jpg'),
      inStock: 5,
      name: "Batman džemperis",
      categories: ['male', 'hoodie'],
      state: "Naudotas",
      description: "Įšoki ir varai!",
      price: 5.00,
      vat: 21.00,
      size: 'md',
      height: 22,
      width: 40,
      brand: 'Marvel'
    },
    {
      id: '008',
      username:'motor500',

      img: require('@/assets/img/home/vyriskas-3.jpg'),
      inStock: 0,
      name: "Pilkas megzstukas",
      categories: ['male', 'sweater'],
      state: "Naudotas",
      description: "Ir į klubą ir į kiemą!",
      price: 7.99,
      vat: 21.00,
      size: 'md',
      height: 22,
      width: 40,
      brand: 'H&M'
    },
    {
      id: '009',
      username:'robertanem',
      img: require('@/assets/img/home/vyriskas-4.jpg'),
      inStock: 5,
      name: "Stilingi kedai",
      categories: ['male', 'shoes'],
      state: "Dėvėti",
      description: "Stilius ir energija!",
      price: 31.00,
      vat: 21.00,
      size: '43',
      brand: 'Orca'
    },
    {
      id: '010',
      username:'gabjana',

      img: require('@/assets/img/home/vyriskas-5.jpg'),
      inStock: 1,
      name: "DC kuprinė",
      categories: ['male', 'bag'],
      state: "Nauja",
      description: "Didelė, stilinga ir talpi!",
      price: 23.00,
      vat: 21.00,
      brand: 'DC'
    },
  ],
  category: '',
  selectedItems: [],
  selectedItemCount: 0,
  searchQuery: 'Ivestas tekstas paieškoje',
  isLoading: false,
  filters: [],
  itemsPerPageOptions: [
    {
      count: 3,
      selected: false,
    },
    {
      count: 9,
      selected: true,
    },
    {
      count: 15,
      selected: false,
    }
  ],
  sortOptions: [
    {
      name: 'A-Z',
      selected: true,
      sortFunction: (a, b) => (a.name > b.name ? 1 : a.name == b.name ? 0 : -1)
    },
    {
      name: 'Z-A',
      selected: false,
      sortFunction: (a, b) => (a.name < b.name ? 1 : a.name == b.name ? 0 : -1)
    },
    {
      name: 'Pigiausi',
      selected: false,
      sortFunction: (a, b) => (a.price > b.price ? 1 : a.price == b.price ? 0 : -1)
    },
    {
      name: 'Brangiausi',
      selected: false,
      sortFunction: (a, b) => a.price < b.price ? 1 : a.price == b.price ? 0 : -1
    }
  ],
  pagination: {
    currentPage: 1,
    pages: []
  },
});
