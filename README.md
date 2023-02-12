This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# blog

```Folder Structure
├── .next
├── node_modules
├── pages
│   ├── api
│       ├── fetchPreview.ts
│       └── urlPreview.ts
│   ├── assets
│   ├── components
│       ├── Navbar.tsx
│       ├── Navitem.tsx
│       ├── TabNav.tsx
│       └── Footer.tsx
│   ├── index.tsx
│   ├── _app.tsx
│   ├── All.tsx
│   ├── ImagePreview.tsx
│   ├── Tab.tsx
│   └── Tabitem.tsx
├── public
│   ├── font
│   ├── image
│   ├── favicon.ico
│   ├── next.svg
│   ├── thirteen.svg
│   └──  vercel.svg
├── styles
│   ├── article.modules.css
│   ├── footer.module.css
│   ├── global.modules.css
│   ├── home.module.css
│   ├── navbar.module.css
│   └── tab.modules.css
├── tsconfig.json
├── package.json
├── next.config.js
├── yarn.lock
├── .gitignore
├── .prettierrc
├── .eslintrc.json
└── README.md
```

## Workflow

```
yarn init
yarn create next-app --typescript
yarn add @apollo/client graphql
yarn dev
```

## Deploy

```
1. heroku create
2. heroku buildpacks:add heroku/nodejs
3. git add .
4. git commit -m "Add Heroku build scripts"
5. git push heroku main
```
