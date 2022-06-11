var staff = [
  {
    "name": "Jake Allyne",
    "title": "President & CEO",
    "img": "JakeAllyne.jpg",
    "email": "jake@breakthroughfitco.com",
    "bio": `Jake Allyne is the founder and CEO of Breakthrough Fit Co. With 8 years of experience, Jake specializes in exercise programming to establish proper biomechanics and correct movement patterns within a wide variety of goals. Jake also has a great deal of experience with the special needs community and it is his passion to create equal access to health and fitness for that community. His favorite food is sushi and you can often find him listening to Frank Sinatra. A quote he lives by is:

"If you can dream it, you can achieve it."`,
    "certifications": [
      "NASM CPT",
      "NASM PES",
      "NASM CES",
      "NASM FNS",
      "AFFA GFI",
      "AUTISM FITNESS",
      "USAW STRENGTH COACH",
      "MADDOG SPINNING",
      "DAS SPONSORED ATHLETE",
    ]
  }, // Jake
  {
    "name": "Stephen Goodman",
    "title": "CFO & COO",
    "img": "StephenGoodman.jpg",
    "email": "steve@breakthroughfitco.com",
    "bio": `Stephen is our CFO at Breakthrough Fit Co. He holds his Bachelor's Degree in Kinesiology from SUNY Cortland, as well as his MBA from Mercy College, graduating Summa Cum Laude. Stephen is a life-long resident of Westchester, and in his free time, enjoys exploring the beautiful nature the county has to offer, from hiking Bear Mountain, to the scenic Riverwalk in Tarrytown. Stephen is also a head coach for the Sound Shore Stars Special Olympics Team. His favorite food is Chicken Parmigiana! A quote he lives by is:

"Those who say they can and those that say they can't are both usually right."`,
  }, // Stephen
  {
    "name": "Alexis Grier",
    "title": "Coach",
    "img": "AlexisGrier.jpg",
    "email": "jake@breakthroughfitco.com",
    "bio": ``,
    "certifications": [
      "SPECIAL STRONG CERTIFIED",
    ]
  }, // Alexis
  {
    "name": "Vadid Bienaime",
    "title": "Coach",
    "img": "VadidBienaime.jpg",
    "email": "jake@breakthroughfitco.com",
    "bio": ``,
    "certifications": [
      "SPECIAL STRONG CERTIFIED",
    ]
  }, // Vadid
  {
    "name": "Nevin Santos",
    "title": "Coach",
    "img": "NevinSantos.jpg",
    "email": "nevin@breakthroughfitco.com",
    "bio": `Nevin is a NASM Certified Personal Trainer who also holds a NASM Certification in Behavioral Change. He specializes in inspiring people to change their habits and routines in a way that promotes a healthier way of life. His favorite food is sushi and during his free time you’ll usually find him on a hike, listening to Reggaetón or Hip Hop. A quote he lives by is:

"If my mind can conceive it and my heart can believe it, then I can achieve it."`,
    "certifications": [
      "NASM CPT",
      "NASM BCS",
    ]
  }, // Nevin
  {
    "name": "Taje Champagnie",
    "title": "Coach",
    "img": "TajeChampagnie.jpg",
    "email": "taje@breakthroughfitco.com",
    "bio": `As a professional with 6 years of training experience, Taje has come to the understanding that the greatest limiter is choice. He is a NASM certified Personal Trainer and specializes in balance and stability. Regardless of client goals, balance is the lowest common denominator, so his specialty is broad enough to facilitate a variety of physiological needs. He does this in order to remove as many obstacles as possible for his clients so that they get closer to that great limiter; choice. Once he helps his clients get there, they feel secure enough to make the decisions they need to regain, retain, or expand their health. A quote he lives by is:

"Those who ask for help -earnestly- deserve help."`,
  }, // Taje
  {
    "name": "Michelle Pachon",
    "title": "Massage Therapist",
    "img": "MichellePachon.jpg",
    "email": "michellesmassages14@gmail.com",
    "bio": `Meet Michelle Pachon, our NYS Licensed Massage Therapist and 200-hour Yoga Alliance Certified Instructor! Michelle has been a practicing Massage Therapist since 2015 and has extensive background in different restorative and regenerative massage styles such as Swedish, Myofascial release, Sport, Lymphatic, Prenatal, and Geriatric massage. She’s also known for her amazing Hatha, Power flow, Vinyasa flow and deep stretch yoga classes. Michelle is the best addition to your self-care routine!`,
  }, // Michelle
]

/* template

{
  "name": "First Last",
  "title": "Coach",
  "img": "FirstLast.jpg", // add to Pictures folder
  "email": "name@breakthroughfitco.com",
  "bio": `Lorem ipsum dolor sit amet...`,
  "certifications": [
    "CERT-NAME"
  ] // if none, delete
}, // Name

*/


// DON'T TOUCH:

for (let i = 0; i < staff.length; i++) {
  staff[i]["bio"] = staff[i]["bio"].replaceAll("\n", "<br>");
}
