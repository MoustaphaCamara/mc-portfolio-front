import {HiChevronLeft, HiChevronRight} from "react-icons/hi";
import {MotionWrap} from "../../wrapper";
import {urlFor} from "../../client.ts";
import "./Hobbies.scss";
import useFetch from "../../hooks/useFetch.ts";
import Loader from "../../components/Loader/Loader";
import {useState} from "react";
import {NavList} from "../../constants/navList.ts";
import {Queries} from "../../constants/queries.ts";

const Hobbies = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleClick = (index) => {
        setCurrentIndex(index);
    };
    const {data, error, loading} = useFetch<Queries>(Queries.HOBBIES);
    if (error) console.log(error);
    const current = data && data[currentIndex];

    return (
        <div id={NavList.HOBBIES}>
            <h2 className="head-text">Hobbies</h2>
            {loading && <Loader/>}
            {data && (
                <>
                    <div className="app__hobbies-item app__flex">
                        <img src={urlFor(current.imgUrl)} alt="hobby"/>
                        <div className="app__hobbies-content">
                            <h4 className="bold-text">{current.name}</h4>
                            <p className="p-text">{current.description}</p>
                        </div>
                    </div>
                    <div className="app__hobbies-btns app__flex">
                        <div
                            className="app__flex"
                            onClick={() =>
                                handleClick(
                                    currentIndex === 0 ? data.length - 1 : currentIndex - 1
                                )
                            }
                        >
                            <HiChevronLeft/>
                        </div>
                        <div
                            className="app__flex"
                            onClick={() =>
                                handleClick(
                                    currentIndex === data.length - 1 ? 0 : currentIndex + 1
                                )
                            }
                        >
                            <HiChevronRight/>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
export default MotionWrap(Hobbies, "app__hobbies");
