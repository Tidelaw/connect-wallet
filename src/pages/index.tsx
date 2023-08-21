import Image from 'next/image'
import { Inter } from 'next/font/google'
import dynamic from "next/dynamic";
import { useWallet } from '@solana/wallet-adapter-react';

const inter = Inter({ subsets: ['latin'] })

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export default function Home() {

  const { publicKey } = useWallet();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <div className='flex flex-col items-center space-y-8'>
      
        <div className='font-bold text-2xl'>
          {publicKey?(publicKey.toBase58()):("Connect Your Wallet")}  
        </div>
        
        <WalletMultiButtonDynamic className='relative z-10 bg-zinc-900 hover:bg-zinc-900 hover:opacity-100 duration-200 animate-fade' />
      
      </div>
    </main>
  )
}
