import React from 'react';
import { motion } from 'framer-motion';
import files from '../../constants/files.ts';
import './About.scss';
import { urlFor } from '../../client.ts';
import { MotionWrap } from '../../wrapper';
import useFetch from '../../hooks/useFetch.ts';
import Loader from '../../components/Loader/Loader';
import { NavList } from '../../constants/navList.ts';
import { SanityData } from '../../constants/data.ts';
import { Queries } from '../../constants/queries.ts';

const About = () => {
  const { data, loading, error } = useFetch<Queries>(Queries.ABOUT);
  if (error) console.log(error);

  return (
    <div id={NavList.ABOUT}>
      <h2 className="head-text">
        A <span>propos</span> de <span>moi</span>
      </h2>
      <div className="app__profiles">
        {loading && <Loader />}
        {data?.map((item: SanityData, index: number) => (
          <div className="app__profile-item" key={index}>
            <img src={urlFor(item.imgUrl)} alt="who-am-i" />
            <p>{item.description}</p>
          </div>
        ))}
        <motion.a
          href={files.cv_fr as string}
          target="_blank"
          className="btn btn-action"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}>
          cv (fr)
        </motion.a>
        <motion.a
          href={files.cv_en as string}
          target="_blank"
          className="btn btn-action"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}>
          cv (en)
        </motion.a>
      </div>
    </div>
  );
};
export default MotionWrap(About, 'app__about app_darkbg');
