"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Youtube, Twitch, Instagram } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"
import { Heart } from "lucide-react"

export default function PetStickerInfluencer() {
  const [mounted, setMounted] = useState(false)
  const [selectedPet, setSelectedPet] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Pet stickers data (using placeholder images)
  const petStickers = [
    {
      id: 1,
      image: "/images/1.png",
      animation: "bounce",
    },
    {
      id: 2,
      image: "/images/2.png",
      animation: "wiggle",
    },
    {
      id: 3,
      image: "/images/3.png",
      animation: "sway",
    },
    {
      id: 4,
      image: "/images/4.png",
      animation: "spin",
    },
  ]

  const socialLinks = [
    {
      name: "Twitch",
      icon: Twitch,
      url: "https://www.twitch.tv/hexrtdoom",
      color: "from-purple-500 to-purple-700",
      petSticker: "/placeholder.svg?height=40&width=40&text=🐱",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://m.youtube.com/channel/UCRMLNkymipCBUpx6QfvofMA",
      color: "from-red-500 to-red-700",
      petSticker: "/placeholder.svg?height=40&width=40&text=🐶",
    },
    {
      name: "TikTok",
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-purple-700" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z" />
        </svg>
      ),
      url: "https://www.tiktok.com/@hexrtdoom?_t=ZS-8xKUfLPgY2k&_r=1",
      color: "from-pink-500 to-pink-700",
      petSticker: "/placeholder.svg?height=40&width=40&text=🐰",
    },
    {
      name: "Discord",
      icon: () => (
        <svg viewBox="0 0 245 240" fill="currentColor" className="w-5 h-5 text-purple-700">
          <path d="M104.4 104.6c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zm36.2 0c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z" />
          <path d="M189.5 20h-134C33.4 20 20 33.6 20 50.2v139.5c0 16.6 13.4 30.2 30 30.2h113.4l-5.3-18.3 12.8 11.9 12.1 11.2 21.5 19.3V50.2c0-16.6-13.4-30.2-30-30.2zM155.7 160.9s-4.6-5.5-8.4-10.3c16.7-4.8 23-15.3 23-15.3-5.2 3.4-10.1 5.8-14.5 7.4-6.3 2.6-12.3 4.3-18.2 5.3-12 2.2-23 1.6-32.5-.1-7.1-1.3-13.2-3.2-18.3-5.3-2.9-1.1-6-2.4-9.1-4.1-.4-.2-.8-.4-1.2-.6-.3-.2-.5-.3-.7-.4-3.2-1.8-5-3-5-3s6.1 10.2 22.3 15.3c-3.7 4.8-8.5 10.4-8.5 10.4-28.1-.9-38.8-19.3-38.8-19.3 0-41 18.3-74.3 18.3-74.3C83.2 52.2 99 53 99 53l1 1.2c-24.6 7.1-35.9 18-35.9 18s3 .2 8.1.9c14.7-13.1 35.2-12.3 35.2-12.3s.4 0 1 .1c3.6-.5 7.6-1 11.8-1 6.2 0 13 0.8 20.1 2.5 9.5 2.2 19.7 5.6 30.1 12.1 0 0-10.8-10.3-34.2-17.4l1.4-1.6s15.8-.8 31.5 10.6c0 0 18.3 33.3 18.3 74.3 0 .1-10.7 18.5-38.8 19.4z" />
        </svg>
      ),
      url: "https://discord.com/invite/p3Ubaw2X",
      color: "from-gray-700 to-black",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/_angelvelaz_?igsh=MjVqMGZoYXM3N2Zk",
      color: "from-purple-500 to-pink-500",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const avatarVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -360,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.8,
        ease: "backOut",
        delay: 0.8,
      },
    },
  }

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -80,
      scale: 0.3,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.4,
        ease: "backOut",
        delay: 1.2,
      },
    },
  }

  const socialLinkVariants = {
    hidden: {
      opacity: 0,
      x: -150,
      rotateY: -90,
      scale: 0.5,
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 1.8 + index * 0.2,
      },
    }),
  }

  const petStickerVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: 720,
      y: 50,
    },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: "backOut",
        delay: 2.2 + index * 0.15,
      },
    }),
  }

  const floatingVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: 180,
    },
    visible: (delay: number) => ({
      opacity: 0.6,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.5,
        ease: "backOut",
        delay: delay,
      },
    }),
  }

  // Image-specific animation variants
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      rotate: 45,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const petMascotVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -270,
      x: -50,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      x: 0,
      y: 0,
      transition: {
        duration: 1.6,
        ease: "backOut",
      },
    },
  }

  const FloatingPetSticker = ({
    src,
    className,
    animationDelay,
    animationType,
    motionDelay,
  }: {
    src: string
    className: string
    animationDelay: string
    animationType: string
    motionDelay: number
  }) => (
    <motion.div
      className={`absolute ${className} z-0 hidden md:block`}
      variants={floatingVariants}
      initial="hidden"
      animate="visible"
      custom={motionDelay}
    >
      <motion.img
        src={src || "/placeholder.svg"}
        alt="Pet sticker"
        className={`w-12 h-12 drop-shadow-lg animate-${animationType}`}
        style={{ animationDelay }}
        variants={imageVariants}
        whileHover={{
          scale: 1.3,
          rotate: 20,
          transition: { duration: 0.4 },
        }}
      />
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 dark:from-purple-900 dark:via-indigo-900 dark:to-black relative overflow-hidden">
      {/* Theme Toggle */}
      <div className="z-50 fixed top-4 right-4">
        <ThemeToggle />
      </div>

      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 to-pink-200/20 dark:from-purple-600/10 dark:to-pink-600/10 animate-gradient-shift z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 0.8 }}
      />

      {/* Floating Pet Stickers - Hidden on mobile, visible on md+ screens */}
      <FloatingPetSticker
        src="/images/1.png"
        className="top-20 left-10"
        animationDelay="0s"
        animationType="bounce-slow"
        motionDelay={3}
      />
      <FloatingPetSticker
        src="/images/2.png"
        className="top-80 right-20"
        animationDelay="2s"
        animationType="wiggle"
        motionDelay={3.3}
      />
      <FloatingPetSticker
        src="/images/3.png"
        className="top-60 left-1/4"
        animationDelay="4s"
        animationType="hop"
        motionDelay={3.6}
      />
      <FloatingPetSticker
        src="/images/4.png"
        className="bottom-40 right-10"
        animationDelay="1s"
        animationType="sway"
        motionDelay={3.9}
      />

      {/* Main Content - Above floating stickers */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6"
        variants={containerVariants}
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
      >
        {/* Profile Section with Pet Mascot */}
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <div className="relative mb-6 flex justify-center">
            {/* Pet mascot around avatar */}
            <motion.div
              className="absolute top-20 -right-4 z-20"
              variants={petMascotVariants}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              transition={{ delay: 2.5 }}
            >
              <motion.img
                src="/images/1.png"
                alt="Pet mascot"
                className="w-12 h-12 animate-bounce"
                variants={imageVariants}
                whileHover={{
                  scale: 1.4,
                  rotate: 25,
                  transition: { duration: 0.4 },
                }}
              />
            </motion.div>
            <motion.div
              className="absolute bottom-20 -left-4 z-20"
              variants={petMascotVariants}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              transition={{ delay: 2.8 }}
            >
              <motion.img
                src="/images/2.png"
                alt="Pet mascot"
                className="w-12 h-12 animate-wiggle"
                variants={imageVariants}
                whileHover={{
                  scale: 1.4,
                  rotate: -25,
                  transition: { duration: 0.4 },
                }}
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 blur-lg opacity-50 animate-pulse z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
            />
            <motion.div variants={avatarVariants} className="z-20">
              <Avatar className="relative w-32 h-32 border-4 border-white shadow-2xl">
                <motion.div variants={imageVariants}>
                  <AvatarImage src="/images/img_prof.jpeg" alt="Streamer Avatar" />
                </motion.div>
                <AvatarFallback className="bg-gradient-to-br from-pink-500 to-purple-500 text-white text-4xl font-bold">
                  PX
                </AvatarFallback>
              </Avatar>
            </motion.div>
          </div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4 animate-text-shimmer font-comic"
            variants={titleVariants}
          >
            HexrtDoom
          </motion.h1>

          <motion.p
            className="text-purple-700 dark:text-purple-300 text-lg md:text-xl font-medium font-comic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            Pásate a los directos para divertirte 🎮
          </motion.p>
        </motion.div>

        {/* Interactive Pet Sticker Gallery */}
        <motion.div className="mb-8 z-20 relative" variants={itemVariants}>
          <motion.h2
            className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-4 text-center font-comic"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            ¡Únete a mi squad perra! 🐾
          </motion.h2>
          <div className="flex gap-4 justify-center flex-wrap">
            {petStickers.map((pet, index) => (
              <motion.button
                key={pet.id}
                onClick={() => setSelectedPet(index)}
                className={`relative p-3 rounded-2xl border-3 transition-all duration-300 ${
                  selectedPet === index
                    ? "border-purple-500 bg-purple-100 dark:bg-purple-900/50 shadow-lg"
                    : "border-white/30 dark:border-purple-500/30 bg-white/10 dark:bg-black/20 hover:border-pink-400 dark:hover:border-purple-400"
                } animate-${pet.animation}`}
                variants={petStickerVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{
                  scale: 1.2,
                  rotate: 8,
                  transition: { duration: 0.4 },
                }}
                whileTap={{
                  scale: 0.9,
                  transition: { duration: 0.15 },
                }}
              >
                <motion.img
                  src={pet.image || "/placeholder.svg"}
                  alt={pet.name}
                  className="w-16 h-16"
                  variants={imageVariants}
                />
                <AnimatePresence>
                  {selectedPet === index && (
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0, rotate: 180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0, rotate: -180 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Heart className="w-3 h-3 text-white fill-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>
          <motion.p
            className="text-center mt-2 text-purple-600 dark:text-purple-400 font-comic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3 }}
          >
            Camara perra, no olvides seguirme en mis redes sociales 🔥
          </motion.p>
        </motion.div>

        {/* Social Links with Pet Stickers */}
        <div className="grid gap-4 w-full max-w-md z-20 relative">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon
            return (
              <motion.div
                key={link.name}
                variants={socialLinkVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <Card className="group relative overflow-hidden border-3 border-white/30 dark:border-purple-500/30 bg-white/10 dark:bg-black/20 backdrop-blur-sm hover:border-pink-400 dark:hover:border-purple-400 transition-all duration-500 rounded-2xl">
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      transition: { duration: 0.4 },
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: { duration: 0.15 },
                    }}
                  >
                    <Button asChild variant="ghost" className="w-full h-16 p-0 hover:bg-transparent group">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-6 text-purple-700 dark:text-purple-300 hover:text-purple-700"
                      >
                        {/* Pet Sticker Icon */}
                        <div className="flex items-center gap-4">
                          <span className="text-lg font-bold font-comic group-hover:text-pink-600 transition-colors duration-300">
                            {link.name}
                          </span>
                        </div>

                        {/* Traditional Icon */}
                        <motion.div
                          className="p-2 rounded-lg bg-gradient-to-br from-pink-200 to-purple-200 group-hover:from-pink-300 group-hover:to-purple-300 transition-all duration-300"
                          whileHover={{
                            scale: 1.3,
                            rotate: 15,
                            transition: { duration: 0.4 },
                          }}
                        >
                          <IconComponent className="w-5 h-5 group-hover:animate-pulse text-purple-700" />
                        </motion.div>

                        {/* Animated Background Gradient */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                        ></div>
                      </a>
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        
      </motion.div>
    </div>
  )
}
