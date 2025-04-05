
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Flag, Globe, Lock, Shield, Terminal, BookOpen, Code, Award, ChevronRight, Cpu } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WhatIsCTF = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-ctf-blue text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Vad är CTF?</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Capture The Flag (CTF) är en typ av informationssäkerhetstävling som utmanar deltagare att lösa säkerhetsproblem och hitta sårbarheter.
          </p>
        </div>
      </section>
      
      {/* Introduction */}
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
      
      {/* CTF Categories */}
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
      
      {/* PWN Roadmap Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-ctf-blue">
            Roadmap: Bli en Pwn-spelare
          </h2>
          
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
            <div className="relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 border-l-2 border-dashed border-ctf-teal/40 -z-10 transform -translate-x-1/2"></div>
              
              {/* Roadmap items */}
              <div className="space-y-16 md:space-y-24">
                {/* Stage 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right order-2 md:order-1">
                    <h3 className="text-2xl font-bold text-ctf-blue mb-2">1. Grundläggande kunskaper</h3>
                    <p className="text-gray-700 mb-4">Börja med att förstå grunderna i programmering och datorsystem.</p>
                    <div className="bg-ctf-light p-4 rounded-lg inline-block">
                      <h4 className="font-semibold mb-2 text-ctf-blue">Fokusområden:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Lär dig C/C++</li>
                        <li>Förstå minnehantering</li>
                        <li>Linux-grunder</li>
                        <li>x86/x64 Assembly-grunderna</li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative md:pl-8 order-1 md:order-2">
                    <div className="bg-ctf-blue/10 p-6 rounded-full inline-flex mx-auto md:ml-0">
                      <BookOpen className="h-12 w-12 text-ctf-blue" />
                    </div>
                    {/* Connector for mobile */}
                    <div className="md:hidden absolute top-full left-1/2 h-16 border-l-2 border-dashed border-ctf-teal/40 transform -translate-x-1/2"></div>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative md:pr-8">
                    <div className="bg-ctf-teal/10 p-6 rounded-full inline-flex mx-auto md:mr-0">
                      <Code className="h-12 w-12 text-ctf-teal" />
                    </div>
                    {/* Connector for mobile */}
                    <div className="md:hidden absolute top-full left-1/2 h-16 border-l-2 border-dashed border-ctf-teal/40 transform -translate-x-1/2"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-ctf-blue mb-2">2. Verktygskunskap</h3>
                    <p className="text-gray-700 mb-4">Lär dig använda verktyg som är essentiella för pwn-utmaningar.</p>
                    <div className="bg-ctf-light p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-ctf-blue">Viktiga verktyg:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>GDB/GEF/PEDA (debuggers)</li>
                        <li>IDA Pro/Ghidra (disassemblers)</li>
                        <li>pwntools (Python-bibliotek)</li>
                        <li>objdump, readelf, strace</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right order-2 md:order-1">
                    <h3 className="text-2xl font-bold text-ctf-blue mb-2">3. Förstå sårbarheter</h3>
                    <p className="text-gray-700 mb-4">Bekanta dig med vanliga sårbarheter i binära program.</p>
                    <div className="bg-ctf-light p-4 rounded-lg inline-block">
                      <h4 className="font-semibold mb-2 text-ctf-blue">Studieområden:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Buffer overflows</li>
                        <li>Format string attacks</li>
                        <li>Integer overflows</li>
                        <li>Use-after-free</li>
                        <li>Return-Oriented Programming (ROP)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative md:pl-8 order-1 md:order-2">
                    <div className="bg-ctf-accent/10 p-6 rounded-full inline-flex mx-auto md:ml-0">
                      <Shield className="h-12 w-12 text-ctf-accent" />
                    </div>
                    {/* Connector for mobile */}
                    <div className="md:hidden absolute top-full left-1/2 h-16 border-l-2 border-dashed border-ctf-teal/40 transform -translate-x-1/2"></div>
                  </div>
                </div>

                {/* Stage 4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative md:pr-8">
                    <div className="bg-ctf-teal/10 p-6 rounded-full inline-flex mx-auto md:mr-0">
                      <Cpu className="h-12 w-12 text-ctf-teal" />
                    </div>
                    {/* Connector for mobile */}
                    <div className="md:hidden absolute top-full left-1/2 h-16 border-l-2 border-dashed border-ctf-teal/40 transform -translate-x-1/2"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-ctf-blue mb-2">4. Fördjupa dig i exploateringstekniker</h3>
                    <p className="text-gray-700 mb-4">Lär dig mer avancerade tekniker för att exploatera sårbarheter.</p>
                    <div className="bg-ctf-light p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-ctf-blue">Avancerade tekniker:</h4>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="rop">
                          <AccordionTrigger>Return-Oriented Programming (ROP)</AccordionTrigger>
                          <AccordionContent>
                            En teknik som låter attackerare exekvera kod trots skydd som Data Execution Prevention genom att kedja ihop befintliga kodsekvenser.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="heap">
                          <AccordionTrigger>Heap Exploitation</AccordionTrigger>
                          <AccordionContent>
                            Tekniker för att utnyttja sårbarheter i dynamisk minnesallokering, som heap overflows och use-after-free.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="got">
                          <AccordionTrigger>GOT/PLT Hijacking</AccordionTrigger>
                          <AccordionContent>
                            Metoder för att manipulera funktionspekare och omdirigera programflödet genom att ändra Global Offset Table.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>

                {/* Stage 5 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right order-2 md:order-1">
                    <h3 className="text-2xl font-bold text-ctf-blue mb-2">5. Praktisera, praktisera, praktisera</h3>
                    <p className="text-gray-700 mb-4">Dags att omsätta kunskaperna i praktiken genom att lösa utmaningar.</p>
                    <div className="bg-ctf-light p-4 rounded-lg inline-block">
                      <h4 className="font-semibold mb-2 text-ctf-blue">Rekommenderade plattformar:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>PicoCTF</li>
                        <li>HackTheBox</li>
                        <li>pwnable.kr</li>
                        <li>CTFtime.org</li>
                        <li>CTF-Sverige tävlingar!</li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative md:pl-8 order-1 md:order-2">
                    <div className="bg-[#ea384c]/10 p-6 rounded-full inline-flex mx-auto md:ml-0">
                      <Terminal className="h-12 w-12 text-[#ea384c]" />
                    </div>
                  </div>
                </div>
                
                {/* Final stage */}
                <div className="text-center pt-6">
                  <div className="bg-ctf-blue/10 p-6 rounded-full inline-flex mb-4">
                    <Award className="h-12 w-12 text-ctf-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-ctf-blue">Mål: Erfaren Pwn-spelare</h3>
                  <p className="text-gray-700 mt-2 max-w-lg mx-auto">
                    Nu kan du lösa avancerade pwn-utmaningar, förstå komplexa sårbarheter, och bidra till säkerhetsgemenskapen.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 italic">
              Kom ihåg att vägen till att bli en pwn-expert kräver tid, tålamod och kontinuerligt lärande. 
              Var inte rädd för att misslyckas — det är så du lär dig!
            </p>
          </div>
        </div>
      </section>
      
      {/* CTF Formats Section */}
      <section className="py-16 bg-gray-50">
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
      
      {/* Getting Started */}
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
      
      <Footer />
    </div>
  );
};

export default WhatIsCTF;
