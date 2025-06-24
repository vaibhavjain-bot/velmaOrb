"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const eulogies = [
  {
    id: 1,
    speaker: "Cassandra",
    relationship: "Granddaughter",
    excerpt: "If you knew Gramma, you knew that Friday nights at Velma and Fred's was where the magic happened...",
    fullText: `If you knew Gramma, you knew that Friday nights at Velma and Fred's was where the magic happened. Cold beer in hand, surrounded by the best company, stories flowing about the week that was – and inevitably, the sound of "FRED!" echoing through the house when Grampa had gotten into some sort of mischief. Poor Fred/Grampa – he was probably the only person brave enough to cross Gramma's stern side, and we all got front-row seats to those legendary moments.

Gramma wasn't just a grandmother — she was a force. A legend. The glue that held this family together, and occasionally the fire that lit it up too. She loved hard, hugged tight, and told it like it was — whether you were ready to hear it or not. She didn't just love fiercely – she lived fiercely. She was fierce in the way that only grandmothers who've raised generations can be. From the time I was three years old, spending every summer with her until I was sixteen, she was shaping me into the woman I am today, one adventure at a time.

She taught me that family isn't just about blood – it's about showing up, about creating magic in the everyday, and about never backing down from a good mini golf challenge. Because let's be honest, Gramma was going to win that game, or Aunt Lianne was, and the rest of us were just happy to be there trying to keep up.

Gramma took us on so many adventures. She didn't just watch us grow up—she lived alongside us. Whether it was swimming with polar bears at the zoo (no, not literally), dragging us out for Thursday town days, or watching afternoon matinees, she made every moment count. Gramma never met an adventure she didn't want to share with us kids, the cousins or her own kids. She was adventurous, too. She didn't let age or illness slow her spirit. Whether it was a trip to Baku with her nieces, nephews, and Aunt Marney—or planning that final West Coast adventure she didn't get to take—her soul was always ready to see what was around the next bend. And I know she'll still make that west coast trip with us in spirit, watching every sunset from the best seat in the sky.

Some of my favorite memories were at the cottage. Those cottage summers were pure gold. There was just something about that place. Maybe it was the way the water sparkled in the sun, or how Grampa always seemed to catch the biggest fish, or maybe it was the way Gramma would host the end-of-summer fish fry at their place like it was a Michelin-starred banquet. All the fish we caught (plus whatever the rest of the family "donated")—She could take a simple fish dinner and turn it into a celebration that would be talked about all year long.

Her house was full of love — and magnets. So. Many. Magnets. I used to love bringing her one from every trip I took. I looked forward to finding that perfect magnet for Gramma's collection. It became our little tradition – my way of bringing a piece of my adventures back to her, and her way of keeping our connection alive no matter where life took me. Her refrigerator was like a map of all the places love had traveled.

Christmas was when Gramma's magic truly shone. Christmas - it was her Super Bowl. Her love for snowmen, the way she created wonder and joy – it wasn't just about the holiday, it was about keeping the magic alive for Aunt Lianne. Even after Aunt Lianne passed, Gramma continued to create each holiday with that same love and wonder, because that's who she was. She understood that love doesn't end, it just finds new ways to express itself. She didn't do anything halfway.

And let's talk about her love for Fred. Because no story about Gramma is complete without mentioning the soundtrack of our childhood: "FRED!!!" You could be anywhere in the house — eating, napping, hiding — and suddenly you'd hear it. And we all knew: Fred did something. Again. Honestly, it was comforting. Like the birds chirping. Or the hum of the fridge. No matter what, those two were a team through and through.

One of the most meaningful memories I'll carry with me forever is her being at my wedding with Drew. The fact that she made it to Drew and my wedding, despite how sick she was, tells you everything you need to know about Gramma's determination and love. She was going to be there, no matter what, because that's what you do for family. That memory will be treasured forever – seeing her there, knowing she fought to be present for one of the most important days of my life. That was her love in action- unwavering, proud and present.

Gramma had her simple pleasures – sunsets that painted the sky, cardinals and hummingbirds visiting her property, strawberry milkshakes, and wildlife that seemed to know they were welcome in her world. But above all else, she loved her family with a devotion that was both fierce and tender.

For five years, she fought cancer with a strength that amazed all of us. Even in her battle, she remained the woman we all knew and loved – determined, loving, and somehow still managing to take care of everyone else. To be there for her last breath, to surround her with love as she found her peace, was both heartbreaking and beautiful. She knew we were there. She knew she was loved. And while her body may have let go, her spirit never will.

There's a hole now. A space that words and time and even fish fries can't quite fill. But in that space lives every memory, every lesson, every laugh she gave us.

Gramma, you shaped us all into who we are today. You showed us that family is everything, that adventure is always worth it, that love should be expressed loudly and often, and that sometimes the best response to life's chaos is a good, strong "FRED!" You'll be missed forever, but you'll also be remembered forever – in every sunset we watch, every cardinal we spot, every family gathering where someone tells one of your stories and the whole room lights up with laughter.

No words can replace what's missing, but your love, your lessons, and your legacy live on in all of us. Thank you for everything, Gramma. Until we meet again. Gramma, we love you more than words can say. Forever in our hearts.`,
  },
  {
    id: 2,
    speaker: "Megan",
    relationship: "Granddaughter",
    excerpt: "When I think about Gramma and growing up, I think about town day. Every Thursday, Gramma would pack up all her grandchildren and we would go to town...",
    fullText: `Good afternoon, everyone. Thank you for taking the time today to honour our friend, mother, grandmother and wife. Although Gramma was sick for a long time, I always thought she would outlive everyone as she was resilient as hell and frankly too stubborn to die.

When I think about Gramma and growing up, I think about town day. Every Thursday, Gramma would pack up all her grandchildren and we would go to town. There, we would do the shopping for the week, but Gramma would always spoil us and let us pick out a little present for ourselves and a toy for Spook (which she would destroy in 5 minutes).

One time when Gramma, Aunt Lianne and I were in Wal-Mart I told Gramma that I was going to go and walk around for awhile. I couldn't find anything special, so I started looking for her and Aunt Lianne. I found them in the freezer section. She was holding on to the shopping cart and her purse was dangling off her arm. I quietly came up from behind her and grabbed her purse and she immediately started screaming. I swear everyone in that freezer section stopped to look at us. She turned her head to see who had grabbed her purse and when she saw it was me, she burst out laughing. I started laughing too. Aunt Lianne, who had witnessed the entire incident, looked at me and said "Not nice, Megan". And we all laughed together again.

When we would go to town, we would always have to go to the infamous Steak Villa for lunch. She would always tell the same waitress about my allergies and request to read the ingredients for my order, mushroom soup. Although the can of mushroom soup never changed, Gramma always had it brought to our table so she could read it and make sure it was safe for me to eat. She was always trying to protect me. Although she could be forgetful, and in the next breath, sometimes she would try to order a bagel with peanut butter. I had to butt in and say "Gramma!" and then she would change her order. That was Gramma though, her heart was in the right place.

Thinking about the life that Gramma lived and the legacy she leaves behind, she lived a life full of joy and happiness. She got to explore many parts of Canada and even took a spontaneous trip to Azerbaijan. As a sidenote, I think it is hilarious that a woman who has never left the country before decides to go a less common country with a completely different culture. That was Gramma though, she jumped into the unknown with arms wide open.

Gramma was always present for all her families' big moments. She never missed a graduation, a Christmas, an anniversary, or a birthday. Celebrations aren't going to be the same without you, Gramma. Especially Christmas. No one had as many snowmen as Gramma did. Even if Gramma couldn't make an event, you knew there would be a post coming on Facebook congratulating us on our achievements. When I was finishing up my Master's in Guelph, I sent her a picture of me on a tractor that was covered with flowers and leaves. I wanted her to show it to Grampa. I sent the picture to her and never got a response back. The next day, the picture was up on Facebook. Clearly, Gramma and I had to have a chat about boundaries, but I thought it was just so sweet that the picture meant so much to her that she wanted to share it with her friends and family. I never had that chat.

Telling the stories is the fun part. To remember how much we laughed and enjoyed each other and how much Gramma had shaped me into the person I am today. The harder part is now knowing that there won't be any more memories to make with you. No more laughs to share together. Although, this chapter in our family is closing, you will never be forgotten, Gramma. You live on in the hearts and memories of those you were loved by. Your traditions of mass decorating for Christmas or Friday nights at the house will live on and so that makes me feel more at peace that you will continue to live on through us. I love you so much Gramma. Thank you for your unconditional love. You will be missed. I hope to be half the woman you are, with how much love you have for others, but perhaps maybe a smidge less stubborn. Love you Gramma!`,
  },
  {
    id: 3,
    speaker: "Maiya",
    relationship: "Granddaughter",
    excerpt: "Nothing could've had prepared me for this moment more than the text that I got from my dad on Friday the 13th of all days...",
    fullText: `Nana,

Nothing could've had prepared me for this moment more than then the text that I got from my dad on Friday the 13th of all days, saying that you were unresponsive since the night before, and crying in a part source bathroom at work and having to take a day off to cope with my feelings and grief (I knew she was mad at me for it, but I'm glad I did because the next day you passed and I didn't want to cry in the bathroom at work again.) of losing probably one of the most toughest women in my life, but here we are.

Besides the circumstances that brought us here let's look at all the fun moments she had brought to us. The countless road trips to come up and visit and I think we all know how much I HATED coming up here thinking in my mind this was some form of punishment for bad behaviour calling my mom crying and saying how much I wanted to come home, but looking back that was some of the best moments we had together, the amount of fishing trips me, Meg, and papa went on because nana wanted us out and away from the house so she can get some peace and quiet from our bullshit, all I can remember is the one fishing trip we took when the truck battery died and we had to use the battery from the boat to get us back and oh boy was she surprised to see us when we got home with the biggest " what are you doing here and back so early" and all we had to say was " the truck died and we had to come back", the countless arguments that got us nowhere and that kept going in circles and her saying the same thing thinking that was her best point. To Christmas and photos that made good memories, scrap books of photos of summer adventures, trips to the cottage and great grandmas cabin in Maach, and the pictures with her prized pink peonies. To the number of FREDs yelled, and calling me Greg because of how stubborn I was, "like father like daughter". All of the cooking and baked goods were always the highlight of any trip coming up, weddings, graduations between the 3 of us. She always knew I was going to be the stubborn one of the three, I mean look at who my dad is, sorry dad someone had to say it. Friday night company, and the time someone brought a pale of ice cream and me, Landon, Brooke, Mads, and Troy nearly ate the whole thing and she caught us in the act and took a photo and posted it on her Facebook , and her yelling at me to put a helmet on whenever I was on the four wheeler or the snow machine, trips to the petting zoo where a goat tried to eat Megan. Adventures in the tree house, and the time me and Mads filled the tree house up with sand and she got mad didn't hear the end of that one for years. Thursday town trips, where no wasn't an answer you had to go. The essay of Megs and Cassandra's grad photos meanwhile I only got 4 posted on Facebook.

I would always tell my friends that "my nana is in her 80's, has had breast cancer, lung cancer twice, I think once she wins an argument she could pass in peace after winning the final argument." Well she proved me right her biggest argument that she won was her broken hip, up until her last moments she was still arguing so I've heard, and she won those arguments. The last FaceTime that we had was when she told me to give it hell in the heavy duty course in the fall and take no shit from anyone and I told her don't worry I won't let you down.

There are some regrets I have and not telling her like my graduation from my 310S Automotive Mechanic program was a tough one, her not being able to see me and Meg get married (if I even get married) but when I do I will save you a seat. And to quote an Alex Warren song called Save You a Seat , " Just like a memory , you never left me, you just left to soon, I'll save you a seat next to me, you're always at the table, hope you're proud of what you see, watching' with the angels , you're written in my soul ,it's your blood that I bleed, wherever you are, wherever I'll be, I'll save you a seat".

To wrap up, I just wanted to say there will never be a women as tough and stubborn as you were in my life again so I am going to cherish every moment spent together, love you forever and always nana. Say hello to Liane and spook for us. Love you and miss you.`,
  },
]

