import { Outfit, Young_Serif } from 'next/font/google';
import Image from 'next/image';
import omeletteImg from '@/assets/images/image-omelette.jpeg'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-outfit',
});

const youngSerif = Young_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-young-serif',
});

export default function Home() {
  return (
    <div className='container max-w-[900px] mx-auto md:mt-5 md:mx-auto md:mb-0 md:p-5 rounded-lg bg-white'>
      <Image
      src={omeletteImg}
      alt='Omelette'
      width={1000}
      height={600}
      style={{ maxWidth: '100%', height: 'auto' }}
      className='rounded-lg'
      />
    
    {/* banner */}
    <div >
        <h1 className='mb-6 text-5xl tracking-wide'>Simple Omelette Recipe</h1>

        <p>
        An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
        to perfection, optionally filled with your choice of cheese, vegetables, or meats.
        </p>

  <article className='bg-rose-50 p-6 mt-6 rounded-xl'>
    <h3 className='text-rose-800 text-xl'>Preparation time</h3>

  <ul className='list-disc'>
    <li><strong>Total:</strong> Approximately 10 minutes</li>
    <li><strong>Preparation:</strong> 5 minutes</li>
    <li><strong>Cooking:</strong> 5 minutes</li>
  </ul>

  </article>
    </div>
    

    {/*Ingredients*/}   
    <div>
      <h2 className='text-2xl'>Ingredients</h2>

      <ul className='list-disc custom-list-color'>
        <li>2-3 large eggs</li>
        <li>Salt, to taste</li>
        <li>Pepper, to taste</li>
        <li>1 tablespoon of butter or oil</li>
        <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
      </ul>
  
    </div>
    

    {/*Instructions */}
    <div>
      <h2 className='text-2xl'>Instructions</h2>

      <ol className='list-decimal custom-list-color'>
        <li>
          <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
          You can add a tablespoon of water or milk for a fluffier texture.
        </li>

        <li>
          <strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.
        </li>

        <li>
          <strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
          the eggs evenly coat the surface.
        </li>

        <li>
          <strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the 
          middle, sprinkle your chosen fillings over one half of the omelette.
        </li>

        <li>
          <strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it over the 
          fillings. Let it cook for another minute, then slide it onto a plate.
        </li>

        <li>
          <strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.
        </li>
      </ol>

    </div>
    

    {/*Nutrition*/} 
    <div>
    <h2 className='text-2xl'>Nutrition</h2>

    <p className='mt-2'>The table below shows nutritional values per serving without the additional fillings.</p>
  
    <article className='list-none'>
      
      <ul>
      <li className='flex text-center justify-around border-b border-stone-200 py-2 px-0'>Calories <span>277kcal</span></li>
      <li className='flex text-center justify-around border-b border-stone-200 py-2 px-0'>Carbs <span>0g</span></li>
      <li className='flex text-center justify-around border-b border-stone-200 py-2 px-0'>Protein <span>20g</span></li>
      <li className='flex text-center justify-around py-2 px-0'>Fat <span>22g</span></li>
      </ul>
  
  </article>
  </div>



  </div>
  
  
  );
}