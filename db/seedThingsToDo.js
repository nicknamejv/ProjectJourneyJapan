const { ThingsToDo } = require('../models');

ThingsToDo.deleteMany({}, (error, deletedThingsToDo) => {
    if (error) {
        return console.log(error);
    }
    ThingsToDo.insertMany(
        [
            {
                title: 'Ichiran Ramen',
                description: "A chain restaurant that specializes in tonkotsu ramen. If you ever had any craving for ramen this is usually the holy grail. Ichiran is known for its solo dining experience both in Japan and recently in the United States as well.",
                category: 'Food',
                city: '613a90099ea08c7c6021e5df',
                image: 'https://prods3.imgix.net/images/articles/2016_10/Non-Feature-Tonkotsu-Ramen-Ichiran-Opens-Brooklyn.jpg?auto=format%2Ccompress&ixjsv=2.2.3&w=750',
            },

            {
                title: 'Gyukatsu Motomura',
                description: "Ever wanted to stone grill beef cutlet? Gyukatsu Motomura is that place everything is set up for you to sit down and enjoy your meal at your pace. With the incorporation of a special sauce called yamawasabi and rock salt your taste buds will understand why you need to come here",
                category: 'Food',
                city: '613a90099ea08c7c6021e5df',
                image: 'https://favy-inbound-singapore.s3.amazonaws.com/uploads/topic_item/image/18741/retina_rs_037.jpg',
            },

            {
                title: '7/11',
                description: "Believe it or not going to any 7/11 in Japan is a whole different experience compared to anywhere else around the world. Not only does 7/11 have budget friendly food it also does not sacrifice taste. After a long day of exploring the city you can just jump to any 7/11 grab a drink and a quick meal.",
                category: 'Food',
                city: '613a90099ea08c7c6021e5df',
                image: 'https://cdn-japantimes.com/wp-content/uploads/2019/10/b-711-a-20191011.jpg',
            },

            {
                title: 'Sensō-ji Temple',
                description: "It's not a surprise that Tokyo has numerous shrines scattered all over the place. Sensō-ji Temple is the city's most famous shrine and to get there you need to past through multiple street vendors selling an assortment of items from masks to kimonos. One you see a giant red paper lantern you'll know you're there.",
                category: 'Attraction',
                city: '613a90099ea08c7c6021e5df',
                image: 'https://images.unsplash.com/photo-1521734952068-852cfb00d46f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            },

            {
                title: 'Tokyo DisneySea',
                description: "For all you Disney lovers this is an experience you will not forget. Between Tokyo DisneySea and Tokyo Disneyland many have dubbed DisneySea as the better of the two. With the whole sea theme going on you will see Mediterranean Harbor leading you to Mount Prometheus towering the distance. If you had a choice to pick Tokyo DisneySea will not disappoint!",
                category: 'Attraction',
                city: '613a90099ea08c7c6021e5df',
                image: 'https://imgcp.aacdn.jp/img-a/1720/auto/global-aaj-front/article/2016/08/57af0f933ed63_57af0c1dd6cc1_104386731.jpg',
            },

            {
                title: 'Unicorn Gundam',
                description: "Ever wanted to see a full-scale statue of an RX-0 Unicorn Gundam? Head over to Odaiba in Tokyo and be in awe when you see a real life Gundam. Not only does this statue function like a real Gundam, at certain times of the day you will be presented a show in which the Unicorn Gundam will transform to the anime's theme song.",
                category: 'Attraction',
                city: '613a90099ea08c7c6021e5df',
                image: 'https://images.unsplash.com/photo-1562461089-907f104c2b9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
            },

            {
                title: 'Kichi Kichi Omurice',
                description: "Located in the heart of Kyoto is a small alley restaurant known for omurice. Kichi Kichi Omurice is a place many come to eat but stay because of Chef Motokichi Yukimura. Between the eccentric energy he brings while cooking a unique omurice right in front of you this place will be anything but disappointing.",
                category: 'Food',
                city: '613a90099ea08c7c6021e5db',
                image: 'https://i1.wp.com/farm1.staticflickr.com/756/22617443807_63feb3004f_c.jpg?w=1440&ssl=1',
            },

            {
                title: 'Pontocho Yakiniku Yamakawa Honten',
                description: "If you ever sought after Kobe beef but couldn't make it all the way to Kobe this stop is the next best thing. With a platter of carefully selected Kobe and Japanese black wagyu beef the mouth experience you experience here will haunt you until you come back for more.",
                category: 'Food',
                city: '613a90099ea08c7c6021e5db',
                image: 'https://media.sharing-kyoto.com/articles/z17nQ4CHREHxPiJa1GXfdKvGY9SbjdOq9IL7Y1Db.jpeg',
            },

            {
                title: 'Brasserie AG',
                description: "Japanese curry with inspirations from Indian curry that you can taste! Located inside the Kyoto Kawaramachi Garden Food Hall this spot is easily missed because it is not a main stream eatery like many of the places around Kyoto but if you happen to have free time definitely check it out!",
                category: 'Food',
                city: '613a90099ea08c7c6021e5db',
                image: 'https://suggestionofmotion.com/wp-content/uploads/JPN_Kyoto_Katsu-Curry_008_Katsu-Curry-693x519.jpg',
            },

            {
                title: 'Fushimi Inari Shrine',
                description: "Ever seen red torii gates on the internet before? Well this is probably the origin of that picture. Known for its 10,000 torii gates the Fushimi Inari Shrine is a popular travel destination for all walks of life. Better go early to beat the crowd otherwise this place gets packed!",
                category: 'Attraction',
                city: '613a90099ea08c7c6021e5db',
                image: 'https://images.unsplash.com/photo-1554614380-5436e923716d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
            },

            {
                title: 'Hōkan-ji Temple ',
                description: "The Hōkan-ji Temple also known as Yasaka Pagoda is a popular tourist destination located in Kyoto. To get here you will find the best-preserved streets in Kyoto filled with wooden houses and narrow walk ways. These stone pathways are usually filled with photographers trying to snag a picture of the Yasaka Pagoda or women wearing kimonos.",
                category: 'Attraction',
                city: '613a90099ea08c7c6021e5db',
                image: 'https://images.unsplash.com/photo-1553947633-9021da48f410?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            },

            {
                title: 'Arashiyama Bamboo Grove',
                description: "After hopping on the San-In line at Kyoto Station these pathways of bamboo will transport you to another world. Just like many beautiful and picturesque places around Japan this is another popular spot in Kyoto. Filled with hundreds of bamboo trees if you stay long enough you might end up becoming a panda.",
                category: 'Attraction',
                city: '613a90099ea08c7c6021e5db',
                image: 'https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
            },

            {
                title: 'Dōtonbori',
                description: "So you are in Osaka and you're hungry where do you go? Dōtonbori is the answer to that question. If you google Osaka this is probably one of the places recommended for you to go. With its eccentric atmosphere and entertainment around each corner this street will be everything but boring. Filled with neon signs and giant seafood sculptors this narrow and busy street is a mecha for food stalls and restaurants. You can literally not go anywhere without finding some kind of food you want to try.",
                category: 'Food',
                city: '613a90099ea08c7c6021e5dd',
                image: 'https://images.unsplash.com/photo-1590495620659-162d9966d7ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            },

            {
                title: 'Kogaryu Takoyaki',
                description: 'This place specializes in takoyaki or also known as "octopus balls". Takoyaki is basically a ball-shaped Japanese snack comprised of a wheat flour-based batter, diced octopus, pickled ginger, and green onion. Topped with Japanese mayo and dried bonito this will have your mouth watering as you wait for it to cool down!',
                category: 'Food',
                city: '613a90099ea08c7c6021e5dd',
                image: 'https://images.unsplash.com/photo-1569740392698-59e8ce4f47cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
            },

            {
                title: 'Torikizoku Dotombori',
                description: "If you love BBQ on a stick then this is the spot to go. Their specialty is Yakitori which is grilled skewered chicken. Along with chicken they offer an assortment of food such as shrimp to even sausages. So just know if you ever find yourself craving something grilled over hot charcoal then this should be the first thing in your mind.",
                category: 'Food',
                city: '613a90099ea08c7c6021e5dd',
                image: 'https://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/034/440/original/grilled-chicken-yakitori-japan.jpg?2020&d=750x400',
            },

            {
                title: 'Momofuku Ando Instant Ramen Museum',
                description: "If you ever asked your self is instant ramen life and you said yes then this is the place for you. The Momofuku Ando Instant Ramen Museum is a museum all about instant cup ramen you know those little styrofoam cups that you pour hot water in and wait three minutes. Not only can you try these instant ramen you can also create a original CUPNOODLES package unique to you.",
                category: 'Attraction',
                city: '613a90099ea08c7c6021e5dd',
                image: 'https://images.unsplash.com/photo-1559531717-8fdbe29ae8b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1491&q=80',
            },

            {
                title: 'Osaka Castle',
                description: "It doesn't come as a surprise a castle would bring in interested travelers and when you get to Osaka the Osaka Castle also known as Osakajo is one you should not miss. Sitting on a hill this castle is a great place to come to and relax. During Japan's ever popular cherry blossom season the Osaka Castle Park is filled with crowds taking in the blooming trees and slower pace to life that it brings.",
                category: 'Attraction',
                city: '613a90099ea08c7c6021e5dd',
                image: 'https://images.unsplash.com/photo-1577134656587-90f0bd31ec5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
            },

            {
                title: 'Universal Studios Japan',
                description: "This may just be another Universal Studios like the one in the United States the main difference is the Japanese twist incorporated into this park. With the inclusion of Hogwarts and all the usual Universal Studios rides and attractions you see the one thing recently added is Super Nintendo World! Live out your life as you jump into a tunnel and get transported into the world of Super Mario.",
                category: 'Attraction',
                city: '613a90099ea08c7c6021e5dd',
                image: 'https://images.unsplash.com/photo-1612404819070-77c6da472e68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            },

            {
                title: 'Yamato no Sanzoku',
                description: "This is a great place to enjoy exquisite Japanese cuisine made with seasonal ingredients and ji-zake (local Japanese alcohol). They are widely known for their chicken Sakurahime from the Miyazaki prefecture which is grilled to perfection and filled with umami.",
                category: 'Food',
                city: '613a90099ea08c7c6021e5dc',
                image: 'https://rimage.gnst.jp/rest/img/jraj3d3w0000/s_0n8w.jpg',
            },

            {
                title: 'Tempura Kitchomu',
                description: "Known as a tempura restaurant, Tempura Kitchomu is a little restaurant hidden in Nara's residential area. As a tempura restaurant they serve high-quality tempura that you will die for. Another unique feature of this restaurant is they only have counter seats which basically means you get to watch the chef cook your meal!",
                category: 'Food',
                city: '613a90099ea08c7c6021e5dc',
                image: 'https://savorjapan.com/gg/content_image/t0097_003_20180423101022.jpg',
            },

            {
                title: 'Aya',
                description: "Craving fresh seafood from the waters surrounding Nara? Aya is the restaurant to checkout for servings of season seafood as well as ji-zake (local sake) from Nara. The go to here is their sashimi plater of the day which is a platter of season seafood so you will never know what will be in it!",
                category: 'Food',
                city: '613a90099ea08c7c6021e5dc',
                image: 'https://savorjapan.com/gg/content_image/t0097_009_20180423102108.jpg',
            },

            {
                title: 'Isuien Garden',
                description: "Any nature lover will be delighted to come here. With giant surrounding hills of Kasuga, Mikasa, and Wakakusa this garden creates a a beautiful scene. With the addition of pagodas and ponds once you see the beauty of this place it becomes very difficult leaving it. ",
                category: 'Attraction',
                city: '613a90099ea08c7c6021e5dc',
                image: 'https://images.unsplash.com/photo-1593435345061-bc72741e9218?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            },

            {
                title: 'Todai-ji Temple',
                description: "Considered one of hte most famous temples in all of Japan, Todai-ji Temple is probably the highlight of any trip to Nara. One thing many come here for is the giant bronze Buddha status. Just like Nara park there are also wild sika deers roaming the grounds this temple.",
                category: 'Attraction',
                city: '613a90099ea08c7c6021e5dc',
                image: 'https://images.unsplash.com/photo-1584658918903-aee5ff1d53a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
            },

            {
                title: 'Nara Park',
                description: "A park in Nara widely-known for the hundreds of wild sika deer freely roaming the grounds. As one of Nara's popular travel attraction these deers have been accustomed to being around people and in doing so they are easily fed and petted. Fun fact is these deers are designated as a national treasure and are protected",
                category: 'Attraction',
                city: '613a90099ea08c7c6021e5dc',
                image: 'https://images.unsplash.com/photo-1550303435-1703d8811aaa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            },

            {
                title: 'Hanamaru',
                description: "A chain of sushi restaurant that originated in Nemuro you will find fresh seafood throughout their menu. This restaurant has 7 Kaiten sushi (conveyor belt restaurants) and 3 normal sushi bars so there is a experience for everyone. Book early or be prepared to line up outside between 15 to 45 minute wait!",
                category: 'Food',
                city: '613a90099ea08c7c6021e5de',
                image: 'https://hokkaidoguide.com/wp-content/uploads/2017/04/126A9863-3-750x499.jpg',
            },

            {
                title: 'Nishitondendori Soup Curry Honpo',
                description: "Questioned as the best soup curry restaurant in the town of Sapporo this place definitely hits that mark. As soup curry is one of the staple dishes in Japanese cuisine and Hokkaido is the birthplace of soup curry this restaurant has many competitions. Ranking as one of the top three soup curry restaurants the only way to find out for yourself is to come and try it!",
                category: 'Food',
                city: '613a90099ea08c7c6021e5de',
                image: 'https://hokkaidoguide.com/wp-content/uploads/2016/03/126A8530-1024x683.jpg',
            },

            {
                title: 'Sapporo Beer Garden',
                description: "Located in the Genghis Khan Hall this restaurant will offer you a plate of meat and a glass of beer. They offer a variety of meat to choose from but the go to is the Genghis Khan which is a local specialty consisting of barbecued mutton with a side of iced-cold Sapporo beer.",
                category: 'Food',
                city: '613a90099ea08c7c6021e5de',
                image: 'https://hokkaidoguide.com/wp-content/uploads/2017/10/126A7712-2000x1334.jpg',
            },

            {
                title: 'Ishiya Chocolate Factory',
                description: 'Craving something sweet and decadent? Visit the Ishiya Chocolate factory and taste their popular white chocolate known as "shiroi koibito". This will be a great highlight to any trip especially those with little ones. Built like a theme park this is a place for all ages but it definitely is a popular destination in Sapporo.',
                category: 'Attraction',
                city: '613a90099ea08c7c6021e5de',
                image: 'https://cdn.thecrazytourist.com/wp-content/uploads/2018/06/ccimage-shutterstock_504568843.jpg',
            },

            {
                title: 'Sapporo Snow Festival',
                description: "As one of Japan's most famous snow festivals the highlight of this attraction is the creative and highly detailed snow sculptures. This festival runs for seven days every February and it attracts millions of visitors from all over Japan and the world. Along with the snow sculptures built within those seven days are countless food stalls that everyone can enjoy.",
                category: 'Attraction',
                city: '613a90099ea08c7c6021e5de',
                image: 'https://mk0japanistry8ywimnt.kinstacdn.com/wp-content/uploads/2018/02/Sapporo-Snow-Festival-02.jpg',
            },

            {
                title: 'Sapporo Beer Museum',
                description: "One of Sapporo's main attraction is the Sapporo Beer Museum known for its widely popular Sapporo beer. Just like any beer museum this one will give you a guided tour of the facility and teach you how the beer is made and where it origin came from. You can even sample a range of different beer blends that they offer!",
                category: 'Attraction',
                city: '613a90099ea08c7c6021e5de',
                image: 'https://images.unsplash.com/photo-1565210579838-4b7e88345ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
            },

            {
                title: 'Kobe Plaisir',
                description: "With dishes centered around Tajima beef, Kobe beef, and Teppan-yaki steak this is a meat lovers dream. Once you've tried the meat selection here nothing else will compare and you will never be satisfied by the taste of meat again until you come back. If you had to choose one type of meat of course you should try Kobe beef!",
                category: 'Food',
                city: '613a90099ea08c7c6021e5da',
                image: 'https://imgcp.aacdn.jp/img-a/1720/auto/global-aaj-front/article/2016/03/56ebd0a726eef_56ebca4722a37_579287264.jpg',
            },

            {
                title: 'Wanto Burger',
                description: "To simply put it the food served her is an American classic made with the best Japanese ingredients. The main dish that anyone should go and try is the Wanto Burger which consist of a kobe beef patty, wagyu roast beef, boiled egg, garlic chip, and steak sauce. ",
                category: 'Food',
                city: '613a90099ea08c7c6021e5da',
                image: 'https://blogimg.goo.ne.jp/user_image/0a/26/e9c7372cd10b82b5f3bcedb6bb732253.jpg',
            },

            {
                title: 'Kobe Beef Steak Ishida Kitanozaka',
                description: "A steak lovers paradise! This is one of many restaurants in Kobe that serves their renowned Kobe beef. With a exquisite atmosphere and finest hospitality that Japan can offer this will be a memorable meal that you not soon forget!",
                category: 'Food',
                city: '613a90099ea08c7c6021e5da',
                image: 'https://kobebeef-ishida.com/wp-content/uploads/2017/10/IMG_1962.jpg',
            },

            {
                title: 'Mount Rokko',
                description: "The highest peak in the Rokko mountain range the panoramic view you can see from this peak is reachable by cable cart, walking up the mountain trail, and a bus line. Once at the top you can soak in the view of Kobe and even go to Japan's first gold course! There is also the Rokko Garden Terrace, a botanical garden, and even a music box museum.",
                category: 'Attraction',
                city: '613a90099ea08c7c6021e5da',
                image: 'http://jpninfo.com/wp-content/uploads/2018/01/Mount-Rokko.jpg',
            },

            {
                title: 'Kobe Luminarie',
                description: "One of Kobe's main festivals held annually in early December the amount of lights showcased in this event will make any house decoration lackluster from here on out. Besides the many colored lights showcased in this festival there is a deeper and more moving meaning behind it. Each lights seen in this festival is representation of a life lost during the Hanshin Earthquake that hit Kobe in 1995.",
                category: 'Attraction',
                city: '613a90099ea08c7c6021e5da',
                image: 'https://3.bp.blogspot.com/-csvKyLEJJxo/XA6TkADmp2I/AAAAAAAF87M/2NrVg1aseew3fg_WaLuffns-vXY0RaNSgCLcBGAs/s640/DSC01524.JPG',
            },

            {
                title: 'Kobe Port Tower',
                description: "Located by the port of Kobe the Kobe Port Tower is 108 meters high and the design of this tower stems from the Japanese drum that is used during Noh and kabuki theater. When the sun sets and the lights turn on this tower is one of the city's most breathtaking sight.",
                category: 'Attraction',
                city: '613a90099ea08c7c6021e5da',
                image: 'https://images.unsplash.com/photo-1595854902263-bfce150abad8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80',
            },

            {
                title: 'Sumiyaki Anago Yamayoshi',
                description: 'Ever tried conger before? Interested? Try the "Anago meshi" which is a soft boiled conger on rice that is made with the original house sauce. Simply put conger is eel which is popular seafood in Japan and if you come to Himeji this is a dish to try. How does the saying go again... when in Rome? ',
                category: 'Food',
                city: '613a90099ea08c7c6021e5d9',
                image: 'https://s3-media0.fl.yelpcdn.com/bphoto/V2XoZnj4MKH7wnozui3r7Q/o.jpg',
            },

            {
                title: 'Sushiichi',
                description: "With its location from Himeji Castle being a quick 15-minute walk you can easily swing by after going around the castle grounds and grab a bite to eat here. With servings of fresh seafood from conger to sushi this is a seafood lover's dream. ",
                category: 'Food',
                city: '613a90099ea08c7c6021e5d9',
                image: 'https://images.unsplash.com/photo-1540648639573-8c848de23f0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1424&q=80',
            },

            {
                title: 'Ramen Zundoya',
                description: "When you think of Himeji you don't really think of ramen but Ramen Zundoya's birth place is in Himeji city on April 4th, 2002. The success of this ramen restuarant has led its way into the New York where their first international location has opened up. Like many ramen shops all over Japan they usually take inspiration where ever they are located and Ramen Zundoya is no different.",
                category: 'Food',
                city: '613a90099ea08c7c6021e5d9',
                image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            },

            {
                title: 'Himeji Castle',
                description: "This hilltop Japanese castle is known for its brilliant white exterior which is supposed to represent a bird taking flight. Just like Osaka Castle this is a popular traveler attraction bringing crowds year-round especially during cherry blossom season! Make sure you plan your time correctly otherwise there will be nothing but crowds!",
                category: 'Attraction',
                city: '613a90099ea08c7c6021e5d9',
                image: 'https://images.unsplash.com/photo-1593297372293-6aa3e133657b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
            },

            {
                title: 'Koko-en Garden',
                description: "Located right by Himeji castle this garden consist of nine gardens separate by walls and all varying in style. The most popular spot here is within the lord's residence feature a pond with a waterfall, a lovely tea garden for visitors to enjoy green tea, a bamboo garden, and even a flower garden. You can even watch the colors of the trees here change with the season and fall easily becomes the favorite season for many visitors.",
                category: 'Attraction',
                city: '613a90099ea08c7c6021e5d9',
                image: 'https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80',
            },

            {
                title: 'Taiyō Park',
                description: "A theme park filled with replicas of world landmarks such as the Great Wall of China, Egyptian Pyramids, and even China's Terracotta Army. There is definitely something here for everyone to enjoy! If these attractions aren't for you at the least you can enjoy the vast greenery within this park!",
                category: 'Attraction',
                city: '613a90099ea08c7c6021e5d9',
                image: 'https://images.unsplash.com/photo-1551277405-8d30a5cde945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            },
        ],

        (error, createdThingsToDo) => {
        if (error) {
            return console.log(error);
        }
        console.log("=== Seed Complete ===");
        console.log(createdThingsToDo);
        }
    );
});