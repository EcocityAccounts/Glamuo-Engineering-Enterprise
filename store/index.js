import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      cartTotal: 0,
      cart: {},
      sale: false,
      products: [
        {
          name: 'Arugula (1 lb.)',
          price: 3.99,
          category: 'produce',
          supermarket: true,
          article: 'shoe',
          img: 'arugula.jpg',
          producer: 'greg'
        },
        {
          name: 'Beets (2 lb.)',
          price: 2.99,
          category: 'produce',
          supermarket: false,
          article: 'staples',
          img: 'beetroot-1.jpg',
          producer: 'greg'
        },
        {
          name: 'Kale (1 lb.)',
          price: 2.99,
          category: 'produce',
          supermarket: true,
          article: 'greens',
          img: 'kale.jpg'
        },
        {
          name: 'Piglets',
          price: 90.00,
          category: 'farm',
          supermarket: true,
          article: 'animals',
          img: 'piglets.jpg'
        },
        {
          name: 'Swiss Chard (1 lb.)',
          price: 2.99,
          category: 'staples',
          supermarket: true,
          article: 'hats',
          img: 'chard.jpg'
        },
        {
          name: 'Plums (2 lb. basket)',
          price: 2.99,
          category: 'produce',
          supermarket: false,
          article: 'fruit',
          img: 'plums.jpg'
        },
        {
          name: 'Strawberries (1 lb. basket)',
          price: 29.99,
          category: 'produce',
          supermarket: false,
          article: 'fruit',
          img: 'strawberries.jpg'
        },
        {
          name: 'Peaches (1 lb. basket)',
          price: 2.99,
          category: 'produce',
          supermarket: false,
          article: 'fruit',
          img: 'peaches.jpg'
        },
        {
          name: 'Collard Greens (1 lb.)',
          price: 1.99,
          category: 'produce',
          supermarket: false,
          article: 'greens',
          img: 'collardgreens.jpg'
        },
        {
          name: 'Mizuna Mustard Greens (1 lb.)',
          price: 1.99,
          category: 'staples',
          supermarket: false,
          article: 'greens',
          img: 'mizuna.png',
          source: '274 Organics',
          desc: 'these greens are delicate and delicious, grown at 8400 foot elevation'
        },
        {
          name: 'Basil ( 1 oz.)',
          price: 3.99,
          category: 'produce',
          supermarket: true,
          article: 'greens',
          img: 'basil.jpg'
        },
        {
          name: 'Lettuce ( ~1 lb head.)',
          price: 1.79,
          category: 'produce',
          supermarket: false,
          article: 'greens',
          img: 'lettuce.jpg'
        },
        {
          name: 'Fresh Rosemary Herbs ( 0.5 oz)',
          price: 2.99,
          category: 'herbs',
          supermarket: false,
          article: 'herbs',
          img: 'rosemary.jpg'
        },
        {
          name: 'Snow Peas ( 1 lb.)',
          price: 4.99,
          category: 'staples',
          supermarket: true,
          article: 'jacket',
          img: 'snowpeas.jpg'
        }
      ],
      farmers: [
        {
          name: 'Woody',
          business: 'Magnolia Grown Meats',
          region: 'Colorado Front Range' ,
          farming_style: 'meat production',
          address: '',
          email: '',
          phone: '',
          insta: 'magnoliagrownbeef',
          liason: 'geog',
          seasonal_orders_avail: 'geoghub'
        }
      ],
      selling_style: [
        {
          name: 'Woody',
          business: 'Magnolia Grown Meats',
          region: 'Colorado Front Range' ,
          farming_style: 'meat production',
          address: '',
          email: '',
          phone: '',
          insta: 'magnoliagrownbeef',
          liason: 'geog',
          seasonal_orders_avail: 'geoghub'
        }
      ],
      customer: [
        {
          name: 'Geog',
          business: 'SCD Hub',
          region: 'Colorado Front Range' ,
          farming_style: 'medicinals,herbs,seeds,',
          address: '274 W. Spring St, Nederland, CO 80466',
          email: 'greg@scdhub.org',
          phone: '303 720 6790',
          insta: 'ecocitylearningportal',
          faceyboo: 'ecocity',
          liason: 'reid',
          driver: 'reid',
          seasonal_orders_avail: 'geoghub'
        }
      ],
      orders: [
        {
          orderID: '0000001',
          region: 'Colorado Front Range' ,
          farming_style: 'medicinals,herbs,seeds,',
          address: '274 W. Spring St, Nederland, CO 80466',
          email: 'greg@scdhub.org',
          phone: '303 720 6790',
          insta: 'ecocitylearningportal',
          faceyboo: 'ecocity',
          liason: 'reid',
          driver: 'reid',
          seasonal_orders_avail: 'geoghub'
        }
      ],
      order_items: [
        {
          itemID: '0000001',
          orderID: '0000001',
          name: 'perch',
          source: '420 Anglers',
          amount: '2 lb',
          price: '$4'
        },
        {
          itemID: '0000002',
          orderID: '0000001',
          name: 'beef prime cut',
          source: 'Woody',
          amount: '3 lb',
          price: '$45'
        }
      ]
    },
    getters: {
      produce: state => filter(state.products, 'category', 'produce'),
      herbs: state => filter(state.products, 'category', 'herbs'),
      medicinals: state => filter(state.products, 'category', 'medicinals'),
      meats: state => filter(state.products, 'category', 'meats'),
      farm: state => filter(state.products, 'category', 'farm'),
      staples: state => filter(state.products, 'category', 'staples'),
      sale: state => filter(state.products, 'sale', true)
    },
    mutations: {
      switchSale: state => {
        state.sale = !state.sale;
      },
      clearCartCount: state => {
        state.cartTotal = 0;
      },
      clearCartContents: state => {
        state.cart = {};
      },
      addItem: (state, item) => {
        state.cartTotal++;
        if (item.name in state.cart) {
          state.cart[item.name].count++;
        } else {
          let stateItem = Object.assign({}, item);
          stateItem.count = 1;
          state.cart[item.name] = stateItem;
        }
      }
    }
  });
};

export default createStore;

//helper
const filter = (array, key, value) => array.filter(item => item[key] === value);