export default function EulogiesSection() {
  const [selectedEulogy, setSelectedEulogy] = useState(0)
  const [showFullText, setShowFullText] = useState(false)

  const nextEulogy = () => {
    setSelectedEulogy((prev) => (prev + 1) % eulogies.length)
    setShowFullText(false)
  }

  const prevEulogy = () => {
    setSelectedEulogy((prev) => (prev - 1 + eulogies.length) % eulogies.length)
    setShowFullText(false)
  }

  const selectEulogy = (index) => {
    setSelectedEulogy(index)
    setShowFullText(false)
  }

  const toggleFullText = () => {
    setShowFullText(!showFullText)
  }

  return (
    <div className="space-y-8">
      {/* Speaker Navigation */}
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-4 p-4 bg-slate-50 rounded-lg">
          {eulogies.map((eulogy, index) => (
            <button
              key={eulogy.id}
              onClick={() => selectEulogy(index)}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                index === selectedEulogy ? "bg-white shadow-md ring-2 ring-slate-300" : "hover:bg-white/50"
              }`}
            >
              <div className="text-left">
                <p className="font-medium text-slate-800 text-sm">{eulogy.speaker}</p>
                <p className="text-xs text-slate-600">{eulogy.relationship}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Eulogy Display */}
      <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-slate-50">
        <CardContent className="p-8 md:p-12">
          {/* Speaker Header */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="text-center">
              <h4 className="text-2xl font-serif text-slate-800">{eulogies[selectedEulogy].speaker}</h4>
              <p className="text-slate-600 font-medium">{eulogies[selectedEulogy].relationship}</p>
            </div>
          </div>

          {/* Quote Icon */}
          <div className="flex justify-center mb-6">
            <Quote className="h-8 w-8 text-slate-400" />
          </div>

          {/* Eulogy Text */}
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            <div className="text-center">
              {showFullText ? (
                <div className="whitespace-pre-line text-left max-h-96 overflow-y-auto pr-4">{eulogies[selectedEulogy].fullText}</div>
              ) : (
                <p className="text-xl font-light italic">{eulogies[selectedEulogy].excerpt}</p>
              )}
            </div>
          </div>

          {/* Read More/Less Button */}
          <div className="flex justify-center mt-8">
            <Button
              onClick={toggleFullText}
              variant="outline"
              className="text-slate-600 hover:text-slate-800 border-slate-300"
            >
              {showFullText ? "Show Less" : "Read Full Eulogy"}
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200">
            <Button
              onClick={prevEulogy}
              variant="ghost"
              className="flex items-center space-x-2 text-slate-600 hover:text-slate-800"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </Button>

            <div className="flex space-x-2">
              {eulogies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => selectEulogy(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === selectedEulogy ? "bg-slate-800" : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextEulogy}
              variant="ghost"
              className="flex items-center space-x-2 text-slate-600 hover:text-slate-800"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}