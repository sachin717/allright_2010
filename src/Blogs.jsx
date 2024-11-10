import * as React from 'react'
import { useState } from 'react'

function BlogPost({ blog, onBack }) {
  return (
    <div className="blog-post-overlay">
      <div className="blog-post-container">
        <button className="back-button" onClick={onBack}>×</button>
        <article className="blog-post">
          <div className="blog-post-image-container">
            <img src={blog.image} alt={blog.title} className="blog-post-image" />
          </div>
          <div className="blog-post-content">
            <h1 className="blog-post-title">{blog.title}</h1>
            <p className="blog-post-read-time">{blog.readTime}</p>
            <div className="blog-post-text">
              {blog.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null)
  
  const BlogsData = [
    {
      image: '/blog_2.png',  // Replace with correct image paths
      title: 'How much Protein should you have everyday?',
      readTime: '3 MIN READ',
      content:`Protein is essential to your health and well-being—it fuels your muscles, powers your metabolism, and even helps keep your immune system strong. It’s why you hear so much buzz about protein shakes, bars, and supplements. But how much protein do you actually need every day? Let’s break it down into bite-sized, understandable info!

      Why Protein Matters
      Think of protein as the building blocks for your body. Every single cell contains protein, which plays a crucial role in repairing tissues, producing enzymes and hormones, and maintaining muscle. Whenever you’re active—whether exercising, working, or even just going about your daily routine—your body taps into these protein reserves to stay strong and functioning. So, regardless of age or fitness level, getting enough protein is key to staying healthy, strong, and energized.
      
      How Much Protein Do You Really Need?
      The right amount of protein depends on factors like your activity level, age, and personal goals. Here’s a breakdown of what most people need:
      
      Average Adult: If you’re not very active, the general rule is around 0.8 grams of protein per kilogram of body weight. For example, a 70 kg (about 155 lbs) person would need roughly 56 grams of protein per day. This is enough to support basic bodily functions and maintain muscle mass.
      
      Active People & Athletes: If you exercise often, lift weights, or play sports, your body requires more protein for muscle repair and recovery. The recommendation for active people ranges from 1.2 to 2.0 grams of protein per kilogram of body weight. This helps your muscles recover faster, grow stronger, and boosts endurance and performance.
      
      Older Adults: As we age, our muscles naturally weaken, so it becomes even more important to keep up with protein intake. Older adults should aim for around 1 to 1.2 grams per kilogram of body weight to help maintain muscle mass and prevent issues like muscle loss, weakness, and frailty.
      
      For Weight Loss or Muscle Gain: If you’re trying to lose fat or build muscle, higher protein intake (up to 2 grams per kilogram) can be extremely helpful. Protein helps you stay full longer, reducing hunger and cravings, and also promotes muscle retention. Higher protein levels can support weight loss without sacrificing muscle and aid in faster recovery post-workout.
      
      Protein-Rich Foods & Easy Tips for Meeting Your Goals
      Mix Up Your Protein Sources: Aim to get protein from a variety of foods. Lean meats, fish, eggs, dairy, beans, legumes, nuts, seeds, and whole grains are all great sources of protein. Each type brings unique benefits, so don’t rely on only one source.
      Space It Out Through the Day: Your body can only process a certain amount of protein at a time, so aim to spread it out across meals. For instance, a balanced approach might be to include a protein source with each meal and snack.
      Incorporate Protein Snacks: Protein bars, Greek yogurt, and nuts are perfect for boosting your protein intake between meals. They’re convenient and keep you fueled throughout the day.
      Consider Supplements If Needed: If you find it challenging to meet your daily protein target through food alone, consider adding a protein supplement, such as whey or plant-based protein powder. Just remember, it’s better as a supplement to whole foods, not a replacement.
      Finding Your Personal Protein Sweet Spot
      At the end of the day, your protein needs are personal. While these guidelines are a helpful starting point, your ideal protein intake depends on your unique lifestyle, body composition, and health goals. So, if you’re aiming to build muscle, lose weight, or simply stay strong as you age, finding the right balance of protein in your diet can help. Remember, it’s not about cramming in tons of protein but finding a level that supports your well-being and keeps you thriving!`
    },
    {
      image: '/blog_3.png',
      title: 'Fuel your Day Right: Importance of a Nutrient Rich Breakfast',
      readTime: '3 MIN READ',
      content:`Let’s talk breakfast! You’ve probably heard that it’s the most important meal of the day, and here’s why: a solid, nutrient-rich breakfast sets the tone for the hours ahead, giving you the energy and focus you need to tackle your day with confidence. But it’s not just about grabbing a quick bite; it’s about fueling up with quality ingredients that keep you going, not slowing you down.

      Why a Nutrient-Rich Breakfast Matters
      When you start your day with a balanced, nutrient-dense breakfast, you’re giving your body the fuel it needs to stay energized, focused, and satisfied. A breakfast that’s rich in protein, fiber, and healthy carbs can help prevent energy crashes, keep your metabolism firing, and even curb unhealthy snacking throughout the day.
      
      Skipping breakfast or opting for sugary cereals or pastries? That’s a recipe for a mid-morning slump, sugar crashes, and cravings that can throw off your day. Instead, give your body the fuel it craves with a breakfast that checks all the boxes.
      
      Breakfast Foods to Keep You Fueled
      Here are some powerhouse breakfast options that pack a punch without packing on empty calories:
      
      Oats and Whole Grains: They’re full of fiber, which helps keep you feeling full longer, and provide a steady source of energy. Try steel-cut oats, whole-grain toast, or quinoa for a breakfast that sticks with you.
      
      Eggs: Packed with protein and healthy fats, eggs are a fantastic option to start the day. They’re versatile and can be whipped up in so many ways, from omelets to breakfast burritos.
      
      Greek Yogurt & Berries: Greek yogurt is rich in protein and probiotics, great for digestion and muscle recovery. Pair it with antioxidant-packed berries, and you’ve got a low-calorie, nutrient-dense breakfast bowl.
      
      MoreThanOats: If you’re looking for a convenient, all-in-one breakfast option, MoreThanOats is a powerhouse. It’s loaded with 32g of protein, 10g of fiber, and only 265 calories per serving. Plus, it’s free of refined or artificial sugars and preservatives, so you’re getting clean energy without any added junk. It’s a perfect way to fuel up for the day ahead while enjoying the benefits of a balanced, nutrient-rich meal.
      
      Smoothies with Greens and Protein: Blend up a smoothie with spinach, a scoop of protein powder, fruits, and a handful of nuts. It’s a quick way to pack in nutrients on the go, and you can switch up the ingredients to keep it interesting.
      
      How to Make Breakfast a Lasting Habit
      For a lot of us, mornings can be rushed. The key to sticking with a healthy breakfast routine? Prep ahead! With quick and nutrient-rich options like MoreThanOats and smoothie ingredients ready to go, you’ll find it easier to get a satisfying breakfast without fuss.
      
      So, next time you’re tempted to skip breakfast, remember that a nutrient-rich meal in the morning can do wonders for your day. Start fueling up the right way, and you’ll feel the benefits in your energy, focus, and mood. It’s all about finding what works best for you, keeping it balanced, and making breakfast a habit that’s easy to stick with!`
    },
    {
      image: '/blog_1.jpg',
      title: 'Is the food we eating really nutritious?',
      readTime: '3 MIN READ',
      content: `Let’s face it: we all want to eat healthy, but do we really know if the food we’re eating is actually nutritious? In India, we’re blessed with a rich food culture—think of dal, roti, sabzi, rice, and all those classic dishes our grandparents swear by. Indian food has this reputation for being wholesome and nourishing, and while it has its perks, it’s worth asking: are we getting all the nutrients we think we are?

      The Reality Check on "Nutritious" Indian Food
      Indian meals have traditionally been considered balanced. Dal (lentils), for example, is a staple in many homes and is often seen as a primary protein source. Roti (whole wheat bread) and rice add carbs, and vegetables give us vitamins and minerals. But here’s the catch: even with all these elements, many typical Indian meals might still fall short on protein, fiber, or essential vitamins.
      
      Let’s talk protein, for example. Sure, dal has some protein, but it’s not as high as you might think. A standard serving of dal gives you only around 7-9 grams of protein, which isn’t nearly enough if you’re trying to meet the recommended daily intake. We also tend to rely heavily on carbs (rice, roti, potatoes), which, without a proper protein balance, can lead to blood sugar spikes and energy crashes. And let’s be honest, many traditional recipes are also heavy on oils or ghee, making them tasty but not necessarily the most balanced option for daily health.
      
      Are We Missing Out on Key Nutrients?
      The food we’re eating might look “complete,” but it’s often missing some essential nutrients. For example, iron and vitamin B12 are crucial, especially for vegetarians, yet they’re lacking in many typical Indian vegetarian meals. Even fiber intake can be low if you’re not eating a variety of vegetables, whole grains, or legumes in every meal.
      
      The problem isn’t just with the ingredients—it’s also with the way we cook. High-heat cooking, deep frying, or overcooking veggies can strip food of its nutritional value. Those beautifully spiced and simmered sabzis (vegetables) may lose a significant chunk of their vitamins and minerals in the process, leaving you with less than you bargained for.
      
      Why It’s Time to Shake Things Up
      So, is there a way to make our food truly nutritious without losing our love for Indian flavors? Absolutely! It’s all about making small but powerful changes. Think of adding protein-rich options like paneer, tofu, or even nuts and seeds to your meals. If you’re non-vegetarian, adding an egg or some lean meat can make a big difference. And if you’re vegetarian, focus on foods like chickpeas, kidney beans, and even quinoa for a protein boost.
      
      Another good approach is portion control. Instead of filling half your plate with rice or roti, try making space for a protein source and more veggies. Also, try swapping refined carbs with whole grains—swap white rice with brown rice or mix up your roti flour with millet or other whole grains.
      
      Here’s How You Can Upgrade Your Plate
      Protein Boosters: Include more protein in each meal. Try adding sprouted moong or lentils, paneer, or even a scoop of protein powder to shakes or smoothies.
      
      Healthy Cooking Methods: Stick to steaming, baking, or sautéing instead of deep frying. These methods retain more nutrients in your food.
      
      Fiber-Rich Foods: Add variety with fiber-rich foods like whole grains, chia seeds, and fresh, crunchy veggies.
      
      Smarter Carb Choices: Choose complex carbs like oats, millet, and brown rice that offer more fiber and keep you full longer.
      
      It’s time to rethink “traditional” and add a twist to make sure our beloved meals aren’t just filling but genuinely nutritious. Making these changes doesn’t mean saying goodbye to Indian food—it just means finding ways to enjoy it in a way that truly fuels us. So, the next time you sit down for a meal, ask yourself: is this really giving me the nutrients I need?`
    },
  ]

  return (
    <>
      <div className="nutriread-container">
        <h1 className="nutriread-title">Nutri Read</h1>
        <div className="nutriread-cards">
          {BlogsData.map((article, index) => (
            <div 
              key={index} 
              className="card" 
              onClick={() => setSelectedBlog(article)}
            >
              <img src={article.image} alt={article.title} className="card-image" />
              <div className="card-content">
                <h2 className="card-title">{article.title}</h2>
                <p className="card-preview">
                  {article.content.substring(0, 150)}...
                </p>
                {article.readTime && <p className="card-read-time">{article.readTime}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedBlog && <BlogPost blog={selectedBlog} onBack={() => setSelectedBlog(null)} />}
    </>
  )
}

export default Blogs