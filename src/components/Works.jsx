import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { ErrorBoundary } from "react-error-boundary";
import { useMediaQuery } from "react-responsive";
import { styles } from "../styles";
import { github, hosted } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live }) => {
  const onError = (error) => {
    // return a fallback component here
    return <div className="text-red-400">Something went wrong!</div>;
  };
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <ErrorBoundary onError={onError}>
      {!isMobile ? (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
          >
            <div className="relative w-full h-[230px]">
              <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10  h-10 rounded-full  flex justify-center items-center cursor-pointer"
                >
                  <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
                </div>
                {live && (
                  <div
                    onClick={() => window.open(live, "_blank")}
                    className="white-gradient ml-3 w-10  h-10 rounded-full  flex justify-center items-center cursor-pointer"
                  >
                    <img src={hosted} alt="github" className="w-1/2 h-1/2 object-contain" />
                  </div>
                )}
              </div>
            </div>
            <div className="mt-5">
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </Tilt>
        </motion.div>
      ) : (
        <div>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
          >
            <div className="relative w-full h-[230px]">
              <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10  h-10 rounded-full  flex justify-center items-center cursor-pointer"
                >
                  <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
                </div>
                {live && (
                  <div
                    onClick={() => window.open(live, "_blank")}
                    className="white-gradient ml-3 w-10  h-10 rounded-full  flex justify-center items-center cursor-pointer"
                  >
                    <img src={hosted} alt="github" className="w-1/2 h-1/2 object-contain" />
                  </div>
                )}
              </div>
            </div>
            <div className="mt-5">
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </Tilt>
        </div>
      )}
    </ErrorBoundary>
  );
};

const Works = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  console.log(isMobile, "is");
  return (
    <>
      {!isMobile && (
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>
      )}
      {isMobile && (
        <div>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </div>
      )}
      <div className="w-full flex">
        {!isMobile && (
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            In addition to my ecommerce website, social media/freelance work website, and event
            display app, I have also completed several other projects that showcase my skills as a
            web developer.
            <br />
            &nbsp; &#x2022; &nbsp; On my GitHub repository, you will find a range of projects that
            utilize different technologies and frameworks, such as:
            <br />
            &nbsp; &#x2022; &nbsp; A Shopping Cart Project which done using Typescript.
            <br />
            &nbsp; &#x2022; &nbsp; A real-time chatting App (WhatsApp Clone) using Socket-io, react,
            node js and mongo.
            <br />
            &nbsp; &#x2022; &nbsp; Nextflix -clone, Olx etc.. which i have done for learning
            diffrent concepts.
            <br /> Each of these projects challenged me to think creatively and develop solutions
            that meet the needs of different types of users. I am constantly exploring new
            technologies and frameworks, and I am excited to continue building my skills as a web
            developer through new projects and collaborations.
          </motion.p>
        )}
        {isMobile && (
          <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            In addition to my ecommerce website, social media/freelance work website, and event
            display app, I have also completed several other projects that showcase my skills as a
            web developer.
            <br />
            &nbsp; &#x2022; &nbsp; On my GitHub repository, you will find a range of projects that
            utilize different technologies and frameworks, such as:
            <br />
            &nbsp; &#x2022; &nbsp; A Shopping Cart Project which done using Typescript.
            <br />
            &nbsp; &#x2022; &nbsp; A real-time chatting App (WhatsApp Clone) using Socket-io, react,
            node js and mongo.
            <br />
            &nbsp; &#x2022; &nbsp; Nextflix -clone, Olx etc.. which i have done for learning
            diffrent concepts.
            <br /> Each of these projects challenged me to think creatively and develop solutions
            that meet the needs of different types of users. I am constantly exploring new
            technologies and frameworks, and I am excited to continue building my skills as a web
            developer through new projects and collaborations.
          </p>
        )}
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects?.map((project, index) => {
          return <ProjectCard key={`project-${index}`} index={index} {...project} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
