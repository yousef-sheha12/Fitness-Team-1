import { FaCheck, FaLocationDot, FaStar } from "react-icons/fa6";
import trainerImage from "../../assets/img/trainerIMG.png";
import { BiMoney } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function TrainerInfo({ trainer }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-linear-to-b from-[#363636] to-[#121212] pb-12">
        <h2 className="text-center text-white text-4xl font-semibold py-12">
          Meet your Trainer
        </h2>
        <div className="container w-10/12 mx-auto flex gap-6">
          <div>
            <img
              src={trainer?.profile_image || trainerImage}
              alt={trainer?.name || "Ahmed Mohamed"}
              className="max-w-[300px] rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl text-white py-2 px-1 font-bold">
              {trainer?.name || "Ahmed Mohamed"}{" "}
            </h3>
            <ul className="flex gap-4 flex-wrap">
              {(trainer?.specializations?.length > 0
                ? trainer.specializations
                : [
                    "Weight Loss Coach",
                    "Muscle Gain Coach",
                    "General Fitness Coach",
                  ]
              ).map((spec, i) => (
                <li
                  key={i}
                  className=" hover:bg-primary transition-colors duration-300 px-8 py-2 before:mx-3 bg-black text-white rounded-md relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:rounded-full before:content-[''] before:w-3 before:h-3 before:bg-red-500 font-light"
                >
                  {spec}
                </li>
              ))}
            </ul>
            <p className="my-4 text-white text-2xl font-semibold">
              Helping clients For Build Strength{" "}
              {trainer?.experience_years || "8+"} Years
            </p>
            <ul className="space-y-4">
              <li className="flex gap-2">
                <span>
                  <FaCheck className="bg-green-500 w-6 h-6 p-1 rounded-full" />
                </span>
                <p>Available This Week </p>
              </li>
              <li className="flex gap-2">
                <span>
                  <FaStar className=" w-6  h-6 text-red-600  rounded-full" />
                </span>
                <p>
                  {trainer?.rating || "4.8"} ({trainer?.total_reviews || "124"}{" "}
                  Review){" "}
                </p>
              </li>
              <li className="flex gap-2">
                <span>
                  <FaLocationDot className=" w-6  h-6 text-red-600 rounded-full" />
                </span>
                <p>{trainer?.location || "Nasr City , Egypt"} </p>
              </li>
              <li className="flex gap-2">
                <span>
                  <BiMoney className=" w-6  h-6 text-red-600 rounded-full" />
                </span>
                <p>From Egp {trainer?.price_per_session || "300"} / session </p>
              </li>
            </ul>

            <button
              className="primary-btn"
              onClick={() =>
                navigate(
                  `/booking?trainerId=${trainer?.id}&trainerName=${encodeURIComponent(trainer?.name || "Trainer")}`,
                )
              }
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
