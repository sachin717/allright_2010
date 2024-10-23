import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import '../App.css'; // Assuming this is your custom CSS file

const IngredientComponent = () => {
  const [oatsRef, oatsInView] = useInView({ threshold: 0.1});
  const [wheyProteinRef, wheyProteinInView] = useInView({ threshold: 0.2 });
  const [almondsRef, almondsInView] = useInView({ threshold: 0.3 });
  const [saltRef, saltInView] = useInView({ threshold: 0.4 });
  const [flaxseedsRef, flaxseedsInView] = useInView({ threshold: 0.5 });
  const [chiaSeedsRef, chiaSeedsInView] = useInView({ threshold: 0.6 });

  // Spring animation based on scroll visibility
  const fadeIn = (inView) =>
    useSpring({
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(100px)',
      config: { tension: 200, friction: 30 },
    });

  return (
    <div className="Ingr-container">
      <h1 className="title">WHAT'S INSIDE?</h1>
         <div className='Relativeposition'>
      {/* Oats */}
      <animated.div style={fadeIn(oatsInView)} ref={oatsRef} className="ingredient oats">
        <img src="/animated (1).png" alt="Oats" className="ingredient-image-oats" />
        <p className='Oats-text'>Oats</p>
      </animated.div>

      {/* Whey Protein */}
      <animated.div style={fadeIn(wheyProteinInView)} ref={wheyProteinRef} className="ingredient whey-protein">
        <img src="/animated (2).png" alt="Whey Protein" className="ingredient-image" />
        <p className='WheyProtien-text'>Whey Protein</p>
      </animated.div>

      {/* Almonds */}
      <animated.div style={fadeIn(almondsInView)} ref={almondsRef} className="ingredient almonds">
        <img src="/animated (3).png" alt="Almonds" className="ingredient-image" />
        <p className='Almonds-text'>Almonds</p>
      </animated.div>

      {/* Himalayan Salt */}
      <animated.div style={fadeIn(saltInView)} ref={saltRef} className="ingredient himalayan-salt">
        <img src="/animated (6).png" alt="Himalayan Salt" className="ingredient-image" />
        <p className='Himalyan-text'>Himalayan Salt</p>
      </animated.div>

      {/* Flaxseeds */}
      <animated.div style={fadeIn(flaxseedsInView)} ref={flaxseedsRef} className="ingredient flaxseeds">
        <img src="/animated (5).png" alt="Flaxseeds" className="ingredient-image" />
        <p className='Flex-text'>Flex seeds</p>
      </animated.div>

      {/* Chia Seeds */}
      <animated.div style={fadeIn(chiaSeedsInView)} ref={chiaSeedsRef} className="ingredient chia-seeds">
        <img src="/animated (4).png" alt="Chia Seeds" className="ingredient-image-chia" />
        <p className='Chia-text'>Chia Seeds</p>
      </animated.div>
    </div>
    </div>
  );
};

export default IngredientComponent;
