module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'shop',
    script: [{ src: 'https://js.stripe.com/v3/' }],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tiny Food is a project of Sustainabe Community Development Hub. It free software deisgned with flexibility to allow for adaptive use in various community development contexts' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Barlow:400,600|Playfair+Display:700'
      }
    ]
  },
  css: ['~/assets/main.css'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3e64ea' }
};
