# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `Библиотеки`

Redux, redux-toolkit, rtk-query, scss, dayjs, typeScript, react-dom, react-router-dom, mui/material

+Адаптика для мобильки

Использовал для для одного запроса crm.status.list redux-toolkit, для запроса crm.deal.list использовал rtk-query так как не было ендпоинтов для отдельного меню айтема, если обычно использвать гет запрос то при каждом клике на меню айтем срабатывало бы запрос, с помощью rtk-query кэшировал данных.

crm.productrow.list метод не работало сделал то что доступно по ресту
