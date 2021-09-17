import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect, useRef } from "react";


const code_helloworld = "むだむだむだむだむだむだむだむだ、mudaむだむだむだむだ、mudaむだむだmudaむだむだむだmudaむだむだむだmudaむだMUDAMUDAMUDAMUDA無駄。mudaむだmudaむだmuda無駄mudamudaむだ、MUDA。MUDA無駄。mudamudaムダmuda無駄無駄無駄ムダむだむだむだむだむだむだむだムダムダむだむだむだムダmudamudaムダMUDA無駄ムダMUDAムダむだむだむだムダ無駄無駄無駄無駄無駄無駄ムダ無駄無駄無駄無駄無駄無駄無駄無駄ムダmudamudaむだムダmudaむだむだムダ"
const code_abc = "むだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだむだムダむだムダむだムダmudaむだむだむだむだむだむだむだむだむだむだムダ"
const code_FizzBuzz = "むだむだむだむだむだむだむだむだむだむだむだむだ、無駄mudaむだむだむだむだむだむだmudaむだむだむだむだむだむだむだむだむだmudaむだむだむだむだむだmudaむだむだむだむだむだむだむだむだむだ むだmudaむだむだむだむだむだむだむだむだむだむだmudaむだむだむだmudamudamudamudamudamudaむだむだむだむだむだむだむだむだMUDAMUDAMUDAMUDAMUDAMUDAMUDAMUDAMUDAMUDAMUDAMUDA。muda無駄無駄muda 無駄無駄無駄mudaむだむだむだむだむだむだmuda無駄無駄無駄mudaむだむだmuda無駄無駄無駄無駄mudamudamudamudaむだむだむだmudaむだむだむだむだむだmudaむだむだむだむだ、mudamudamudaむだ、無駄MUDAMUDA、無駄mudamudaむだmudaむだMUDAMUDAMUDA。mudamudamuda、無駄MUDAMUDAMUDAむだmudamudamuda。むだMUDA、、無駄。muda無駄MUDAMUDA、無駄mudaむだmudaむだMUDAMUDA。mudamuda、無駄MUDAMUDAむだmudamuda。むだMUDA、、無駄。muda無駄MUDAMUDAMUDAむだmuda無駄muda。muda、無駄MUDAMUDAMUDA無駄無駄無駄無駄無駄無駄無駄無駄無駄mudaむだむだむだむだむだむだむだむだむだmudamudamudamudamudaむだMUDAMUDAMUDA。MUDA。muda、無駄MUDAむだむだむだむだむだむだむだ、MUDAMUDAむだむだむだむだむだむだむだmudamuda無駄。MUDAむだむだむだむだむだむだむだむだmudamuda。mudamudamuda。MUDAMUDAMUDAMUDAMUDAMUDA、MUDAMUDAMUDAMUDA。muda無駄、無駄MUDAMUDAむだmudaむだmuda。MUDA、無駄mudaむだMUDA。むだMUDA、、無駄。muda無駄MUDA。muda、無駄mudaむだむだむだMUDAMUDAMUDAMUDAMUDAMUDAMUDAMUDAMUDAムダmudaムダmudamudamudaムダムダmudamudaむだmudamuda。mudamuda無駄、無駄MUDAMUDAMUDAむだmudaむだmudamuda。MUDAMUDA、無駄mudamudaむだMUDAMUDA。むだMUDA、、無駄。muda無駄MUDA。muda、無駄mudamudaむだむだむだむだむだMUDAMUDAMUDAMUDAMUDAMUDAMUDAMUDAムダmudaムダmudaムダムダmudamudaむだmudamuda。MUDAむだMUDA、、無駄。muda無駄MUDA。muda、無駄mudamudamudamudamuda、mudamudamudamuda。MUDAMUDAMUDAMUDA、ムダMUDAMUDAMUDAMUDA。MUDA。MUDAMUDAムダmudamudamudamudamudamuda無駄。"
const code_rush = "、折羅。ora、折羅。ora、折羅。ora、折羅。ora、折羅。ora、折羅。ORAORAORAORAORAおらおらおらおらおらおらおらおらおらおら、oraおらおらおらおらおらおらおらおらおらおら、oraおらおらおらおらおらおらおらおらおらおら、oraおらおらおらおらおらおらおらおらおらおら、oraORA折羅。oraORAORA折羅。oraoraおらORAORAORA折羅。oraoraoraおらORAORAORAORA折羅。oraoraoraoraおらおらおらおらオラORAORAORAORA、折羅。ora、折羅。ora、折羅。ora、折羅。ora、折羅。ora、折羅。ORAORAORAORAORAおらおらおらおらおらおらおらおらおらおら、oraおらおらおらおらおらおらおらおらおらおら、oraおらおらおらおらおらおらおらおらおらおら、oraおらおらおらおらおらおらおらおらおらおら、oraORA折羅。oraORAORA折羅。oraoraおらORAORAORA折羅。oraoraoraおらORAORAORAORA折羅。oraoraoraoraおらおらおらおらおらおらおらオラORAORAORAORA、折羅。ora、折羅。ora、折羅。ora、折羅。ora、折羅。ora、折羅。ORAORAORAORAORAおらおらおらおらおらおらおらおらおらおら、oraおらおらおらおらおらおらおらおらおらおら、oraおらおらおらおらおらおらおらおらおらおら、oraおらおらおらおらおらおらおらおらおらおら、oraORA折羅。oraORAORA折羅。oraoraおらORAORAORA折羅。oraoraoraおらORAORAORAORA折羅。oraoraoraoraおらおらおらおらおらオラORAORAORAORA、折羅。ora、折羅。ora、折羅。ora、折羅。ora、折羅。ora、折羅。ORAORAORAORAORAおらおらおらおらおらおらおらおらおらおら、oraおらおらおらおらおらおらおらおらおらおら、oraおらおらおらおらおらおらおらおらおらおら、oraおらおらおらおらおらおらおらおらおらおら、oraORA折羅。oraORAORA折羅。oraoraおらORAORAORA折羅。oraoraoraORAORAORAORA折羅。oraoraoraoraおらおらおらおらオラORAORAORAORA"

