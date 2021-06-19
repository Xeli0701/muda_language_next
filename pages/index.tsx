import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("むだむだむだむだむだむだむだむだ、mudaむだむだむだむだ、mudaむだむだmudaむだむだむだmudaむだむだむだmudaむだMUDAMUDAMUDAMUDA無駄。mudaむだmudaむだmuda無駄mudamudaむだ、MUDA。MUDA無駄。mudamudaムダmuda無駄無駄無駄ムダむだむだむだむだむだむだむだムダムダむだむだむだムダmudamudaムダMUDA無駄ムダMUDAムダむだむだむだムダ無駄無駄無駄無駄無駄無駄ムダ無駄無駄無駄無駄無駄無駄無駄無駄ムダmudamudaむだムダmudaむだむだムダ");
  const [result, setResult] = useState("結果がここに表示されます")

  return (
    <div className={styles.container}>
      <Head>
        <title>無駄言語</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Muda_language_Front" />
        <meta property="og:description" content="Muda_language" />
        <meta property="og:site_name" content="無駄言語" />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Xeli0701" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>無駄言語</h1>
        <nav>
          無駄言語をオンライン上でコンパイルします。
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.flex_column_container}>
          <div className={styles.flex_description_container}>
            <div className={styles.description}>無駄言語を左のテキストエリアに入力し、真ん中のボタンを押してください</div>
          </div>

          <div className={styles.flex_row_container}>
            <div className={styles.flex_item}>
              <label>
                <div className={styles.description}>Muda_Language</div>
                <textarea className={styles.text_area} defaultValue={code} onChange={(e) => setCode(e.target.value)} />
              </label>
            </div>

            <div className={styles.flex_item}>
              <button className={styles.hvr_sweep_to_right}
                onClick={() => fetch("https://muda-language-api.herokuapp.com/muda/" + code)
                  .then(response => response.json())
                  .then((data) => {
                    console.log(data)
                    setResult("aiueo");
                    if (data.status === "success") {
                      setResult(data.message);
                    }
                  }).then(() => { console.log("send:" + code + "\n" + "response:" + result) })
                }
              >Press to Compile</button>
            </div>

            <div className={styles.flex_item}>
              <label>
                <div className={styles.description}>Compiled</div>
                <textarea className={styles.text_area} value={result} />
              </label>
            </div>
          </div>


          <div className={styles.flex_description_container_topmargin}>
            <div className={styles.description}>Example</div>
            <details className={styles.description_details}>
              <summary className={styles.code}>print(&quot;HelloWorld&quot;)</summary>
              <textarea readOnly className={styles.text_area_wide} defaultValue="むだむだむだむだむだむだむだむだ、mudaむだむだむだむだ、mudaむだむだmudaむだむだむだmudaむだむだむだmudaむだMUDAMUDAMUDAMUDA無駄。mudaむだmudaむだmuda無駄mudamudaむだ、MUDA。MUDA無駄。mudamudaムダmuda無駄無駄無駄ムダむだむだむだむだむだむだむだムダムダむだむだむだムダmudamudaムダMUDA無駄ムダMUDAムダむだむだむだムダ無駄無駄無駄無駄無駄無駄ムダ無駄無駄無駄無駄無駄無駄無駄無駄ムダmudamudaむだムダmudaむだむだムダ" />
            </details>
            <details className={styles.description_details}>
              <summary className={styles.code}>print(&quot;ABC&quot;)</summary>
              <textarea readOnly className={styles.text_area_wide} defaultValue="むだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだムダむだムダむだムダmudaむだむだむだむだむだむだむだむだむだむだムダ" />
            </details>
            <details className={styles.description_details}>
              <summary className={styles.code}>FizzBuzz</summary>
              <textarea readOnly className={styles.text_area_wide} defaultValue="むだむだむだむだむだむだむだむだむだむだむだむだ、無駄mudaむだむだむだむだむだむだmudaむだむだむだむだむだむだむだむだむだmudaむだむだむだむだむだmudaむだむだむだむだむだむだむだむだむだ むだmudaむだむだむだむだむだむだむだむだむだむだmudaむだむだむだmudamudamudamudamudamudaむだむだむだむだむだむだむだむだMUDAMUDAMUDAMUDAMUDAMUDAMUDAMUDAMUDAMUDAMUDAMUDA。muda無駄無駄muda 無駄無駄無駄mudaむだむだむだむだむだむだmuda無駄無駄無駄mudaむだむだmuda無駄無駄無駄無駄mudamudamudamudaむだむだむだmudaむだむだむだむだむだmudaむだむだむだむだ、mudamudamudaむだ、無駄MUDAMUDA、無駄mudamudaむだmudaむだMUDAMUDAMUDA。mudamudamuda、無駄MUDAMUDAMUDAむだmudamudamuda。むだMUDA、、無駄。muda無駄MUDAMUDA、無駄mudaむだmudaむだMUDAMUDA。mudamuda、無駄MUDAMUDAむだmudamuda。むだMUDA、、無駄。muda無駄MUDAMUDAMUDAむだmuda無駄muda。muda、無駄MUDAMUDAMUDA無駄無駄無駄無駄無駄無駄無駄無駄無駄mudaむだむだむだむだむだむだむだむだむだmudamudamudamudamudaむだMUDAMUDAMUDA。MUDA。muda、無駄MUDAむだむだむだむだむだむだむだ、MUDAMUDAむだむだむだむだむだむだむだmudamuda無駄。MUDAむだむだむだむだむだむだむだむだmudamuda。mudamudamuda。MUDAMUDAMUDAMUDAMUDAMUDA、MUDAMUDAMUDAMUDA。muda無駄、無駄MUDAMUDAむだmudaむだmuda。MUDA、無駄mudaむだMUDA。むだMUDA、、無駄。muda無駄MUDA。muda、無駄mudaむだむだむだMUDAMUDAMUDAMUDAMUDAMUDAMUDAMUDAMUDAムダmudaムダmudamudamudaムダムダmudamudaむだmudamuda。mudamuda無駄、無駄MUDAMUDAMUDAむだmudaむだmudamuda。MUDAMUDA、無駄mudamudaむだMUDAMUDA。むだMUDA、、無駄。muda無駄MUDA。muda、無駄mudamudaむだむだむだむだむだMUDAMUDAMUDAMUDAMUDAMUDAMUDAMUDAムダmudaムダmudaムダムダmudamudaむだmudamuda。MUDAむだMUDA、、無駄。muda無駄MUDA。muda、無駄mudamudamudamudamuda、mudamudamudamuda。MUDAMUDAMUDAMUDA、ムダMUDAMUDAMUDAMUDA。MUDA。MUDAMUDAムダmudamudamudamudamudamuda無駄。" />
            </details>
          </div>
        </div>
      </main>
    </div>
  )
}
