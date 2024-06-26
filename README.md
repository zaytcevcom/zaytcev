# Сайт-портфолио

## Технологический стек
- React
- TypeScript
- Docker
- GitHub Action

## Локальная разработка (Docker)

### Запуск проекта

После выполнения команды, сайт будет доступен по адресу: **http://zaytcev.localhost**
```sh
make init
```


### Быстрые команды

Запустить все контейнеры
```sh
make up
```

Остановить все контейнеры
```sh
make down
```

Перезапустить все контейнеры
```sh
make restart
```


### Линтеры и code-style

Проверка ESLint, StyleLint
```sh
make check
```

Проверка css через StyleLint
```sh
make stylelint
```

Проверка js/ts через ESLint
```sh
make eslint
```

Автоматическое исправление ошибок ESLint
```sh
make eslint-fix
```

Автоматическое исправление ошибок синтаксиса js,css,json
```sh
make pretty-fix
```


### Yarn в Docker

Запуск команды ``yarn install``
```sh
make yarn-install
```

Запуск команды ``yarn outdated``
```sh
make yarn-outdated
```

Запуск команды ``yarn upgrade``
```sh
make yarn-upgrade
```

Добавление пакета с наименованием package через Yarn
```sh
docker compose run --rm frontend-node-cli yarn add -s package
```

## Деплой через GitHub Actions

Предполагается, что на сервере уже установлен Docker и используется Traefik.
Ознакомиться с инфраструктурой можно в [данном репозитории](https://github.com/zaymedia/infrastructure).

### Добавить secrets
- PRODUCTION_KEY — ssh-ключ для пользователя deploy
- PRODUCTION_HOST — IP адрес сервера
- PRODUCTION_PORT — порт сервера
- PROJECT_NAME — название каталога, в котором будет развернут проект
- REACT_APP_SENTRY_DSN — Sentry DSN (опционально)
