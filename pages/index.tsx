import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";

const defaultDonationAmount = 20;

declare global {
  interface Window {
    PayPal: any;
  }
}

let init = false;

const Home: NextPage = () => {
  useEffect(() => {
    if (init) {
      return;
    }

    window.PayPal.Donation.Button({
      env: "production",
      hosted_button_id: "JHUHRLZNSA654",
      image: {
        src: "https://pics.paypal.com/00/s/MDU2M2UwZjQtMzQwMS00NjU4LWE2ZDMtZTk5YTcwN2RiNGY1/file.PNG",
        alt: "Donate with PayPal button",
        title: "PayPal - The safer, easier way to pay online!",
      },
    }).render("#donate-button");

    init = true;
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>CHD3 - Snijders Blok Campeau Syndrome</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <div className="h-72 md:h-60 bg-gradient-to-r from-slate-800 to-slate-500">
          <div className="pt-2 mx-5">
            <div className="mx-5 pb-2 flex justify-between items-center border-b-2 border-slate-300/10">
              <h1 className="m-2 text-3xl text-slate-200 ">CHD3 Foundation</h1>
              <div className="rounded-full bg-black bg-opacity-40 px-4 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 flex items-center justify-center gap-2 h-8">
                <div id="donate-button" style={{ width: "90px" }}></div>
              </div>
            </div>
            <div className="mx-5 flex flex-col items-center md:items-start">
              <h2 className="m-2 pt-1 text-2xl text-center md:text-left text-slate-200">
                Snijders Blok Campeu Syndrome
              </h2>
              <h2 className="m-1 p-4 md:p-0 text-l md:text-2xl text-center md:text-left text-slate-400 w-full md:w-1/2 text-">
                Providing support and information for families that are impacted
                by the CHD3 gene mutation
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 m-4">
          <div className="mx-5 shadow-md m-2 bg-gray-100 rounded-md">
            <h2 className="m-4 text-gray-800 text-3xl font-semibold">About</h2>
            <p className="m-4 text-gray-600">
              Snijders Blok-Campeau Syndrome is a rare neurodevelopmental
              disorder caused by mutations in the CHD3 gene, which has an
              important role during early brain development. This gene makes a
              protein that is believed to regulate the function of other genes
              in the developing brain, all of which work together to ensure that
              brain cells move into their correct positions at the right time.
              Even small changes in CHD3 can disrupt that process, resulting in
              abnormal brain development and creating a variety of conditions
              that affect other parts of the body.
            </p>
            <p className="m-4 text-gray-600">
              Approximately 60 individuals worldwide have been diagnosed with
              this disorder. Common traits are intellectual disability,
              developmental delays, hypotonia, impaired speech and language, and
              characteristic facial features. Many children have feeding
              difficulties, and sitting, standing, and walking are often
              delayed.
            </p>

            <h2 className="m-4 text-gray-800 text-3xl font-semibold">
              Quick Facts
            </h2>
            <div className="flex flex-col items-center justify-around mb-4 md:flex-row gap-4">
              <div className="flex flex-col items-center justify-center">
                <div className="w-40 h-40 text-3xl text-gray-600 rounded-full border-8 border-slate-800 flex items-center justify-center">
                  60
                </div>
                <div className="mt-2 text-gray-600">Known Cases</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-40 h-40 text-3xl text-gray-600 rounded-full border-8 border-slate-600 flex items-center justify-center">
                  20
                </div>
                <div className="mt-2 text-gray-600">Research Participants</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-40 h-40 text-3xl text-gray-600 rounded-full border-8 border-slate-500 flex items-center justify-center">
                  332
                </div>
                <div className="mt-2 text-gray-600">Support Group Members</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
