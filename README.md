# Каталог и витрина отечественных дизайн-систем (Design Systems Club)

Репозиторий-портфолио со структурированным каталогом отечественных компонентных дизайн-систем, собранных с портала [Design Systems Club](http://designsystemsclub.ru/), а также интерактивной витриной компонентов на **Storybook** и автоматическим деплоем на **GitHub Pages**.

---

## 📚 Каталог дизайн-систем

В таблице ниже собраны ссылки на официальный код (репозитории), сайты документации, исходные данные из каталога `designsystemsclub.ru` и папки в репозитории:

| № | Дизайн-система | Компания / Организация | Ссылка на код (Репозиторий) | Официальный сайт / Гайдлайны | Папка в репозитории |
|---|----------------|------------------------|-----------------------------|------------------------------|---------------------|
| 1 | **Дизайн Альфа-Банка** | Альфа-Банк | [core-ds/core-components](https://github.com/core-ds/core-components) | [design.alfabank.ru](http://design.alfabank.ru/) | [`design-systems/alfabank/`](./design-systems/alfabank/) |
| 2 | **BARS Group** | BARS Group | *Закрытый репозиторий компании* | [design.bars.group](https://design.bars.group/) | [`design-systems/barsgroup/`](./design-systems/barsgroup/) |
| 3 | **Студия Олега Чулакова** | Студия Олега Чулакова | *Закрытая платформа студии* | [design.chulakov.ru](https://design.chulakov.ru/) | [`design-systems/chulakov/`](./design-systems/chulakov/) |
| 4 | **Дизайн Государственных Систем** | Государственные Системы (AIC / Минцифры) | [govdesign/symbols & repos](https://github.com/govdesign) | [gov.design](http://gov.design/) | [`design-systems/gov/`](./design-systems/gov/) |
| 5 | **Ivi.ru** | Онлайн-кинотеатр ivi | *Внутренняя библиотека онлайн-кинотеатра* | [design.ivi.ru](https://design.ivi.ru/) | [`design-systems/ivi/`](./design-systems/ivi/) |
| 6 | **Paradigm** | Mail.Ru Group / VK | [VKCOM/VKUI](https://github.com/VKCOM/VKUI) & [paradigm-tokens](https://github.com/VKCOM/paradigm-tokens) | [design.mail.ru/paradigm](http://design.mail.ru/paradigm/) | [`design-systems/mailru/`](./design-systems/mailru/) |
| 7 | **Rambler UI** | Rambler&Co | [rambler-digital-solutions/rambler-ui](https://github.com/rambler-digital-solutions/rambler-ui) | [brand.rambler.ru](https://brand.rambler.ru/) / [Showcase](https://rambler-digital-solutions.github.io/rambler-ui/) | [`design-systems/rambler/`](./design-systems/rambler/) |
| 8 | **Контур.Гайды (React UI)** | СКБ Контур | [skbkontur/retail-ui](https://github.com/skbkontur/retail-ui) | [guides.kontur.ru](https://guides.kontur.ru/) / [tech.skbkontur.ru](http://tech.skbkontur.ru/react-ui/) | [`design-systems/kontur/`](./design-systems/kontur/) |
| 9 | **Лего (БЭМ)** | Яндекс | [bemdesign](https://github.com/bemdesign), [beast](https://github.com/kovchiy/beast), [dpt](https://github.com/yandex/dpt) | [ru.bem.info](https://ru.bem.info/) / [bem.design](http://bem.design) | [`design-systems/yandex/`](./design-systems/yandex/) |
| 10 | **Acronis** | Acronis | [acronis](https://github.com/acronis) *(публичные компоненты)* | [Статьи на Хабре](https://habrahabr.ru/company/acronis/blog/338246/) | [`design-systems/acronis/`](./design-systems/acronis/) |
| 11 | **МегаФон** | МегаФон | *Внутренний UI-kit компании* | [ui.megafon.ru](http://ui.megafon.ru/) | [`design-systems/megafon/`](./design-systems/megafon/) |
| 12 | **Тинькофф (Taiga UI)** | Т-Банк (Тинькофф) | [taiga-family/taiga-ui](https://github.com/taiga-family/taiga-ui) *(ex-Tinkoff/taiga-ui)* | [Статьи и гайды](https://habrahabr.ru/company/tinkoff/blog/339660/) | [`design-systems/tinkoff/`](./design-systems/tinkoff/) |

---

## 🚀 Запуск и сборка Storybook

```bash
# Установка зависимостей
npm install

# Запуск локального сервера Storybook
npm run storybook

# Сборка статического сайта Storybook
npm run build-storybook
```

## 🤖 CI/CD и деплой на GitHub Pages

Файл конфигурации деплоя находится в `workflows/deploy-storybook.yml`.
Для автоматического запуска через GitHub Actions переместите его в `.github/workflows/deploy-storybook.yml` (или активируйте права `workflow` для токена):
- При каждом пуше в ветку `main` проект автоматически собирается (`npm run build-storybook`).
- Артефакт (`storybook-static`) загружается и разворачивается на GitHub Pages через официальные экшены `actions/upload-pages-artifact` и `actions/deploy-pages`.
