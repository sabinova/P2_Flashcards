const places = [
    {
        id: 'great-pyramids',
        name: 'Great Pyramids of Giza',
        continent: 'Africa',
        front: {
            image: '/images/pyramids.jpg',
            info: 'Ancient pyramid-shaped masonry structures were built as tombs for the Pharaohs and are a testament to ancient engineering and architecture. The largest pyramid, known as the Great Pyramid, was constructed for Pharaoh Khufu.',
        },
        back: {
            country: 'Egypt',
            city: 'Giza Plateau, near Cairo',
            established: 'c. 2600-2500 BC'
        }
    },

    {
        id: 'machu-picchu',
        name: 'Machu Picchu',
        continent: 'South America',
        front: {
            image: '/images/machu_picchu.jpg',
            info: 'An ancient Incan city set high in the Andes Mountains, known for its sophisticated dry-stone construction that fuses huge blocks without the use of mortar. It is often referred to as the "Lost City of the Incas."',
        },
        back: {
            country: 'Peru',
            city: 'Cusco Region, Urubamba Province',
            established: 'c. 1450 AD'
        }
    },

    {
        id: 'taj-mahal',
        name: 'Taj Mahal',
        continent: 'Asia',
        front: {
            image: '/images/taj_mahal.jpg',
            info: 'A white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his favorite wife, Mumtaz Mahal. It is renowned for its stunning architecture, intricate carvings, and beautiful gardens.',
        },
        back: {
            country: 'India',
            city: 'Agra, Uttar Pradesh',
            established: '1631-1648 AD'
        }
    },

    {
        id: 'acropolis',
        name: 'Acropolis of Athens',
        continent: 'Europe',
        front: {
            image: '/images/acropolis.jpg',
            info: 'An ancient citadel located on a rocky outcrop, containing the remains of several historically significant buildings, the most famous being the Parthenon. It symbolizes the glory of ancient country.',
        },
        back: {
            country: 'Greece',
            city: 'Athens',
            established: 'c. mid 5th century BC'
        }
    },

    {
        id: 'alhambra',
        name: 'Alhambra',
        continent: 'Europe',
        front: {
            image: '/images/alhambra.jpg',
            info: 'A palace and fortress complex. It is a masterpiece of Islamic architecture, known for its stunning tilework, intricate stucco decorations, and beautiful gardens.',
        },
        back: {
            country: 'Spain',
            city: 'Granada, Andalusia',
            established: 'c. mid 13th century AD'
        }
    },

    {
        id: 'stonehenge',
        name: 'Stonehenge',
        continent: 'Europe',
        front: {
            image: '/images/stonehenge.jpg',
            info: 'A prehistoric monument consisting of a ring of standing stones. Its exact purpose remains a mystery, but it is believed to have been used for ceremonial or religious purposes, possibly related to astronomy.',
        },
        back: {
            country: 'United Kingdom',
            city: 'Wiltshire, England',
            established: 'c. 3000-2000 BC'
        }
    },

    {
        id: 'chichen-itza',
        name: 'Chichen Itza',
        continent: 'North America',
        front: {
            image: '/images/chichen_itza.jpg',
            info: 'A large pre-Columbian archaeological site built by the Maya civilization. It features a variety of architectural styles, including the iconic step pyramid known as El Castillo, which served as a temple to the god Kukulkan.',
        },
        back: {
            country: 'Mexico',
            city: 'Yucatán Peninsula',
            established: 'c. 10th-12th century CE'
        }
    },

    {
        id: 'petra',
        name: 'Petra',
        continent: 'Asia',
        front: {
            image: '/images/petra_jordan.jpg',
            info: 'An ancient city carved into the rose-red cliffs by the Nabataeans. It is famous for its rock-cut architecture and water conduit system, and it served as a major trading hub in ancient times.',
        },
        back: {
            country: 'Jordan',
            city: 'Wadi Musa, Ma\'an Governorate',
            established: 'c. 5th century BC'
        }
    }, 

    {
        id: 'colosseum',
        name: 'Colosseum',
        continent: 'Europe',
        front: {
            image: '/images/colosseum.jpg',
            info: 'An ancient amphitheater known for its massive size and architectural grandeur. It was used for gladiatorial contests and public spectacles such as animal hunts, mock sea battles, and executions.',
        },
        back: {
            country: 'Italy',
            city: 'Rome',
            established: '70-80 CE'
        }
    }, 

    {
        id: 'angkor-wat',
        name: 'Angkor Wat',
        continent: 'Asia',
        front: {
            image: '/images/angkor_wat.jpg',
            info: 'A massive temple complex and the largest religious monument in the world. Originally constructed as a Hindu temple dedicated to Vishnu, it later transformed into a Buddhist temple. It is renowned for its grand scale and intricate bas-reliefs.',
        },
        back: {
            country: 'Cambodia',
            city: 'Siem Reap Province',
            established: 'early 12th century'
        }
    },

    {
        id: 'christ-the-redeemer',
        name: 'Christ the Redeemer',
        continent: 'South America',
        front: {
            image: '/images/redeemer.png',
            info: 'A colossal statue of Jesus Christ that stands atop the Corcovado Mountain. It is an iconic symbol of Christianity and a cultural landmark.',
        },
        back: {
            country: 'Brazil',
            city: 'Rio de Janeiro',
            established: '1931'
        }
    },

    {
        id: 'hagia-sophia',
        name: 'Hagia Sophia',
        continent: 'Europe/Asia',
        front: {
            image: '/images/hagia_sophia.jpg',
            info: 'A historic architectural marvel that has served as a cathedral, mosque, and now a museum. It is renowned for its massive dome, intricate mosaics, and rich history that spans several empires.',
        },
        back: {
            country: 'Turkey',
            city: 'Istanbul',
            established: '532-537 AD'
        }
    },

    {
        id: 'moai-statues',
        name: 'Moai Statues of Easter Island',
        continent: 'Oceania',
        front: {
            image: '/images/moai_statues.jpg',
            info: 'Monolithic human figures carved by the Rapa Nui people. These statues are believed to represent the ancestors of the islanders and are a testament to their craftsmanship and cultural heritage.',
        },
        back: {
            country: 'Chile',
            city: 'Easter Island (Rapa Nui)',
            established: 'c. 1250-1500 AD'
        }
    },

    {
        id: 'wall-of-china',
        name: 'Great Wall of China',
        continent: 'Asia',
        front: {
            image: '/images/wall_china.jpg',
            info: 'A series of fortifications made of stone, brick, tamped earth, wood, and other materials. It was built to protect states and empires from invasions and raids by nomadic groups from the north.',
        },
        back: {
            country: 'China',
            city: 'Northern China',
            established: 'c. 7th century BC - 16th century AD'
        }
    },

    {
        id: 'old-city-of-bukhara',
        name: 'Old City of Bukhara',
        continent: 'Asia',
        front: {
            image: '/images/old_city_bukhara.jpg',
            info: 'A historic city that has been a major center of trade, culture, and religion for over two millennia. It is known for its well-preserved medieval architecture, including mosques, madrasas, and bazaars.',
        },
        back: {
            country: 'Uzbekistan',
            city: 'Bukhara',
            established: 'c. 6th century BC'
        }
    }
];

export default places;