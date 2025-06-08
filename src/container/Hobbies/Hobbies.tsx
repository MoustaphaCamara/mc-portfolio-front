import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { MotionWrap } from '../../wrapper';
import { urlFor } from '../../client.ts';
import './Hobbies.scss';
import useFetch from '../../hooks/useFetch.ts';
import Loader from '../../components/Loader/Loader';
import { NavList } from '../../constants/navList.ts';
import { Queries } from '../../constants/queries.ts';
import { HobbiesData } from '../../shared/interfaces/data.ts';
import { useTranslation } from 'react-i18next';

const Hobbies = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };
  const { data, error, loading } = useFetch<HobbiesData>(Queries.Hobbies);
  if (error) console.log(error);
  const current = data && data[currentIndex];
  const { t } = useTranslation();
  return (
    <div id={NavList.Hobbies}>
      <h2 className="head-text">{t('hobbies.title')}</h2>
      {loading && <Loader />}
      {data && (
        <>
          <div className="app__hobbies-item app__flex">
            <img src={urlFor(current?.imgUrl ?? '')} alt="hobby" />
            <div className="app__hobbies-content">
              <h4 className="bold-text">{current?.name}</h4>
              <p className="p-text">{current?.description}</p>
            </div>
          </div>
          <div className="app__hobbies-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0 ? data.length - 1 : currentIndex - 1,
                )
              }>
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === data.length - 1 ? 0 : currentIndex + 1,
                )
              }>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MotionWrap(Hobbies, 'app__hobbies');
