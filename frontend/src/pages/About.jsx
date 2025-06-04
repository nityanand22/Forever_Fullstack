import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="w-full max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas
            assumenda maiores suscipit, veritatis provident! Molestias facere
            dignissimos, non iure dolorem maxime blanditiis quia necessitatibus
            vel doloremque officiis vero nam dolores temporibus sit nulla ad a
            impedit, tenetur, facilis ullam natus? Laboriosam facere amet itaque
            sit eligendi commodi, mollitia dignissimos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            deserunt nisi quibusdam quisquam sit quis aut illo magni fugit, ad
            adipisci tempora reprehenderit quia labore error, deleniti voluptas
            possimus a alias id iusto? Voluptates dolor totam eius reprehenderit
            fuga aperiam!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae odit
            ea, autem quo atque porro dolore eos laborum ipsam, voluptates natus
            doloribus voluptatibus id aperiam veniam ad deleniti. Culpa ullam
            similique minima beatae earum ea harum minus nesciunt necessitatibus
            consequuntur, sit repellat asperiores officiis. Magnam, vero
            recusandae dignissimos porro optio nobis voluptates mollitia eaque
            adipisci! Id explicabo beatae suscipit ad!
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"Why"} text2={"Choose Us"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            asperiores ab atque, laudantium incidunt, omnis voluptatum autem
            eaque eligendi iste assumenda laboriosam accusamus cum ducimus rerum
            vel modi commodi voluptate.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            asperiores ab atque, laudantium incidunt, omnis voluptatum autem
            eaque eligendi iste assumenda.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            asperiores ab atque, laudantium incidunt, omnis voluptatum.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
