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
    // { src: "assets/reviews/instagram-1.jpg", alt: "Відгук в Instagram", source: "instagram" },
    // { src: "assets/reviews/telegram-1.jpg", alt: "Відгук в Telegram", source: "telegram" },
  ],

  /**
   * Фото і відео для галереї практики.
   * Файли — у assets/media/
   */
  media: [
    // { type: "image", src: "assets/media/photo-1.jpg", alt: "Робота з овалом", caption: "Овал" },
  ],
};