// function setSampleCode(sample){
//   const input_code = document.getElementById('input_code')
//   input_code.value = sample
// }

export default function Home() {
  const [code, setCode] = useState("むだむだむだむだむだむだむだむだ、mudaむだむだむだむだ、mudaむだむだmudaむだむだむだmudaむだむだむだmudaむだMUDAMUDAMUDAMUDA無駄。mudaむだmudaむだmuda無駄mudamudaむだ、MUDA。MUDA無駄。mudamudaムダmuda無駄無駄無駄ムダむだむだむだむだむだむだむだムダムダむだむだむだムダmudamudaムダMUDA無駄ムダMUDAムダむだむだむだムダ無駄無駄無駄無駄無駄無駄ムダ無駄無駄無駄無駄無駄無駄無駄無駄ムダmudamudaむだムダmudaむだむだムダ");
  const [result, setResult] = useState("結果がここに表示されます")
  const [modal, setModal] = useState(false)
  const modalRef = useRef()

  return (
    <div className={styles.container}>
      <Head>
        <title>mudaLang</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="無駄言語" />
        <meta property="og:description" content="Muda_language" />
        <meta property="og:site_name" content="無駄言語" />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Xeli0701" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


    
      <div className="container mx-auto my-5">
        <header className="flex justify-evenly items-center">
            <Image
                src={"/logo.png"}
                alt="ロゴ"
                width={600}
                height={200}
            />
            <nav>
            <div>無駄言語コンパイラ</div>
            </nav>
        </header>
      </div>
    
      <main className={styles.main}>
        <div className={styles.flex_column_container}>
          <div className={styles.flex_row_container}>
            <div className={styles.flex_item}>
              <label>
                <div className={styles.description}>Muda_Language</div>
                <textarea id="input_code" className={styles.text_area} value={code} onChange={(e) => setCode(e.target.value)} />
              </label>
            </div>

            <div className={styles.flex_item}>
              <button className={styles.hvr_sweep_to_right}
                onClick={() => fetch("https://muda-language-api.herokuapp.com/muda/" + code)
                  .then(response => response.json())
                  .then((data) => {
                    console.log(data)
                    if (data.status === "success") {
                      setResult(data.message);
                    }
                  })
                }
              >Press to Compile</button>
            </div>

            <div className={styles.flex_item}>
              <label>
                <div className={styles.description}>Compiled</div>
                <textarea readOnly className={styles.text_area} value={result} />
              </label>
            </div>
          </div>


          <div className={styles.flex_description_container_topmargin}>
            <div className={styles.description}>Example</div>
            <div className="justify-evenly py-4 sm:py-10 sm:flex">
              <div className={styles.flex_item}>
                <button className={styles.hvr_sweep_to_right}
                    onClick={() => setCode(code_helloworld)}
                >print(&quot;Hello World!&quot;)</button>
              </div>
              
              <div className={styles.flex_item}>
                <button className={styles.hvr_sweep_to_right}
                    onClick={() => setCode(code_abc)}
                >print(&quot;ABC&quot;)</button>
              </div>

              <div className={styles.flex_item}>
                <button className={styles.hvr_sweep_to_right}
                    onClick={() => setCode(code_FizzBuzz)}
                >FizzBuzz</button>
              </div>

              <div className={styles.flex_item}>
                <button className={styles.hvr_sweep_to_right}
                    onClick={() => setCode(code_rush)}
                >ラッシュの速さ比べ</button>
              </div>
            </div>
          </div>

          <div className={styles.modal_help_button_container}>
            <button className={styles.modal_help_button} onClick={() => setModal(true)}>?</button>
            <div className={`modal__overlay ${modal && "is-opened"}`} onClick={e => { if (modalRef.current === e.target) setModal(false) }} ref={modalRef}>
              <div className="modal__box">
                <button className="modal__closeBtn" onClick={() => setModal(false)}>×</button>
                <div className="m-4 text-lg text-white">使い方</div>
                  <div className="m-1 ml-16 text-sm text-white">ようこそ。このサービスは無駄言語(mudaLang)をコンパイルするために用いられます。</div>
                  <div className="m-1 ml-16 text-sm text-white">左のボックスに入れて、真ん中のボタンを押すと、右のボックスに結果が出力されます！</div>
                  <div className="m-1 ml-16 text-sm text-white">無駄言語のサンプルコードはExampleのボタンを押すと出ます👍</div>
                  <div className="m-1 ml-16 text-sm text-white">言語仕様は<a href="https://github.com/Xeli0701/muda_language_next#%E8%A8%80%E8%AA%9E%E4%BB%95%E6%A7%98" rel="noreferrer" target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">こちら</a>を確認してください！</div>
                  <div className="m-1 ml-16 text-xs text-white">(要するに、Brainfxck系言語と言う存在も価値も時間も全てが無駄な言語です。あとHerokuのFreeプランなのでボタンを押しても20秒ぐらい反応しない時があります。)</div>
                <div className="m-4 text-lg text-white">Repository</div>
                  <div className={styles.flex_row_container}>
                    <div className="m-4 ml-16"><a href="https://github.com/Xeli0701/muda_language_next" rel="noreferrer" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Front(Next.js)</a></div>
                    <div className="m-4 ml-16"><a href="https://github.com/Xeli0701/muda_language_api" rel="noreferrer" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Back(FastAPI)</a></div>
                    <div className="m-4 ml-16"><a href="https://muda-language-api.herokuapp.com/docs" rel="noreferrer" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Back(API Document)</a></div>
                  </div>
                <div className="m-4 text-lg text-white">作った人・連絡先</div>
                <div className="m-4 ml-16 text-white" >
                  <a href="https://twitter.com/Xeli0701" rel="noreferrer" target="_blank" className="text-blue-500 font-bold rounded">Xeli0701</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
