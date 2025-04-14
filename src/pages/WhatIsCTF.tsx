import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Flag, Globe, Lock, Shield, Terminal, Clock } from "lucide-react";
import { useTranslation } from 'react-i18next';

const WhatIsCTF = () => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Header - This section will remain visible */}
      <section className="bg-ctf-blue text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Vad är CTF?</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Capture The Flag (CTF) är en typ av informationssäkerhetstävling som utmanar deltagare att lösa säkerhetsproblem och hitta sårbarheter.
          </p>
        </div>
      </section>
      
      {/* Overlay with Coming Soon message */}
      <div className="relative">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-md flex flex-col items-center justify-center z-10">
          <Clock className="h-16 w-16 text-ctf-blue mb-4" />
          <h2 className="text-3xl font-bold text-ctf-blue">{t('whatIsCTF.coming_soon.title')}</h2>
          <p className="text-lg text-ctf-blue/80 mt-2 max-w-md text-center px-4">
            {t('whatIsCTF.coming_soon.description')}
          </p>
        </div>
      
        {/* Introduction - This content will be blurred */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-ctf-blue">Introduktion till CTF</h2>
              <p className="text-lg mb-4">
                Capture The Flag-tävlingar är designade för att utmana och utbilda deltagare inom 
                områden som webbsäkerhet, kryptografi, digital forensik, reverse engineering, och binär exploatering. 
              </p>
              <p className="text-lg mb-6">
                I en CTF-tävling letar deltagare efter "flaggor" (speciella textsträngar) som är gömda 
                i sårbara program eller system. När en flagga hittas, skickas den in för poäng. 
                Det lag eller den person som samlar flest poäng vinner.
              </p>
              
              <div className="bg-ctf-light p-6 rounded-lg border border-ctf-teal/20 mb-8">
                <h3 className="text-xl font-semibold mb-2 text-ctf-blue">Varför delta i CTF?</h3>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>Utveckla och förbättra dina kunskaper inom cybersäkerhet</li>
                  <li>Lära dig praktiska tekniker för att identifiera sårbarheter</li>
                  <li>Nätverka med likasinnade inom säkerhetsgemenskapen</li>
                  <li>Utmana dig själv med verkliga säkerhetsproblem</li>
                  <li>Potentiellt attrahera arbetsgivare inom cybersäkerhetssektorn</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTF Categories - This content will be blurred */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-ctf-blue">CTF-kategorier</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-ctf-teal/10 p-3 rounded-full">
                    <Globe className="h-8 w-8 text-ctf-teal" />
                  </div>
                  <div>
                    <CardTitle>Web</CardTitle>
                    <CardDescription>Webbsäkerhet</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Fokuserar på sårbarheter i webbapplikationer som SQL-injektioner, XSS, CSRF och autentiseringsbypass.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-ctf-teal/10 p-3 rounded-full">
                    <Lock className="h-8 w-8 text-ctf-teal" />
                  </div>
                  <div>
                    <CardTitle>Crypto</CardTitle>
                    <CardDescription>Kryptografi</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Utmaningar kring krypteringssystem, kryptografiska protokoll och att knäcka koder eller chiffertexter.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-ctf-teal/10 p-3 rounded-full">
                    <Shield className="h-8 w-8 text-ctf-teal" />
                  </div>
                  <div>
                    <CardTitle>Forensics</CardTitle>
                    <CardDescription>Digital forensik</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Involverar analys av digitala artefakter, nätverksdumpfiler, minnesdumpfiler och dolda data i filer.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-ctf-teal/10 p-3 rounded-full">
                    <Terminal className="h-8 w-8 text-ctf-teal" />
                  </div>
                  <div>
                    <CardTitle>Pwn</CardTitle>
                    <CardDescription>Binär exploatering</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Utnyttjande av sårbarheter i binära program, som buffert-överflöden, för att få kontroll över system.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-ctf-teal/10 p-3 rounded-full">
                    <Flag className="h-8 w-8 text-ctf-teal" />
                  </div>
                  <div>
                    <CardTitle>RE</CardTitle>
                    <CardDescription>Reverse Engineering</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Innebär demontering och analys av program för att förstå hur de fungerar och hitta dolda funktioner.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-ctf-teal/10 p-3 rounded-full">
                    <Check className="h-8 w-8 text-ctf-teal" />
                  </div>
                  <div>
                    <CardTitle>Misc</CardTitle>
                    <CardDescription>Diverse</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Blandade utmaningar som kan omfatta programmeringsproblem, logiska pussel och andra kunskaper.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTF Formats - This content will be blurred */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-ctf-blue">
              CTF-format
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Jeopardy-stil</CardTitle>
                  <CardDescription>
                    Det vanligaste formatet för CTF-tävlingar
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    I en Jeopardy-stil CTF presenteras deltagarna med en uppsättning utmaningar kategoriserade efter 
                    typer (Web, Crypto, Forensics, osv.) och svårighetsgrad. Varje utmaning är värd ett visst antal 
                    poäng baserat på svårighetsgrad.
                  </p>
                  <p>
                    När en utmaning löses och flaggan skickas in, får laget poäng. Det lag som samlar flest poäng i 
                    slutet av tävlingen vinner.
                  </p>
                  <div className="bg-ctf-light p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Fördelar med Jeopardy-format:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Passar både nybörjare och erfarna deltagare</li>
                      <li>Lättare att organisera och köra</li>
                      <li>Deltagare kan fokusera på kategorier de är starka inom</li>
                      <li>Kan spelas både på plats och online</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Attack-Defense</CardTitle>
                  <CardDescription>
                    Ett mer avancerat och interaktivt CTF-format
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    I Attack-Defense-format får varje lag ett identiskt nätverk eller system med sårbara tjänster. 
                    Lagen måste både försvara sina egna system mot attacker från andra lag samtidigt som de försöker 
                    attackera andras system för att hitta flaggor.
                  </p>
                  <p>
                    Poäng tjänas både genom att hålla sina tjänster igång (försvarspoäng) och genom att kompromettera 
                    andra lags tjänster (attackpoäng).
                  </p>
                  <div className="bg-ctf-light p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Fördelar med Attack-Defense-format:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Mer realistiska scenarier som efterliknar verkliga situationer</li>
                      <li>Utvecklar både offensiva och defensiva färdigheter</li>
                      <li>Mer dynamiskt och intensivt spel</li>
                      <li>Främjar teamarbete och strategi</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Getting Started - This content will be blurred */}
        <section className="py-16 bg-ctf-blue text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Kom igång med CTF</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg">
                Vill du börja med CTF? Här är några steg för att komma igång:
              </p>
              
              <ol className="list-decimal pl-6 space-y-4">
                <li className="text-lg">
                  <span className="font-semibold">Lär dig grunderna:</span> Börja med att förstå grundläggande koncept inom cybersäkerhet och olika CTF-kategorier.
                </li>
                <li className="text-lg">
                  <span className="font-semibold">Öva på beginner-vänliga plattformar:</span> Sajter som PicoCTF, CTFlearn och HackTheBox har bra utmaningar för nybörjare.
                </li>
                <li className="text-lg">
                  <span className="font-semibold">Hitta ett team:</span> CTF är roligare och mer lärorikt i team. Gå med i ett befintligt team eller skapa ett eget.
                </li>
                <li className="text-lg">
                  <span className="font-semibold">Delta i tävlingar:</span> Kolla CTFtime.org för kommande tävlingar och börja med de som är riktade mot nybörjare.
                </li>
                <li className="text-lg">
                  <span className="font-semibold">Bygg ditt verktygsarsenal:</span> Bekanta dig med verktyg som används för olika CTF-kategorier.
                </li>
              </ol>
              
              <p className="text-lg mt-8">
                CTF-Sverige anordnar regelbundet workshops och tävlingar för både nybörjare och erfarna spelare.
                Följ våra nyheter för att hålla dig uppdaterad om kommande evenemang!
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default WhatIsCTF;
