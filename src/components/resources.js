export const resource = {
  ru: {
    additional: {
      title: "Что такое Dpay-кошелек",
      subtitle: "Используйте новые возможности",
      descr:
        "Платежная системе DPAY предлагает универсальное решение для тех, кто хочет попробовать новое – электронный кошелёк. Говоря простым языком, DPAY -кошелёк — это виртуальный счёт, который можно пополнять, оплачивать с него различные товары и услуги и переводить c кошелька на карту и обратно.",
      services: {
        detail: {
          text: "Подробнее",
          icon: "fa-solid fa-arrow-right ml-3",
        },
        autoPay: {
          title: "Услуга «Автоплатеж»",
          subtitle:
            "Для удобства наших пользователей реализованы 2 вида автоплатежей:",
          descr:
            "Уникальная услуга «Автоплатеж» от компании DPAY — это возможность оставаться на связи, либо оплачивать иные услуги партнеров системы в автоматическом режиме.",
          types: ["По расписанию", "По событию"],
          first: {
            title: "Автоплатеж по расписанию",
            text: "Данный автоплатеж позволяет совершать периодические платежи за любые услуги на ежемесячной или еженедельной основе. В рамках данной возможности реализованы следующие варианты:",
            types: [
              "Ежемесячно в последний день",
              "Ежемесячно в указанный день",
              "Еженедельно.",
            ],
            activate: {
              title: "Активация услуги:",
              content:
                "Для создания автоплатежа по расписанию выберите раздел «Оплата». Далее выберите необходимую услугу и другие параметры платежа. При вводе суммы платежа система DPAY предложит создать автоплатеж. Выберите необходимый график платежа и подтвердите автоплатеж.",
            },
          },
          second: {
            title: "Автоплатеж по событию",
            descr:
              "Данный автоплатеж позволяет автоматически пополнять основной баланс Вашего телефонного номера при достижении определенного порога на указанную сумму. Услуга на текущий момент доступна для абонентов UMS, Beeline, Ucell и UzMobile. Сумма пополнения может быть: 5000, 10 000, 15 000, 20 000 и 50 000 сум.",
            activate: {
              title: "Активация услуги:",
              types: [
                "Выберите пункт «Автоплатеж»",
                "Далее, выберите подменю «Создать», укажите номер и установите нужную сумму.",
                "По факту подключения услуги вы получите оповещение в виде SMS-сообщения.",
              ],
              content:
                "В меню «Автоплатеж» вы также можете получить подробную информацию об услуге, настроить список номеров для автопополнения, просмотреть/удалить список номеров для автопополнения.",
            },
          },
        },
        eventPay: {
          title: "Оплата на местах",
          subtitle: "Изменение порядка оплаты на местах",
          descr:
            "Согласно ПП №5252 от 04.10.2021 г. и ПКМ № 943 от 23.11.2019 г. оплаты, проведенные дистанционным образом, должны быть фискализированы и по ним должен быть предоставлен электронный чек с QR-кодом.",
          descr2:
            "С 1 марта 2023 года пользователи могут оплачивать свои покупки через кассовые аппараты, с помощью приложения Dpay.",
          activate: {
            title: "Для этого пользователю необходимо:",
            types: [
              "Сообщить кассиру в точке оплаты, что он желает оплатить покупки через Dpay.",
              "Нажать в приложении Dpay кнопку ///.",
              "Продемонстрировать отображенный на экране телефона QR-код, для сканирования и оплаты.",
              "Готово! После сканирования, на экране отобразится уведомление об успешном платеже.",
            ],
            warn: "Внимание! При оплате данным способом, пользователь получает кешбэк как от Dpay, так и от приложения SoliqUz без сканирования чека.",
          },
        },
        myInvoice: {
          title: "Услуга «Мои квитанции»",
          descr:
            "Возможность оплаты коммунальных услуг существует в DPAY давно. Но в некоторых ситуациях могут пригодиться фактические квитанции об успешных оплатах.",
          descr2:
            "Специально для таких случаев в системе DPAY появилась возможность скачать электронную версию квитанции или заказать бумажную версию с доставкой по почте в любую точку Узбекистана.",
          typesTitle:
            "Квитанции предоставляются по совершенным оплатам коммунальных услуг и некоторых других сервисов:",
          types: [
            "Газ",
            "Холодная вода",
            "Электроэнергия",
            "Вывоз мусора",
            "Горячая вода и отопление",
            "Штрафы ГУБДД",
          ],
        },
        transfer: {
          title: "Перевод с карты на карту",
          descr:
            "В системе DPAY можно переводить денежные средства непосредственно с одной пластиковой карты на другую, эмитированные банками Узбекистана.",
          descr2:
            "Для удобства пользователей DPAY перевод средств между картами можно осуществить по номеру пластиковой карты получателя, либо по номеру его телефона. При переводе по номеру телефона, получение средств будет возможно после регистрации данного номера в системе DPAY, если таковое не было сделано ранее.",
          types: [
            "Перевод по номеру сотового телефона",
            "Перевод по номеру банковской карты",
            "Перевод между своими банковскими картами",
            "Запрос средств по номеру у другого пользователя",
          ],
        },
      },
    },
    documents: {
      services: [
        { text: "Услуга «Автоплатеж»", link: "auto" },
        { text: "Оплата на местах", link: "place" },
        { text: "Услуга «Мои квитанции»", link: "invoice" },
        { text: "Перевод с карты на карту", link: "card" },
        { text: "Телеграм-бот", link: "https://t.me/dpaybot" },
      ],
      help: [
        {
          text: "Взаимодействие с оператором",
          link: "./Files/Payment_with_client.pdf",
        },
        { text: "Инфо о управлении рисками", link: ".pdf" },
        { text: "Инфо о системе контроля", link: "./Files/system_control.pdf" },
        { text: "Инфо-Безопасность", link: "./Files/info_security.pdf" },
        {
          text: "Политика конфиденциальности",
          link: "./Files/Policy_privacy.pdf",
        },
        { text: "Преступная деятельность", link: "./Files/Jinoiy.pdf" },
        { text: "Публичная оферта", link: "./Files/public_offer.pdf" },
      ],
      about: [
        { text: "Что такое Dpay", link: "/Services" },
        { text: "Описание и возможности системы", link: "#more" },
        { text: "Тарифы", link: "#rate" },
        { text: "Вакансии", link: "#jobs" },
      ],
    },
    navLinks: ["Услуги", "Помощь", "О сервисе"],
    mainTitle:
      "Dpay - это платежная система и мобильный банкинг в Узбекистане, быстрая оплата через мобильное приложение с использованием пластиковой карты UZCARD и HUMO.",
    descr: "Описание и возможности системы",
    popularQuests: "Популярные вопросы",
    abilsTitle: "С помощью Dpay вы можете:",
    service: {
      title: "Тарифы на услуги",
      subtitle: "Обслуживание по системе Dpay",
      subtitle2: "SMS-оповещения",
      descr:
        "Оплата услуг, связанных с получением и отправкой SMS-сообщений в рамках пользования услугой Dpay, списывается оператором сотовой связи непосредственно с абонентского счета клиента.",
      smss: [
        {
          text: "1 SMS-сообщение, отправленное пользователю системой Dpay при успешном проведении операции (оплата/»Автоплатеж»/перевод/переброс средств/запрос баланса)",
          price: [
            "Ucell, Uzmobile - 21.05 сум",
            "Beeline - 84.2 сум",
            "Mobi - 42.1 сум",
            "Perfectum - 25 сум",
          ],
        },
        {
          text: "1 SMS-сообщение, отправленное пользователю системой Dpay при неуспешном проведении операции (оплата/перевод/переброс средств/запрос баланса)",
          price: ["Бесплатно"],
        },
        {
          text: "1 SMS-сообщение, отправленное пользователю системой Dpay и необходимое для входа в личный кабинет (при выборе пользователем способа авторизации (входа) «Разовым SMS»)",
          price: ["Бесплатно"],
        },
      ],
      services: [
        {
          text: "Подключение к системе Dpay",
          price: ["Бесплатно"],
        },
        {
          text: "Использование системы Dpay",
          price: ["Бесплатно"],
        },
        {
          text: "Оплата за товары и услуги по системе Dpay",
          price: ["0% от суммы платежа*"],
        },
        {
          text: "Перевод средств с пластиковой карты на карту",
          price: ["1% от суммы перевода"],
        },
        {
          text: "История платежей (в месяц)",
          price: ["1000 сум"],
        },
        {
          text: "Открытие Dpay-кошелька",
          price: ["Бесплатно"],
        },
        {
          text: "Пополнение Dpay-кошелька",
          price: ["Бесплатно"],
        },
        {
          text: "Перевод с Dpay-кошелька на Dpay-кошелёк",
          price: ["0%"],
        },
        {
          text: "Перевод с Dpay-кошелька на пластиковые карты",
          price: ["1.5% от суммы перевода"],
        },
        {
          text: "Пополнение Dpay-кошелька через систему PAYNET",
          price: ["2.0%"],
        },
        {
          text: "Пополнение Dpay-кошелька с международных карт VISA и MasterCARD",
          price: ["3.7%"],
        },
        {
          text: "Идентификация физического лица",
          price: ["2250 сум"],
        },
      ],
    },
    jobs: {
      title: "Работа в Dpay",
      descr: "Мы объявляем об открытии ряда вакансий на должности:",
      jobs: [
        {
          text: "UX/UI дизайнера.",
          icon: "fa-brands fa-uikit text-green-400",
        },
        {
          text: "Middle/Senior JAVA Developer.",
          icon: "fa-brands fa-java text-yellow-400",
        },
        {
          text: "PR manager",
          icon: "fa-solid fa-user-tie text-sky-400",
        },
      ],
      inner: {
        first:
          "Нам нужны специалисты среднего уровня или тот, кто готов быстро расти, тот, кто умеет работать руками, понимать дизайн-задачи и следить за достижением результата.",
        second:
          "Если вы тот, кого мы ищем, то скорей присоединяйтесь к нашей дружной команде и добивайтесь успеха вместе с Dpay.",
        email: "Отправить резюме",
      },
    },
    features: [
      {
        thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/payments.svg",
        title: "Пластиковые карты",
        text: "	В Dpay работают пластиковые карты, к которым подключена услуга SMS-информирования. SMS-информирование подключается бесплатно в любом банке или инфокиоске.",
      },
      {
        thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/security.svg",
        title: "Денежные переводы",
        text: "Деньги с карты на карту в Dpay переводятся моментально. Чтобы каждый раз не вводить номер карты получателя перевода, в Dpay можно сохранить получателя перевода и повторять перевод по имени получателя.",
      },
      {
        thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/statistics.svg",
        title: "Платежи",
        text: "В Dpay можно оплатить банковские кредиты, кредиты на бытовую технику, налоги и сборы, услуги бюджетных организаций, свет, газ, интернет и многое другое.",
      },
      // {
      //   thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/support.svg",
      //   title: "",
      //   text: "",
      // },
      {
        thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/cashback.svg",
        title: "Оплата «на местах»",
        text: "Оплата «на местах» — это альтернативный способ оплаты товаров и услуг с помощью мобильного приложения Dpay для Android и iOS.",
      },
      // {
      //   thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/happy.svg",
      //   title: "С помощью Dpay вы можете:",
      //   text: "Перевести деньги между картами UZCARD и HUMO\n\n Оплатить штрафы ГУБДД Пополнение международных электронных кошельков Оплатить коммунальные услуги Узбекистана Оплатить локальную и зарубежную мобильную связь Оплатить мировые игровые сервисы Оплатить зарубежное и локальное онлайн телевидение Оплатить покупки в интернет-магазинах",
      // },
    ],
    slides: [
      {
        thumb:
          "https://dpay.uz/wp/wp-content/uploads/2022/02/01-app-showcase-screens.png",
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 1.Advanced bydget managment",
      },
      {
        thumb:
          "https://dpay.uz/wp/wp-content/uploads/2022/02/02-app-showcase-screens.png",
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 2.Latest transaction history",
      },
      {
        thumb:
          "https://dpay.uz/wp/wp-content/uploads/2022/02/03-app-showcase-screens.png",
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 3.Transfers to people from your contact list",
      },
      {
        thumb:
          "https://dpay.uz/wp/wp-content/uploads/2022/02/04-app-showcase-screens.png",
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 4.Card-tocard transfers",
      },
    ],
    logos: [
      "https://dpay.uz/wp/wp-content/uploads/2022/02/01-brands.svg",
      "https://dpay.uz/wp/wp-content/uploads/2022/02/02-brands.svg",
      "https://dpay.uz/wp/wp-content/uploads/2022/02/03-brands.svg",
      "https://dpay.uz/wp/wp-content/uploads/2022/02/04-brands.svg",
      "https://dpay.uz/wp/wp-content/uploads/2022/02/05-brands.svg",
      "https://dpay.uz/wp/wp-content/uploads/2022/02/06-brands.svg",
    ],
    howUse: [
      "Перевести деньги между картами UZCARD и HUMO",
      "Оплатить штрафы ГУБДД",
      "Пополнение международных электронных кошельков",
      "Оплатить коммунальные услуги Узбекистана ",
      "Оплатить локальную и зарубежную мобильную связь",
      "Оплатить мировые игровые сервисы",
      "Оплатить зарубежное и локальное онлайн телевидение",
      "Оплатить покупки в интернет-магазинах",
    ],
    characters: [
      {
        thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/42-avatar.png",
      },
      {
        thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/43-avatar.png",
      },
      {
        thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/44-avatar.png",
      },
      {
        thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/45-avatar.png",
      },
      {
        thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/46-avatar.png",
      },
      {
        thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/47-avatar.png",
      },
    ],
    divisions: [
      {
        title: "Как в Платежах на dpay.uz найти услугу, которую хочу оплатить?",
        text: "Просто введите необходимую услугу или название поставщика услуги в строку поиска в сервисе «Платежи». Напечатать название услуги можно как на латинице, так и на кириллице. Если не нашли необходимую услугу, заполните форму. Мы свяжемся с поставщиком услуги и постараемся её добавить на Dpay.uz.",
      },
      {
        title: "Что можно делать в мобильном приложении Dpay.uz?",
        text: "В мобильном приложении Dpay.uz возможно без комиссии пополнять баланс мобильного, оплачивать счёта за коммуналку, Узбектелеком, детский садик, штрафы ПДД и ещё более 10 000 различных услуг по всему Узбекистану. ",
      },
      {
        title: "Как быстро пройдет мой платёж на Dpay.uz?",
        text: "В пользу большинства поставщиков услуг платёж доходит в течение 1 минуты.",
      },
      {
        title: "Не пришел проверочный код",
        text: "Смс с проверочным кодом приходит в течение 1 минуты. Смс с кодом приходит позже, когда у вашего сотового оператора технические проблемы. Если смс с кодом не пришло в течение 5 минут — обратитесь в службу технической поддержки Dpay по телефону: +998 71 200-89-00.",
      },
      {
        title: "Срок действия карты истёк",
        text: "Чтобы продлить срок действия карты — обратитесь в любой филиал банка, который выпустил карту. В банке предъявите паспорт для подтверждения личности.",
      },
      {
        title: "Карта попала в стоп-лист",
        text: "Чтобы исключить карту из стоп-листа — обратитесь в любой филиал банка, который выпустил карту. В банке предъявите паспорт для подтверждения личности.",
      },
      {
        title: "Превышен лимит ввода PIN-кода карты",
        text: "Если в физическом терминале 3 раза вводится неправильный PIN-код карты — карта блокируется. Чтобы разблокировать карту — обратитесь в любой филиал банка, который выпустил карту. В банке предъявите паспорт для подтверждения личности.",
      },
      {
        title: "Номер карты стёрся",
        text: "Чтобы восстановить номер и другие надписи на карте — обратитесь в любой филиал банка, который выпустил карту. В банке предъявите паспорт для подтверждения личности. Номер и все надписи на карте, в банке восстановят с помощью специального устройства — графического персонизатора.",
      },
      {
        title: "Деньги на карту не поступили",
        text: "СМС с информацией о поступлении денег на карту приходит в течение 1 минуты. СМС придёт позже, когда у вашего сотового оператора технические проблемы.",
      },
    ],
    contacts: [
      "OOO “RAQAMLI BIZNES AGREGATOR”",
      "Телефон: +998 (71) 2078080",
      "E-mail: info@dgb.uz",
      "Telegram: @dpaybot",
      "Рабочий график: с ПН по ПТ с 9:00 до 18:00",
      "Круглосуточная горячая линия: +998 (71) 200-95-00, +998 (71) 200-89-00",
    ],
  },
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  uz: {
    additional: {
      title: "Dpay Hamyon nima?",
      subtitle:
        "Dpay -Hamyon — bu virtual hisob bo'lib, uni to'ldirish mumkin, undan turli xizmatlarga va xaridlarga to'lasa va pul o'tkazmalarini amalga oshirsa bo'ladi.",
      descr:
        "DPAY to‘lov tizimi yangi narsalarni sinab ko‘rmoqchi bo‘lganlar uchun universal yechim – elektron hamyonni taklif etadi. Oddiy qilib aytganda, DPAY hamyoni virtual hisob bo'lib, uni to'ldirish, undan turli xil tovarlar va xizmatlar uchun to'lash, hamyondan kartaga va aksincha o'tkazish mumkin.",
      services: {
        detail: {
          text: "Batafsil",
          icon: "fa-solid fa-arrow-right ml-3",
        },
        autoPay: {
          title: `"Avtoto'lov" xizmati`,
          subtitle:
            "Foydalanuvchilarimizga qulaylik yaratish maqsadida 2 turdagi avtoto'lovlar amalga oshiriladi:",
          descr:
            "DPAY’dan noyob “Avtoto‘lov” xizmati avtomatik rejimda aloqada bo‘lish yoki tizim hamkorlarining boshqa xizmatlari uchun haq to‘lash imkoniyatidir",
          types: ["Rejalashtirilgan", "Voqea bo'yicha"],
          first: {
            title: "Rejalashtirilgan avtomatik to'lov",
            text: "Ushbu avtomatik to'lov har qanday xizmat uchun oylik yoki haftalik ravishda takroriy to'lovlarni amalga oshirish imkonini beradi. Ushbu parametr quyidagi variantlarni taqdim etadi:",
            types: [
              "Har oy oxirgi kuni",
              "Belgilangan sanada har oy",
              "Haftalik",
            ],
            activate: {
              title: "Xizmatni faollashtirish:",
              content: `Jadvalga muvofiq avtomatik to'lovni yaratish uchun "To'lov" bo'limini tanlang. Keyinchalik, kerakli xizmatni va boshqa to'lov variantlarini tanlang. To'lov miqdorini kiritishda DPAY tizimi avtomatik to'lovni yaratishni taklif qiladi. Kerakli to'lov jadvalini tanlang va avtomatik to'lovni tasdiqlang.`,
            },
          },
          second: {
            title: "Voqea bo'yicha avtomatik to'lov",
            descr:
              "Ushbu avtomatik to'lov belgilangan miqdor uchun ma'lum chegaraga erishilganda telefon raqamingizning asosiy balansini avtomatik ravishda to'ldirish imkonini beradi. Xizmat hozirda UMS, Beeline, Ucell va UzMobile abonentlari uchun amal qiladi. To'ldirish miqdori: 5000, 10 000, 15 000, 20 000 va 50 000 so'm bo'lishi mumkin.",
            activate: {
              title: "Xizmatni faollashtirish:",
              types: [
                `Tanlang paragraf "Avtomatik to'lov»`,
                `Keyinchalik, "Yaratish" pastki menyusini tanlang, raqamni belgilang va kerakli miqdorni belgilang`,
                "Xizmatga ulangandan so'ng siz SMS-xabar shaklida bildirishnoma olasiz",
              ],
              content:
                "Shuningdek, “Avtoto‘lov” menyusida siz xizmat haqida batafsil ma’lumot olishingiz, avtomatik to‘ldirish uchun raqamlar ro‘yxatini sozlashingiz, avtomatik to‘ldirish uchun raqamlar ro‘yxatini ko‘rishingiz/o‘chirishingiz mumkin.",
            },
          },
        },
        eventPay: {
          title: "Joyida to'lash",
          subtitle: "Joylarda to’lov tartibida o’zgarishlar haqida",
          descr:
            "04.10.2021-yilning PQ 5252, hamda Vazirlar Mahkamasining 23.11.2019 yildagi №943 qaroriga binoan, masofadan amalga oshiriluvchi to’lovlar fiskallashtirilishi va ular bo’yicha QR-kodga ega elektron chek taqdim etilishi lozim.",
          descr2:
            "2023-yilning 1-mart kunidan boshlab foydalanuvchilar to’lovlarni kassa apparatlari orqali Dpay ilovasi yordamida amalga oshirish imkoniyatiga ega bo’ladilar.",
          activate: {
            title: "Buning uchun:",
            types: [
              "To’lov nuqtasida sotuvchi-kassirga Dpay orqali to’lamoqchi ekanligingizni ayting",
              "Dpay ilovasida /// tugmasini bosing",
              "Skanerlash va to’lash uchun telefon ekranida paydo bo’lgan QR-kodni kassirga ko’rsating",
              "Tayyor! Skanerlash yakunlangandan so’ng, ekranda muvaffaqiyatli to’lov haqida xabar paydo bo’ladi",
            ],
            warn: "Diqqat! Ushbu to’lov usulidan foydalanganda,  foydalanuvchi chekni skanerlamagan holda ham “Dpay”dan, ham “SoliqUz” ilovasidan cashback oladi",
          },
        },
        myInvoice: {
          title: '"Kvitantsiyalarim" xizmati',
          descr:
            "Kommunal xizmatlarga to'lash imkoni DPAY tizimida beri joriy qilingan. Ba'zi holatlarda ushbu to'lovlar bo'yicha kvitantsiyalar foydali bo’lishi mumkin.",
          descr2:
            "Aynan shunday vaziyatlar uchun DPAY tizimida kvitantsiyaning elektron shaklini yuklab olish yoki butun O'zbekiston bo'ylab istalgan hududga pochta orqali eltib beriladigan qog'oz shakliga buyurtma berish imkoni ishga tushirildi.",
          typesTitle:
            "Kvitantsiyalar kommunal va ba'zi boshqa xizmatlarga oshirilgan to'lovlar bo'yicha taqdim qilinadi:",
          types: [
            "Gaz",
            "Sovuq suv",
            "Elektroenergiya",
            "Chiqindilarini olib chiqish",
            "Issiq suv va isitish",
            "DYHXX jarimalari",
          ],
        },
        transfer: {
          title: "Kartadan kartaga o'tkazish",
          descr:
            "DPAY tizimida Oʻzbekiston banklari tomonidan chiqarilgan bir plastik kartadan boshqasiga toʻgʻridan-toʻgʻri pul oʻtkazishingiz mumkin.",
          descr2:
            "DPAY foydalanuvchilariga qulaylik yaratish maqsadida pul mablag‘larini oluvchining plastik karta raqami yoki uning telefon raqamidan foydalangan holda kartalar o‘rtasida o‘tkazish mumkin. Telefon raqami orqali pul o'tkazishda, agar bu ilgari amalga oshirilmagan bo'lsa, ushbu raqamni DPAY tizimida ro'yxatdan o'tkazgandan so'ng pul mablag'larini olish mumkin bo'ladi.",
          types: [
            "Mobil telefon raqami orqali o'tkazish",
            "Bank kartasi raqami bo'yicha o'tkazma",
            "Bank kartalaringiz o'rtasida o'tkazma",
            "Boshqa foydalanuvchidan raqam bo'yicha pul so'rash",
          ],
        },
      },
    },
    documents: {
      services: [
        { text: `"Avtoto'lov" xizmati`, link: "auto" },
        { text: "Joyida to'lash", link: "place" },
        { text: '"Kvitantsiyalarim" xizmati', link: "invoice" },
        { text: "Kartadan kartaga o'tkazish", link: "card" },
        { text: "Telegram-bot", link: "https://t.me/dpaybot" },
      ],
      help: [
        {
          text: "Operator bilan suzbat qoidalari",
          link: "./Files/Payment_with_client.pdf",
        },
        { text: "Tizim ma'lumotlari", link: "./Files/risks_control.pdf" },
        {
          text: "Boshqaruv tizimi ma'lumotlari",
          link: "./Files/system_control.pdf",
        },
        { text: "Info-Havsizlik", link: "./Files/info_security.pdf" },
        { text: "Maxfiylik siyosati", link: "./Files/policy_privacy.pdf" },
        { text: "Ommaviy oferta", link: "./Files/Ommaviy_oferta.pdf" },
        { text: "jinoiy faoliyat", link: "./Files/Jinoiy.pdf" },
      ],
      about: [
        { text: "Dpay nima", link: "/Services" },
        { text: "Tizimning tavsifi va imkoniyatlari", link: "#more" },
        { text: "Tariflar", link: "#rate" },
        { text: "Vakansiyalar", link: "#jobs" },
      ],
    },
    navLinks: ["Xizmatlar", "Yordam", "FAQs"],
    mainTitle:
      "Dpay bu – O‘zbekistonda to‘lov tizimi va mobil banking, UZCARD va HUMO plastik kartalaridan foydalangan holda mobil ilova orqali tezkor to‘lov.",
    descr: "Tizimning tavsifi va imkoniyatlari",
    popularQuests: "Ommabop savollar",
    abilsTitle: "Dpay bilan siz yana:",
    service: {
      title: "Xizmatlar uchun tariflar",
      subtitle: "Dpay tizimi bo'yicha xizmat ko'rsatish",
      subtitle2: "SMS-xabarnomalar",
      descr:
        "Dpay xizmatlaridan foydalanish doirasida SMS-xabarlar yuborish va olish bilan bog’liq xizmatlari uchun to’lov mobil operator tomonidan bevosita abonent hisobidan yechib olinadi.",
      smss: [
        {
          text: "Dpay tizimi foydalanuvchisiga (to’lov, “Avtoto’lov”/o’tkazish/balansni so’rash) operatsiyalar muvaffaqiyatli amalga oshirilganda yuborilgan 1 SMS-xabar uchun",
          price: [
            "Ucell, Uzmobile - 21.05 so'm",
            "Beeline - 84.2 so'm",
            "Mobi - 42.1 so'm",
            "Perfectum - 25 so'm",
          ],
        },
        {
          text: "Dpay tizimi foydalanuvchisiga (to’lov/o’tkazma/balans so’rash) operatsiyalar muvaffaqiyatli amalga oshmay qolganda yuborilgan 1 SMS-xabar uchun	Bepul",
          price: ["Bepul"],
        },
        {
          text: "Dpay tizimi foydalanuvchisiga shaxsiy kabinetga/ilovaga kirish uchun yuborilgan 1 SMS-xabar uchun",
          price: ["Bepul"],
        },
      ],
      services: [
        {
          text: "Dpay tizimiga ulanish",
          price: ["Bepul"],
        },
        {
          text: "Dpay tizimidan foydalanish",
          price: ["Bepul"],
        },
        {
          text: "Dpay tizimi orqali mahsulot va xizmatlarga uchun to’lovlar",
          price: ["To’lov summasidan 0%*"],
        },
        {
          text: "Plastik kartadan boshqa kartaga mablag’ o’tkazish",
          price: ["O’tkazma summasidan 1%"],
        },
        {
          text: "To’lovlar tarixi (oyiga)",
          price: ["1000 so'm"],
        },
        {
          text: "Dpay-Hamyonni ochish",
          price: ["Bepul"],
        },
        {
          text: "Dpay-Hamyonni to'ldirish",
          price: ["Bepul"],
        },
        {
          text: "Dpay-Hamyondan Dpay-Hamyonga mablag' o'tkazish",
          price: ["0%"],
        },
        {
          text: "Dpay-Hamyondan kartaga mablag’ o’tkazish",
          price: ["O’tkazma summasidan 1,5%"],
        },
        {
          text: "PAYNET tizimi orqali Dpay-Hamyonni to'ldirish",
          price: ["2%"],
        },
        {
          text: "VISA va MasterCARD xalqaro kartalari orqali Dpay-Hamyonni to'ldirish",
          price: ["3.7%"],
        },
        {
          text: "Jismoniy shaxs identifikatsiyasi",
          price: ["2250 so'm"],
        },
      ],
    },
    jobs: {
      title: "Dpayda biz bilan ishlang",
      descr:
        "Biz quyidagi bir qancha boʻsh ish oʻrinlari uchun tanlov eʼlon qilamiz:",
      jobs: [
        {
          text: "UX/UI dizayneri.",
          icon: "fa-brands fa-uikit text-green-400",
        },
        {
          text: "O'rta/katta JAVA dasturchisi.",
          icon: "fa-brands fa-java text-yellow-400",
        },
        {
          text: "PR menejeri",
          icon: "fa-solid fa-user-tie text-sky-400",
        },
      ],
      inner: {
        first:
          "Bizga oliy yoki o'rta darajadagi mutaxassislar yoki tez o'sishga tayyor bo'lgan, o'z qo'llari bilan ishlay oladigan, dizayn vazifalarini tushunadigan va natijalarga erishishni nazorat qiladigan kishi kerak.",
        second:
          "Agar siz biz izlayotgan mutaxassis bo'lsangiz, unda bizning do'stona jamoamizga qo'shiling va Dpay bilan muvaffaqiyatga erishing.",
        email: "Rezyumeni yuborish",
      },
    },
    features: [
      {
        thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/payments.svg",
        title: "Plastik kartalar​",
        text: "Dpay ilovasida SMS-xabarnoma xizmatiga ulangan plastik kartalardan foydalaniladi. SMS-xabarnoma bepul ravishda, istalgan bank yoki infokioskda yoqtirishingiz mumkin.",
      },
      {
        thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/security.svg",
        title: "Pul o‘tkazmalari​",
        text: "Dpay ilovasida pul mablag’lari kartadan kartaga bir lahzada o‘tadi. O‘tkazma qabul qiluvchining karta raqamini har gal takroran kiritib o‘tirmaslik uchun Dpay da o‘tkazma qabul qiluvchining ism-sharifini saqlab qo‘yish mumkin – keyingi safar qabul qiluvchi ismini tanlashingiz kifoya.",
      },
      {
        thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/statistics.svg",
        title: "To‘lovlar​",
        text: "Dpay orqali bank kreditlarini, maishiy texnika uchun kreditlarni, soliqlar va yig‘imlarni, byudjet tashkilotlari xizmatlari, elektr, gaz, internet va boshqa ko‘plab xizmatlar haqlarini to‘lash mumkin.",
      },
      // {
      //   thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/support.svg",
      //   title: "",
      //   text: "",
      // },
      {
        thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/cashback.svg",
        title: '"Joyida" to‘lash​',
        text: '"Joyida" to‘lash – Android va iOS uchun mo‘ljallangan Dpay mobil ilovasi yordamida tovarlar va xizmatlar haqin to‘lashning muqobil usulidir.',
      },
    ],
    slides: [
      {
        thumb:
          "https://dpay.uz/wp/wp-content/uploads/2022/02/01-app-showcase-screens.png",
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 1.Advanced bydget managment",
      },
      {
        thumb:
          "https://dpay.uz/wp/wp-content/uploads/2022/02/02-app-showcase-screens.png",
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 2.Latest transaction history",
      },
      {
        thumb:
          "https://dpay.uz/wp/wp-content/uploads/2022/02/03-app-showcase-screens.png",
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 3.Transfers to people from your contact list",
      },
      {
        thumb:
          "https://dpay.uz/wp/wp-content/uploads/2022/02/04-app-showcase-screens.png",
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 4.Card-tocard transfers",
      },
    ],
    logos: [
      "https://dpay.uz/wp/wp-content/uploads/2022/02/01-brands.svg",
      "https://dpay.uz/wp/wp-content/uploads/2022/02/02-brands.svg",
      "https://dpay.uz/wp/wp-content/uploads/2022/02/03-brands.svg",
      "https://dpay.uz/wp/wp-content/uploads/2022/02/04-brands.svg",
      "https://dpay.uz/wp/wp-content/uploads/2022/02/05-brands.svg",
      "https://dpay.uz/wp/wp-content/uploads/2022/02/06-brands.svg",
    ],
    howUse: [
      "UZCARD va HUMO kartalari o'rtasida pul o'tkazmalari",
      "YHXBB jarimalarini to'lash",
      "Xalqaro elektron hamyonlarni to'ldirish",
      "O‘zbekistonda kommunal to‘lovlarni to‘lash",
      "Mahalliy va xorijiy uyali aloqa uchun to'lov",
      "Global o'yin xizmatlari uchun to'lov",
      "Xorijiy va mahalliy onlayn TV uchun to'lov",
      "Onlayn do'konlarda xaridlar uchun to'lov",
    ],
    characters: [
      {
        thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/42-avatar.png",
      },
      {
        thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/43-avatar.png",
      },
      {
        thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/44-avatar.png",
      },
      {
        thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/45-avatar.png",
      },
      {
        thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/46-avatar.png",
      },
      {
        thumb: "https://dpay.uz/wp/wp-content/uploads/2022/02/47-avatar.png",
      },
    ],
    divisions: [
      {
        title:
          "Men toʻlamoqchi boʻlgan xizmatni dpay.uz saytidagi Toʻlovlar boʻlimida qanday topsam boʻladi?",
        text: `"To'lovlar" xizmatidagi qidiruv satriga kerakli xizmatni yoki xizmat ko'rsatuvchi provayder nomini kiritish kifoya. Xizmat nomini lotin va kirill alifbolarida chop etishingiz mumkin. Agar kerakli xizmatni topa olmasangiz, shaklni to'ldiring. Biz xizmat ko‘rsatuvchi provayder bilan bog‘lanib, uni Dpay.uz saytiga qo‘shishga harakat qilamiz.`,
      },
      {
        title: "Dpay.uz mobil ilovasida nima qilish mumkin?",
        text: "Dpay.uz mobil ilovasida O‘zbekiston bo‘ylab mobil balansni komissiyasiz to‘ldirish, kommunal to‘lovlar, “O‘zbektelekom”, bolalar bog‘chasi, yo‘l harakati jarimalari va 10 000 dan ortiq turli xizmatlarni to‘lash mumkin.",
      },
      {
        title: "Mening toʻlovim Dpay.uz’ga qanchalik tez tushadi?",
        text: "Aksariyat xizmat ko'rsatuvchi provayderlar to'lovni 1 daqiqa ichida oladilar.",
      },
      {
        title: "Tasdiqlash kodi olinmadi",
        text: "Tasdiqlash kodi bilan SMS 1 daqiqa ichida keladi. Mobil operatoringiz texnik muammolarga duch kelganida kodli SMS keyinroq keladi. Agar kodli SMS 5 daqiqa ichida kelmasa, Dpay texnik yordamiga quyidagi +998 71 200-89-00 telefon raqami orqali murojaat qiling.",
      },
      {
        title: "Karta muddati tugagan",
        text: "Kartaning amal qilish muddatini uzaytirish uchun kartani chiqargan bankning istalgan filialiga murojaat qiling. Shaxsingizni tasdiqlash uchun pasportingizni bankka taqdim eting.",
      },
      {
        title: "Karta to'xtash ro'yxatida",
        text: "To'xtash ro'yxatidan kartani chiqarib tashlash uchun bankning istalgan filialiga murojaat qiling, kartani kim chiqargan. Shaxsingizni tasdiqlash uchun pasportingizni bankka taqdim eting.",
      },
      {
        title: "Karta PIN kodini kiritish chegarasidan oshib ketdi",
        text: "Agar jismoniy terminalda kartaning PIN-kodi noto'g'ri 3 marta kiritilsa, karta bloklanadi. Kartani blokdan chiqarish uchun kartani chiqargan bankning istalgan filialiga murojaat qiling. Shaxsingizni tasdiqlash uchun pasportingizni bankka taqdim eting.",
      },
      {
        title: "Karta raqami oʻchirildi",
        text: "Kartadagi raqam va boshqa yozuvlarni tiklash uchun kartani chiqargan bankning istalgan filialiga murojaat qiling. Shaxsingizni tasdiqlash uchun pasportingizni bankka taqdim eting. Bankdagi kartadagi raqam va barcha yozuvlar maxsus qurilma - grafik personizer yordamida tiklanadi.",
      },
      {
        title: "Pul kartaga tushmagan",
        text: "Kartaga pul tushganligi haqidagi ma'lumot bilan SMS 1 daqiqa ichida keladi. Mobil operatoringiz texnik muammolarga duch kelganda SMS keyinroq keladi.",
      },
    ],
    contacts: [
      "“RAQAMLI BIZNES AGREGATOR” MChJ",
      "Telefon: +998 (71) 2078080",
      "E-mail: info@dgb.uz",
      "Telegram: @dpaybot",
      "Ish tartibi: dushanbadan jumagacha 9:00 dan 18:00 gacha",
      "24 soatlik ishonch telefoni: +998 (71) 200-95-00, +998 (71) 200-89-00",
    ],
  },
};
