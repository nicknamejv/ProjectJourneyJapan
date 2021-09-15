function initMap() {

    // Map options
    const options = {
        zoom: 6,
        center: { lat: 35.652832, lng: 139.839478 }
    };

    // New Map
    const map = new google.maps.Map(document.getElementById('map'), options);

    // Array of Markers
    const markers = [
        {
            coordinates: { lat: 35.705069595881994, lng: 139.70338346513725 },
            content: '<p>Ichiran Ramen - Shibuya, Tokyo</p>',
        },
        {
            coordinates: { lat: 35.658805720949665, lng: 139.70435416397675 },
            content: '<p>Gyukatsu Motomura - Shibuya, Tokyo</p>',
        },
        {
            coordinates: { lat: 35.62689391495314, lng: 139.88507789850917 },
            content: '<p>Tokyo DisneySea - Chiba, Tokyo</p>',
        },
        {
            coordinates: { lat: 35.624694240944585, lng: 139.77558015803055 },
            content: '<p>Unicorn Gundam Statue - Kyoto, Tokyo</p>',
        },
        {
            coordinates: { lat: 35.00741938449446, lng: 135.7708322561726 },
            content: '<p>Kichi Kichi Omurice - Kyoto, Japan</p>',
        },
        {
            coordinates: { lat: 35.00827603372516, lng: 135.77071176966527 },
            content: '<p>Pontocho Yakiniku Yamakawa Honten - Kyoto, Japan</p>',
        },
        {
            coordinates: { lat: 35.00356998476507, lng: 135.76966495617242 },
            content: '<p>Brasserie AG - Kyoto, Japan</p>',
        },
        {
            coordinates: { lat: 34.96734239786028, lng: 135.77274680035018 },
            content: '<p>Fushimi Inari Shrine - Kyoto, Japan</p>',
        },
        {
            coordinates: { lat: 34.9986898107961, lng: 135.77925725617234 },
            content: '<p>Hōkan-ji Temple - Kyoto, Japan</p>',
        },
        {
            coordinates: { lat: 35.01721104812441, lng: 135.67189138685828 },
            content: '<p>Arashiyama Bamboo Grove - Kyoto, Japan</p>',
        },
        {
            coordinates: { lat: 34.66886456402493, lng: 135.50125418315392 },
            content: '<p>Dōtonbori - Osaka, Japan</p>',
        },
        {
            coordinates: { lat: 34.67247439388559, lng: 135.4977126831538 },
            content: '<p>Kogaryu Takoyaki - Osaka, Japan</p>',
        },
        {
            coordinates: { lat: 34.669030087113775, lng: 135.50189217575425 },
            content: '<p>Torikizoku Dotombori - Osaka, Japan</p>',
        },
        {
            coordinates: { lat: 34.81825126521172, lng: 135.4267187138415 },
            content: '<p>Momofuku Ando Instant Ramen Museum - Osaka, Japan</p>',
        },
        {
            coordinates: { lat: 34.68710390816172, lng: 135.5258911254825 },
            content: '<p>Osaka Castle - Osaka, Japan</p>',
        },
        {
            coordinates: { lat: 34.66570097746285, lng: 135.4324075583413 },
            content: '<p>Universal Studios Japan - Osaka, Japan</p>',
        },
        {
            coordinates: { lat: 34.68189739447275, lng: 135.82087676278556 },
            content: '<p>Yamato no Sanzoku - Nara, Japan</p>',
        },
        {
            coordinates: { lat: 34.68326680784686, lng: 135.8283285553872 },
            content: '<p>Aya - Nara, Japan</p>',
        },
        {
            coordinates: { lat: 34.71450104872138, lng: 135.74522709956676 },
            content: '<p>Tempura Kitchomu - Nara, Japan</p>',
        },
        {
            coordinates: { lat: 34.68611626856478, lng: 135.83717613407876 },
            content: '<p>Isuien Garden - Nara, Japan</p>',
        },
        {
            coordinates: { lat: 34.68914387309277, lng: 135.83986944267554 },
            content: '<p>Todai-ji Temple - Nara, Japan</p>',
        },
        {
            coordinates: { lat: 34.68528970915286, lng: 135.84302275909974 },
            content: '<p>Nara Park - Nara, Japan</p>',
        },
        {
            coordinates: { lat: 43.06806916106753, lng: 141.35013396978457 },
            content: '<p>Hanamaru - Sapporo, Japan</p>',
        },
        {
            coordinates: { lat: 43.04859688858346, lng: 141.3389102390987 },
            content: '<p>Nishitondendori Soup Curry Honpo - Sapporo, Japan</p>',
        },
        {
            coordinates: { lat: 43.07136552897123, lng: 141.36917475814175 },
            content: '<p>Sapporo Beer Garden - Sapporo, Japan</p>',
        },
        {
            coordinates: { lat: 43.08892900630155, lng: 141.27157714094926 },
            content: '<p>Ishiya Chocolate Factory - Sapporo, Japan</p>',
        },
        {
            coordinates: { lat: 43.06060064580812, lng: 141.34719915774534 },
            content: '<p>Sapporo Snow Festival - Sapporo, Japan</p>',
        },
        {
            coordinates: { lat: 43.071670852272284, lng: 141.36890166978455 },
            content: '<p>Sapporo Beer Museum - Sapporo, Japan</p>',
        },
        {
            coordinates: { lat: 34.69347873568987, lng: 135.19003235431856 },
            content: '<p>Kobe Plaisir - Kobe, Japan</p>',
        },
        {
            coordinates: { lat: 34.69304465124354, lng: 135.18842728500408 },
            content: '<p>Wanto Burger - Kobe, Japan</p>',
        },
        {
            coordinates: { lat: 34.69424823457833, lng: 135.1925144693897 },
            content: '<p>Kobe Beef Steak Ishida Kitanozaka - Kobe, Japan</p>',
        },
        {
            coordinates: { lat: 34.77907925868545, lng: 135.26325170806058 },
            content: '<p>Mount Rokko - Kobe, Japan</p>',
        },
        {
            coordinates: { lat: 34.68832730613318, lng: 135.19628244082563 },
            content: '<p>Kobe Luminarie - Kobe, Japan</p>',
        },
        {
            coordinates: { lat: 34.82901232495474, lng: 134.69247121384137 },
            content: '<p>Sumiyaki Anago Yamayoshi - Himeji, Japan</p>',
        },
        {
            coordinates: { lat: 34.83686264572637, lng: 134.68659144628865 },
            content: '<p>Sushiichi - Himeji, Japan</p>',
        },
        {
            coordinates: { lat: 34.80460159558828, lng: 134.68078949205696 },
            content: '<p>Ramen Zundoya - Himeji, Japan</p>',
        },
        {
            coordinates: { lat: 34.839651512567194, lng: 134.69392615617036 },
            content: '<p>Himeji Castle - Himeji, Japan</p>',
        },
        {
            coordinates: { lat: 34.83802363362709, lng: 134.68980784267734 },
            content: '<p>Koko-en Garden - Himeji, Japan</p>',
        },
        {
            coordinates: { lat: 34.888091887625286, lng: 134.6292369678138 },
            content: '<p>Taiyō Park - Himeji, Japan</p>',
        },
    ];

    // Loop through Markers
    for (i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    };

    // Add Market Function
    function addMarker(props) {
        const marker = new google.maps.Marker({
            position: props.coordinates,
            map: map,
        });

        // Checks if there is content for marker
        if (props.content) {
            const infoWindow = new google.maps.InfoWindow({
                content: props.content,
            });

            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });
        };
    };
};