import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function F47CoinSite() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-red-700 to-red-500 py-20 text-center">
        <h1 className="text-6xl font-bold mb-4">F47 Coin</h1>
        <p className="text-xl mb-6">F47K MAGA • 5% Tax • LP Locked • Built on BSC</p>
        <Button className="bg-white text-red-600 hover:bg-gray-200 text-lg px-6 py-3 rounded-full">
          Buy Now
        </Button>
      </header>

      {/* Live Chart Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">Live Price Chart</h2>
        <iframe
          src="https://dexscreener.com/bsc/0x5b292ebf34ea782ca8d4d7b29c8cdb3ffdfab535"
          width="100%"
          height="600"
          className="border-4 border-red-600 rounded-lg shadow-lg"
        ></iframe>
      </section>

      {/* Tokenomics Section */}
      <section className="bg-gray-900 py-16 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">Tokenomics</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-gray-800">
            <CardContent className="text-center py-8">
              <h3 className="text-2xl font-bold mb-2">5% Tax</h3>
              <p>Every transaction is taxed 5% to fuel the mission.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800">
            <CardContent className="text-center py-8">
              <h3 className="text-2xl font-bold mb-2">4% to Charity</h3>
              <p>Majority of tax goes to real-world charitable causes.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800">
            <CardContent className="text-center py-8">
              <h3 className="text-2xl font-bold mb-2">1% to Dev</h3>
              <p>Supports ongoing development and marketing efforts.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg">
          F47 Coin is a decentralized protest. A memecoin with meaning. Every buy and sell contributes to charitable causes that challenge hate and corruption. Join the movement and let's F47K MAGA together.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-red-700 py-6 text-center">
        <p>© 2025 F47 Coin • LP Locked • <a href="https://www.f47coin.com" className="underline">www.f47coin.com</a></p>
      </footer>
    </div>
  );
}
