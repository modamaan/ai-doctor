// import React from 'react'
// import { Button } from "@/components/ui/button"

// const page = () => {
//   return (
//     <div className='flex flex-col items-center justify-center' >
//       <h1>Welcome to all</h1>
//       <Button>Button</Button>
//     </div>
//   )
// }

// export default page
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Brain,
  HeartPulse,
  Stethoscope,
  ChevronRight,
  Menu,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Features", "Testimonials", "Pricing", "Contact"];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-green-500/20 justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
          <span className="ml-2 text-lg sm:text-xl font-bold text-white">
            AI MedConsult
          </span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 lg:gap-6">
          {navItems.map((item) => (
            <Link
              key={item}
              className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors"
              href="#"
            >
              {item}
            </Link>
          ))}
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden ">
              <Menu className="h-6 w-6 text-green-500" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[240px] sm:w-[300px] bg-black border-l border-green-500/20"
          >
            <nav className="flex flex-col gap-4 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-lg font-medium text-gray-300 hover:text-green-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-white">
                    AI-Powered Medical{" "}
                    <span className="text-green-500">Consulting</span>
                  </h1>
                  <p className="max-w-[600px] text-sm sm:text-base md:text-lg text-gray-400">
                    Revolutionizing healthcare with cutting-edge AI technology.
                    Get instant medical insights and personalized consultations.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <Button
                    className="w-full bg-green-500 text-black hover:bg-green-400 transition-colors flex items-center justify-center"
                    size="lg"
                  >
                    <Link href="/dashboard" className="flex items-center">
                      <span>Get Started Now</span>
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    className="bg-transparent text-green-500 border-green-500 hover:bg-green-500/10 w-full sm:w-auto"
                    variant="outline"
                    size="lg"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center mt-8 lg:mt-0">
                <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]">
                  <div className="absolute inset-0 bg-green-500/20 rounded-full animate-pulse"></div>
                  <Image
                    alt="AI Medical Consulting"
                    className="relative z-10 rounded-full object-cover"
                    src=""
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 md:mb-12 text-green-600">
              Our Features
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  icon: Brain,
                  title: "AI Diagnosis Assistance",
                  description:
                    "Our AI analyzes symptoms and medical history to provide quick, accurate diagnostic suggestions.",
                },
                {
                  icon: HeartPulse,
                  title: "Personalized Health Plans",
                  description:
                    "Receive tailored health recommendations based on your unique medical profile and lifestyle.",
                },
                {
                  icon: Stethoscope,
                  title: "24/7 Virtual Consultations",
                  description:
                    "Access medical professionals anytime, anywhere through our AI-powered virtual consultation platform.",
                },
              ].map((feature, index) => (
                <Card key={index} className="bg-black text-white">
                  <CardContent className="flex flex-col items-center space-y-4 p-6">
                    <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-green-500" />
                    <h3 className="text-lg sm:text-xl font-bold text-center">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 text-center">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-500 text-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 md:mb-12">
              Testimonials
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  quote:
                    "AI MedConsult has transformed how I manage my health. The personalized insights are invaluable.",
                  author: "Sarah J., Patient",
                },
                {
                  quote:
                    "As a doctor, I'm impressed by the accuracy of the AI diagnosis assistance. It's a great tool for our practice.",
                  author: "Dr. Michael R., Physician",
                },
                {
                  quote:
                    "The 24/7 virtual consultations have been a lifesaver for our family. Highly recommended!",
                  author: "Emily T., Mother of two",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white text-black">
                  <CardContent className="p-4 sm:p-6">
                    <p className="text-sm sm:text-base text-gray-600 mb-4 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-green-600">
                      {testimonial.author}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Ready to revolutionize your healthcare?
                </h2>
                <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg text-gray-400">
                  Join thousands of satisfied users who have transformed their
                  health management with AI MedConsult.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button
                  className="w-full bg-green-500 text-black hover:bg-green-400 transition-colors flex items-center justify-center"
                  size="lg"
                >
                  <Link href="/dashboard" className="flex items-center">
                    <span>Get Started Now</span>
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-black border-t border-green-500/20">
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-400 mb-4 sm:mb-0">
            © 2024 AI MedConsult. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            {["Terms of Service", "Privacy"].map((item) => (
              <Link
                key={item}
                className="text-xs text-gray-400 hover:text-green-400 transition-colors"
                href="#"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
