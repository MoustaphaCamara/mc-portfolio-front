import { useEffect, useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { MotionWrap } from '../../wrapper';
import { urlFor } from '../../client.ts';
import useFetch from '../../hooks/useFetch.ts';
import Loader from '../../components/Loader/Loader';
import './Portfolio.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavList } from '../../constants/navList.ts';
import { SanityData } from '../../constants/data.ts';
import * as Filter from '../../constants/filters.ts';
import Button from '../../components/Button.tsx';
import { Queries } from '../../constants/queries.ts';

const settings = {
  dots: true,
  dotsClass: 'slick-dots',
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const filterButtons: string[] = [
  Filter.Portfolio.ALL,
  Filter.Portfolio.REACT,
  Filter.Portfolio.VUE,
  Filter.Portfolio.JS,
  Filter.Portfolio.TS,
  Filter.Portfolio.SASS,
];

const Portfolio = () => {
  const [filter, setFilter] = useState('tout afficher');
  const [query, setQuery] = useState<Queries | string>(Queries.PORTFOLIO);

  const { data, loading, error } = useFetch(query);
  if (error) console.log(error);

  useEffect(() => {
    if (filter === 'tout afficher') {
      setQuery(Queries.PORTFOLIO);
    } else {
      setQuery(
        `*[_type == 'works' && '${filter}' in tags] | order(releaseDate desc)`,
      );
    }
  }, [filter]);

  return (
    <div id={NavList.PORTFOLIO}>
      <h2 className="head-text">
        mon <span> portfolio</span>
      </h2>

      <div className="app__portfolio-filter">
        {filterButtons.map((item: string, index: number) => (
          <div key={index}>
            <Button content={item} status={filter} setStatus={setFilter} />
          </div>
        ))}
      </div>

      <Slider {...settings}>
        {loading && <Loader />}
        {data?.map((work: SanityData, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [-40, 0] }}
            transition={{ duration: 0.5 }}>
            <div className="app__portfolio-item" key={index}>
              <div className="app__portfolio-item-picture-container">
                <div className="app__portfolio-item-picture">
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <img src={urlFor(work.imgUrl)} alt={work.name} />
                  </a>
                </div>
              </div>
              <div className="app__portfolio-item-description">
                <h4 className="head-text">{work.title}</h4>
                <p style={{ marginTop: 10 }}>{work.description}</p>
                <p style={{ color: 'var(--orange-color)' }}>
                  Technologies utilisées :
                </p>
                <div className="app__portfolio-icons">
                  {work.icon?.map((icon, index) => (
                    <img src={urlFor(icon)} alt={work.name} key={index} />
                  ))}
                </div>
                <div className="app__portfolio-links">
                  <a
                    href={work.sourceCode}
                    target="_blank"
                    rel="noreferrer"
                    className="app__portfolio-link-item">
                    <AiFillGithub /> Code source
                  </a>
                  <a
                    href={work.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="app__portfolio-link-item">
                    <AiFillEye /> Visiter
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};
export default MotionWrap(Portfolio, 'app__portfolio app__darkbg');
