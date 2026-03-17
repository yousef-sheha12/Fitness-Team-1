import { BrowserRouter } from "react-router-dom";
// import SignUp from "./pages/Auth/SignUp";
import TrainerCard from "./components/common/TrainerCard";
import trainer1 from "./assets/trainer1.jpg";

const App = () => {
  return (
    <BrowserRouter>
      <TrainerCard
        image={trainer1}
        name="Ahmed Hassan"
        rating={4.9}
        price={300}
        specialties={["Weight Loss", "Muscle Gain", "General Fitness"]}
        location="Nasr City, Cairo"
      />
    </BrowserRouter>
  );
};

export default App;
