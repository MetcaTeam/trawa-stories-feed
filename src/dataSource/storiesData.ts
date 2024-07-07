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
    procrastination: [
      {
        type: "imageCaptionPost",
        image: "https://i.imgur.com/6f31ZLO.png",
        caption: "Как победить прокрастинацию: советы и рекомендации",
        captionColor: "#FFFFFF",
      },
      {
        type: "titleImageTextPost",
        title: "Когнитивная перегрузка",
        image: "https://i.imgur.com/SjNHL9R.png",
        bgColor: "#8B4513",
        text: "Фронтальная кора головного мозга, отвечающая за выполнение сложных задач и принятие решений, требует много энергии. Постоянная нагрузка на эту часть мозга приводит к усталости и снижению продуктивности.",
      },
      {
        type: "titleImageTextPost",
        title: "Ограниченность ресурсов самоконтроля",
        image: "https://i.imgur.com/7oNBG2K.png",
        bgColor: "#8B4513",
        text: "Самоконтроль — это ограниченный ресурс. Когда он исчерпывается, мы становимся менее социальными, более склонными к обману и менее устойчивыми к диетам и другим повседневным задачам.",
      },
      {
        type: "titleImageTextPost",
        title: "Автоматизация когнитивных процессов",
        image: "https://i.imgur.com/ltNe9XM.png",
        bgColor: "#8B4513",
        text: "С опытом часть когнитивных процессов переходит в автоматический режим (мышечная память), что снижает нагрузку на фронтальную кору и делает выполнение задач менее энергоемким.",
      },
      {
        type: "titleImageTextPost",
        title: "Усталость от принятия решений",
        image: "https://i.imgur.com/wZM3Pc9.png",
        bgColor: "#8B4513",
        text: "Принятие решений, даже самых простых, требует когнитивных ресурсов. Со временем это приводит к усталости и снижению продуктивности.",
      },
      {
        type: "titleImageTextPost",
        title: "Начало работы",
        image: "https://i.imgur.com/JNXJvG6.png",
        bgColor: "#8B4513",
        text: "Важно начать с выполнения простых ритуалов, которые помогают преодолеть барьер перед началом сложных задач. Например, если вы разработчик, можно начать день с набора текста в Monkey Type для активации мышечной памяти и плавного перехода к более сложным задачам.",
      },
      {
        type: "titleImageTextPost",
        title: "Детальное планирование",
        image: "https://i.imgur.com/toCvK57.png",
        bgColor: "#8B4513",
        text: "Разделение задач на мелкие, легко выполнимые этапы снижает нагрузку на мозг и уменьшает количество решений, которые нужно принять в процессе работы.",
      },
      {
        type: "titleImageTextPost",
        title: "Геймификация задач",
        image: "https://i.imgur.com/cSTmQKj.png",
        bgColor: "#8B4513",
        text: "Введение элементов геймификации, таких как отметки выполненных задач в списке дел, помогает поддерживать мотивацию и отслеживать личный прогресс.",
      },
      {
        type: "titleImageTextPost",
        title: "Признание необходимости помощи",
        image: "https://i.imgur.com/BDjGo4h.png",
        bgColor: "#8B4513",
        text: "Когда задача становится слишком сложной и вызывает значительное сопротивление, важно признать необходимость помощи и обратиться за поддержкой. Это помогает уменьшить стресс и преодолеть трудности.",
      },
      {
        type: "titleImageTextPost",
        title: "Осознание человеческих ограничений",
        image: "https://i.imgur.com/o3ubDor.png",
        bgColor: "#8B4513",
        text: "Вы должны помнить о своих человеческих потребностях и ограничениях. Это включает в себя заботу о здоровье, полноценное питание и поддержание баланса между работой и отдыхом.",
      },
      {
        type: "titleImageTextPost",
        title: "Использование привычек для преодоления прокрастинации",
        image: "https://i.imgur.com/tN8WuJM.png",
        bgColor: "#8B4513",
        text: "Вместо того чтобы пытаться решить проблему прокрастинации в корне, лучше сфокусироваться на изменении привычек и процессов. Формирование полезных привычек помогает улучшить продуктивность и уменьшить прокрастинацию.",
      },

    ],
    paste: [
      {
        type: "imageCaptionPost",
        image: "https://i.imgur.com/wR9zhZa.png",
        caption: "Питательная ценность куриного паштета от Ларисы: что нужно знать. Пять причин добавить куриный паштет в свой рацион.",
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
      {
        type: "titleImageTextPost",
        title: "Заключение",
        image: "https://i.imgur.com/wR9zhZa.png",
        bgColor: "#8B4513",
        text: "Фирменный паштет Ларисы — это вкусный и полезный продукт, который сочетает в себе высокое содержание белка и питательных веществ, необходимых для поддержания здоровья и энергии. Идеальный выбор для тех, кто следит за своим здоровьем и стремится к балансу в рационе.",
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
  