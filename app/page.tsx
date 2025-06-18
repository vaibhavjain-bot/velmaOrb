import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import PhotoCarousel from "@/components/photo-carousel"
import Link from "next/link"


export default function ObituaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-pink-50 text-slate-800">
      {/* Header */}
      <header className="bg-white/70 shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-serif text-center text-rose-800">In Loving Memory of Velma Nichol</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Photo */}
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white ring-4 ring-pink-200">
                <Image
                  src="/velma.JPG" // Replace with actual image path
                  alt="Velma Nichol"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-1 rounded-full shadow">
                <span className="text-sm text-slate-600 font-medium">1939 – 2025</span>
              </div>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-serif text-rose-900">Velma Nichol</h2>
              <p className="text-lg text-slate-600 font-light">Beloved Wife, Mother, Grandmother & Friend</p>
            </div>
          </div>
        </div>
      </section>

      {/* Obituary Text */}
      <section className="py-12 bg-white/80">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-white/90 backdrop-blur-md shadow-xl border-0 rounded-xl">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <p className="text-xl font-light mb-6 text-center italic text-pink-800">
                  "Her spirit lives on in every laugh, every gathering, and every sunset."
                </p>

                <Separator className="my-8" />

                <div className="space-y-6">
                  <p>
                    With full hearts and cherished memories, we announce the peaceful passing of <strong>Velma Nichol</strong> on <strong>June 14th, 2025</strong>, surrounded by the love and warmth of her family. Though our hearts are heavy, we celebrate a life beautifully lived—a woman who was so much more than a wife, mother, grandmother, and friend; she was a light, a pillar, and a joy to all who knew her.
                  </p>

                  <p>
                    Velma will be dearly missed by her loving husband <strong>Fred</strong>; children <strong>Brenda (Gary)</strong> and <strong>Greg</strong>; her treasured grandchildren <strong>Cassandra (Drew), Megan (VJ)</strong>, and <strong>Maiya</strong>; and siblings <strong>Lois, Barbara, Lorne (Eleanor), Laura Jean (Nelson)</strong>, and <strong>Dorothy</strong>. She is now reunited with her beloved daughter <strong>Lianne</strong>, her parents <strong>Barbara and Wycliffe</strong>, and siblings who passed before her.
                  </p>

                  <p>
                    Born in Kenabeek, Ontario, Velma attended McCool School and New Liskeard High. She worked at Northern Telephone and later found joy raising her family. In time, she returned to work at the Ministry of Natural Resources and Connor&apos;s Saw Mill until her retirement.
                  </p>

                  <p>
                    Her greatest joys were never things—they were people. She cherished family dinners, porch gatherings filled with laughter, and holiday traditions. She loved snowmen, hummingbirds, sunsets, and Christmas more than words could say.
                  </p>

                  <p>
                    The Nichol family extends deep thanks to the compassionate teams at Sudbury&apos;s Health Science Centre and Temiskaming Hospital. Your kindness carried us through.
                  </p>

                  <p>
                    In lieu of flowers, donations may be made in Velma&apos;s memory to <strong className="text-blue-600 font-medium">
  <Link className="underline hover:text-blue-800" href="https://communitycancercare.ca/" >
    
      Community Cancer Care, New Liskeard
    
  </Link>
</strong>.
                  </p>
                </div>

                <Separator className="my-8" />

                {/* Service Info */}
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-serif text-slate-800">Service Information</h3>
                  <div className="space-y-2 text-slate-600">
                    <p><strong>Visitation:</strong> Thursday, June 19th, 2:00–4:00 PM and 7:00–9:00 PM</p>
                    <p><strong>Location:</strong><Link className="underline hover:text-blue-800" href="https://maps.app.goo.gl/8xje7Esj2fZkCzie6"> Buffam Leveille Funeral Home
                    251 Shepherdson Road, New Liskeard, Ontario</Link></p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Video and Slideshow Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* YouTube Video Section */}
          <section className="py-16 bg-gradient-to-t from-pink-50 to-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h3 className="text-3xl font-serif text-rose-900 mb-4">Celebrating Velma&apos;s Beautiful Life</h3> 
             <p className="text-slate-600 mb-3 max-w-2xl mx-auto">
            Watch this tribute video celebrating Velma&apos;s remarkable journey
            </p>
            {/* <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video bg-slate-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Memorial Video Tribute"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div> */}
          </div> 

          {/* Carousel Slideshow */}
          <div className="text-center mb-8">
            <h4 className="text-2xl font-serif text-slate-800 mb-4">Cherished Memories</h4>
            <p className="text-slate-600 max-w-xl mx-auto">
              A collection of precious moments that tell the story of a life well-lived
            </p>
          </div>
          <PhotoCarousel />
        </div>
      </section>
      
          
          
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-8 text-center">
        <p className="text-pink-700 italic">
          "Those we love don&apos;t go away, they walk beside us every day."
        </p>
        <p className="text-sm text-slate-400 mt-4">© 2025 The Nichol Family. All rights reserved.</p>
      </footer>
    </div>
  )
}