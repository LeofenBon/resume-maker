import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import PrimaryButton from "./components/shared//buttons/primaryButton";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-primary h-screen text-theme-black flex justify-center text-center">
      <div className="md:w-1/2 mt-14">
        <div className="font-heebo text-sm my-3 font-light">
          FREE ONLINE RESUME BUILDER
        </div>
        <span className="text-7xl font-bold">Let&#39;s </span>
        <span className="text-7xl">create</span>
        <div className="text-7xl">attractive resume</div>
        {/* <div className="font-extrabold text-7xl">resume</div> */}
        <div className="font-mark text-7xl text-theme-purple my-2">
          for free
        </div>
        <div className="font-poppins mt-4 mb-6">
          Use professional field-tested resume templates that follow the exact
          resume rules employers look for. Easy to use and done within minutes -
          <span className="underline"> try now for free! </span>
        </div>
        <PrimaryButton title={"Choose a template"} />
      </div>
    </main>
  );
}
