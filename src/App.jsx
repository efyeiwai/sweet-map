    import { useState, useEffect } from 'react';

    // 模擬的甜點店資料
    const DESSERT_SHOPS = [
      {
        id: 1,
        name: '甜蜜蜜蛋糕坊',
        type: '蛋糕',
        location: '台北市',
        flavors: ['巧克力', '草莓'],
        purchaseOptions: ['店面內用', '店面外帶'],
        features: ['有插座'],
        description: '提供精緻的手工蛋糕，多種口味任君挑選。',
        imageUrl: 'https://placehold.co/600x400/ffc1cc/333?text=蛋糕',
        website: 'https://example.com/sweet-bakery',
        map: 'https://maps.google.com/?q=台北市大安區',
        fb: 'https://facebook.com/sweet-bakery',
        ig: 'https://instagram.com/sweet-bakery',
        line: 'https://line.me/',
        order: 'https://example.com/sweet-bakery/order',
        threads: 'https://threads.net/sweet-bakery',
        opening: '2019/05',
        menuPhotos: ['https://placehold.co/800x600/f8f8f8/333?text=菜單照片_1', 'https://placehold.co/800x600/f8f8f8/333?text=菜單照片_2'],
        shopPhotos: ['https://placehold.co/600x400/e0e0e0/333?text=店面照片_1', 'https://placehold.co/600x400/e0e0e0/333?text=店面照片_2'],
        dessertPhotos: ['https://placehold.co/600x400/ffc1cc/333?text=點心照片_1', 'https://placehold.co/600x400/ffc1cc/333?text=點心照片_2'],
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0069399434857!2d121.56475871490218!3d25.03357598396556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac6b610c149d%3A0x7d6b412b1897e7b0!2sTaipei%20101!5e0!3m2!1sen!2stw!4v1628162235941!5m2!1sen!2stw',
        stores: ['好食多', '好市多'],
        purchaseChannels: ['全家', '7-11'],
        deliveryFee: { normal: 500, cold: 2500 },
        activities: ['#05/30 滿300超取免運', '#07/30 滿千送折價券'],
      },
      {
        id: 2,
        name: '抹茶小天地',
        type: '日式甜點',
        location: '台中市',
        flavors: ['抹茶', '紅豆'],
        purchaseOptions: ['店面內用'],
        features: ['寵物友善'],
        description: '專門製作日式抹茶甜點，感受濃郁茶香。',
        imageUrl: 'https://placehold.co/600x400/b6e2d3/333?text=抹茶',
        website: 'https://example.com/matcha-shop',
        map: 'https://maps.google.com/?q=台中市西區',
        fb: 'https://facebook.com/matcha-shop',
        ig: 'https://instagram.com/matcha-shop',
        line: 'https://line.me/',
        order: 'https://example.com/matcha-shop/order',
        threads: 'https://threads.net/matcha-shop',
        opening: '2021/11',
        menuPhotos: ['https://placehold.co/800x600/f8f8f8/333?text=菜單照片_1'],
        shopPhotos: ['https://placehold.co/600x400/e0e0e0/333?text=店面照片_1'],
        dessertPhotos: ['https://placehold.co/600x400/b6e2d3/333?text=點心照片_1'],
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0069399434857!2d121.56475871490218!3d25.03357598396556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac6b610c149d%3A0x7d6b412b1897e7b0!2sTaipei%20101!5e0!3m2!1sen!2stw!4v1628162235941!5m2!1sen!2stw',
        stores: ['全聯'],
        purchaseChannels: ['蝦皮'],
        deliveryFee: { normal: 60, cold: 180 },
        activities: ['#06/15 買二送一', '#08/01 會員限定優惠'],
      },
      {
        id: 3,
        name: '開心果樂園',
        type: '冰淇淋',
        location: '高雄市',
        flavors: ['開心果', '香草'],
        purchaseOptions: ['店面內用', '店面外帶'],
        features: ['有狗'],
        description: '超人氣開心果冰淇淋，清爽不膩。',
        imageUrl: 'https://placehold.co/600x400/c9e265/333?text=冰淇淋',
        website: 'https://example.com/pistachio-paradise',
        map: 'https://maps.google.com/?q=高雄市新興區',
        fb: 'https://facebook.com/pistachio-paradise',
        ig: 'https://instagram.com/pistachio-paradise',
        line: 'https://line.me/',
        order: 'https://example.com/pistachio-paradise/order',
        threads: 'https://threads.net/pistachio-paradise',
        opening: '2020/07',
        menuPhotos: ['https://placehold.co/800x600/f8f8f8/333?text=菜單照片_1'],
        shopPhotos: ['https://placehold.co/600x400/e0e0e0/333?text=店面照片_1'],
        dessertPhotos: ['https://placehold.co/600x400/c9e265/333?text=點心照片_1', 'https://placehold.co/600x400/c9e265/333?text=點心照片_2'],
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0069399434857!2d121.56475871490218!3d25.03357598396556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac6b610c149d%3A0x7d6b412b1897e7b0!2sTaipei%20101!5e0!3m2!1sen!2stw!4v1628162235941!5m2!1sen!2stw',
        stores: [],
        purchaseChannels: [],
        deliveryFee: {},
        activities: [],
      },
      {
        id: 4,
        name: '貓咪咖啡廳',
        type: '蛋糕',
        location: '台北市',
        flavors: ['檸檬'],
        purchaseOptions: ['店面內用'],
        features: ['有貓', '寵物友善', '有插座'],
        description: '與可愛貓咪們一起享用甜點，療癒身心。',
        imageUrl: 'https://placehold.co/600x400/e0e0e0/333?text=貓咪咖啡',
        website: 'https://example.com/cat-cafe',
        map: 'https://maps.google.com/?q=台北市大安區',
        fb: 'https://facebook.com/cat-cafe',
        ig: 'https://instagram.com/cat-cafe',
        line: 'https://line.me/',
        order: 'https://example.com/cat-cafe/order',
        threads: 'https://threads.net/cat-cafe',
        opening: '2018/03',
        menuPhotos: ['https://placehold.co/800x600/f8f8f8/333?text=菜單照片_1'],
        shopPhotos: ['https://placehold.co/600x400/e0e0e0/333?text=店面照片_1'],
        dessertPhotos: ['https://placehold.co/600x400/e0e0e0/333?text=點心照片_1'],
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0069399434857!2d121.56475871490218!3d25.03357598396556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac6b610c149d%3A0x7d6b412b1897e7b0!2sTaipei%20101!5e0!3m2!1sen!2stw!4v1628162235941!5m2!1sen!2stw',
        stores: [],
        purchaseChannels: [],
        deliveryFee: {},
        activities: [],
      },
      {
        id: 5,
        name: '法式馬卡龍',
        type: '西式甜點',
        location: '台北市',
        flavors: ['開心果', '玫瑰'],
        purchaseOptions: ['店面外帶'],
        features: [],
        description: '色彩繽紛的法式馬卡龍，外酥內軟。',
        imageUrl: 'https://placehold.co/600x400/f8b195/333?text=馬卡龍',
        website: 'https://example.com/macaron',
        map: 'https://maps.google.com/?q=台北市信義區',
        fb: 'https://facebook.com/macaron-shop',
        ig: 'https://instagram.com/macaron-shop',
        line: 'https://line.me/',
        order: 'https://example.com/macaron/order',
        threads: 'https://threads.net/macaron-shop',
        opening: '2021/08',
        menuPhotos: ['https://placehold.co/800x600/f8f8f8/333?text=菜單照片_1'],
        shopPhotos: [],
        dessertPhotos: ['https://placehold.co/600x400/f8b195/333?text=點心照片_1'],
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0069399434857!2d121.56475871490218!3d25.03357598396556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac6b610c149d%3A0x7d6b412b1897e7b0!2sTaipei%20101!5e0!3m2!1sen!2stw!4v1628162235941!5m2!1sen!2stw',
        stores: [],
        purchaseChannels: [],
        deliveryFee: {},
        activities: [],
      },
      {
        id: 6,
        name: '甜點實驗室',
        type: '綜合',
        location: '台北市',
        flavors: ['開心果', '抹茶', '巧克力'],
        purchaseOptions: ['店面內用'],
        features: ['有插座'],
        description: '獨特創意的甜點實驗室，每次都有新驚喜。',
        imageUrl: 'https://placehold.co/600x400/d4b4e3/333?text=甜點',
        website: 'https://example.com/dessert-lab',
        map: 'https://maps.google.com/?q=台北市中正區',
        fb: 'https://facebook.com/dessert-lab',
        ig: 'https://instagram.com/dessert-lab',
        line: 'https://line.me/',
        order: 'https://example.com/dessert-lab/order',
        threads: 'https://threads.net/dessert-lab',
        opening: '2022/03',
        menuPhotos: [],
        shopPhotos: ['https://placehold.co/600x400/e0e0e0/333?text=店面照片'],
        dessertPhotos: ['https://placehold.co/600x400/d4b4e3/333?text=點心照片_1', 'https://placehold.co/600x400/d4b4e3/333?text=點心照片_2'],
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0069399434857!2d121.56475871490218!3d25.03357598396556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac6b610c149d%3A0x7d6b412b1897e7b0!2sTaipei%20101!5e0!3m2!1sen!2stw!4v1628162235941!5m2!1sen!2stw',
        stores: ['統一超商', '全家'],
        purchaseChannels: ['蝦皮'],
        deliveryFee: { normal: 60, cold: 180 },
        activities: ['#06/01 歡慶開幕，全品項8折'],
      },
      {
        id: 7,
        name: '達克瓦茲專賣店',
        type: '達克瓦茲',
        location: '新北市',
        flavors: ['開心果', '抹茶'],
        purchaseOptions: ['店面外帶', '宅配'],
        features: ['寵物友善'],
        description: '專注於達克瓦茲的完美口感，多種口味一次滿足。',
        imageUrl: 'https://placehold.co/600x400/f3d9d9/333?text=達克瓦茲',
        website: 'https://example.com/dacquoise',
        map: 'https://maps.google.com/?q=新北市板橋區',
        fb: 'https://facebook.com/dacquoise-shop',
        ig: 'https://instagram.com/dacquoise-shop',
        line: 'https://line.me/',
        order: 'https://example.com/dacquoise/order',
        threads: 'https://threads.net/dacquoise-shop',
        opening: '2023/01',
        menuPhotos: ['https://placehold.co/800x600/f8f8f8/333?text=菜單照片_1'],
        shopPhotos: ['https://placehold.co/600x400/e0e0e0/333?text=店面照片_1'],
        dessertPhotos: ['https://placehold.co/600x400/f3d9d9/333?text=點心照片_1', 'https://placehold.co/600x400/f3d9d9/333?text=點心照片_2'],
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0069399434857!2d121.56475871490218!3d25.03357598396556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac6b610c149d%3A0x7d6b412b1897e7b0!2sTaipei%20101!5e0!3m2!1sen!2stw!4v1628162235941!5m2!1sen!2stw',
        stores: [],
        purchaseChannels: ['蝦皮', 'Pinkoi'],
        deliveryFee: { cold: 180 },
        activities: [],
      },
      {
        id: 8,
        name: '草莓狂想曲',
        type: '蛋糕',
        location: '台北市',
        flavors: ['草莓', '香草'],
        purchaseOptions: ['店面內用', '宅配'],
        features: ['有插座'],
        description: '只賣草莓相關甜點，草莓控的天堂。',
        imageUrl: 'https://placehold.co/600x400/f8d9d9/333?text=草莓',
        website: 'https://example.com/strawberry-fever',
        map: 'https://maps.google.com/?q=台北市大安區',
        fb: 'https://facebook.com/strawberry-fever',
        ig: 'https://instagram.com/strawberry-fever',
        line: 'https://line.me/',
        order: 'https://example.com/strawberry-fever/order',
        threads: 'https://threads.net/strawberry-fever',
        opening: '2020/12',
        menuPhotos: ['https://placehold.co/800x600/f8f8f8/333?text=菜單照片_1'],
        shopPhotos: [],
        dessertPhotos: ['https://placehold.co/600x400/f8d9d9/333?text=點心照片_1'],
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0069399434857!2d121.56475871490218!3d25.03357598396556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac6b610c149d%3A0x7d6b412b1897e7b0!2sTaipei%20101!5e0!3m2!1sen!2stw!4v1628162235941!5m2!1sen!2stw',
        stores: ['統一超商'],
        purchaseChannels: ['Pinkoi'],
        deliveryFee: { cold: 200 },
        activities: ['#07/15 夏日草莓祭，全品項9折'],
      },
      {
        id: 9,
        name: '古早味綜合',
        type: '綜合',
        location: '台中市',
        flavors: ['紅豆', '芋頭'],
        purchaseOptions: ['店面內用', '店面外帶'],
        features: ['有插座'],
        description: '傳承古早味，帶你回到童年時光。',
        imageUrl: 'https://placehold.co/600x400/d6c8b9/333?text=古早味',
        website: 'https://example.com/old-flavor',
        map: 'https://maps.google.com/?q=台中市西屯區',
        fb: 'https://facebook.com/old-flavor',
        ig: 'https://instagram.com/old-flavor',
        line: 'https://line.me/',
        order: 'https://example.com/old-flavor/order',
        threads: 'https://threads.net/old-flavor',
        opening: '2017/01',
        menuPhotos: [],
        shopPhotos: ['https://placehold.co/600x400/e0e0e0/333?text=店面照片_1'],
        dessertPhotos: ['https://placehold.co/600x400/d6c8b9/333?text=點心照片_1', 'https://placehold.co/600x400/d6c8b9/333?text=點心照片_2'],
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0069399434857!2d121.56475871490218!3d25.03357598396556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac6b610c149d%3A0x7d6b412b1897e7b0!2sTaipei%20101!5e0!3m2!1sen!2stw!4v1628162235941!5m2!1sen!2stw',
            stores: [],
            purchaseChannels: [],
            deliveryFee: {},
            activities: [],
          },
        ];
    
        // 所有可用的篩選選項
        const ALL_LOCATIONS = ['台北市', '新北市', '台中市', '高雄市'];
        const ALL_TYPES = ['蛋糕', '冰淇淋', '日式甜點', '西式甜點', '達克瓦茲', '綜合'];
        const ALL_FLAVORS = ['開心果', '抹茶', '巧克力', '草莓', '檸檬', '香草', '玫瑰', '紅豆', '芋頭'];
        const ALL_PURCHASE_OPTIONS = ['店面內用', '店面外帶', '宅配'];
        const ALL_FEATURES = ['有貓', '有狗', '寵物友善', '有插座'];
        const ALL_STORES = ['好食多', '好市多', '全聯', '統一超商'];
        const ALL_PURCHASE_CHANNELS = ['全家', '7-11', '蝦皮', 'Pinkoi'];
    
        const PRIMARY_COLOR = '#9B7EBD';
        const SECONDARY_COLOR = '#F49BAB';
    
        // 照片輪播元件
        const ImageCarousel = ({ photos }) => {
          const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    
          if (!photos || photos.length === 0) return null;
    
          const nextPhoto = () => {
            setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
          };
    
          const prevPhoto = () => {
            setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
          };
    
          return (
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
              <img
                src={photos[currentPhotoIndex]}
                alt="輪播照片"
                className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
              />
              {photos.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          );
        };
        
        const App = () => {
          const [searchTerm, setSearchTerm] = useState('');
          const [selectedLocations, setSelectedLocations] = useState([]);
          const [selectedFlavors, setSelectedFlavors] = useState([]);
          const [selectedTypes, setSelectedTypes] = useState([]);
          const [selectedPurchaseOptions, setSelectedPurchaseOptions] = useState([]);
          const [selectedFeatures, setSelectedFeatures] = useState([]);
          const [allShops, setAllShops] = useState(DESSERT_SHOPS);
          const [filteredShops, setFilteredShops] = useState(DESSERT_SHOPS);
          const [selectedShop, setSelectedShop] = useState(null);
          
          // 分頁狀態
          const [currentPage, setCurrentPage] = useState(1);
          const shopsPerPage = 6;
          const indexOfLastShop = currentPage * shopsPerPage;
          const indexOfFirstShop = indexOfLastShop - shopsPerPage;
          const currentShops = filteredShops.slice(indexOfFirstShop, indexOfLastShop);
          const totalPages = Math.ceil(filteredShops.length / shopsPerPage);
    
          useEffect(() => {
            const results = DESSERT_SHOPS.filter(shop => {
              const matchesSearch = shop.name.toLowerCase().includes(searchTerm.toLowerCase());
              const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(shop.location);
              const matchesFlavors = selectedFlavors.length === 0 || selectedFlavors.some(flavor => shop.flavors.includes(flavor));
              const matchesTypes = selectedTypes.length === 0 || selectedTypes.includes(shop.type);
              const matchesPurchase = selectedPurchaseOptions.length === 0 || selectedPurchaseOptions.some(option => shop.purchaseOptions.includes(option));
              const matchesFeatures = selectedFeatures.length === 0 || selectedFeatures.some(feature => shop.features.includes(feature));
    
              return matchesSearch && matchesLocation && matchesFlavors && matchesTypes && matchesPurchase && matchesFeatures;
            });
            setFilteredShops(results);
            setCurrentPage(1); // 篩選後回到第一頁
          }, [searchTerm, selectedLocations, selectedFlavors, selectedTypes, selectedPurchaseOptions, selectedFeatures]);
    
          const handleFilterClick = (filterState, setFilterState, value) => {
            if (filterState.includes(value)) {
              setFilterState(filterState.filter(item => item !== value));
            } else {
              setFilterState([...filterState, value]);
            }
          };
    
          const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
          const FilterButton = ({ value, filterState, setFilterState }) => (
            <button
              onClick={() => handleFilterClick(filterState, setFilterState, value)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
              `}
              style={{
                backgroundColor: filterState.includes(value) ? SECONDARY_COLOR : 'white',
                color: filterState.includes(value) ? 'white' : PRIMARY_COLOR,
                borderColor: PRIMARY_COLOR,
                borderWidth: '1px',
                borderStyle: 'solid',
              }}
            >
              {value}
            </button>
          );
    
          const ShopDetailsModal = ({ shop, onClose }) => {
            if (!shop) return null;
    
            const socialLinks = [
              { name: '官網', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-2h-2v2zm0-4h2V7h-2v6z"/>
                </svg>
              ), url: shop.website },
              { name: '訂購', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              ), url: shop.order },
              { name: 'LINE', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14H8v-2h5v2zm3-4H8V9h8v3z"/>
                </svg>
              ), url: shop.line },
              { name: 'FB', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2v-2.5c0-2.25 1.76-4.25 4-4.25 1.05 0 2.2.2 2.2.2v2.4h-1.24c-1.28 0-1.63.8-1.63 1.57V12h2.81l-.45 3h-2.36v6.8A10 10 0 0022 12z"/>
                </svg>
              ), url: shop.fb },
              { name: 'IG', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              ), url: shop.ig },
              { name: 'Threads', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-2h-2v2zm0-4h2V7h-2v6z"/>
                </svg>
              ), url: shop.threads},
            ];
    
            const TagSection = ({ title, items, color }) => {
              if (!items || items.length === 0) return null;
              return (
                <div className="flex flex-col mb-4">
                  <h5 className="text-sm text-gray-500 mb-1">{title}</h5>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, index) => (
                      <span key={index} className="text-sm font-semibold px-2.5 py-0.5 rounded-full" style={{ backgroundColor: `${color}20`, color: color }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            };
    
            const DeliveryFeeSection = ({ deliveryFee }) => {
              if (!deliveryFee || Object.keys(deliveryFee).length === 0) return null;
              return (
                <div className="flex flex-col mb-4">
                  <h5 className="text-sm text-gray-500 mb-1">運費類型</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {deliveryFee.normal && (
                      <div className="bg-white p-2 rounded-lg border border-gray-300">
                        <p className="text-sm text-gray-700 font-medium">常溫運送</p>
                        <p className="text-xs text-gray-500 mt-1">滿 {deliveryFee.normal} 元免運</p>
                      </div>
                    )}
                    {deliveryFee.cold && (
                      <div className="bg-white p-2 rounded-lg border border-gray-300">
                        <p className="text-sm text-gray-700 font-medium">冷藏/冷凍運送</p>
                        <p className="text-xs text-gray-500 mt-1">滿 {deliveryFee.cold} 元免運</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            };
    
            const ActivitiesSection = ({ activities }) => {
              if (!activities || activities.length === 0) return null;
              return (
                <div className="flex flex-col mb-4">
                  <h5 className="text-sm text-gray-500 mb-1">活動</h5>
                  <div className="flex flex-wrap gap-2">
                    {activities.map((activity, index) => (
                      <span key={index} className="text-sm font-semibold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              );
            };
          
            return (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative p-6">
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
          
                  <img
                    src={shop.imageUrl}
                    alt={`${shop.name} 的甜點縮圖`}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{shop.name}</h3>
                  
                  <div className="mt-4">
                    <TagSection title="地點" items={[shop.location]} color={PRIMARY_COLOR} />
                    <TagSection title="賣場" items={shop.purchaseChannels} color={SECONDARY_COLOR} />
                    <TagSection title="類型" items={[shop.type]} color={PRIMARY_COLOR} />
                    <TagSection title="口味" items={shop.flavors} color={SECONDARY_COLOR} />
                    <DeliveryFeeSection deliveryFee={shop.deliveryFee} />
                    <ActivitiesSection activities={shop.activities} />
                  </div>
    
                  <p className="text-gray-700 mb-6 mt-4">{shop.description}</p>
          
                  <h4 className="text-xl font-bold text-gray-700 mb-3">店家詳細</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {socialLinks.map(link => (
                      link.url && link.url !== '#' && (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center p-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-[#F49BAB] hover:text-white transition-colors duration-200"
                        >
                          {link.icon}
                          <span className="ml-2 font-medium">{link.name}</span>
                        </a>
                      )
                    ))}
                  </div>
    
                  <div className="mt-8">
                    <h4 className="text-xl font-bold text-gray-700 mb-3">店面照片</h4>
                    {shop.shopPhotos && shop.shopPhotos.length > 0 ? (
                        <ImageCarousel photos={shop.shopPhotos} />
                    ) : (
                        <p className="text-gray-500 text-sm">無相關照片</p>
                    )}
                  </div>
    
                  <div className="mt-8">
                    <h4 className="text-xl font-bold text-gray-700 mb-3">菜單照片</h4>
                    {shop.menuPhotos && shop.menuPhotos.length > 0 ? (
                        <ImageCarousel photos={shop.menuPhotos} />
                    ) : (
                        <p className="text-gray-500 text-sm">無相關照片</p>
                    )}
                  </div>
    
                  <div className="mt-8">
                    <h4 className="text-xl font-bold text-gray-700 mb-3">點心照片</h4>
                    {shop.dessertPhotos && shop.dessertPhotos.length > 0 ? (
                        <ImageCarousel photos={shop.dessertPhotos} />
                    ) : (
                        <p className="text-gray-500 text-sm">無相關照片</p>
                    )}
                  </div>
    
                  {shop.mapEmbedUrl && (
                    <div className="mt-8">
                      <h4 className="text-xl font-bold text-gray-700 mb-3">地圖</h4>
                      <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
                        <iframe
                          src={shop.mapEmbedUrl}
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          className="absolute inset-0 w-full h-full"
                        ></iframe>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          };
    
          const ShopCard = ({ shop, onClick }) => {
            const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    
            // 每3秒輪播一次圖片
            useEffect(() => {
              const interval = setInterval(() => {
                if (shop.dessertPhotos && shop.dessertPhotos.length > 0) {
                  setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % shop.dessertPhotos.length);
                }
              }, 3000);
              return () => clearInterval(interval);
            }, [shop.dessertPhotos]);
          
            // 檢查是否有足夠的圖片進行輪播
            const displayImage = shop.dessertPhotos && shop.dessertPhotos.length > 0
              ? shop.dessertPhotos[currentPhotoIndex]
              : shop.imageUrl;
          
            return (
              <div
                onClick={() => onClick(shop)}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer"
              >
                <img
                  src={displayImage}
                  alt={`${shop.name} 的甜點縮圖`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {shop.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">
                    {shop.location} • {shop.type}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                      {shop.flavors.map(flavor => (
                          <span key={flavor} className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}>
                              口味：{flavor}
                          </span>
                      ))}
                      {shop.purchaseOptions.map(option => (
                          <span key={option} className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ backgroundColor: `${SECONDARY_COLOR}20`, color: SECONDARY_COLOR }}>
                              {option}
                          </span>
                      ))}
                      {shop.features.map(feature => (
                          <span key={feature} className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                              {feature}
                          </span>
                      ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {shop.description}
                  </p>
                </div>
              </div>
            );
          };
    
          return (
            <div className="bg-[#FFFFFF] min-h-screen font-sans p-6 md:p-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#9B7EBD] mb-2">
                網友甜點地圖
              </h1>
              <p className="text-center text-gray-600 mb-8 md:mb-12">
                網羅脆與IG上的人氣甜點店
              </p>
    
              <div className="max-w-6xl mx-auto mb-8">
                <input
                  type="text"
                  placeholder="搜尋店家名稱..."
                  className="w-full p-4 rounded-lg border border-[#9B7EBD] shadow-md focus:ring-2 focus:ring-[#F49BAB] focus:border-[#F49BAB] transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                
                {/* 電腦端一行三區塊的篩選器佈局 */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* 區塊 1: 地點與種類 */}
                  <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-bold text-gray-700">地點</h4>
                    <div className="flex flex-wrap gap-2">
                      {ALL_LOCATIONS.map(location => (
                        <FilterButton
                          key={location}
                          value={location}
                          filterState={selectedLocations}
                          setFilterState={setSelectedLocations}
                        />
                      ))}
                    </div>
                    <h4 className="text-xl font-bold text-gray-700 mt-4">種類</h4>
                    <div className="flex flex-wrap gap-2">
                      {ALL_TYPES.map(type => (
                        <FilterButton
                          key={type}
                          value={type}
                          filterState={selectedTypes}
                          setFilterState={setSelectedTypes}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* 區塊 2: 口味與購買方式 */}
                  <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-bold text-gray-700">口味</h4>
                    <div className="flex flex-wrap gap-2">
                      {ALL_FLAVORS.map(flavor => (
                        <FilterButton
                          key={flavor}
                          value={flavor}
                          filterState={selectedFlavors}
                          setFilterState={setSelectedFlavors}
                        />
                      ))}
                    </div>
                    <h4 className="text-xl font-bold text-gray-700 mt-4">購買方式</h4>
                    <div className="flex flex-wrap gap-2">
                      {ALL_PURCHASE_OPTIONS.map(option => (
                        <FilterButton
                          key={option}
                          value={option}
                          filterState={selectedPurchaseOptions}
                          setFilterState={setSelectedPurchaseOptions}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* 區塊 3: 特色 */}
                  <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-bold text-gray-700">特色</h4>
                    <div className="flex flex-wrap gap-2">
                      {ALL_FEATURES.map(feature => (
                        <FilterButton
                          key={feature}
                          value={feature}
                          filterState={selectedFeatures}
                          setFilterState={setSelectedFeatures}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentShops.length > 0 ? (
                  currentShops.map(shop => (
                    <ShopCard
                      key={shop.id}
                      shop={shop}
                      onClick={setSelectedShop}
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center py-10">
                    <p className="text-gray-500 text-xl">找不到符合條件的甜點店。</p>
                  </div>
                )}
              </div>
    
              {totalPages > 1 && (
                <div className="flex justify-center mt-8 gap-2">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => paginate(i + 1)}
                      className={`
                        px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
                        ${currentPage === i + 1
                          ? 'bg-purple-500 text-white shadow-lg scale-105'
                          : 'bg-white text-purple-600 border border-purple-300 hover:bg-purple-100 hover:scale-105'
                        }
                      `}
                      style={{
                        backgroundColor: currentPage === i + 1 ? PRIMARY_COLOR : 'white',
                        color: currentPage === i + 1 ? 'white' : PRIMARY_COLOR,
                        borderColor: PRIMARY_COLOR,
                        borderWidth: '1px',
                        borderStyle: 'solid',
                      }}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              )}
    
              {/* 店家詳細資訊彈窗 */}
              <ShopDetailsModal shop={selectedShop} onClose={() => setSelectedShop(null)} />
            </div>
          );
        };
        
        export default App;
        
