const PetsArray =  [
    {
       "Type":"Cat", 
       "Name":"Mitsi",
       "Age":1.5, 
       "Color":"Gray",
       "PicUrl":"https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
       "ContactPhone":"054-3018677",
       "IsAdupted":false
    },
    {
       "Type":"Dog", 
       "Name":"Rex",
       "Age":3, 
       "Color":"Brown",
       "PicUrl":"https://www.thesprucepets.com/thmb/Or_tc5C3Jypp_cyPbKYJJJXEjWQ=/2121x0/filters:no_upscale():strip_icc()/GettyImages-1201198563-fe6114423c714faa8cb1418a9b98e192.jpg",
       "ContactPhone":"054-1234567",
       "IsAdupted":false
    },
    {
       "Type":"Cat", 
       "Name":"Whiskers",
       "Age":2, 
       "Color":"Black and White",
       "PicUrl":"https://images.saymedia-content.com/.image/t_share/MTk2NzUzNTQ0ODk4OTQ2MTEw/black-and-white-cat-breeds.png",
       "ContactPhone":"054-7654321",
       "IsAdupted":true
    },
    {
       "Type":"Rabbit", 
       "Name":"Fluffy",
       "Age":1, 
       "Color":"White",
       "PicUrl":"https://www.thesprucepets.com/thmb/SuQLIg83iReekJ8U3VMcSN2nhP8=/1334x0/filters:no_upscale():strip_icc()/GettyImages-961860716-541a65c324a443e4b2e45818afcbc788.jpg",
       "ContactPhone":"054-9876543",
       "IsAdupted":false
    },
    {
       "Type":"Dog", 
       "Name":"Bella",
       "Age":4, 
       "Color":"Golden",
       "PicUrl":"https://www.akc.org/wp-content/uploads/2020/07/Golden-Retriever-puppy-standing-outdoors-500x486.jpg",
       "ContactPhone":"054-6543210",
       "IsAdupted":true
    },
    {
       "Type":"Parrot", 
       "Name":"Polly",
       "Age":2.5, 
       "Color":"Green",
       "PicUrl":"https://t3.ftcdn.net/jpg/00/95/29/28/360_F_95292880_GfqmxNb4u8ZxG18i2jkLt6gkAvl8xdz3.jpg",
       "ContactPhone":"054-3210987",
       "IsAdupted":false
    },
    {
       "Type":"Cat", 
       "Name":"Shadow",
       "Age":3.5, 
       "Color":"Black",
       "PicUrl":"https://www.katdootje.nl/wp-content/uploads/What-Breed-Are-Black-Cats.webp",
       "ContactPhone":"054-1928374",
       "IsAdupted":true
    },
    {
       "Type":"Dog", 
       "Name":"Buddy",
       "Age":2, 
       "Color":"White and Black",
       "PicUrl":"https://www.dogster.com/wp-content/uploads/2024/03/portrait-of-a-white-and-black-Portuguese-Water-Dog-wearing-a-collar_Lynda-McFaul_Shutterstock.jpg",
       "ContactPhone":"054-1239874",
       "IsAdupted":false
    },
    {
       "Type":"Hamster", 
       "Name":"Nibbles",
       "Age":0.5, 
       "Color":"Brown and White",
       "PicUrl":"https://img.freepik.com/premium-photo/hamster-with-white-brown-coat-has-yellow-stripe_887562-3298.jpg",
       "ContactPhone":"054-5647382",
       "IsAdupted":false
    },
    {
       "Type":"Cat", 
       "Name":"Luna",
       "Age":1, 
       "Color":"Calico",
       "PicUrl":"https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1692605907.4906063/calico-cat.jpg",
       "ContactPhone":"054-6748392",
       "IsAdupted":true
    },
    {
       "Type":"Dog", 
       "Name":"Max",
       "Age":5, 
       "Color":"Black",
       "PicUrl":"https://www.thesprucepets.com/thmb/Xe6p7v52fvxdAWdSEECZzjyGD80=/2119x0/filters:no_upscale():strip_icc()/GettyImages-1163331995-f5226107e4794ed5b334c23215ed28db.jpg",
       "ContactPhone":"054-9876540",
       "IsAdupted":true
    }
];
module.exports={

    getAllPets:(req,res)=>{
        return res.status(200).json(PetsArray);
    },
    addNewPet: (req, res) => {
      const { Type, Name, Age, Color, PicUrl, ContactPhone, IsAdupted } = req.body;
  
      // Validate if all required fields are provided
      if (!Type || !Name || !Age || !Color || !PicUrl || !ContactPhone || IsAdupted === undefined) {
        return res.status(400).json({ error: "Please provide all required fields." });
      }
  
      // Create a new pet object
      const newPet = {
        Type,
        Name,
        Age: parseFloat(Age), // Ensure Age is parsed as a float
        Color,
        PicUrl,
        ContactPhone,
        IsAdupted: !!IsAdupted, // Convert IsAdupted to a boolean
      };
  
      // Add the new pet to PetsArray
      PetsArray.push(newPet);
  
      return res.status(201).json({ message: "New pet added successfully.", pet: newPet });
    }
  
};