// This is our fake data just to display the app with some pictures and activities.

export const chatMessages = [
    {
      _id: 3,
      text: 'How are you today?',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
    {
      _id: 2,
      text: 'Hello grandma',
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'Logan',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
  ];

  export const messagingHomeList = [
    {
      sender: 'Tommy T',
      message: 'Doing what you like will always keep you happy . .',
      time: '3:43 pm',
      numberNew: '0',
    },
    {
      sender: 'Bob',
      message: 'How many hot dogs did you make?',
      time: '4:45 pm',
      numberNew: '3'
    },
    {
      sender: 'Logan Schiessle',
      message: 'How are you today? I hope you are doing well . .',
      time: '3:55 pm',
      numberNew: '0'
    },
    {
      sender: 'Greg',
      message: 'Are you feeling better today grandma?',
      time: '3:00 pm',
      numberNew: '1'
    }
  ];

export const homeScreenData = {
  activities: [
    {title: "Foo", time: "10:00AM"},
    {title: "Bar", time: "11:00AM"},
    {title: "Baz", time: "12:00PM"},
    {title: "Bam", time: "1:00PM"},
    {title: "Bat", time: "1:00PM"},
  ],
  appointments: [
    {title: "Foo", time: "10:00AM"},
    {title: "Bar", time: "11:00AM"},
  ],
  meals: [
    {title: "Breakfast", items: ["Steel Cut Oats", "Veggie Frittata", "Whole Wheat Toast", "Melon Medley"]},
    {title: "Lunch", items: ["Steel Cut Oats", "Veggie Frittata", "Whole Wheat Toast", "Melon Medley"]},
    {title: "Dinner", items: ["Steel Cut Oats", "Veggie Frittata", "Whole Wheat Toast", "Melon Medley"]},
  ],
};
