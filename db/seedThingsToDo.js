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
                city: 'Tokyo',
                image: 'https://prods3.imgix.net/images/articles/2016_10/Non-Feature-Tonkotsu-Ramen-Ichiran-Opens-Brooklyn.jpg?auto=format%2Ccompress&ixjsv=2.2.3&w=750',
            },

            {
                title: 'Gyukatsu Motomura',
                description: "Ever wanted to stone grill beef cutlet? Gyukatsu Motomura is that place everything is set up for you to sit down and enjoy your meal at your pace. With the incorporation of a special sauce called yamawasabi and rock salt your taste buds will understand why you need to come here",
                category: 'Food',
                city: 'Tokyo',
                image: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/87/27/49/caption.jpg',
            },

            {
                title: '7/11',
                description: "Believe it or not going to any 7/11 in Japan is a whole different experience compared to anywhere else around the world. Not only does 7/11 have budget friendly food it also does not sacrifice taste. After a long day of exploring the city you can just jump to any 7/11 grab a drink and a quick meal.",
                category: 'Food',
                city: 'Tokyo',
                image: 'https://cdn-japantimes.com/wp-content/uploads/2019/10/b-711-a-20191011.jpg',
            },

            {
                title: 'Sensō-ji Temple',
                description: "It's not a surprise that Tokyo has numerous shrines scattered all over the place. Sensō-ji Temple is the city's most famous shrine and to get there you need to past through multiple street vendors selling an assortment of items from masks to kimonos. One you see a giant red paper lantern you'll know you're there.",
                category: 'Attraction',
                city: 'Tokyo',
                image: 'https://images.unsplash.com/photo-1521734952068-852cfb00d46f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            },

            {
                title: 'Tokyo DisneySea ',
                description: "For all you Disney lovers this is an experience you will not forget. Between Tokyo DisneySea and Tokyo Disneyland many have dubbed DisneySea as the better of the two. With the whole sea theme going on you will see Mediterranean Harbor leading you to Mount Prometheus towering the distance. If you had a choice to pick Tokyo DisneySea will not disappoint!",
                category: 'Attraction',
                city: 'Tokyo',
                image: 'https://imgcp.aacdn.jp/img-a/1720/auto/global-aaj-front/article/2016/08/57af0f933ed63_57af0c1dd6cc1_104386731.jpg',
            },

            {
                title: 'Unicorn Gundam',
                description: "Ever wanted to see a full-scale statue of an RX-0 Unicorn Gundam? Head over to Odaiba in Tokyo and be in awe when you see a real life Gundam. Not only does this statue function like a real Gundam, at certain times of the day you will be presented a show in which the Unicorn Gundam will transform to the anime's theme song.",
                category: 'Attraction',
                city: 'Tokyo',
                image: 'https://images.unsplash.com/photo-1562461089-907f104c2b9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
            },

            {
                title: 'Kichi Kichi Omurice',
                description: "Located in the heart of Kyoto is a small alley restaurant known for omurice. Kichi Kichi Omurice is a place many come to eat but stay because of Chef Motokichi Yukimura. Between the eccentric energy he brings while cooking a unique omurice right in front of you this place will be anything but disappointing.",
                category: 'Food',
                city: 'Kyoto',
                image: 'https://i1.wp.com/farm1.staticflickr.com/756/22617443807_63feb3004f_c.jpg?w=1440&ssl=1',
            },

            {
                title: 'Pontocho Yakiniku Yamakawa Honten',
                description: "If you ever sought after Kobe beef but couldn't make it all the way to Kobe this stop is the next best thing. With a platter of carefully selected Kobe and Japanese black wagyu beef the mouth experience you experience here will haunt you until you come back for more.",
                category: 'Food',
                city: 'Kyoto',
                image: 'https://media.sharing-kyoto.com/articles/z17nQ4CHREHxPiJa1GXfdKvGY9SbjdOq9IL7Y1Db.jpeg',
            },

            {
                title: 'Brasserie AG',
                description: "Japanese curry with inspirations from Indian curry that you can taste! Located inside the Kyoto Kawaramachi Garden Food Hall this spot is easily missed because it is not a main stream eatery like many of the places around Kyoto but if you happen to have free time definitely check it out!",
                category: 'Food',
                city: 'Kyoto',
                image: 'https://suggestionofmotion.com/wp-content/uploads/JPN_Kyoto_Katsu-Curry_008_Katsu-Curry-693x519.jpg',
            },

            {
                title: 'Fushimi Inari Shrine',
                description: "Ever seen red torii gates on the internet before? Well this is probably the origin of that picture. Known for its 10,000 torii gates the Fushimi Inari Shrine is a popular travel destination for all walks of life. Better go early to beat the crowd otherwise this place gets packed!",
                category: 'Attraction',
                city: 'Kyoto',
                image: 'https://images.unsplash.com/photo-1554614380-5436e923716d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
            },

            {
                title: 'Hōkan-ji Temple ',
                description: "The Hōkan-ji Temple also known as Yasaka Pagoda is a popular tourist destination located in Kyoto. To get here you will find the best-preserved streets in Kyoto filled with wooden houses and narrow walk ways. These stone pathways are usually filled with photographers trying to snag a picture of the Yasaka Pagoda or women wearing kimonos.",
                category: 'Attraction',
                city: 'Kyoto',
                image: 'https://images.unsplash.com/photo-1553947633-9021da48f410?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            },

            {
                title: 'Arashiyama Bamboo Grove',
                description: "After hopping on the San-In line at Kyoto Station these pathways of bamboo will transport you to another world. Just like many beautiful and picturesque places around Japan this is another popular spot in Kyoto. Filled with hundreds of bamboo trees if you stay long enough you might end up becoming a panda.",
                category: 'Attraction',
                city: 'Kyoto',
                image: 'https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
            },

            {
                title: '',
                description: "",
                category: '',
                city: '',
                image: '',
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