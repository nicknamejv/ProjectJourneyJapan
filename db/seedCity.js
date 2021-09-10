const { City } = require('../models');

City.deleteMany({}, (error, deletedCities) => {
    if (error) {
        return console.log(error);
    }
    City.insertMany(
        [
            {
                city: 'Himeji',
                description: "As a contender to Osaka Castle within the city of Himeji there is Himeji Castle. Ranked as one of Japan's most iconic castle Himeji Castle became the pinnacle beacon for travelers visiting Himeji. With the city's location under one hour from Osaka or Kyoto, Himeji has become a popular breakpoint along the Shinkansen route.",
                image: 'https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2018/12/Hijime-Castle-at-dusk.-1024x640.jpg',
            },

            {
                city: 'Kobe',
                description: 'The city of Kobe is known as a port city that sits between the sea and Rokko mountains.Along the port is the Kobe Port Tower towering the city giving a 360-degree panoramic view that anyone would die for. Kobe is also known for the high grade meat called "Kobe beef" which is amongst the top three brands of all Japan.',
                image: 'https://images.unsplash.com/photo-1607586355793-34ab20949e28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            },

            {
                city: 'Kyoto',
                description: "Formally known as the ancient capital of Japan, Kyoto is the polar opposite of Tokyo. Located at this city is the ever popular Arashiyama Bamboo Forest and Fushimi Inari Shrine that many tourist flock to.",
                image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            },

            {
                city: 'Nara',
                description: "Nara is a city less than a hour away from Kyoto which is easily accessible through Japan's vast bullet trains. This small unique city is home to over 1,000 deers that roam free at Nara Park. These deers are not only approachable but they are also considered a National Treasure. ",
                image: 'https://images.unsplash.com/photo-1537153725174-cba5e5e81ab0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
            },

            {
                city: 'Osaka',
                description: "If food is what excites you then Osaka is the city you need to pin on your to do list. With Osaka Castle sitting on top of a steep hill and the bustling street food at Dontonbori there is no lack of things to do here.",
                image: 'https://images.unsplash.com/photo-1537153960513-344d9f2e8216?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            },

            {
                city: 'Sapporo',
                description: "Known as Japan's best winter destination you undoubtedly visit for the Sapporo Snow Festival that begins every February. This event attracts ski goers and ice sculptors every year to create massive ice castles which are illuminated at night. If snow and cold weather is not your thing visit the famous Ishiya Chocolate Factory and try their white chocolate specialty.",
                image: 'https://images.unsplash.com/photo-1600867379694-43eb5ea598da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            },

            {
                city: 'Tokyo',
                description: "If someone says Japan this is probably the first city that comes to mind. Tokyo is known for attracting new coming tourist visiting Japan for the first time. Tokyo's bustling day and night life can appeal to many people. Between the food you can find around busy corners to popular attractions like the Tokyo Tower there is something to do for everyone.",
                image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=924&q=80',
            },
        ],

        (error, createdCity) => {
        if (error) {
            return console.log(error);
        }
        console.log("=== Seed Complete ===");
        console.log(createdCity);
        }
    );
});