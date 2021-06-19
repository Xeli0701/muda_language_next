# 説明
- 無駄言語のフロント部分
- Vercelにデプロイされる予定
- 本体はpages/index.tsx

# 言語仕様
BrainFxck系と同じです。
| mudaLang | BrainFxck | 解説 |
| ---- | ---- | ---- |
| muda | > | メモリポインタをインクリメント |
| MUDA | < | メモリポインタをデクリメント |
| ムダ | . | メモリポインタが指し示す先に格納された変数を処理系に表示 |
| むだ | + | メモリポインタが指し示す先に格納された変数をインクリメント |
| 無駄 | - | メモリポインタが指し示す先に格納された変数をデクリメント |
| ﾑﾀﾞ | , | 標準入力された値をメモリポインタが指し示す先に代入 |
| 、 | [ | メモリポインタが指す値が0なら、対応する"]"までskip |
| 。 | ] | メモリポインタが指す値が非0なら、対応する"["までジャンプ |

理屈上はなんでも動きます。やる意味はないです。

つまり、無駄です。

# 以下デフォルト(create-next-appで自動生成)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
