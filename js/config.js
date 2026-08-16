window.CLUB_CONFIG = {
  /**
   * Курси з окремою ціною і кнопкою WayForPay.
   * Щоб додати курс — скопіюйте об’єкт нижче і вставте посилання на інвойс.
   */
  courses: [
    {
      id: "evening-club",
      title: "Вечірній клуб з тейпування",
      badge: "30 днів",
      description:
        "30 днів системної роботи з обличчям, шиєю та декольте — і ще 2 тижні доступу до матеріалів після завершення.",
      price: "550 грн",
      payUrl: "https://secure.wayforpay.com/button/be814dabdf12f",
      cta: "Оплатити участь",
      featured: true,
    },
    // {
    //   id: "course-2",
    //   title: "Назва курсу",
    //   badge: "Онлайн",
    //   description: "Короткий опис програми.",
    //   price: "1200 грн",
    //   payUrl: "https://secure.wayforpay.com/button/xxxxxxxx",
    //   cta: "Оплатити курс",
    // },
  ],

  /**
   * Відгуки — скріни з Instagram і Telegram.
   * 1. Покладіть файли в assets/reviews/
   * 2. Додайте їх у масив нижче.
   *
   * source: "instagram" | "telegram"
   */
  reviews: [
    { src: "assets/reviews/IMG_0978.jpeg", alt: "Відгук у Telegram", source: "telegram" },
    { src: "assets/reviews/IMG_0979.png", alt: "Відгук у Telegram", source: "telegram" },
    { src: "assets/reviews/IMG_0980.jpeg", alt: "Відгук у Telegram", source: "telegram" },
    { src: "assets/reviews/IMG_0981.jpeg", alt: "Відгук у Telegram", source: "telegram" },
    { src: "assets/reviews/IMG_0982.png", alt: "Відгук у Telegram", source: "telegram" },
    { src: "assets/reviews/IMG_0983.jpeg", alt: "Відгук у Telegram", source: "telegram" },
    { src: "assets/reviews/IMG_0984.jpeg", alt: "Відгук у Telegram", source: "telegram" },
    { src: "assets/reviews/IMG_0985.png", alt: "Відгук у Telegram", source: "telegram" },
    { src: "assets/reviews/IMG_0986.jpeg", alt: "Відгук у Telegram", source: "telegram" },
    { src: "assets/reviews/IMG_0987.png", alt: "Відгук у Telegram", source: "telegram" },
    { src: "assets/reviews/IMG_0988.jpeg", alt: "Відгук у Telegram", source: "telegram" },
    { src: "assets/reviews/IMG_0989.jpeg", alt: "Відгук у Telegram", source: "telegram" },
  ],

  /**
   * Фото і відео для галереї практики.
   * Файли — у assets/media/
   */
  media: [
    // { type: "image", src: "assets/media/photo-1.jpg", alt: "Робота з овалом", caption: "Овал" },
  ],
};
