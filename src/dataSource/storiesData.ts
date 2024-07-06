export interface CustomStory {
    type: string;
    image?: string;
    caption?: string;
    captionColor?: string;
    title?: string;
    bgColor?: string;
    text?: string;
  }
  
  const StoriesData: { [key: string]: CustomStory[] } = {
    paste: [
      {
        type: "imageCaptionPost",
        image: "https://i.imgur.com/2p3NDcv.png",
        caption: "Как куриный паштет от Ларисы улучшает здоровье: 5 фактов",
        captionColor: "#FFFFFF",
      },
      {
        type: "titleImageTextPost",
        title: "Богат протеином",
        image: "https://i.imgur.com/2p3NDcv.png",
        bgColor: "#8B4513",
        text: "Куриный паштет содержит высокое количество белка, который необходим для роста и восстановления тканей организма. Белок также помогает поддерживать чувство сытости, что может способствовать контролю веса.",
      },
      {
        type: "titleImageTextPost",
        title: "Полезные животные жиры",
        image: "https://i.imgur.com/2p3NDcv.png",
        bgColor: "#8B4513",
        text: "Паштет из курицы включает в себя животные жиры, которые являются источником энергии и помогают усваивать жирорастворимые витамины (A, D, E и K). Эти жиры также способствуют здоровью клеточных мембран и нервной системы.",
      },
      {
        type: "titleImageTextPost",
        title: "Питательные вещества из печени",
        image: "https://i.imgur.com/2p3NDcv.png",
        bgColor: "#8B4513",
        text: "В состав куриного паштета входит печень, которая является богатым источником витаминов A и B12, фолиевой кислоты и железа. Эти питательные вещества важны для поддержания здорового зрения, иммунной системы и образования красных кровяных клеток.",
      },
      {
        type: "titleImageTextPost",
        title: "Минералы и витамины из куриного мяса",
        image: "https://i.imgur.com/2p3NDcv.png",
        bgColor: "#8B4513",
        text: "Куриное мясо содержит витамины группы B, фосфор, селен и цинк, которые важны для поддержания здоровья костей, зубов и иммунной системы. Эти минералы также играют роль в метаболизме и защитных функциях организма.",
      },
      {
        type: "titleImageTextPost",
        title: "Легкость усвоения",
        image: "https://i.imgur.com/2p3NDcv.png",
        bgColor: "#8B4513",
        text: "Куриный паштет легко усваивается, что делает его подходящим для людей с чувствительным пищеварением или после операций. Он может быть включен в диету в качестве питательного и мягкого на вкус продукта.",
      },

    ],
    fruits: [
      {
        type: "imageCaptionPost",
        image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        caption: "Свежие и полезные яблоки",
        captionColor: "#FFFFFF",
      },
      {
        type: "titleImageTextPost",
        title: "Польза яблок",
        image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        bgColor: "#FF6347",
        text: "Сердечно-сосудистая система: Исследования показывают, что регулярное употребление яблок может способствовать снижению риска сердечно-сосудистых заболеваний.",
      },
      
      {
        type: "titleImageTextPost",
        title: "Антиоксидантные свойства",
        image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        bgColor: "#FF6347",
        text: "Яблоки богаты антиоксидантами, такими как кверцетин и витамин C.",
      },
      {
        type: "titleImageTextPost",
        title: "Здоровье кишечника",
        image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        bgColor: "#FF6347",
        text: "Клетчатка, содержащаяся в яблоках, особенно растворимая (например, пектин), способствует здоровью кишечника, улучшая пищеварение и стимулируя рост полезной микрофлоры.",
      },
      {
        type: "titleImageTextPost",
        title: "Контроль веса",
        image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        bgColor: "#FF6347",
        text: "Яблоки содержат мало калорий, но много воды и клетчатки, что делает их сытным продуктом.",
      },

    ],
    vegetables: [
      {
        type: "imageCaptionPost",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        caption: "Овощи, которые могут способствовать похудению",
        captionColor: "#FFFFFF",
      },
      {
        type: "titleImageTextPost",
        title: "Брокколи",
        image: "https://i.imgur.com/1IxA3hn.png",
        bgColor: "#228B22",
        text: "Богата витаминами C и K, а также антиоксидантами, которые способствуют ускорению метаболизма. Низкое содержание калорий и высокое содержание клетчатки.",
      },
      
      {
        type: "titleImageTextPost",
        title: "Шпинат",
        image: "https://i.imgur.com/TrteoTx.png",
        bgColor: "#228B22",
        text: "Содержит много витаминов и минералов, которые помогают поддерживать энергию и здоровье во время похудения. Очень низкокалорийный продукт, богатый клетчаткой и водой.",
      },
      {
        type: "titleImageTextPost",
        title: "Цветная капуста",
        image: "https://i.imgur.com/Lj6zK4z.png",
        bgColor: "#228B22",
        text: "Содержит много клетчатки и витаминов, что помогает поддерживать сытость и улучшает пищеварение.",
      },
      {
        type: "titleImageTextPost",
        title: "Кабачки",
        image: "https://i.imgur.com/DcJSvry.png",
        bgColor: "#228B22",
        text: "Высокое содержание воды и клетчатки, что помогает контролировать аппетит и поддерживать водный баланс.",
      },
      {
        type: "titleImageTextPost",
        title: "Морковь",
        image: "https://i.imgur.com/OBSTAuH.png",
        bgColor: "#228B22",
        text: "Содержит много витамина А и антиоксидантов, которые способствуют улучшению обмена веществ.",
      },
      {
        type: "titleImageTextPost",
        title: "Огурцы",
        image: "https://i.imgur.com/3oeBa1p.png",
        bgColor: "#228B22",
        text: "Помогают гидратировать организм и поддерживать чувство сытости.",
      },
      {
        type: "titleImageTextPost",
        title: "Перец болгарский",
        image: "https://i.imgur.com/8RIpVYz.png",
        bgColor: "#228B22",
        text: "Богат витаминами C и A, а также антиоксидантами, которые способствуют ускорению метаболизма.",
      },
      {
        type: "titleImageTextPost",
        title: "Капуста",
        image: "https://i.imgur.com/HSZSKiM.png",
        bgColor: "#228B22",
        text: "Помогает поддерживать сытость и улучшает пищеварение благодаря высокому содержанию клетчатки.",
      },
      {
        type: "titleImageTextPost",
        title: "Сельдерей",
        image: "https://i.imgur.com/OVlNNY4.png",
        bgColor: "#228B22",
        text: "Высокое содержание воды и клетчатки помогает контролировать аппетит и поддерживать водный баланс.",
      },
      {
        type: "titleImageTextPost",
        title: "Томаты",
        image: "https://i.imgur.com/7ZJYK1v.png",
        bgColor: "#228B22",
        text: "Высокое содержание воды и клетчатки способствует гидратации и поддерживает сытость.",
      },

    ],
    seafood: [
      {
        type: "imageCaptionPost",
        image: "https://images.unsplash.com/photo-1548865168-0c7b73bc22d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        caption: "Свежая рыба",
        captionColor: "#FFFFFF",
      },
      {
        type: "titleImageTextPost",
        title: "Морепродукты для здоровья",
        image: "https://images.unsplash.com/photo-1548865168-0c7b73bc22d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        bgColor: "#1E90FF",
        text: "Рыба богата омега-3 жирными кислотами.",
      },
    ],
    herbs: [
      {
        type: "imageCaptionPost",
        image: "https://images.unsplash.com/photo-1617368350922-3eb1a7e5a078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        caption: "Ароматные и полезные травы",
        captionColor: "#FFFFFF",
      },
      {
        type: "titleImageTextPost",
        title: "Травы для вкуса",
        image: "https://images.unsplash.com/photo-1617368350922-3eb1a7e5a078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        bgColor: "#32CD32",
        text: "Травы могут улучшить вкус любого блюда.",
      },
    ],
    seeds: [
      {
        type: "imageCaptionPost",
        image: "https://images.unsplash.com/photo-1571463672894-2432d87d654d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        caption: "Питательные семена для здоровья",
        captionColor: "#FFFFFF",
      },
      {
        type: "titleImageTextPost",
        title: "Семена для питания",
        image: "https://images.unsplash.com/photo-1571463672894-2432d87d654d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        bgColor: "#FFD700",
        text: "Семена являются отличным источником полезных жиров.",
      },
    ],
    smoothies: [
      {
        type: "imageCaptionPost",
        image: "https://images.unsplash.com/photo-1556912167-f556f1eb8ba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        caption: "Вкусные и полезные смузи",
        captionColor: "#FFFFFF",
      },
      {
        type: "titleImageTextPost",
        title: "Смузи для энергии",
        image: "https://images.unsplash.com/photo-1556912167-f556f1eb8ba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        bgColor: "#FF4500",
        text: "Смузи могут быть быстрым и полезным приемом пищи.",
      },
    ],
    poultry: [
      {
        type: "imageCaptionPost",
        image: "https://images.unsplash.com/photo-1609770230977-12977fae5189?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        caption: "Птица",
        captionColor: "#FFFFFF",
      },
      {
        type: "titleImageTextPost",
        title: "Птица для белка",
        image: "https://images.unsplash.com/photo-1609770230977-12977fae5189?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        bgColor: "#DC143C",
        text: "Птица является источником нежирного белка.",
      },
    ],
    eggs: [
      {
        type: "imageCaptionPost",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        caption: "Питательные яйца",
        captionColor: "#FFFFFF",
      },
      {
        type: "titleImageTextPost",
        title: "Яйца на завтрак",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        bgColor: "#FFA500",
        text: "Яйца универсальны и богаты питательными веществами.",
      },
    ],
    bread: [
      {
        type: "imageCaptionPost",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        caption: "Цельнозерновой хлеб",
        captionColor: "#FFFFFF",
      },
      {
        type: "titleImageTextPost",
        title: "Польза цельного зерна",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        bgColor: "#8B4513",
        text: "Цельнозерновой хлеб богат клетчаткой.",
      },
    ],
  };
  
  export default StoriesData;
  