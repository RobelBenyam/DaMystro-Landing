import AnimatedCardStack from "@/components/AnimatedCardStack"
import HeroParticlesClient from "@/components/HeroParticlesClient"
import StatCounter from "@/components/StatCounter"
import ConfettiButton from "@/components/ConfettiButton"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">DaMystro</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#games" className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Games</a>
                <a href="#about" className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#contact" className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <HeroParticlesClient />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold gradient-text mb-6">DaMystro</h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0">Crafting extraordinary gaming experiences that push the boundaries of imagination and technology</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#games" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center">Explore Our Games</a>
              <ConfettiButton className="border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm text-center">Try The Card Demo</ConfettiButton>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <AnimatedCardStack />
          </div>
        </div>
      </section>

      <section id="games" className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Games</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Immerse yourself in worlds where fantasy meets reality, where every decision shapes your destiny</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Shadow Realms", genre: "Action RPG", description: "A dark fantasy world where ancient magic clashes with modern technology" },
              { title: "Neon Drift", genre: "Racing", description: "High-speed cyberpunk racing through neon-lit cityscapes" },
              { title: "Quantum Quest", genre: "Strategy", description: "Build and manage your own space empire across multiple dimensions" },
            ].map((game, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-purple-900 hover:to-blue-900 transition-all duration-500 transform hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                  <div className="text-6xl text-white/20">🎮</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{game.title}</h3>
                    <span className="text-sm text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">{game.genre}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{game.description}</p>
                  <button className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-lg transition-colors">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About DaMystro</h2>
              <p className="text-xl text-gray-200 mb-6">Founded by passionate gamers and visionary developers, DaMystro is dedicated to creating immersive gaming experiences that transcend traditional boundaries.</p>
              <p className="text-lg text-gray-300 mb-8">Our team combines cutting-edge technology with artistic excellence to deliver games that not only entertain but inspire. We believe in the power of storytelling, innovation, and community to shape the future of gaming.</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center"><div className="text-3xl font-bold text-purple-400 mb-2"><StatCounter end={50} suffix="+" /></div><div className="text-gray-300">Team Members</div></div>
                <div className="text-center"><div className="text-3xl font-bold text-blue-400 mb-2"><StatCounter end={10} suffix="+" /></div><div className="text-gray-300">Games Released</div></div>
                <div className="text-center"><div className="text-3xl font-bold text-purple-400 mb-2"><StatCounter end={1000} suffix="K+" /></div><div className="text-gray-300">Active Players</div></div>
                <div className="text-center"><div className="text-3xl font-bold text-blue-400 mb-2"><StatCounter end={15} suffix="+" /></div><div className="text-gray-300">Awards Won</div></div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl flex items-center justify-center">
                <div className="text-8xl text-white/20">🏆</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-12">Ready to join the adventure? We'd love to hear from you.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center"><div className="text-3xl mb-4">📧</div><h3 className="text-xl font-bold text-white mb-2">Email</h3><p className="text-gray-300">hello@damystro.com</p></div>
            <div className="text-center"><div className="text-3xl mb-4">📍</div><h3 className="text-xl font-bold text-white mb-2">Location</h3><p className="text-gray-300">San Francisco, CA</p></div>
            <div className="text-center"><div className="text-3xl mb-4">💼</div><h3 className="text-xl font-bold text-white mb-2">Careers</h3><p className="text-gray-300">Join our team</p></div>
          </div>
          <ConfettiButton className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Contact Us</ConfettiButton>
        </div>
      </section>

      <footer className="bg-black/80 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white font-bold text-xl mb-4 md:mb-0">DaMystro</div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>© 2024 DaMystro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
