import React from 'react';
import './aboutUs.css';
import adamTwo from './adamTwo.jpg';

function aboutUs() {
    return (
        <>

    <div class="container-fluid">

  <div class="row-1">
    <div class="col" className="aboutHeaders">
    <h1 className="underLine">ABOUT US</h1>
    </div>
     </div>


     <div class="row-2">
     <div class="col" className="aboutText">
     <p>True Finish offers top-quality painting and drywall services for residential homes to commercial buildings.
Based in Dane County, True Finish is dedicated to transforming spaces with high- quality craftsmanship and
exceptional customer service. Our skilled team uses premium products and eco-friendly options to ensure a
flawless finish that lasts.
</p>
   
    <p>Ready to transform your space ? Contact True Finish for a free consultation and let us bring your vision to life!
</p>

    <h5 className="contactText">CONTACT US</h5> 
    <i class="fa-solid fa-play fa-2xs"></i>
     </div>

</div>


{/* Original  */}
<div className="aboutHeaders">
<img className="adamImg" src={adamTwo} alt=""></img>
<h1 className="underContactUs">ADAM ATAR</h1>
<h6 className="underName">OWNER & FOUNDER</h6>


</div>

<div class="adamaboutText">
 Adam was mostly raised in a small town in Wisconsin, as well as Boston, Georgia where his parents lived part-time due to his father's 
 business. Growing up, he learned hard work at an early age and the dedication it took to run a business. These skills helped shape his
 commitment to providing high-quality services to every customer. <br></br><br></br>

 At just 28 years old, Adam is making his mark in the contracting industry with his newly launched company, True Finish. Specializing 
 in paint and drywall services, Adam is driven by a passion for transofrming spaces and a commitment to delivering exeptional results
 that not only meet but exceed client expectations. <br></br><br></br>

 Adam founded True Finish after identifying a gao in the market for reliable, high-quality paint and drywall with a focus on commerical
 projects, he aims to provide personalized solutions that cater to each client's unique vision. From initial consiltations to final
 touches, Adam ensures every project is handled with care and precision. <br></br><br></br>

 In his short time in business, Adam has quickly built a reputation for profesionalism and quality. He prioritizes open communication
 with his client, ensuring that their ideas and concerns are heard and addressed throughout the process. Through True Finish, he is not
 only transforming spaces but also inspiring others to pursue their passions. With his dedication to excellence and community, Adam is
 set to become a prominent figure in the contracting world, one project at a time.
</div>


  </div> 

        </>
    )
}


export default aboutUs;


